const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;


mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected to the Database".rainbow)
});


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`.yellow);
})