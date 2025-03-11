import React from "react";
import "./App.css";
import {
	Button,
	ButtonGroup,
	ButtonGroupItem,
	IconButton,
} from "../package/colankit/index";
import { MouseOverLayerButton } from "../package/colankit/component/Button/Button";
function App() {
	return (
		<>
			<div
				style={{
					padding: "1rem",
				}}
			>
				<MouseOverLayerButton
					button={
						<Button rounded borderRadius="99px" variant="primary">
							CLICK ME
						</Button>
					}
					style={{
						padding: "3rem 1rem",
						border: "1px solid red",
						width: "fit-content",
						marginBlock: "auto",
						display: "block",
					}}
				>
					Lorem ipsum dolor sit amet <br />
					Lorem ipsum dolor sit amet <br />
					Lorem ipsum dolor sit amet <br />
					Lorem ipsum dolor sit amet <br />
					Lorem ipsum dolor sit amet <br />
					<br />
				</MouseOverLayerButton>
			</div>
		</>
	);
}

export default App;
