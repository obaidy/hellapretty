#!/usr/bin/env bash
set -euo pipefail

# Netlify may inherit PUBLIC_URL=/material-kit-pro-react from site env vars,
# which breaks asset loading on hellapretty.cz.
unset PUBLIC_URL
export PUBLIC_URL=

npm run build
