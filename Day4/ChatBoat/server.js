import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
app.use(express.json()); // To parse JSON body

const GEMINI_API = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API);

app.get("/", (req, res) => {
  res.send("✅ Successfully working GET route");
});

app.post("/bot", async (req, res) => {
  try {
    const prompt = req.body.prompt; // Frontend should send { "prompt": "your message" }
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const models = await genAI.listModels();
    console.log("Available Models:", models);
    
    // ✅ Use Gemini Pro model correctly
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

    // For chat-like behavior, you can pass messages
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text(); // ✅ Use await here

    res.json({ response: text || "(No response text found)" });
  } catch (error) {
    console.error("❌ Error during text generation:", error);
    res
      .status(500)
      .json({ error: "Something went wrong", details: error.message });
  }
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
