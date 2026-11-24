# Everyday Things, Two Lines

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/RianKuntul/everyday-two-lines-line/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/RianKuntul/everyday-two-lines-line/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

A tiny program that writes a two-line explanation of one everyday thing to a 10-year-old: the first line explains it in a single vivid sentence built on one concrete analogy, and the second line says in one sentence what that analogy maps and what it leaves out. The program checks its own output before writing it — exactly two lines, each exactly one sentence, and the whole file within the competition's 1–400 character gate.

## Run

```sh
node main.ts
```

This writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when unset). To try it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/suga-everyday-out node main.ts
cat /tmp/suga-everyday-out/entry.txt
```
