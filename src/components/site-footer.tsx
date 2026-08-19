import Link from "next/link";

import { addressLine, chapter, officers } from "@/data/chapter";
import { navLinks } from "@/lib/nav";
import { Crest } from "@/components/crest";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-hunter-dark text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Crest className="h-10" />
            <span className="font-heading text-xl font-semibold text-white">
              {chapter.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {chapter.tagline}
          </p>
          <address className="mt-4 text-sm not-italic text-white/70">
            {addressLine}
          </address>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {officers.map((officer) => (
              <li key={officer.role}>
                <span className="text-white/60">{officer.role}: </span>
                {officer.email ? (
                  <a
                    href={`mailto:${officer.email}`}
                    className="underline underline-offset-4 hover:text-white"
                  >
                    {officer.name}
                  </a>
                ) : (
                  officer.name
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={chapter.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={chapter.social.ifc}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                MIT IFC
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {chapter.chapterName} Chapter of{" "}
            {chapter.name} at {chapter.school}.
          </p>
          {/* MIT's standard institutional footer line. */}
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            Massachusetts Institute of Technology &ndash;{" "}
            <a
              href={chapter.accessibilityUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
