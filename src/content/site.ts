// Single source of truth for Beatly marketing copy.
// Edit here, the site picks it up everywhere.

export const brand = {
  name: "beatly",
  domain: "beatly.dev",
  tagline: "a procedurally generated soundtrack for coding agents",
  description:
    "Beatly procedurally generates music, live, while your coding agent works. Every note is synthesized in real time and scored to what the agent is actually doing right now — tool calls, diffs, tests, blockers, breakthroughs. Not a playlist. The music is the agent's run.",
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
    command: "codex marketplace add https://github.com/getbeatly/codex",
    hint: "then codex --enable plugins and /plugins in the TUI",
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
  eyebrow: "now composing · live",
  headline: "a procedurally generated soundtrack",
  headlineAccent: "for coding agents",
  sub: "Not a playlist. Every note is synthesized in real time by a local SuperCollider engine and scored to what your agent is doing right now — tool calls, diffs, tests going green, blockers, breakthroughs. The music is the agent's run.",
} as const;

export const features = [
  {
    title: "Scored to the agent, note by note",
    body: "Every tool call, file write, test pass and error is a musical cue. Beatly composes around the work actually happening — not a generic coding playlist.",
  },
  {
    title: "Procedurally generated, synthesized live",
    body: "Notes, chords and stems are generated and synthesized by SuperCollider at runtime. Nothing is a loop or a sample library. The music you hear has never existed before and will never play the same way twice.",
  },
  {
    title: "Your genre, your vibe",
    body: "Pick a mood — lo-fi, deep focus, techno, dreampop, jazz noir, neo soul, uplift — and Beatly stays inside it while reacting to everything your agent does.",
  },
  {
    title: "100% local",
    body: "No streaming, no cloud, no accounts. Beatly runs entirely on your machine over a local SuperCollider engine and a tiny HTTP control surface.",
  },
] as const;

export const footer = {
  note: "open source · every note composed live, for your agent, right now.",
} as const;
