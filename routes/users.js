const express = require('express');
const router = express.Router();

// login
router.get('/login' , (req , res) =>  res.render('login'))

// login
router.get('/register' , (req , res) =>  res.render('register'))

// Register
router.post('/register' , (req,res) => {
    const { name , email , password , password2} = req.body;
    let errors = [];

    
    // req fields
    if(!name || !email || !password || !password2){
        errors.push({ msg:' Please fill in all the fields'});
    }
    
    // confirm passwords
    if( password != password2){
        errors.push({ msg:' passwords doesnt match'});
    }
    
    // check linegth
    if(password.length < 6){
        errors.push({ msg:' Atleast 6 characters'});
    }
    if(errors.length > 0){
        res.render('register' , {
            errors,
            name,
            email,
            password,
            password2
        });
        
    }
    else{
        res.send('pass');
    }
});


module.exports = router;