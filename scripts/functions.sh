#!/bin/bash
set -e
set -o xtrace

cd ${TRAVIS_BUILD_DIR}/functions
npm install
npm test
