const baseURL = "http://localhost:5000/users";

export const getUser = async () => {
	try {
		const res = await fetch(baseURL);
		const user = await res.json();
		return user.data;
	} catch (error) {
		throw new Error("Error fetching users", error);
	}
};
export const createUser = async (user) => {
	try {
		const res = await fetch(baseURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error("Error creating user", error);
	}
};

export const updateUser = async (user) => {
	try {
		const res = await fetch(`${baseURL}/${user.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error("Error updating user", error);
	}
};
export const deleteUser = async (id) => {
	try {
		const res = await fetch(`${baseURL}/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error("Error deleting user", error);
	}
};
