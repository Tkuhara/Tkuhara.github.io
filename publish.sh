#!/bin/bash
# Commit and push whatever changed, but only if the site still parses.
#
# content.js and diary.js are loaded as ES modules at runtime, so one missing
# comma takes the whole page blank. Validating first means a typo leaves the
# live site on yesterday's good version instead of publishing the breakage.
#
# Run by hand:  ./publish.sh "optional message"
# Run by launchd: see ~/Library/LaunchAgents/com.tkuhara.site-publish.plist

set -uo pipefail
cd "$(dirname "$0")" || exit 1

LOG="$HOME/Library/Logs/tkuhara-site-publish.log"
mkdir -p "$(dirname "$LOG")"
say () { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG"; }

# Nothing to do? Say so and leave — no empty commits.
if [ -z "$(git status --porcelain)" ]; then
  say "no changes, nothing to publish"
  exit 0
fi

say "changes found:"
git status --porcelain | sed 's/^/    /' | tee -a "$LOG"

# --- the guard -------------------------------------------------------------
NODE="$(command -v node || echo /opt/homebrew/bin/node)"
if [ ! -x "$NODE" ]; then
  say "ABORT: node not found, cannot validate — refusing to push unverified"
  exit 1
fi

for f in content.js diary.js; do
  if ! "$NODE" --input-type=module -e "import('./$f').then(()=>process.exit(0),e=>{console.error(e.message);process.exit(1)})" 2>>"$LOG"; then
    say "ABORT: $f has a syntax error — site left on the last good version"
    say "       fix it, then run ./publish.sh again"
    exit 1
  fi
done
say "content.js and diary.js parse OK"

# --- publish ---------------------------------------------------------------
MSG="${1:-Update site content ($(date '+%Y-%m-%d'))}"
git add -A
git commit -q -m "$MSG" || { say "ABORT: commit failed"; exit 1; }

if git push -q origin main 2>>"$LOG"; then
  say "pushed: $(git rev-parse --short HEAD) — live in 1-3 min at https://tkuhara.github.io/"
else
  say "ABORT: push failed (network? credentials? someone else pushed first — try 'git pull --rebase')"
  exit 1
fi
