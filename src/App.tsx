import "./App.css";
import {
	Button,
	ButtonGroup,
	ButtonGroupItem,
	IconButton,
} from "../package/colankit/index";
function App() {
	return (
		<>
			<div
				style={{
					display: "flex",
					gap: "1rem",
					flexDirection: "column",
					padding: "1rem",
				}}
			>
				<ButtonGroup variant="primary" size="lg" rounded borderRadius="6px">
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem>Button</ButtonGroupItem>
				</ButtonGroup>

				<ButtonGroup variant="primary" size="lg">
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem disabled>Button</ButtonGroupItem>
					<ButtonGroupItem>Button</ButtonGroupItem>
				</ButtonGroup>

				<ButtonGroup
					direction="vertical"
					variant="secondary"
					size="lg"
					rounded
					borderRadius="6px"
				>
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem disabled>Button</ButtonGroupItem>
				</ButtonGroup>
				<ButtonGroup
					direction="horizontal"
					variant="outline"
					size="lg"
					rounded
					borderRadius="6px"
				>
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem>Button</ButtonGroupItem>
					<ButtonGroupItem disabled>Button</ButtonGroupItem>
				</ButtonGroup>
			</div>
			<div
				style={{
					display: "flex",
					gap: "1rem",
					flexDirection: "column",
				}}
			>
				<h1>Test</h1>
				<Button variant="primary" size="lg" onClick={() => alert("Clicked")}>
					Button
				</Button>
				<Button variant="outline" size="lg">
					Button
				</Button>
				<Button variant="secondary" size="lg">
					Button
				</Button>
				<Button variant="link" size="lg">
					Button
				</Button>
				<Button variant="primary" size="lg">
					@
				</Button>
				<IconButton variant="primary" size="lg">
					@
				</IconButton>
				<IconButton variant="primary">@</IconButton>
				<IconButton variant="primary" rounded>
					@
				</IconButton>
				<Button variant="secondary" rounded size="lg">
					@
				</Button>
				<IconButton variant="primary" rounded size="lg">
					@
				</IconButton>
				<IconButton variant="secondary" rounded>
					@
				</IconButton>
				<IconButton variant="primary" rounded>
					@
				</IconButton>
			</div>
		</>
	);
}

export default App;
