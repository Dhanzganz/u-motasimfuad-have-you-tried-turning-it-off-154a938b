// Have You Tried Turning It Off? — make.fun entry.
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, into /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I ask everyone that. It's the only step I know, and honestly, it's carried me this far.";

const MIN_CHARS = 1;
const MAX_CHARS = 199;

function validateLine(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    throw new Error(
      `entry is ${line.length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${target}`);
}

main();
