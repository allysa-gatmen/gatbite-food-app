import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gatbite:gatbite@cluster0.movqzok.mongodb.net/gatbite-food-order-deliver').then(()=>console.log("DB Connected"))
}

// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://gatbite:gatbite@cluster0.movqzok.mongodb.net/gatbite-food-order-deliver', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("DB Connected");
//     } catch (error) {
//         console.error("DB Connection Error: ", error);
//     }
// };