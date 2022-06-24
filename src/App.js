import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Registration from "./pages/registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/register" element={<Registration />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
