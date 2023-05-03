const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefRecipe = require('./Data/chefRecipes.json')

app.use(cors())

app.get ('/categoryNews/:id', (req, res) =>{

    const id = req.params.id;
    if (id ==0) {
        res.send(chefRecipe)
      }
      else {
        const categoryNews = chefRecipe.filter(e => e.id == id)
        // console.log(categoryNews.length);
        res.send(categoryNews)
      }

} )



app.get('/', (req, res) => {
    res.send('Chef is on run')
});


app.get('/chefs', (req, res) => {
    res.send(chefRecipe);
})







app.listen (port, () => {
    console.log(`Chef Recipe API is Running on port :${port} `)
})