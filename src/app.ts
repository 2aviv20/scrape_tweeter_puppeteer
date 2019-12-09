
import * as puppeteer from 'puppeteer';
const fs = require('fs');
//interfaces
import { TweetInterface } from "./interfaces/tweet.iterface";
import { ProfileiNTERFACE } from "./interfaces/profile.interface";
import { ReTweetInterface } from "./interfaces/retweet.interface";
//class
import {TweetScrape} from "./scrape/tweet.scrape";

const BASE_URL = 'https://twitter.com/';
const LOGIN_URL = 'https://twitter.com/login';
const USERNAME = 'aviv@cycurity.com';
const PASSWORD = 'aviv@165976431';

class App {
    constructor() {
        this.start();
    }

    async start() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://twitter.com/NettaBarzilai/status/1201610844192354309", { waitUntil: ['domcontentloaded'] });
        //get page content
        let html = await page.content()
        // fs.writeFileSync(__dirname + '/dom.html', html);
        // console.log("check the dom file");
        // const tweet = await page.$eval('.permalink-tweet-container', el => el.outerHTML);
        // fs.writeFileSync(__dirname + '/tweet.html', tweet);
        // //scrape main tweet
        // const mainTweet = await TweetScrape.mainTweetScrapeDOM(page);
        // console.log(mainTweet); 

    };
}
export default new App();
