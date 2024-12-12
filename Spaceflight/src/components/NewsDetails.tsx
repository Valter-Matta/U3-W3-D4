import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import IArticles from "../types/Articles";
import MySpinner from "./MySpinner";

const NewsDetails = () => {
	const params = useParams();
	console.log(params);
	const [detail, setDetail] = useState<IArticles>([]);
	const [spinner, setSpinner] = useState(true);

	const getDetails = async () => {
		try {
			const detailsResp = await fetch(
				`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`,
			);
			if (detailsResp.ok) {
				const selectedArticle = await detailsResp.json();
				// console.log(selectedArticle);
				setDetail(selectedArticle);
				setSpinner(false);
			} else {
				throw new Error("errore nella fetch");
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getDetails();
	}, []);

	return spinner ? (
		<MySpinner></MySpinner>
	) : (
		<Col className="mt-4 mx-auto w-50" xs={12} md={8}>
			<Card className="h-100">
				<Card.Img className="h-50" variant="top" src={detail.image_url} />
				<Card.Body className="bg-dark-subtle text-black d-flex flex-column justify-content-around align-items-center">
					<Card.Title>{detail.title}</Card.Title>
					<Card.Text>{detail.summary}</Card.Text>
					<Link to={"/"}>
						<Button variant="primary">🚀 Go to Home</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default NewsDetails;
