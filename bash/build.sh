rm -rf build

mkdir build
echo "cp -r ./css/. ./build/css"
cp -r ./css/. ./build/css
echo "cp -r ./js/. ./build/js"
cp -r ./js/. ./build/js
echo "cp index.html ./build/index.html"
cp index.html ./build/index.html


echo "----------Build Success --------"