export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    // TODO: StableDiffusion / DALL·E API connect karna hai
    res.status(200).json({
      status: "success",
      imageUrl: `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(prompt)}`
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
