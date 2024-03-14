const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("connect to db successfully!");
    }
  } catch (error) {
    console.log("connect to db failed because => ", error);
  }
};

export default connectToDB;
