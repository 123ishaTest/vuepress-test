#!/bin/bash
set -e

rm -rf ./igt-vue
git clone https://github.com/123ishaTest/igt-vue
cd igt-vue

# Cleanup remote
rm -rf .git
git init
git add .
git commit -m "Create from template"

# Apply all patches
git am ../docs/demo/patches/*.patch

# Push to demo repo
git remote add origin https://github.com/123ishaTest/igt-demo.git
git push -u origin master --force

cd ..
rm -rf ./igt-vue
