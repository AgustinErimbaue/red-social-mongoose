const { default: mongoose } = require("mongoose")
const ObjectId = mongoose.SchemaTypes.ObjectId;


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required:  [true, "Por favor rellena el título" ],
  },
  content: {
    type: String,
    required:  [true, "Por favor añade contenido al post" ],
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required:  [true, "Por favor rellena tu nombre" ],
  },
  commentIds: [{
    author: {type: ObjectId,ref: 'User'},
    type: ObjectId, ref: 'Comment'}
  ]
},
{ timestamps: true })



const Post = mongoose.model("Post", postSchema)

module.exports = Post