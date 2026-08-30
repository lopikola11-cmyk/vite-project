import { generateText } from 'llm-mini';

const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function getAIResponse(prompt: string): Promise<string> {
  try {
    const result = await generateText({
      provider: 'openrouter',
      model: 'openrouter/free',
      messages: [{ role: 'user', content: prompt }],
      apiKey,
    });

    return result.text;
  } catch (error) {
    console.error('AI error:', error);
    return 'Sorry, I had trouble responding.';
  }
}