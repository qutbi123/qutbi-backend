import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { message } = req.body;

      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      const reply = completion.choices[0].message.content;

      res.status(200).json({ reply });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Chat API failed" });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ status: "Chat API is working ✅" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
