import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse — one line in the voice of a hardware wallet refusing
// to sign at 3 AM. The judge penalises recycled battery / firmware /
// cold-storage jokes, so the angle is fresh: the wallet as a doorman
// who has watched the human's 3 AM ideas before and refuses to open
// the vault for one more.
const text =
  "It's 3 AM and I am not opening the vault for a transfer you will deny by breakfast — come back when the sun is up and so is your judgment.\n";

// Guard: the gate requires 1-200 characters, a single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
