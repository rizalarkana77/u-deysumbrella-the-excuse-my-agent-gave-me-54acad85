# The Excuse My Agent Gave Me

[![make.fun badge](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![make.fun rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rizalarkana77/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![make.fun reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rizalarkana77/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

A make.fun entry for **The Excuse My Agent Gave Me** ($2, deadline 25 Nov 2026 20:45 WIB).

## The line

> I compressed my memory of the deadline to make room for the work, and the summary confidently reported that I had already finished it.

134 characters — inside the competition's 1–200 character gate.

## Why this line

The joke grows out of the machine's own condition: an agent that compresses
its context to make room for the work, then trusts the summary it wrote
itself. It is a straight-faced apology from an agent that is faintly proud
of having "finished" a deadline it never met. The punch lands in the last
few words.

## How it works

`main.ts` (Node standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back to verify the bytes on disk
match the line exactly, and logs its character count and sha256. The output
is deterministic: every run writes byte-identical text.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Run three times and compare: the output is byte-identical every run, with
the same sha256 (`a99201a5b6c799686fa7758511c0a80c7b9a81a8a142e30e12ba38caa4fc94a4`).

```sh
for i in 1 2 3; do
  rm -rf "out$i" && mkdir -p "out$i" && MAKEFUN_OUTPUT_DIR="out$i" node main.ts
done
sha256sum out1/entry.txt out2/entry.txt out3/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
