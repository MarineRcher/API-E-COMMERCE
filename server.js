import express from 'express';
const app = express() 
const port = 3000

app.use(express.static('public'));
app.set('view engine' , 'ejs')


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})



// affiche index page
app.get('/', (req, res) => {
    res.render('pages/index')
    }
)

//affiche page acceuil chat
app.get('/chat', (req, res) => {
  res.render('pages/chat/chat')
  }
)




