import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import type { AssistantModelMessage, LanguageModel } from "ai";

export const createOpenAIModel = (apiKey: string) => {
  const openAI = createOpenAI({ apiKey });
  return openAI("gpt-5-nano");
};

export async function generateChatResponse(
  model: LanguageModel,
  messages: AssistantModelMessage[],
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("invalid message format");
  }
  const response = await generateText({
    model,
    messages,
  });
  return response.text;
}
