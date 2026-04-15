import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: () => <div>shit</div>,
		loader: () => console.debug("loading root"),
	},
]);
