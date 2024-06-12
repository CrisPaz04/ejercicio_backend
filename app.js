const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const myConnection = require("express-myconnection");

const app = express();

const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3000",
          credentials: true,
        },
      ],
    },
  },
};

app.use(cors(config.application.cors.server));

// rutas backend
const alumnosRoutes = require("./routes/alumnos");

app.set("port", process.env.PORT || 3005);

app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "Makarendela@04",
      port: 3306,
      database: "estudiantes",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
// create application/json parser
app.use(bodyParser.json());

//inicializando el server
app.listen(app.get("port"), () => {
  console.log("PUERTO 3005");
});
