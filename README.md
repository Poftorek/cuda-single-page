# How to start
## Do it only once
1. Download Live Server extension in your VSC
2. `mkdir cuda-project`
3. `cd cuda-project`
4. `git init`
5. `git remote add origin https://github.com/Poftorek/cuda-single-page.git`
6. `git pull origin master`
7. `git checkout -b marihunaen` // marihunaen is your name's of your branch
8. `npm install`

and..

# How to start working after changes by another person?
1. `npm run dev` // this command creates a /dist folder with files of /src folder - listening on change in files
2. Click PPM on `index.html` and choose `Open Live Server` // Live changes, that the link is IP:PORT/dist instead of IP:PORT/src
3. Write HTML in /src/`index.html`
4. To write css/scss create a /src/`_nameOfComponent.scss` and there you can write your code; remember to import your stylesheet in `style.scss`: `@import 'nameOfComponent';`
5. After your work make: `git add .`, `git commit -m "What did you do?"`, `git push origin marihunaen`
