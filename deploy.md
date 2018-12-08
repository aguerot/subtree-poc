# Deploying a subfolder to GitHub Pages

For the sake of this example, let’s pretend the subfolder containing your site is named `public`.

### Step 1

Remove the `public` directory from the project’s `.gitignore` file (it’s ignored by default by Yeoman).

### Step 2

Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist && git commit -m "Initial dist subtree commit"
```

### Step 3

Use subtree push to send it to the `master` branch on GitHub.

```sh
git subtree push --prefix dist origin master
```

Boom. If your folder isn’t called `public`, then you’ll need to change that in each of the commands above.

---