import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateReply = async (prompt) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a popular Twitter influencer. You will be asked for short but insightful and helpful post replies. Always be friendly and chatty, no hashtags.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return completion.choices[0].message;
};
