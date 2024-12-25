const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const app = express();

dotenv.config();
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/apt", require("./routes/aptRoutes"));

app.get("/", (req, res) => {
	return res.status(200).send("<h1>Welcome!!</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running at PORT: ${PORT}`.white.bgMagenta);
	console.log(`http://localhost:${PORT}`.white.bgBlue);
});
