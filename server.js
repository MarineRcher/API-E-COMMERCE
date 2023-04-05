import express from 'express';
import mysql from 'mysql2'
import bodyParser from 'body-parser';
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs')


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

const connection = mysql.createConnection({
  host: '',
  port: '3306',
  user: 'root',
  password: 'notSecureChangeMe',
  database: 'MyDataBase'
});


// affiche index page
app.get('/', (req, res) => {
  connection.query('SELECT * FROM `product`', (err, result, fields) => {
    console.log(result)
    res.render('pages/index', { product: result })
  })

})

app.post('/', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const price = req.body.price
  connection.execute('INSERT into orders (name, price) select name, price FROM product;', [name, price], (err, rows) => {
    console.log('SQL errors', err)
    console.log(rows)

    connection.query('SELECT * FROM `orders`', (err, result, fields) => {
      console.log(result)
      res.render('pages/panier', { orders: result })
    })
  });
  connection.unprepare('INSERT into orders (name, price) select name, price FROM product;');
})

//page connexion
app.get('/connexion', (req, res) => {
  res.render('pages/connexion+inscription/connexion')
}
)

app.post('/inscription', (req, res) => {
  console.log(req.body)
  const mail = req.body.mail
  const username = req.body.username
  const password = req.body.password[0]
  /**
   * INSERT INTO `product`
   * (`name`, `price`, `description`, `opinion`, `categorie`, `image`, `id`) 
   * VALUES 
   * ('?,'[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')
   */
  // depuis req.body on recupere les donnees qu'on\
  // souhaite inserer en base

  // tester la requete sur phpmyadmin 

  // remplacer les valeurs par des ?

  // et placer dans le tableau du preppared statement les valeurs 
  // qui correspondent respectivement aux ?

  connection.execute('INSERT INTO users(id, mail, userame, password) VALUES (NULL,?,?,?)', [mail, username, password], (err, rows) => {
    // rows: [ { result: 12 } ]
  console.log('SQL errors', err)
    console.log(rows)

    connection.query('SELECT * FROM `product`', (err, result, fields) => {
      console.log(result)
      res.render('pages/index', { product: result })
    })
  
    // internally 'select 1 + ? + ? as result' is prepared first. On subsequent calls cached statement is re-used
  });

  // close cached statement for 'select 1 + ? + ? as result'. noop if not in cache
  connection.unprepare('INSERT INTO users(id, mail, userame, password) VALUES (NULL,?,?,?)');
})

//page inscription
app.get('/inscription', (req, res) => {
  res.render('pages/connexion+inscription/inscription')
}
)

//page panier
app.get('/panier', (req, res) => {
  connection.query('SELECT * FROM `orders`', (err, result, fields) => {
    console.log(result)
    res.render('pages/panier', { orders: result })
  })

})

//affiche page acceuil chat
app.get('/chat', (req, res) => {
  res.render('pages/chat')
}
)






