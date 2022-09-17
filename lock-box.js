const prompt = require('prompt-sync')({sigint: true});

 
let lockbox = 1234;
  
pincode = Number(prompt('Enter the 4 digit passcode.'));

if (pincode === lockbox){
    console.log('Success!');
} else{
    console.log('Failure!');
}

