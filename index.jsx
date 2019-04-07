import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StyleSheetServer } from 'aphrodite';
import express from 'express';
import generatePhonewords from './src/lib/generate-phonewords';
import App from './src/App.tsx';

const app = express();
const inMemoryCache = {};

// Serve built files with static files middleware
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve requests with our handleRender function
app.get('/', (req, res) => {
  // Contains the generated html, as well as the generated css and some
  // rehydration data.
  const { html, css } = StyleSheetServer.renderStatic(() => renderToString(<App />));

  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  // Sends the response back to the client
  res.send(`
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link href=&quot;https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700&quot; rel=&quot;stylesheet&quot;>
            <style data-aphrodite>${css.content}</style>
            <title>Kiwi.com - Phonewords</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};</script>
            <script src="./public/bundle.js"></script>
        </body>
    </html>
  `);
});

// Generate Phonewords
app.get('/api/phonewords', (req, res) => {
  if (!req.query.numbers) {
    return res.status(400).send('Error: No numbers sent');
  }

  if (inMemoryCache[req.query.numbers]) {
    return res.json(inMemoryCache[req.query.numbers]);
  }

  const phonewords = generatePhonewords(req.query.numbers);

  inMemoryCache[req.query.numbers] = phonewords;
  return res.json(phonewords);
});

// Start server
app.listen(3000);
console.log('Listening on port 3000');
