import "./App.css";
import { Button } from "./components/Button";
function App() {
	return (
		<>
			<div
				className="card"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					gap: "1rem",
				}}
			>
				<h1>Colankit</h1>
				<Button varient="primary">Primary</Button>
				<Button varient="primary" disabled>
					Primary disabled
				</Button>
				<Button varient="secondary">Secondary</Button>
				<Button varient="secondary" disabled>
					Secondary disabled
				</Button>
				<Button varient="outline">Secondary</Button>
				<div>
					<Button varient="primary" size="xs">
						Primary-xs
					</Button>
					<Button varient="secondary" size="xs">
						secondary-xs
					</Button>
				</div>
				<div>
					<Button varient="primary" size="sm">
						Primary-sm
					</Button>
					<Button varient="secondary" size="sm">
						secondary-sm
					</Button>
				</div>
				<div>
					<Button varient="primary" size="md">
						Primary-md
					</Button>
					<Button varient="secondary" size="md">
						secondary-md
					</Button>
				</div>
				<div>
					<Button varient="primary" size="lg">
						Primary-lg
					</Button>
					<Button varient="secondary" size="lg">
						secondary-lg
					</Button>
				</div>
			</div>
		</>
	);
}

export default App;
