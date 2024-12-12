import { Card, Button, Col } from "react-bootstrap";
import IArticles from "../types/Articles";
import { Link } from "react-router-dom";

interface SingleArticle {
	article: IArticles;
}

const SingleArticle = (props: SingleArticle) => {
	return (
		<Col className="col-12 col-md-6 col-lg-4">
			<Card className="" style={{ height: "700px" }}>
				<Card.Img
					className="h-50"
					variant="top"
					src={props.article.image_url}
				/>
				<Card.Body className=" bg-body-secondary p-4 h-50 d-flex flex-column align-items-center justify-content-between">
					<Card.Title className="text-truncate-custom">
						{props.article.title}
					</Card.Title>
					<div className="flex-grow-1 text-truncate-custom">
						{props.article.summary}
					</div>
					<Link to={`${props.article.id}`}>
						<Button className="text-center mt-2" variant="primary">
							🚀 Go to Details
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default SingleArticle;
