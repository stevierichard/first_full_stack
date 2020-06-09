const express = require("express");
const app = express();
const PORT = 3000;

//set up server for incoming and outgoing datatypes (string, array, json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client2"));

// set up client side routes responsible for serving html
const client2Routes = require("./routes/client-routes");
app.use(client2Routes);

//sets up api routes for sending data to the client
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

//run server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
