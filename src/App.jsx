// import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="post/:id" element={<PostPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
