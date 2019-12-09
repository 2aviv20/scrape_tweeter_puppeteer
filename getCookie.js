const puppeteer = require('puppeteer');
const fs = require('fs');

const projectPath = __dirname;

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');
  //LOGIN
  await page.$eval('.js-username-field.email-input.js-initial-focus', elem => {
    elem.value = 'aviv@cycurity.com';
  });
  await page.$eval('.js-password-field', elem => {
    elem.value = 'aviv@165976431';
  });
  await page.$eval('.t1-form.clearfix.signin.js-signin', elem => elem.submit());
  await page.waitForNavigation();

  //get page cookies
  let cookieHack = await page.cookies();
  // fs.writeFileSync(projectPath + '/cookie.json', JSON.stringify(cookieHack));

  //go to tweet
  await page.goto('https://twitter.com/GalGadot/status/1196803577521438720');
  //wait for tweet json file
  const apiPageURL = `https://api.twitter.com/2/timeline/conversation/1196803577521438720.json`;
  const apiRes = await page.waitForResponse(res => res.url().includes(apiPageURL));
  const json = await apiRes.json();
  console.log(json);
  fs.writeFileSync(__dirname + '/myTweetJson.json', JSON.stringify(json));
  //   cookieHack = cookieHack.filter(x => x.name != 'auth_token');

})();
