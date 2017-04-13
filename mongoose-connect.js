const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Users');
mongoose.Promise=global.Promise;

var user = mongoose.model("user", {
    name: {
        type: String
    },
    address: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    email: {
        type: String,
    }
});

var newUser = new user({
    name: "aslam",
    address: "Hyderabad",
    mobileNo: 9701444495,
    email: "ahmedaslam866",
})

newUser.save().then((user) => {
    console.log(user + "are the users details");
}, (error) => {
    console.log("Unable to save user");
})


