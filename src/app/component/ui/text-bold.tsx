import React from "react";
import { cn } from "../../lib/utils";

const TextBold = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("font-bold", className)} {...props} />
));
TextBold.displayName = "TextBold";

const TitleBold = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-bold my-5", className)} {...props} />
));
TitleBold.displayName = "TitleBold";

const TextCode = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("py-0.5 px-1 bg-gray-300 rounded-md", className)}
    {...props}
  />
));
TextCode.displayName = "TextCode";

export { TextBold, TitleBold, TextCode };
