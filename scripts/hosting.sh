set -e

cd ${TRAVIS_BUILD_DIR}
npm install
npm test
npm run build
