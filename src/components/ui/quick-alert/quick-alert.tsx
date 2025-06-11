import { Alert, AlertTitle } from "../alert";
import { cn } from "../../../lib/utils";

interface QuickAlertProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  className?: string;
}

const colorMap: Record<string, { textColor: string; bgColor: string }> = {
  success: {
    textColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  info: {
    textColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  error: {
    textColor: "text-red-600",
    bgColor: "bg-red-100",
  },
  warning: {
    textColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
};

export function QuickAlert({
  message,
  type = "info",
  className,
}: QuickAlertProps) {
  return (
    <div className={className}>
      <Alert className={cn(colorMap[type].bgColor, colorMap[type].textColor)}>
        <AlertTitle className={colorMap[type].textColor}>{message}</AlertTitle>
      </Alert>
    </div>
  );
}
