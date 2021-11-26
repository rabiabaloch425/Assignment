const express = require('express');
const bcrypt = require('bcrypt');


const app = express();

app.use(express.json());  // Middleware

app.post('/post_data', (req, res) =>{
let myEncryptedEmail;
const encryptedEmail = bcrypt.hash(req.body.email, 12).then(hash => {
 console.log("Email Encrypted: ", hash);
 this.myEncryptedEmail = hash;
});

let myEncryptedPassword;
const encryptedPassword = bcrypt.hash(req.body.password, 12).then(hash => {
 console.log("Password Encrypted: ", hash);
 this.myEncryptedPassword = hash;
});


var response = {
 email  : this.myEncryptedEmail,
 password : this.myEncryptedPassword,
}
 
res.end(JSON.stringify(response));


})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});