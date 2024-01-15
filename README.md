# GitHub Streaker

This is a simple program that helps you keep your GitHub Commit streak going.
It modifies the update_me.txt with the current time the script was run.
It commits a certain number of times a day as you specify in your crontab.

## Usage

### Setting up the repository.

1. Clone the repository.
2. Remove the .git directory from the cloned folder.
   `code`rm -rf .git`code`
3. Initialize a new git repo in the folder.
4. Make a new repository on your GitHub account and link it to your local git.
5. Push it to your remote GitHub repo.

### Setting up the Cronjobs

1. Edit the crontab to change the frequency of the commits.
   `code`0 */12 * * * cd /path/to/project/folder && /bin/node /path/to/project/folder/app.js`code`
2. Make sure to change the paths and reload the cron service:
   `code`service cron reload`code`
