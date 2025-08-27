const { exec } = require('child_process');

console.log('Starting Next.js build test...');

exec('npx next build', { 
  env: { ...process.env, FORCE_COLOR: '0', CI: 'true' }
}, (error, stdout, stderr) => {
  if (error) {
    console.error('Build failed with error:', error.message);
    return;
  }
  
  if (stderr) {
    console.error('Build stderr:', stderr);
  }
  
  console.log('Build stdout:', stdout);
  console.log('Build completed successfully!');
});
