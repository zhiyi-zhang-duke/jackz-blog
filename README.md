# Deploying to GitHub Pages

This example supports deloying a static Next.js application (using `next export`) to GitHub Pages.

The `out` directory should not be ignored by version control.

Testing.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example github-pages nextjs-github-pages
# or
yarn create next-app --example github-pages nextjs-github-pages
# or
pnpm create next-app --example github-pages nextjs-github-pages
```

### Deploy to GitHub Pages

1.  Create a new public GitHub repository.
1.  Edit `next.config.js` to match your GitHub repository name.
1.  Push the starter code to the `main` branch.
1.  Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch.
1.  On GitHub, go to **Settings** > **Pages** > **Branch**, and choose `gh-pages` as the branch with the `/root` folder. Hit **Save**.
1.  Make a change.
1.  Run the `deploy` script again to push the changes to GitHub Pages.

Congratulations! You should have a URL like:

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

### What this template is missing

Remember that the basePath in next.config.js is part of the dev environment url.
In my case it is https://localhost:3000/jackz-blog

`npm run deploy` does not work correctly if any of the commands fail.
Just running the command doesn't do much:
You have to delete the current gh-pages branch.
`git push origin :gh-pages`
Remove the out directory
`git rm -r out/`
Make the out directory
Run `npm run build`
Run the steps one by one for best results

### Updates on project

2-26-23
The ui-update branch is pretty close to complete. Currently next.js is having trouble linking the images. Trying to figure out why by creating a fresh project and trying `next/image` again there. Either it's a bug or there's a config I'm missing.

### Random notes

It looks like there's a newer version available?

```
A new version of `create-next-app` is available!
You can update by running: npm i -g create-next-app
```
