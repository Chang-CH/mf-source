del /S docs\*
cd vue-button
call npm run build
copy dist/* ../docs/VueButton
echo "vue build done"
cd ..
cd react-button
call npm run build
copy dist/* ../docs/ReactButton
cd ..
cd host
call npm run build
copy dist/* ../docs
cd ..
