const { exec } = require('child_process');
const { error } = require('console');
const { stderr, stdout } = require('process');
const fs = require('fs');

// File to update PATH
const filePath = `${__dirname}/update_me.txt`

// get current date and time

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the date and time
const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// Content to add to file
const updatedContentToAddToFile = `Updated at: ${formattedDateTime}`

// Writing to the file
fs.writeFileSync(filePath, updatedContentToAddToFile);

// Running git in the specific directory

function gitAdd(callback) {
    exec('git add update_me.txt', (error, stdout, stderr) => {
        if (error) {
            console.log(`ERROR: ${error}`);
            callback(error);
        } else if (stderr) {
            console.log(`STDERR: ${stderr}`);
            callback(stderr);
        } else {
            console.log(stdout);
            callback(null);
        }
    });
}

function gitCommit(callback) {
    exec('git commit -m "Update update_me.txt"', (error, stdout, stderr) => {
        if (error) {
            console.log(`ERROR: ${error}`);
            callback(error);
        } else if (stderr) {
            console.log(`STDERR: ${stderr}`);
            callback(stderr);
        } else {
            console.log(stdout);
            callback(null);
        }
    });
}

function gitPush(callback) {
    exec('git push -u origin master', (error, stdout, stderr) => {
        if (error) {
            console.log(`ERROR: ${error}`);
            callback(error);
        } else if (stderr) {
            console.log(`STDERR: ${stderr}`);
            callback(stderr);
        } else {
            console.log(stdout);
            callback(null);
        }
    });
}

// Chain the Git commands using callbacks
gitAdd((error) => {
    if (!error) {
        gitCommit((error) => {
            if (!error) {
                gitPush((error) => {
                    if (error) {
                        console.log('Error pushing to the remote repository.');
                    } else {
                        console.log('All Git commands executed successfully.');
                    }
                });
            } else {
                console.log('Error committing changes.');
            }
        });
    } else {
        console.log('Error adding files.');
    }
});

