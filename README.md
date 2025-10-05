# Whispr 🚀

> A lightning-fast, privacy-first AI assistant that works seamlessly during meetings, interviews, and conversations.

## Features

### **Keyboard Shortcuts**

Fully customizable keyboard shortcuts for instant access to all features:

| Shortcut          | macOS (Default)   | Windows/Linux (Default) | Function                                                 |
| ----------------- | ----------------- | ----------------------- | -------------------------------------------------------- |
| **Toggle Window** | `Cmd + \`         | `Ctrl + \`              | Show/Hide the main window + app icon (based on settings) |
| **System Audio**  | `Cmd + Shift + M` | `Ctrl + Shift + M`      | Toggle system audio capture                              |
| **Voice Input**   | `Cmd + Shift + A` | `Ctrl + Shift + A`      | Start voice recording                                    |
| **Screenshot**    | `Cmd + Shift + S` | `Ctrl + Shift + S`      | Capture screenshot                                       |

### **Transparent Window Overlay**

Adjust window transparency to see through Whispr while working with real-time adjustments.

### **Draggable Window**

Move Whispr anywhere on your screen for perfect positioning.

### **System Audio Capture**

Transform any audio on your system into an intelligent AI assistant with real-time transcription and contextual help.

### **Microphone Audio Capture**

Voice Activity Detection for automatic speech detection with real-time processing and instant AI responses.

### **Interactive Input**

Smooth, instant input with image paste support for quick AI analysis.

### **Screenshot Capture**

Intelligent auto/manual modes for instant AI assistance with screenshot analysis.

### **Always on Top**

Control whether Whispr stays above all other applications.

### **Conversation History**

Complete conversation management stored locally on your device with instant access and export capabilities.

## Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **Rust** (latest stable)
- **npm** or **yarn**

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run tauri dev
```

### Build for Production

```bash
# Build the application
npm run tauri build
```

This creates platform-specific installers in `src-tauri/target/release/bundle/`:

- **macOS**: `.dmg`
- **Windows**: `.msi`, `.exe`
- **Linux**: `.deb`, `.rpm`, `.AppImage`

## Setup

### **AI Provider Integration**

Configure any AI provider with curl support for ultimate flexibility.

#### **Custom AI Provider Setup**

Unlock Any LLM Provider with full streaming and non-streaming capabilities.

#### **🔧 Dynamic Variables Support**

| Variable            | Purpose                |
| ------------------- | ---------------------- |
| `{{TEXT}}`          | User's text input      |
| `{{IMAGE}}`         | Base64 image data      |
| `{{SYSTEM_PROMPT}}` | System instructions    |
| `{{MODEL}}`         | AI model name          |
| `{{API_KEY}}`       | API authentication key |

### **Speech-to-Text Integration**

Advanced curl-based integration for speech-to-text providers with ultimate flexibility.

## Why Whispr?

### **Completely Undetectable & Stealth**

Whispr is engineered to be completely invisible during your most sensitive moments:

- 🔍 Undetectable in video calls
- 📺 Invisible in screen shares
- 📸 Screenshot-proof design
- 🏢 Meeting room safe
- 🎥 Recording invisible
- ⚡ Instant hide/show

### **Blazingly Fast**

Built with Tauri for native desktop performance with minimal resource usage.

### **Privacy-First Architecture**

- Your data never touches any servers
- API keys stored securely locally
- No telemetry or tracking
- Offline-first design

## Security & Privacy

- **Local API Key Storage** - Keys stored in browser localStorage
- **Secure API Communication** - Direct HTTPS connections to AI providers
- **No conversation logging** - Messages aren't stored anywhere
- **Transparent** - You can inspect every network request

## Performance

- **Native binary** - no JavaScript runtime overhead
- **Small bundle size** - ~10MB total app size
- **Instant startup** - launches in <100ms
- **Low memory usage** - typically <50MB RAM

## License

MIT License
