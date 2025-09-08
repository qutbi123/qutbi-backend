export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    // TODO: yahan OpenAI API connect karna hai (abhi demo reply)
    res.status(200).json({ reply: `AI Reply: You said "${message}"` });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
