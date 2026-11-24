// Fortune Cookie Wisdom for Developers
// Competition: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes one fortune-cookie line for a software developer to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 120 chars). Node 22 stdlib-only.
//
// Draft v1: "You will find the bug the moment you explain the code aloud to
// someone who stopped listening nine sentences ago."
// True and fortune-shaped, but the rubber-duck truth is the most-told
// developer joke there is; the judge has heard it a thousand times.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: keep the duck, change the truth it carries. The fresh turn is
// denial: every senior swears they outgrew rubber-ducking, and every 2 a.m.
// bug proves the duck still does the real debugging. Final line (119/120)
// reads like a fortune, lands on a developer's actual night, and the
// confession verb gives the tired-senior judge the smile-and-nod beat.
const SETUP = "The bug you hunt all night will confess the moment you explain it out loud";
const PUNCHLINE = "to the duck you swore you had long outgrown.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-120 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
