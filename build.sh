rm docs/*.js docs/*.png docs/*.jpg
npm run build
cp -r assets docs/
cp favicon.ico docs/
