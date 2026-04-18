// Single source of truth for Beatly marketing copy.
// Edit here, the site picks it up everywhere.

export const brand = {
  name: "beatly",
  domain: "beatly.dev",
  tagline: "a live music soundtrack for coding agents",
  description:
    "Procedurally generated music, scored live to what your coding agent is doing right now. No playlists, no loops — every tool call, diff, and test run shapes the score.",
} as const;

export const repos = {
  website: {
    label: "beatly.dev",
    href: "https://github.com/getbeatly/beatly.dev",
    description: "This website. Astro, deployed on Cloudflare.",
  },
  core: {
    label: "beatly",
    href: "https://github.com/getbeatly/beatly",
    description: "Core library, agent skill, and Codex / Claude Code plugins.",
  },
} as const;

export const installs = [
  {
    id: "pi",
    label: "pi",
    command: "pi install npm:@beatly/core",
    hint: "then /skill:beatly",
  },
  {
    id: "codex",
    label: "Codex",
    command: "codex plugins marketplace add github:getbeatly/codex",
    hint: "then codex plugins install beatly",
  },
  {
    id: "claude",
    label: "Claude Code",
    command: "/plugin marketplace add getbeatly/claude-code",
    hint: "then /plugin install beatly@beatly",
  },
] as const;

export const requirement = {
  title: "requires SuperCollider",
  body: "Beatly runs a local SuperCollider server. Install SuperCollider system-wide so scsynth and sclang are on your PATH before using any install target.",
} as const;

export const hero = {
  eyebrow: "now composing",
  headline: "a live music soundtrack",
  headlineAccent: "for coding agents",
  sub: "Procedurally generated music, scored live to what your agent is doing right now. Tense strings while it debugs, a build-up as it writes, a payoff chord when CI goes green — no loops, no playlists, never the same twice.",
} as const;

export const features = [
  {
    title: "Scored to your agent loop",
    body: "Every tool call, file write, test pass and error is a musical cue. Beatly composes around the work actually happening — not a generic coding playlist.",
  },
  {
    title: "Procedurally generated, not pre-recorded",
    body: "Notes, chords, and stems are synthesized live by SuperCollider. Nothing is a loop. The music you hear has never existed before and will never play the same way twice.",
  },
  {
    title: "Your genre, your vibe",
    body: "Pick a mood — lo-fi, synthwave, orchestral, drum & bass — and Beatly stays inside it while reacting to everything your agent does.",
  },
] as const;

export const footer = {
  note: "open source · made with loops and tool calls.",
} as const;
