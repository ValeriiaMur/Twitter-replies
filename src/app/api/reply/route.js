import { searchTweets, postReply } from "../../lib/twitter";
import { generateReply } from "../../lib/openai";

export const POST = async (req) => {
  try {
    const body = await req.json(); // Parse JSON body
    const { query } = body;

    // Step 1: Search Tweets
    const tweets = await searchTweets(query);
    for (const tweet of tweets) {
      setTimeout(async () => {
        const prompt = `Craft a reply to this tweet: "${tweet.text}"`;
        const reply = await generateReply(prompt);
        console.log("Prompt:", prompt);
        console.log("Generated Reply:", reply);

        // Uncomment this to post replies once ready
        await postReply(tweet.id, reply.content);
      }, 3000);
    }

    return new Response(
      JSON.stringify({ message: "Replies processed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error processing reply:", error.rateLimit);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const OPTIONS = () =>
  new Response(null, { status: 204, headers: { Allow: "POST" } });
