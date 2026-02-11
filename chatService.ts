export class ChatService {
  /**
   * Calls the serverless chat endpoint.
   * NOTE: This keeps API keys on the server (Vercel/Netlify/etc.) and off the client.
   */
  async generateContent(prompt: string, systemInstruction: string): Promise<string> {
    // If deploying the frontend separately from the API, set VITE_CHAT_API_URL to the full API origin.
    // Example: https://your-project.vercel.app
    const base = (import.meta as any).env?.VITE_CHAT_API_URL as string | undefined;
    const url = `${base ?? ''}/api/chat`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, systemInstruction })
    });

    if (!res.ok) {
      throw new Error(`Chat API error: ${res.status}`);
    }

    const data = (await res.json()) as { reply?: string };
    return data.reply ?? '';
  }
}

export const chatService = new ChatService();
