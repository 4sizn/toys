import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textBubbleVariants = cva(
  "inline-flex items-center justify-center bg-primary-foreground text-primary rounded-md p-1",
  {
    variants: {
      type: {
        default: "",
        other: "bg-primary-foreground text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-8 w-8",
      },
    },
    defaultVariants: {
      type: "default",
      size: "default",
    },
  },
);

interface TextBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textBubbleVariants> {}

const TextBubble = forwardRef<HTMLDivElement, TextBubbleProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(textBubbleVariants({ type }), className)}
        {...props}
      />
    );
  },
);

TextBubble.displayName = "SpeechBubble";

export { TextBubble };
