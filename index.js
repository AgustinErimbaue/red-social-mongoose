const express = require("express");
const { dbConnection } = require("./config/config");
const { handleTypeError } = require("./middleware/errors");
const app = express();
const PORT = 3002;

dbConnection();

app.use(express.json());
app.use("/posts", require("./routes/posts"));
app.use("/comments", require("./routes/comments"));
app.use("/users", require("./routes/users"));

app.use(handleTypeError)

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
