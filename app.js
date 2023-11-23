const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes= require('./src/routes/user');

app.use('/u', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});