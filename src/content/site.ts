// Single source of truth for Beatly marketing copy.
// Edit here, the site picks it up everywhere.

export const brand = {
  name: "beatly",
  domain: "beatly.dev",
  tagline: "a live music soundtrack for coding agents",
  description:
    "Beatly scores the work. A live, generative soundtrack that reacts to your coding agent in real time — tempo rising on long builds, a drop when tests pass, ambient pads while it thinks.",
} as const;

export const hero = {
  eyebrow: "now composing",
  headline: "a live music soundtrack",
  headlineAccent: "for coding agents",
  sub: "Beatly listens to your agent's tool calls, diffs, and test runs — and scores them. In real time. From a dusty lo-fi while it reads, to a build-up while it writes, to a payoff chord when CI goes green.",
  cta: {
    label: "get early access",
    href: "#waitlist",
  },
} as const;

export const features = [
  {
    title: "Reacts to the loop",
    body: "Tool call, file write, test pass, error. Each event is a cue. Beatly improvises around them.",
  },
  {
    title: "Real music, real time",
    body: "Generative stems running live in the browser. No pre-rendered loops, no dead air between prompts.",
  },
  {
    title: "Your vibe, not ours",
    body: "Pick a mood — lo-fi, synthwave, orchestral, drum & bass. Beatly keeps you in the zone you chose.",
  },
] as const;

export const waitlist = {
  heading: "ship with a soundtrack",
  sub: "Early access is rolling out in waves. Drop your email — we'll ping you when it's your turn.",
  placeholder: "you@studio.fm",
  button: "join the waitlist",
  success: "✓ you're on the list.",
} as const;

export const footer = {
  note: "made with loops and tool calls.",
} as const;
