#!/usr/bin/env bash
set -euo pipefail

unset PUBLIC_URL
export PUBLIC_URL=
export CI=false

npm install
npm run build

if ! grep -q "Hella Pretty" build/index.html; then
  echo "ERROR: build/index.html does not contain Hella Pretty title"
  exit 1
fi

if grep -q "material-kit-pro-react" build/index.html; then
  echo "ERROR: build/index.html still has material-kit-pro-react paths"
  exit 1
fi

echo "Netlify build completed successfully"
