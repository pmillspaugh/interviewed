require('dotenv').config();
const mongoose = require('mongoose');

// ! switch MongoDB cluster connection (temporarily on an old FCC cluster)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// extract company into its own schema/model?
// TODO: add fields for name, email, etc.
const userSchema = new Schema({
  authToken: String,
  companyList: {
    type: [
      {
        companyName: String,
        role: String,
        city: String,
        applied: Boolean,
        contacts: String,
        notes: String,
      },
    ],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
