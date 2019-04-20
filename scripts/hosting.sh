#!/bin/bash
set -e
set -o xtrace

npm install
npm test
npm run build
