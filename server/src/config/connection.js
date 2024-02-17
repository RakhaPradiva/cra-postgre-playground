import pkg from "pg";
const { Client } = pkg;

export const dbClient = new Client({
	user: "postgres",
	password: "1",
	host: "localhost",
	port: 5432,
	database: "test",
});
