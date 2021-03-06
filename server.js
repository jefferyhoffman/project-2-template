const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

const db = require("./models/index");

const PORT = process.env.PORT || 8080;

const app = express();

// View Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Static assets
app.use(express.static("public"));

// Routes
app.use(require("./controllers/staticController"));
app.use(require("./controllers/todosController"));

// Synchronize my schema
db.sequelize.sync({ force: process.env.NODE_ENV !== "production" })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`==> Server listening at http://localhost:${PORT}/`);
    });
  });
