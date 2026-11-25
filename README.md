# Have You Tried Turning It Off?

[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Dhanzganz/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Dhanzganz/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for the make.fun bounty **Have You Tried Turning It Off?**: one funny
single-line reply a hopeless tech support agent gives a desperate customer —
judged two at a time on humour and freshness.

## The entry

> Have you tried turning it off and on again? I ask everyone that. It's the only step I know, and honestly, it's carried me this far.

131 characters, one line. The twist is a career confession: the classic line
isn't just the agent's advice, it's his entire toolkit — and it has carried
him this far. Cheerful uselessness, no blame on the customer.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `/output` (or to `$MAKEFUN_OUTPUT_DIR` when set). The
program is dependency-free, deterministic, and validates the line against
the competition gate (1–199 characters, single line, not only whitespace)
before writing. It only creates and writes inside the output directory.

## Validation

Ran twice into two fresh output directories: byte-identical `entry.txt`
both times. Output is the exact line above, 131 characters, one line, no
trailing newline, inside the 1–199 gate.
