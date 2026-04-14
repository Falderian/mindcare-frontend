import { Button, Container, CssBaseline, Typography } from "@mui/material";

function App() {
	return (
		<Container>
			<CssBaseline />
			<Typography variant="h4" component="h1" gutterBottom>
				React + TS + MUI
			</Typography>
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</Container>
	);
}

export default App;
