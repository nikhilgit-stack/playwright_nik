
const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({
    headless: true
  });

  const page = await browser.newPage();

  // Open the authentication/login page
  await page.goto('https://github.com/login');

  console.log('Authentication page opened successfully');

  await browser.close();
})();
