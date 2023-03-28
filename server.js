import Express from 'express';
const app = Express() 
const port = 3000
app.set('view engine' , 'ejs')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// affiche index page
app.get('/', (req, res) => {
    res.render('../pages/index')
  })


