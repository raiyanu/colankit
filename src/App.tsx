import "./App.css";
import { Button } from "@raiyanu/colankit";
function App() {
	return (
		<>
			<div className="card">
				<h1>Colankit</h1>
				<Button style={{ color: "green" }} onClick={() => alert("HEy there")}>
					Click hey
				</Button>
			</div>
		</>
	);
}

export default App;
