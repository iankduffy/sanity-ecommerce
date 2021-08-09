const express = require('express')
const next = require('next')
// var http = require('http');
var request = require('request');
// const cors = require('cors')
const path = require('path')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const bodyParser = require("body-parser");

// if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// const stripe = require('stripe')(process.env.STRIPE_PAYMENT_SECRET);

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
 
  server.get('/product/:id', (req, res) => {
    const actualPage = `/product/${req.params.id}`
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/category/:id', (req, res) => {
    const actualPage = `/category/${req.params.id}`
    // console.log(req.params)
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  // server.post('/payment', (req, res) => {
  //   const body = {
  //     source: req.body.token.id,
  //     amount: req.body.amount,
  //     currency: 'gbp'
  //   };
  
  //   stripe.charges.create(body, (stripeErr, stripeRes) => {
  //     if (stripeErr) {
  //       res.status(500).send({ error: stripeErr });
  //     } else {
  //       res.status(200).send({ success: stripeRes });
  //     }
  //   });
  // });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})