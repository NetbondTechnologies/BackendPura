import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRegister from "./routes/userRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import wishListRoutes from "./routes/wishListRoutes.js";
import contact from "./routes/contactus.js"

dotenv.config();
connectDB();

const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(cors({
    origin: `${FRONTEND_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.use(express.json());

app.use(bodyParser.json());

// Routes
app.use("/api/users", userRegister);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishListRoutes);
app.use("/api/contact", contact); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on port http://46.202.164.62:${PORT}`)
);
