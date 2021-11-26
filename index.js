const express = require('express');
const bcrypt = require('bcrypt');


const app = express();

app.use(express.json());  // Middleware

app.post('/post_data', (req, res) =>{


const asyncEmail = async () => {
    const salt = await bcrypt.genSalt(10);
    const encryptedEmail = await bcrypt.hash(req.body.email, salt);
    const ecryptPassword = await bcrypt.hash(req.body.password, salt);
    var response = {
    email  : encryptedEmail,
    password : ecryptPassword,
   }
    res.end(JSON.stringify(response));
};

asyncEmail();

// let myEncryptedEmail;
// const encryptedEmail = bcrypt.hash(req.body.email, 12).then(hash => {
//  console.log("Email Encrypted: ", hash);
//  this.myEncryptedEmail = hash;
// });

// let myEncryptedPassword;
// const encryptedPassword = bcrypt.hash(req.body.password, 12).then(hash => {
//  console.log("Password Encrypted: ", hash);
//  this.myEncryptedPassword = hash;
// });


// var response = {
//  email  : asyncEmail(),
// //  password : this.myEncryptedPassword,
// }
 
// res.end(JSON.stringify(response));


})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});