const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const passport = require("passport");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: "blogs" }],
  clan: Array,
  favoritedBy: [{ type: Schema.Types.ObjectId}],
  favoriteUsers: [{ type: Schema.Types.ObjectId}],
  hierarchy: String,
  imageurl: String,
  messages: [{ type: Schema.Types.ObjectId}]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const user = mongoose.model("user", userSchema);

module.exports = user;






// profileRoutes.get('/profile/:id/blogs', (req, res, next) => {
//   //empty array
// const tempArray = [];
// //find user using the idfrom the params
//   findById(req.params.id)

//   .then((infoFromProfileUser)=>{
//     //gatting all the user info and pushing his own blogs into the empty array
// tempArray.push(infoFromProfileUser.blogs)
// //then send the same info to another request
// .then(responseFromUserProfile()={
//   // then we get tyhe ids of all the user that live inside of his favorite array and save it in a a variable
//   const  userFavorite = responseFromUserProfile.favoriteUser
//   //now  find all the blogs
// blgos.find()
// .then((allTheBlogs)=>{
//   co
//   allTheBlogs.forEach((eachblog)=>{
//     // compare the ids of the favariteUser array to all the blogs in the collection and pushing them to the TemArray

// if(eachBlogs.id === theuserFavorite ){
// tempArray.pusheachblog()
// }

//   })
// }).cotch(()={

// })
// }).catch(err={
//   res.json(err)
// }
//   }).catch(err)={
//     res.json(err)
//   }
// })