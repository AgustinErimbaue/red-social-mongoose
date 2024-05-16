const express = require("express");
const { dbConnection } = require("./config/config");
const { handleTypeError } = require("./middleware/errors");
const app = express();
require("dotenv").config();
console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
dbConnection();

app.use(express.json());
app.use("/posts", require("./routes/posts"));
app.use("/comments", require("./routes/comments"));
app.use("/users", require("./routes/users"));

app.use(handleTypeError);

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
