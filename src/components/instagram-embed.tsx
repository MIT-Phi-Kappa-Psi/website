"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * An Instagram post embedded by permalink.
 *
 * THIS IS THE ONLY THIRD-PARTY SCRIPT ON THE SITE. It loads Instagram's
 * `embed.js`, which sets cookies for every visitor who reaches the page. It is
 * here because the chapter had a rush video on Instagram and not as a file.
 *
 * Known limitations, in the order they are likely to bite:
 * - It renders nothing useful if the post is deleted, archived, or the account
 *   goes private. The <a> fallback inside the blockquote is what remains, so a
 *   dead embed degrades to a plain link rather than an empty hole.
 * - Instagram controls the styling. It ignores the site's theme and imposes its
 *   own chrome and max width.
 * - Reels frequently show a cover frame and send the viewer to instagram.com
 *   rather than playing inline. We do not control which behaviour we get.
 *
 * If the original video file ever turns up, replace this with a self-hosted
 * <video> in `public/video/` — it plays inline, matches the site, needs no
 * third-party script, and cannot rot. See `AGENTS.md`.
 *
 * A client component because `embed.js` only scans the DOM when it loads: on a
 * client-side nav into /rush the script is already loaded and would do nothing,
 * so we call `Embeds.process()` ourselves on mount.
 */
declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramEmbed({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [url]);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          margin: 0,
          width: "100%",
          minWidth: 0,
          border: 0,
          borderRadius: 12,
          background: "#fff",
        }}
      >
        {/* Shown until embed.js swaps in the iframe — and forever, if it can't. */}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block p-6 text-sm font-medium text-cardinal underline underline-offset-4"
        >
          Watch the rush video on Instagram
        </a>
      </blockquote>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}
