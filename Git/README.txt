#commit : snapshot at a particular time.

#To clone git repo in current directory : 
- git clone [link] .

#Change the branch name from master to main :
- git branch -M main

*HEAD is a pointer that represents your current position in the Git repository
*Detached HEAD state in Git occurs when you check out a specific commit, tag, or branch commit hash directly instead of a branch.

###JavascriptMastery

*git config --global init.defaultBranch main : making main as default branch
*git log : for commit history
*git checkout [commit id]: go back to the state of a specific commit (do not delete any commit). this for testing purpose only. you can make changes after going back to preivous commit but you can't commit the new changes as new commit will not be stored permanently.
*git checkout main : switch to latest commit

#BRANCH:
*git branch [branch-name] : create new branch
*git checkout [branch-name] : switch branch 
(shortcut : git checkout -b [branch-name] -> create and switch together)
Note: creating a new branch (A) sitting on a branch (B) then new branch (A) will inherit the code of branch (B). So make sure in which branch you are currently in.
*git push -u origin <branch-name>
 : If you created a new branch then you have to push like this. make sure you are in new branch
*git pull : git pull only brings in the necessary changes from the remote repository and merges them with your local work, not erasing your local changes.
*merge branch : To merge branch we need to create a pull request in the github account. If pull request accepted merge will complete.
but it can be done with this command: git merge <branch:from which branch merger content will come>. if merge done by pull request in github then local repo need to pull to sync with remote repo.

#Conflict Occurrence:
*Conflict message arises during the pull process when merging remote changes with your local branch if content in same file in same line differ. Difference in different line may not create any problem. They just simply merged.
*If any developer make a pull request to merge a file and you also make a pull request changing the same file. Assuem first pull request is merged successfully. But problem arise when your pull request going to merge afterwards. 

#Resolve Merge conflict : manual. if forget set javascriptmasetery

#Reset: (delete from the commit history)
*git reset --soft <commit-hash> : Resets the commit history to a specific commit but keeps your changes in the staging area, keep changes in working directory
*git reset <commit-hash> : move to specified commit, unstages the changes, keep changes in working directory
*git reset --hard [commit] : move to specified commit, unstage the changes, delete changes in working directory

#Revert: (almost similar to reset but keep all commit in the history)

#Stash: when you are in middle of implementing a feature but suddenly your boss said to stop this task and fix new bug in the code. So if you want to save your half implemented code some where else to get back when bug fixing complete then you need git stash command.
*git stash : save temporary
*git stash apply stash@{--} : get back your code
*git stash list

#git clone -> download the entire repo. used for first time. create local copy
#git fork -> create remote copy 

##Work flow:
1. Clone the repo
2. Create a new branch from the main or another branch
3. Make your changes
4. Push the branch to remote repo
5. open up a pull request
6. Merge the changes
7. pull the merged changes into your local main branch
8. Repeat from step 2

