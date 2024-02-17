import { dbClient } from "../config/connection.js";

export const getUser = async (req, res) => {
	try {
		const result = await dbClient.query("SELECT * FROM users");
		res.send({
			message: "Users fetched successfully",
			total: result.rowCount,
			data: result.rows,
		});
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Failed to fetch users" });
	}
};

export const getUserById = async (req, res) => {
	const id = req.params.id;
	try {
		const result = await dbClient.query("SELECT * FROM users WHERE id = $1", [id]);
		if (result.rowCount === 0) {
			res.status(404).send({ message: "User not found" });
		} else {
			res.send({ message: "User fetched successfully", data: result.rows[0] });
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Failed to fetch user" });
	}
};

export const createUser = async (req, res) => {
	const { name, email } = req.body;
	try {
		await dbClient.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
		res.send({ message: "User added successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Failed to add user" });
	}
};

export const updateUser = async (req, res) => {
	const id = req.params.id;
	const { name, email } = req.body;
	try {
		const user = await dbClient.query("SELECT * FROM users WHERE id = $1", [id]);

		if (user.rows.length === 0) {
			res.status(404).send({ message: "User not found" });
		} else if (email === user.rows[0].email) {
			res.status(400).send({ message: "Email already exists, please choose another" });
		} else {
			await dbClient.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id]);
			res.send({ message: "User updated successfully" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Failed to update user" });
	}
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		await dbClient.query("DELETE FROM users WHERE id = $1", [id]);
		res.send({ message: "User deleted successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).send({ message: "Failed to delete user" });
	}
};
