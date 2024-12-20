import { TwitterApi } from "twitter-api-v2";

// Initialize the Twitter client with full OAuth credentials
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET_KEY,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// Function to search tweets
export const searchTweets = async (query) => {
  try {
    const response = await twitterClient.v2.search(query, { max_results: 10 });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error searching tweets:", error.data);
    throw error;
  }
};

// Function to post replies
export const postReply = async (tweetId, text) => {
  try {
    const response = await twitterClient.v2.reply(text, tweetId);
    console.log("Reply posted:", response);
    return response;
  } catch (error) {
    console.error("Error posting reply:", JSON.stringify(error));
    throw error;
  }
};
