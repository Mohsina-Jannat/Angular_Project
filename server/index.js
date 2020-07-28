const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose =  require('mongoose')

app.use(session({
    secret: 'jdfgghuheghgjbfhfguhrughhdjdjhjghj',
    saveUninitialized: false,
    resave: false
}))



mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/angulardb')
.then(() => console.log('Mongoose up'))


const User = require('./models/users')

app.use(bodyParser.json())

app.post('/api/quote', async (req, res) =>{
    console.log(req.session.user, req.body.value)
    const user = await User.findOne({email: req.session.user})
    if(!user){
        res.json({
            success: false,
            message: 'Invalid user!'
        })
        return
    }

    await User.update({email: req.session.user}, { $set: { quote: req.body.value}})
    res.json({
        success: true
    })

})

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body
    //console.log(req.body)
    console.log(email, password)
    const resp = await User.findOne({email,password})
    // console.log(resp)

    if(!resp) {
        // console.log("incorrect details")
        res.json({
            success: false,
            message: "Incorrect details"
        })
        // user login is incorrect 
    } else {
        
        req.session.user = email
        req.session.save()

        console.log('User is =>' + req.session.user)
        console.log("logging you in") 


        res.json({
            success: true 
        })
    
    }
    // res.send("k")
    
   //store this data on database
})

app.get('/api/isloggedin', (req, res) =>{
    res.json({
        status: !!req.session.user
    })
})

app.post('/api/register', async (req, res) => {
    const {email, password} = req.body
    
    const existingUser = await User.findOne({email})
    console.log(existingUser, email, password)

    if(existingUser) {
        res.json({
            success:false,
            message: " User Already exists"
        })
        return
    }


    const user = new User({
        email,
        password
    })

    const result = await user.save()
    console.log(result)
    res.json({
        success: true,
        message: "Thank you for resigtering here!"
    })
})

app.get('/api/data', async (req, res) => {

    const user = await User.findOne({email: req.session.user})

    if(!user){
        res.json({
            status: false,
            message: 'User was deleted'
        })
        return
    }


    res.json({
        status: true,
        email: req.session.user,
        quote: user.quote
    })
})

app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.json({
        success: true
    })
})
app.listen(1234, () => console.log('Server listening at 1234'))
