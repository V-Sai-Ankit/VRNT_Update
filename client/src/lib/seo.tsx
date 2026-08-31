import { useEffect } from "react";

interface HelmetProps {
  title: string;
  description: string;
  /** Path-only canonical override, e.g. "/mission". Defaults to the current path. */
  path?: string;
}

const SITE_URL = "https://www.vrnt.org";
const SITE_TITLE_SUFFIX = " | Veda Rakshana Nidhi Trust";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * A minimal, dependency-free per-page <title>/meta-description/canonical manager.
 * Every route that renders real content should render this once with a specific
 * title and description instead of relying on the static index.html defaults.
 */
export function Helmet({ title, description, path }: HelmetProps) {
  useEffect(() => {
    const fullTitle = title.includes("Veda Rakshana Nidhi Trust") ? title : `${title}${SITE_TITLE_SUFFIX}`;
    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    const canonicalPath = path ?? window.location.pathname;
    upsertCanonical(`${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`);
  }, [title, description, path]);

  return null;
}
