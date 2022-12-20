# Template for React/TypeScript/Webpack

## Before start

- Rename `src/project` folder to your project name.
- Edit `package.json` file to your needs.
- Edit `tsconfig.json` and `webpack.config.js` files to match your project name.
- Run `npm install` to install all dependencies.
- You may want to run `npm outdated` to check if there are any outdated dependencies, and `npm audit fix` to check for vulnerabilities.

## Available scripts

- `npm run serve` - Run development server.
- `npm run build` - Build production version in `dist` folder.
- `npm run preview` - Build production version in `dist_preview` folder.
- `npm run deploy` - Build production version and deploy it to GitHub Pages (you need to edit the `deploy` script in `package.json` file to match your URL).
