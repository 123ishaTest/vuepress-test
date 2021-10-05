rm -rf ./igt-vue
git clone https://github.com/123ishaTest/igt-vue
cd igt-vue

# Cleanup remote
rm -rf .git
git init
git add .
git commit -m "Create from template"

# Apply all patches
git am ../docs/demo/patches/1-update-todo.patch
git am ../docs/demo/patches/2.1-create-currencies.patch
git am ../docs/demo/patches/2.2-add-wallet-to-myfeatures.patch
git am ../docs/demo/patches/2.3-add-wallet-to-app.patch

# Push to demo repo
git remote add origin https://github.com/123ishaTest/demo-test.git
git push -u origin master --force

cd ..
