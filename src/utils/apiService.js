import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC1oRcJ7eAQaAO4kBqTJMt2w-ekoOCfj-I"; 
export const sendChatMessage = async ({ messages, tutor, lesson }) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = lesson
    ? `You are a ${tutor} AI tutor teaching Python to children. The current lesson is about ${lesson.title}. ${lesson.description}`
    : `You are a ${tutor} AI tutor teaching Python to children.`;

  const userMessage = messages.map((msg) => msg.content).join("\n");

  try {
    const result = await model.generateContent(`${prompt}\n\n${userMessage}`);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error("Failed to get response from Gemini API");
  }
};
