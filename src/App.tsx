import {
  Card,
  Settings,
  SystemAudio,
  Updater,
  DragButton,
  CustomCursor,
  Completion,
  ChatHistory,
  AudioVisualizer,
  StatusIndicator,
} from "@/components";
import { useApp } from "@/hooks";

const App = () => {
  const {
    isHidden,
    systemAudio,
    handleSelectConversation,
    handleNewConversation,
  } = useApp();
  return (
    <div
      className={`w-screen h-screen flex overflow-hidden justify-center items-start ${
        isHidden ? "hidden pointer-events-none" : ""
      }`}
    >
      <Card className="w-full flex flex-row items-center gap-2 p-2">
        {/* Logo - Only show when not capturing */}
        {!systemAudio?.capturing && (
          <img
            src="/logo.png"
            alt="Whispr"
            className="h-8 w-8 object-contain shrink-0"
          />
        )}

        {/* System Audio Button */}
        <SystemAudio {...systemAudio} />

        {/* Main Content Area */}
        {systemAudio?.capturing ? (
          <div className="flex flex-row items-center gap-2 justify-between w-full">
            <div className="flex flex-1 items-center gap-2">
              <AudioVisualizer isRecording={systemAudio?.capturing} />
            </div>
            <div className="flex !w-fit items-center gap-2">
              <StatusIndicator
                setupRequired={systemAudio.setupRequired}
                error={systemAudio.error}
                isProcessing={systemAudio.isProcessing}
                isAIProcessing={systemAudio.isAIProcessing}
                capturing={systemAudio.capturing}
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row gap-2 items-center">
            <Completion isHidden={isHidden} />
            <ChatHistory
              onSelectConversation={handleSelectConversation}
              onNewConversation={handleNewConversation}
              currentConversationId={null}
            />
            <Settings />
          </div>
        )}

        <Updater />
        <DragButton />
      </Card>
      <CustomCursor />
    </div>
  );
};

export default App;
