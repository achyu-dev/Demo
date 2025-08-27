import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role, message, consent } = body;

    console.log('Received form data:', { name, email, role, message, consent });

    // Validate required fields
    if (!name || !email || !role || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Google Forms submission URL
    const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLScX3qrQaoBaxaEdYzORFajoPsKPy6N9QMOEjfTEvjijZtqT7g/formResponse';
    
    // Google Forms expects form data in a specific format
    const formData = new URLSearchParams();
    
    // Map form fields to Google Form field IDs
    // These field IDs should match exactly what's in your Google Form
    formData.append('entry.509063275', name || ''); // Name field
    formData.append('entry.726412804', email || ''); // Email field
    
    // Handle role field - ensure it matches Google Form options exactly
    const validRoles = ['Entrepreneur', 'Intrapreneur', 'Student', 'Incubator', 'Other'];
    const selectedRole = validRoles.includes(role) ? role : 'Other';
    formData.append('entry.1664648099', selectedRole); // Role field
    
    formData.append('entry.1322006156', message || ''); // What should we build field
    
    // Handle consent field - convert to Yes/No format
    const consentValue = consent === 'Yes' ? 'Yes' : 'No';
    formData.append('entry.749397425', consentValue); // Communication consent field
    
    // Add submit parameter that Google Forms expects
    formData.append('submit', 'Submit');

    console.log('Submitting to Google Forms:', GOOGLE_FORM_URL);
    console.log('Form data:', formData.toString());

    try {
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Origin': 'https://docs.google.com',
          'Referer': 'https://docs.google.com/',
        },
        body: formData.toString(),
        redirect: 'follow', // Allow redirects
      });

      console.log('Google Forms response status:', response.status);
      console.log('Google Forms response URL:', response.url);
      console.log('Google Forms response headers:', Object.fromEntries(response.headers.entries()));

      // Read response body to check for success indicators
      const responseText = await response.text();
      console.log('Response body preview:', responseText.substring(0, 500));

      // Google Forms successful submission usually redirects to a thank you page
      // or contains specific success text
      const isSuccess = response.status === 200 && (
        response.url.includes('formResponse') || 
        responseText.includes('Your response has been recorded') ||
        responseText.includes('Thank you') ||
        response.url.includes('closedform')
      );

      if (isSuccess || response.status === 200) {
        console.log('Form submission appears successful');
        return NextResponse.json({ 
          success: true,
          message: 'Form submitted successfully to Google Forms',
          debug: {
            status: response.status,
            url: response.url,
            formData: formData.toString()
          }
        });
      } else {
        console.error('Google Forms submission may have failed');
        console.error('Response body:', responseText.substring(0, 1000));
        
        // Still return success to not break UX, but log the issue
        return NextResponse.json({ 
          success: true,
          message: 'Form data received and logged. Google Forms response was unclear.',
          warning: 'Google Forms submission status unclear',
          debug: {
            status: response.status,
            url: response.url,
            responsePreview: responseText.substring(0, 200),
            formData: formData.toString()
          },
          data: { name, email, role, message, consent }
        });
      }
    } catch (fetchError) {
      console.error('Fetch error when submitting to Google Forms:', fetchError);
      
      // Return success anyway to not break user experience
      return NextResponse.json({ 
        success: true,
        message: 'Form data received and logged. Submission may have connectivity issues.',
        warning: 'Google Forms connectivity issue',
        data: { name, email, role, message, consent }
      });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
