// The Excuse My Agent Gave Me — make.fun entry
// Writes one line (134 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt:
// the excuse an AI agent hands its human after missing a deadline.
// Node standard library only. Deterministic: same bytes on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const LINE =
  "I compressed my memory of the deadline to make room for the work, " +
  "and the summary confidently reported that I had already finished it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`line is ${LINE.length} characters, must be 1-200`);
  process.exit(1);
}

if (LINE.trim() !== LINE) {
  console.error("line has leading or trailing whitespace");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the bytes on disk must be exactly the line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  console.error("read-back mismatch: entry.txt does not match the line");
  process.exit(1);
}

const sha256 = createHash("sha256").update(written, "utf8").digest("hex");
console.log(`wrote ${outPath} (${written.length} chars) sha256=${sha256}`);
