
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
        // const mainTweet = await TweetScrape.mainTweetScrapeDOM(page);
        const res = await TweetScrape.mainTweetScrapeRequest(page,'1201610844192354309','NettaBarzilai');
    };
}
export default new App();

//write interface to the json that recived from twitter
//insert the data from twitter to my interfaces : tweet , profile , retweets
//connet the class to rest api 
//connect to queue (rabbit)
