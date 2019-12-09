const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio')
const BASE_URL = 'https://twitter.com/';
const LOGIN_URL = 'https://twitter.com/login';
const USERNAME = 'aviv@cycurity.com';
const PASSWORD = 'aviv@165976431';

async function start() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //login
  //=_=_=_=_=

  // await page.goto(LOGIN_URL);
  // await page.waitFor('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]');
  // await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]', USERNAME, { delay: 5 });
  // await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[password]"]', PASSWORD, { delay: 5 });
  // await page.click('button[type="submit"][class="submit EdgeButton EdgeButton--primary EdgeButtom--medium"]');
  // await page.waitForNavigation({waitUntil:"domcontentloaded"});

  await page.goto("https://twitter.com/NettaBarzilai/status/1201610844192354309", { waitUntil: ['domcontentloaded'] });
  //get page content
  let html = await page.content()
  fs.writeFileSync(__dirname + '/dom.html', html);
  console.log("check the dom file");

  const tweet = await page.$eval('.permalink-tweet-container', el => el.outerHTML);
  fs.writeFileSync(__dirname + '/tweet.html', tweet);

  const avatar = await page.evaluate(() => document.querySelector('.permalink-tweet-container .permalink-header .avatar').src);
  console.log("***", avatar);

}

start();
