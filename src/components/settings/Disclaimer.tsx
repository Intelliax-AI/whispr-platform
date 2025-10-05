import { useVersion } from "@/hooks";
import { useApp } from "@/contexts";

export const Disclaimer = () => {
  const { version, isLoading: isVersionLoading } = useVersion();
  const { hasActiveLicense } = useApp();
  return (
    <div className="flex items-center justify-between py-4 px-4">
      <div className="flex flex-row items-center gap-2">
        {hasActiveLicense && (
          <a
            href="mailto:support@whispr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Contact Support
          </a>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground/70 leading-relaxed">
          {isVersionLoading ? (
            <span>Loading version...</span>
          ) : (
            <span>Version: {version}</span>
          )}
        </div>
      </div>
    </div>
  );
};
