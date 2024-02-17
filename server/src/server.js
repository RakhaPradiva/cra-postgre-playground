import express from "express";
import cors from "cors";
import { dbClient } from "./config/connection.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

dbClient
	.connect()
	.then(() => console.log("Database connected successfully:", dbClient.database))
	.catch((err) => {
		console.error("Database connection failed", err.message);
		process.exit(1);
	});

app.get("/", (req, res) => {
	res.send({ message: "Success" });
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
