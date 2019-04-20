#!/bin/bash
set -e
set -o xtrace

# if [[ $TRAVIS_BRANCH != 'master' ]]; then
#   echo "Not deploying because this is a not the master branch"
#   exit 0
# fi

if [[ $TRAVIS_PULL_REQUEST != 'false' ]]; then
  echo "Not deploying because this is a Pull Request"
  exit 0
fi

firebase use default --token $FIREBASE_TOKEN
firebase deploy --non-interactive --only functions --debug
