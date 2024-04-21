const mongoose = require("mongoose");
mongoose.set("strictQuery", true); // Or false, depending on your preference

const DB =
  "mongodb+srv://dilumfonseka1998:mUJ1VMr4kj5NoQym@cluster0.pgqewlk.mongodb.net/papadamapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => {
    console.log(err);
  });
