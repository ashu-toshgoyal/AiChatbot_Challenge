import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Load the API key from key.env
dotenv.config({ path: ".env/key.env" });

if (!process.env.AI_API_KEY) {
  console.error("Error: GEMINI_API_KEY is not set in key.env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "who are u",
    });
    console.log("Gemini Response:", response.text);
  } catch (error) {
    console.error("Request failed:", error);
  }
}

main();
