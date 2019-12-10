import { TweetInterface } from "../interfaces/tweet.iterface";
const fs = require('fs');

export class TweetScrape {
    constructor() {

    }

    public static async mainTweetScrapeRequest(page,tweetId, handle) {
        //go to tweet
        await page.goto(`https://twitter.com/${handle}/status/${tweetId}`);
        //wait for tweet json file
        const apiPageURL = `https://api.twitter.com/2/timeline/conversation/${tweetId}.json`;
        const apiRes = await page.waitForResponse(res => res.url().includes(apiPageURL));
        const json = await apiRes.json();
        return json;
    }

    public static async mainTweetScrapeDOM(page) {
        console.log("tweet function");
        const tweetObj: TweetInterface = {
            avatar: "",
            fullName: "",
            userName: "",
            tweetText: "",
            replies: "",
            retweets: "",
            likes: "",
            date: ""
        };

        //avatar image 
        try {
            let elm = await page.$eval('.permalink-tweet-container .permalink-header .avatar', (element: Element) => (element as HTMLImageElement).src);
            tweetObj.tweetText = await page.evaluate(body => body.src, elm);
            await elm.dispose();
        } catch (error) {
            console.log("tweet avatar");
            console.log(error);
        }
        //userId
        try {
            let elm = await page.$(".permalink-tweet-container .account-group .username");
            tweetObj.userName = await page.evaluate(body => body.textContent, elm);
            await elm.dispose();

        } catch (error) {
            console.log("tweet user");
            console.log(error);
        }
        //full name
        try {
            let elm = await page.$(".permalink-tweet-container .FullNameGroup .fullname");
            tweetObj.fullName = await page.evaluate(body => body.textContent, elm);
            await elm.dispose();

        } catch (error) {
            console.log("tweet full name");

            console.log(error);
        }
        // tweetText
        try {
            let elm = await page.$(".permalink-tweet-container .js-tweet-text-container p");
            tweetObj.tweetText = await page.evaluate(body => body.textContent, elm);
            await elm.dispose();

        } catch (error) {
            console.log("tweet text");
            console.log(error);
        }
        //replies
        try {
            let elm = await page.$(".stream-item-footer .ProfileTweet-actionCountList .ProfileTweet-action--reply");
            tweetObj.replies = await page.evaluate(body => body.textContent, elm);
            tweetObj.replies = tweetObj.replies.match(/[0-9]/g).join("");
            await elm.dispose();
        } catch (error) {
            console.log("tweet replies counter");
            console.log(error);
        }
        //retweet
        try {
            let elm = await page.$(".stream-item-footer .ProfileTweet-actionCountList .ProfileTweet-action--retweet");
            tweetObj.retweets = await page.evaluate(body => body.textContent, elm);
            tweetObj.retweets = tweetObj.retweets.match(/[0-9]/g).join("");

            await elm.dispose();

        } catch (error) {
            console.log("tweet retweet counter");
            console.log(error);
        }
        //likes
        try {
            let elm = await page.$(".stream-item-footer .ProfileTweet-actionCountList .ProfileTweet-action--favorite");
            tweetObj.likes = await page.evaluate(body => body.textContent, elm);
            tweetObj.likes = tweetObj.likes.match(/[0-9]/g).join("");
            await elm.dispose();

        } catch (error) {
            console.log("tweet likes counter");
            console.log(error);
        }
        //date and time 
        try {
            let elm = await page.$(".permalink-tweet-container .client-and-actions span");
            tweetObj.date = await page.evaluate(body => body.textContent, elm);
            tweetObj.date = tweetObj.date.replace(/\s|\\n/g, "");
            await elm.dispose();
        } catch (error) {
            console.log("tweet date");
            console.log(error);
        }

        return tweetObj;
    }
}

