import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { getUser, createUser, deleteUser, updateUser } from "./services/user.service";

const App = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
	});
	const [selectedUser, setSelectedUser] = useState(null);
	const dt = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getUser();
			setUsers(data);
			console.log(data);
		};
		fetchData();
	}, []);

	const handleCreateUser = async () => {
		const data = await createUser(newUser);

		if (data) {
			setUsers([...users, data]);
			setNewUser({
				name: "",
				email: "",
			});
			alert("User created successfully");
		}
	};

	const handleDeleteUser = async () => {
		const data = await deleteUser(selectedUser.id);

		if (data) {
			setUsers(users.filter((user) => user.id !== selectedUser.id));
			alert("User deleted successfully");
		}
	};

	const handleUpdateUser = async () => {
		const data = await updateUser(selectedUser);

		if (data) {
			const index = users.findIndex((user) => user.id === selectedUser.id);
			users[index] = selectedUser;
			setUsers([...users]);
			alert("User updated successfully");
		}
	};

	return (
		<div>
			<h1>Test render</h1>
		</div>
	);
};

export default App;

