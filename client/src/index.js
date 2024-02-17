import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css"; //core styles
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primeicons/primeicons.css"; //icons
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<PrimeReactProvider
			value={{
				ripple: true,
			}}
		>
			<App />
		</PrimeReactProvider>
	</React.StrictMode>
);
