import type { Company } from "@/data/careers";
import { cn } from "@/lib/utils";

/**
 * The wall of places brothers have worked. Each tile links to that
 * organisation's homepage.
 *
 * Logos are third-party assets of unknown intrinsic size, and several are SVG,
 * so these deliberately use a plain <img> rather than next/image:
 *  - next/image would need `dangerouslyAllowSVG` in next.config for the SVGs;
 *  - an SVG loaded through <img> is script-disabled by the browser, so this is
 *    the safer of the two options, not the lazier one.
 * They are small, lazy-loaded, and sized by CSS, so the optimizer buys little.
 *
 * Two fields are optional by design, and both matter:
 *  - `logo: null` renders the name as text in the same tile. Common for
 *    academic labs, which often have no mark at all.
 *  - `homepage: null` renders a non-interactive tile, for an organisation with
 *    no safe live site to send people to.
 * Either way the grid stays even and nothing looks broken.
 */
function TileInner({ company }: { company: Company }) {
  if (!company.logo) {
    return (
      <span
        className={cn(
          "text-balance text-center font-heading text-sm font-semibold leading-tight",
          company.dark ? "text-white/85" : "text-foreground/75",
        )}
      >
        {company.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- see note above
    <img
      src={company.logo}
      alt={company.name}
      loading="lazy"
      className="max-h-full max-w-full object-contain"
    />
  );
}

export function CompanyGrid({ companies }: { companies: readonly Company[] }) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {companies.map((company) => {
        // `dark` is for white/light wordmarks, which vanish on a white tile.
        const tile = cn(
          "flex h-28 items-center justify-center rounded-xl border p-5 md:h-32",
          company.dark
            ? "border-hunter-dark bg-hunter-dark"
            : "border-border bg-white",
        );

        return (
          <li key={company.name}>
            {company.homepage ? (
              <a
                href={company.homepage}
                target="_blank"
                rel="noreferrer"
                title={company.name}
                className={cn(
                  tile,
                  "transition-all hover:-translate-y-0.5 hover:border-cardinal/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cardinal",
                )}
              >
                <TileInner company={company} />
              </a>
            ) : (
              <div className={tile} title={company.name}>
                <TileInner company={company} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
