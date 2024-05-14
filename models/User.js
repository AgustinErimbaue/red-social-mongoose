const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Por favor rellena tu nombre" ],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Este correo no es válido"],
      required: [true, "Por favor rellan tu email" ],
    },
    password: {
      type: String,
      required: [true, "Por favor rellena tu contraseña" ],
    },
    age: {type:Number, required:[true, "Por favor rellena tu edad"]},
    tokens: [],
    postIds: [{ type: ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
