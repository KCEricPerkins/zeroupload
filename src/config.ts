// Change the brand in ONE place. Everything reads from here.
export const SITE = {
  name: "ZeroUpload",
  tagline: "Free tools that never see your data",
  description:
    "Fast, free web utilities that run entirely in your browser. Nothing you type, paste, or upload ever leaves your device.",
  url: "https://zeroupload.tools", // update when you buy the domain
};

// Paste IDs here as you get them. Empty string = feature stays off.
export const INTEGRATIONS = {
  // Cloudflare dashboard -> Web Analytics -> add site -> copy the token
  cloudflareAnalyticsToken: "",
  // carbonads.net -> apply -> approval email includes serve ID like "CESDV2QW"
  carbonServeId: "",
  carbonPlacement: "", // usually your domain without dots, e.g. "zerouploadtools"
  // Any donation URL: ko-fi.com/yourname, github.com/sponsors/yourname, buymeacoffee.com/yourname
  donateUrl: "",
};

export const TOOLS = [
  {
    slug: "favicon-generator",
    name: "Favicon Generator",
    short: "Text, emoji, or image to a complete favicon package",
    category: "Image tools",
    live: true,
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    short: "Format, validate, and minify JSON with exact error locations",
    category: "Developer tools",
    live: true,
  },
  {
    slug: "pdf-merge",
    name: "PDF Merge",
    short: "Combine PDFs without uploading them anywhere",
    category: "Document tools",
    live: true,
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    short: "Shrink PNG and JPEG files locally",
    category: "Image tools",
    live: false,
  },
];
