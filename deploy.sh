npx vuepress build docs
cd docs/.vuepress/dist/
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/great-super/note.git master:gh-pages