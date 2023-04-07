import express, { response } from 'express';
import session from 'express-session'
import mysql from 'mysql2'
import bodyParser from 'body-parser';
const app = express()
const port = 3000

// paramètres cookie express session

app.use(session({
  secret: 'cat',
  resave: false,
  saveUninitialized: false,
}))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs')

//site sur le port 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

//lien vers la base de donnée
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
  const num = req.body.numProduct;
  const price = req.body.productPrice[num];
  const name = req.body.productName[num];
  console.log(num);
  console.log(name);
  console.log(price);
  connection.query('INSERT INTO orders (id, idProduct, price, name) VALUES (NULL, ?, ?, ?)', [num, price, name], (err, result) => {
    if (err) {
      console.error(err)
    }
    connection.query('SELECT * FROM `orders`', (err, result, fields) => {
      console.log(result)
      res.render('pages/panier', { orders: result })
  });
});
})

//page connexion
app.get('/connexion', (req, res) => {
  res.render('pages/connexion+inscription/connexion', {
    layout:false,
    session: req.session
})
})

// connexion user
app.post('/connexion', (req, res) => {
  console.log(req.body);
  
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    connection.query('SELECT * FROM users WHERE username = ? AND password=? ', [username, password], (err, rows) => {
      if (users.length > 0) {
        
res.send("bienvenue")
           // connection.query('SELECT * FROM `product`', (err, result, fields) => {
           //   console.log(result);
            //  res.render('pages/index', { product: result });
          //  });
          
  } else {
    res.send('Veuillez entrer votre username et mot de passe');
      }
})};
});


//page inscription

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






