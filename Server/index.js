const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const users = [{
    username: 'paul',
    password: 'wu'
}] 

app.use(cors())
app.use(bodyParser.json())

app.post('/login',(req, res) => {

    let username = req.body.username
    let password = req.body.password
    let user =  users.find((u) => {
      return u.username == username && u.password == password
    })
  
    if(user) {
      jwt.sign({ username: username }, 'secret', function(err, token) {

          if(token) {
            res.json({token: token})
          } else {
            res.json({message: 'Unable to generate token'})
          }
  
      });
    }
    else{
        res.json({message:"Wrong username/password. Try again."})
    }
  })

app.listen(8080, () => {
    console.log('SERVER RUNNING WOOO')
})