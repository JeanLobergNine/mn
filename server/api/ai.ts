import { createOpenAIModel, generateChatResponse } from "../services/ai-service";

export default defineEventHandler(async (event) => {
  /* readBody:
   * Reads request body and tries to safely parse using destr.
   * Be aware that this utility is not restricted to application/json and will parse
   * application/x-www-form-urlencoded content types. Because of this,
   * authenticated GET/POST handlers may be at risk of a CSRF attack,
   * and must check the content-type header manually.
   */
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();
  // const lastMessage = messages[messages.length - 1];

  const openApiKey = useRuntimeConfig().openAiApiKey;

  const openApiModel = createOpenAIModel(openApiKey);

  const response = await generateChatResponse(openApiModel, messages);
  return {
    id,
    role: "assistant",
    content: response,
  };
});
