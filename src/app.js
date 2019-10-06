const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'ajay'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'Flower',
        name: 'Ajay'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'help msg',
        title: 'Help',
        name: 'Ajay'
    })
})

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'Clear throughout day',
        location: 'India'
    })
})

app.listen(3001,() => {
    console.log('Server has started has successfully')
})

