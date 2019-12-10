const puppeteer = require('puppeteer');
const fs = require('fs');

const projectPath = __dirname;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
  });

  const cookieHack = JSON.parse(
    fs.readFileSync(projectPath + '/cookie.json').toString(),
  );
  const page = await browser.newPage();
  await page.goto('https://twitter.com/');
  await page.setCookie(...cookieHack);
  await page.goto('https://twitter.com/GalGadot/status/1196803577521438720');
  await page.waitForNavigation();

})();
