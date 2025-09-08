export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    // TODO: Runway / Pika API connect karna hai
    res.status(200).json({
      status: "success",
      videoUrl: `https://example.com/generated-video?prompt=${encodeURIComponent(prompt)}`
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
