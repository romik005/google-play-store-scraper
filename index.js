const express = require('express')
const app = express();
var gplay = require('google-play-scraper');

const port = 8000

app.get('/', async(req, res) => {
  try {
    await gplay.app({appId: 'com.google.android.apps.translate'})
    .then(console.log, console.log);  
  } catch (error) {
    console.log(error);
  }
  res.send("ok");
})

app.listen(port, () => {
  console.log(`PORT :- :${port}`)
})

/*var store = require('app-store-scraper');

store.app({id: 553834731}).then(console.log).catch(console.log);*/
//store.app({appId: "com.findphone.tracklocator"}).then(console.log).catch(console.log);