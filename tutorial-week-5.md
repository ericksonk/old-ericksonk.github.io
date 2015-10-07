# How to avoid merge conflicts when working on sub-branches

1. On GitHub, create a new branch from your `master` branch
  * ex: `release--0.0.1`

1. Locally, `cd` to the correct repo and `git pull`

1. Switch to new branch `git checkout <new_branch>`
  * ex: `git checkout release--0.0.1`

1. On GitHub, create a sub-branch based on your new working branch
  * ex: create `feature--` based on `release--0.0.1`

1. Locally, `git pull`

1. Switch to new sub-branch `git checkout <new_sub-branch>`
  * ex: `git checkout feature--`

1. Work locally
  * `git add`, `git commit`, `git push` often
  * After first commit, create a pull request on GitHub from your sub-branch into your **WORKING BRANCH** (not `master`)
   - ex: open PR from `feature--` into `release--0.0.1`

1. Merge your PR when you're finshed working

1. Locally, checkout to `release` branch (`release--0.0.1`) and `git pull`

1. After you merge your first sub-branch into your working branch (`release--0.0.1`), you can open a pull request from your working branch (`release--0.0.1`) into your **MASTER BRANCH**

1. Now you're ready to start the process over again at #4

1. When you've finished working on all necessary sub-branches, you can finally merge your working branch (`release--0.0.1`) into your `master` branch
