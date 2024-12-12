import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles";
import NewsDetails from "./components/NewsDetails";
import { Col, Container, Row } from "react-bootstrap";

function App() {
	return (
		<BrowserRouter>
			<MyNavBar></MyNavBar>
			<Container>
				<Row className="g-4">
					<Routes>
						<Route path="/" element={<Articles></Articles>}></Route>
						<Route path="/:id" element={<NewsDetails></NewsDetails>}></Route>
					</Routes>
				</Row>
			</Container>
		</BrowserRouter>
	);
}

export default App;
