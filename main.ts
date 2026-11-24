import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Line 1: one everyday thing (a traffic jam) explained to a 10-year-old in a
// single vivid sentence built on one analogy.
// Line 2: one sentence saying why that analogy works: what it maps and
// what it leaves out.
const LINES: string[] = [
  "A traffic jam is a river of cars that has frozen solid, so every driver sits trapped in their own little ice cube waiting for the thaw.",
  "The frozen river maps how the cars get stuck together and cannot move at all, but it leaves out the traffic lights and crashes that actually freeze the river and the fact that drivers can still honk and steer.",
];

function countSentences(line: string): number {
  const terminators = line.match(/[.!?]+/g);
  return terminators === null ? 0 : terminators.length;
}

function validate(lines: string[]): void {
  if (lines.length !== 2) {
    throw new Error(`Expected exactly 2 lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (line.trim().length === 0) {
      throw new Error("Empty line is not allowed");
    }
    if (countSentences(line) !== 1) {
      throw new Error(`Line is not exactly one sentence: ${JSON.stringify(line)}`);
    }
    if (!/[.!?]$/.test(line.trim())) {
      throw new Error(`Line does not end with sentence punctuation: ${JSON.stringify(line)}`);
    }
  }
  const text = lines.join("\n") + "\n";
  const length = [...text].length;
  if (length < 1 || length > 400) {
    throw new Error(`Entry must be 1 to 400 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space");
  }
}

function main(): void {
  validate(LINES);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = LINES.join("\n") + "\n";
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
