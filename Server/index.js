const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(bodyParser.json())


app.post('/add-college', (req,res) => {
  models.SavedResults.create({
    userId: req.body.userId,
    userName: req.body.userName,
    schoolName: req.body.schoolName,
    tuitionTotal: req.body.tuitionTotal,
    roomingTotal: req.body.roomingTotal,
    textbookTotal: req.body.textbookTotal,
    laptopTotal: req.body.laptopTotal,
    carTotal: req.body.carTotal,
    foodTotal: req.body.foodTotal,
    restaurantTotal: req.body.restaurantTotal,
    phoneTotal: req.body.phoneTotal,
    internetTotal: req.body.internetTotal,
    healthTotal: req.body.healthTotal,
    carMaintTotal: req.body.carMaintTotal,
    spotifyTotal: req.body.spotifyTotal,
    amazonPrimeTotal: req.body.amazonPrimeTotal,
    netflixTotal: req.body.netflixTotal,
    drinkTotal: req.body.drinkTotal,
    alcoholTotal: req.body.alcoholTotal,
    clubTotal: req.body.clubTotal,
    clothingTotal: req.body.clothingTotal,
    videoTotal: req.body.videoTotal,
    customTotal: req.body.customTotal,
    yearTotal:req.body.yearTotal,
    fourYearTotal:req.body.fourYearTotal
  })
})

app.get('/test/:id', (req,res) => {
  let id = req.params.id
  res.json({test:id})
})

app.get('/view-colleges/:userId' , (req,res) => {
  let userId = req.params.userId
  console.log(userId)
  models.SavedResults.findAll({
    where: {
        userId: userId
    },
    order: [['createdAt', 'DESC']]
  })
  .then(result => {
    console.log(result)
    res.json({result:result})
  })
})

app.post('/remove-entry', (req,res) => {
  let postId = req.body.postId
  models.SavedResults.destroy({
    where:{
      id:postId
    }
  })
})

app.listen(8080, () => {
    console.log('SERVER RUNNING WOOO')
})