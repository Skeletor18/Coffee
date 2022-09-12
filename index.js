const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 2000

app.use(express.json())

app.use(require('./routes/drinks.route'))

mongoose.connect("mongodb+srv://skeletor:akhmed20020918@cluster0.bcycud5.mongodb.net/Coffe?retryWrites=true&w=majority")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('start http://localhost:2000')
})