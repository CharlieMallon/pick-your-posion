import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<NavBar/>
				<Routes>
					<Route path="/" element={<SearchPage/>}/>
				</Routes> 
			</div>
		</HashRouter>
	);
}

export default App;
