set -e

cd ${TRAVIS_BUILD_DIR}
firebase deploy --token "${FIREBASE_TOKEN}"
