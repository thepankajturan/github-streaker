# GitHub Streaker

This is a simple program that helps you keep your GitHub Commit streak going.
It modifies the update_me.txt with the current time the script was run.
It commits a certain number of times a day as you specify in your crontab.

## Usage

### Setting up the repository.

1. Clone the repository.
2. Remove the .git directory from the cloned folder.
   ```bash
   rm -rf .git
   ```
4. Initialize a new git repo in the folder.
5. Make a new repository on your GitHub account and link it to your local git.
6. Push it to your remote GitHub repo.

### Setting up the Cronjobs

1. Edit the crontab to change the frequency of the commits.
   ```bash
   0 */12 * * * cd /path/to/project/folder && /bin/node /path/to/project/folder/app.js
   ```
3. Make sure to change the paths and reload the cron service:
   ```bash
   service cron reload
   ```
