import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** Tinted background, for alternating bands down a page. */
  tone?: "default" | "parchment" | "hunter";
  /** Vertical rhythm. `tight` for stacked related sections. */
  size?: "default" | "tight";
};

export function Section({
  className,
  tone = "default",
  size = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tone === "parchment" && "bg-parchment",
        tone === "hunter" && "bg-hunter-dark text-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-5",
          size === "tight" ? "py-12 md:py-16" : "py-16 md:py-24",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
