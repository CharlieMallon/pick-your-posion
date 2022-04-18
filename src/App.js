import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();
function App() {
	return (
		<HashRouter>
			<QueryClientProvider client={queryClient} >
				<div className="App">
					<NavBar/>
					<Routes>
						<Route path="/" element={<SearchPage/>}/>
					</Routes> 
				</div>
			</QueryClientProvider>
		</HashRouter>
	);
}

export default App;
