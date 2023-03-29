import express from 'express';
import mysql from 'mysql2'
import bodyParser from 'body-parser';
const app = express() 
const port = 3000

app.use(express.static('public'));
app.set('view engine' , 'ejs')


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

const connection = mysql.createConnection({
  host: '',
  port: '3306',
  user: 'root',
  password: 'notSecureChangeMe',
  database: 'MyDataBase',
});


// affiche index page
app.get('/', (req, res) => {
  connection.query('select * from products', (err, result, fields) => 
  {
    console.log(result)
    res.render('pages/index')
  })
    
    })

//page connexion
app.get('/connexion', (req, res) => {
  res.render('pages/connexion+inscription/connexion')
  }
)

//page inscription
app.get('/inscription', (req, res) => {
  res.render('pages/connexion+inscription/inscription')
  }
)

//affiche page acceuil chat
app.get('/chat', (req, res) => {
  res.render('pages/chat/chat')
  }
)

//page croquettes chats
app.get('/chat/croquettes', (req, res) => {
  res.render('pages/chat/croquettesCat')
  }
)




