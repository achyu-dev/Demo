# Google Forms Integration Setup

## Overview
This project integrates with Google Forms to handle form submissions from the wishlist page.

## Setup Instructions

### 1. Environment Configuration
1. Rename `env.template` to `.env.local`
2. The Google Forms URL is already configured in the template

### 2. Google Form Field Mapping
The form is configured to submit to these Google Form fields:
- **Name**: `entry.509063275`
- **Email**: `entry.726412804`
- **Role**: `entry.1664648099`
- **Message**: `entry.1322006156`
- **Communication Consent**: `entry.749397425` (Yes/No)

### 3. How It Works
1. User fills out the form on `/wishlist`
2. Form data is sent to `/api/submit-form`
3. API route submits data to Google Forms
4. User is redirected to success page

### 4. Testing
1. Start the development server: `npm run dev`
2. Navigate to `/wishlist`
3. Fill out and submit the form
4. Check your Google Form responses

### 5. Troubleshooting
- Ensure `.env.local` exists with the correct Google Forms URL
- Check browser console for any errors
- Verify Google Form field IDs match the API route
- Test with the included `test-google-form.html` file
- Check server console logs for detailed submission information

### 6. Verifying Field IDs
To get the correct field IDs from your Google Form:
1. Open your Google Form in edit mode
2. Click on a field and select "Response validation" or inspect the field
3. Or use browser developer tools to inspect the form HTML
4. Look for `name="entry.XXXXXXX"` attributes

### 7. Manual Testing
Use the `test-google-form.html` file to test direct submissions:
1. Open the file in a browser
2. Try both the direct form submission and fetch API test
3. Check your Google Form responses to verify submissions work

## API Route Details
- **Endpoint**: `/api/submit-form`
- **Method**: POST
- **Content-Type**: application/json
- **Response**: JSON with success/error status

## Form Fields
- Name (required)
- Email (required)
- Role (required): Entrepreneur, Intrapreneur, Student, Incubator, Other
- Message (required): What should we build next?
- Communication Consent (required): Checkbox converted to "Yes" if checked, "No" if unchecked
