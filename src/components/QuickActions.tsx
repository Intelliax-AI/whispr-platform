import { Button } from "@/components/ui/button";
import { MessageSquareIcon, HelpCircleIcon, SearchCheckIcon, RotateCcwIcon } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

export const QuickActions = ({ onAction }: QuickActionsProps) => {
  const actions = [
    {
      id: "suggest",
      icon: MessageSquareIcon,
      label: "What should I say?",
    },
    {
      id: "followup",
      icon: HelpCircleIcon,
      label: "Follow-up questions",
    },
    {
      id: "factcheck",
      icon: SearchCheckIcon,
      label: "Fact-check",
    },
    {
      id: "recap",
      icon: RotateCcwIcon,
      label: "Recap",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {actions.map((action) => (
        <Button
          key={action.id}
          variant="outline"
          size="sm"
          onClick={() => onAction(action.label)}
          className="flex items-center gap-2 h-9 px-3 bg-background/50 hover:bg-background border-input/50"
        >
          <action.icon className="h-4 w-4" />
          <span className="text-sm">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};
