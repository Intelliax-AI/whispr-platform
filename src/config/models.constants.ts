// AI Provider Models
export const AI_PROVIDER_MODELS = {
  openai: [
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o Mini" },
    { id: "gpt-4-turbo", name: "GPT-4 Turbo" },
    { id: "gpt-4", name: "GPT-4" },
    { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  ],
  claude: [
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-5-haiku-20241022", name: "Claude 3.5 Haiku" },
    { id: "claude-3-opus-20240229", name: "Claude 3 Opus" },
    { id: "claude-3-sonnet-20240229", name: "Claude 3 Sonnet" },
    { id: "claude-3-haiku-20240307", name: "Claude 3 Haiku" },
  ],
  gemini: [
    { id: "gemini-2.0-flash-exp", name: "Gemini 2.0 Flash" },
    { id: "gemini-exp-1206", name: "Gemini Experimental" },
    { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro" },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash" },
    { id: "gemini-1.5-flash-8b", name: "Gemini 1.5 Flash-8B" },
  ],
  grok: [
    { id: "grok-2-1212", name: "Grok 2" },
    { id: "grok-2-vision-1212", name: "Grok 2 Vision" },
    { id: "grok-beta", name: "Grok Beta" },
  ],
  mistral: [
    { id: "mistral-large-latest", name: "Mistral Large" },
    { id: "mistral-medium-latest", name: "Mistral Medium" },
    { id: "mistral-small-latest", name: "Mistral Small" },
    { id: "open-mistral-7b", name: "Open Mistral 7B" },
    { id: "open-mixtral-8x7b", name: "Open Mixtral 8x7B" },
  ],
  cohere: [
    { id: "command-r-plus", name: "Command R+" },
    { id: "command-r", name: "Command R" },
    { id: "command", name: "Command" },
    { id: "command-light", name: "Command Light" },
  ],
  groq: [
    { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B" },
    { id: "llama-3.1-70b-versatile", name: "Llama 3.1 70B" },
    { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B" },
    { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B" },
    { id: "gemma2-9b-it", name: "Gemma 2 9B" },
  ],
  perplexity: [
    { id: "llama-3.1-sonar-large-128k-online", name: "Llama 3.1 Sonar Large (Online)" },
    { id: "llama-3.1-sonar-small-128k-online", name: "Llama 3.1 Sonar Small (Online)" },
    { id: "llama-3.1-sonar-large-128k-chat", name: "Llama 3.1 Sonar Large (Chat)" },
    { id: "llama-3.1-sonar-small-128k-chat", name: "Llama 3.1 Sonar Small (Chat)" },
  ],
  ollama: [
    { id: "llama3.2", name: "Llama 3.2" },
    { id: "llama3.1", name: "Llama 3.1" },
    { id: "mistral", name: "Mistral" },
    { id: "qwen2.5", name: "Qwen 2.5" },
    { id: "phi3", name: "Phi-3" },
    { id: "gemma2", name: "Gemma 2" },
  ],
} as const;

// STT Provider Models
export const STT_PROVIDER_MODELS = {
  "openai-whisper": [
    { id: "whisper-1", name: "Whisper" },
  ],
  "groq-whisper": [
    { id: "whisper-large-v3", name: "Whisper Large v3" },
    { id: "whisper-large-v3-turbo", name: "Whisper Large v3 Turbo" },
  ],
  elevenlabs: [
    { id: "eleven_multilingual_v2", name: "Multilingual v2" },
    { id: "eleven_turbo_v2", name: "Turbo v2" },
  ],
  deepgram: [
    { id: "nova-2", name: "Nova 2" },
    { id: "nova", name: "Nova" },
    { id: "enhanced", name: "Enhanced" },
    { id: "base", name: "Base" },
  ],
  "google-stt": [
    { id: "latest_long", name: "Latest Long" },
    { id: "latest_short", name: "Latest Short" },
    { id: "chirp", name: "Chirp" },
  ],
  "azure-stt": [
    { id: "default", name: "Default" },
  ],
} as const;

// Helper function to get models for a provider
export function getModelsForProvider(providerId: string, type: "ai" | "stt") {
  if (type === "ai") {
    return AI_PROVIDER_MODELS[providerId as keyof typeof AI_PROVIDER_MODELS] || [];
  }
  return STT_PROVIDER_MODELS[providerId as keyof typeof STT_PROVIDER_MODELS] || [];
}
