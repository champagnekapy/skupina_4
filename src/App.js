import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
// a tukaj manjka se import Card from "./components/Card"_I am so lost;
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="content">
					<AnimatedRoutes />
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
