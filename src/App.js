import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import RecipePage from "./Pages/RecipePage/recipePage";
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
						<Route path="/recipe/:drinkId" element={<RecipePage/>}/>
					</Routes> 
				</div>
			</QueryClientProvider>
		</HashRouter>
	);
}

export default App;
