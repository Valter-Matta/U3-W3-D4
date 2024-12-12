import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import { useEffect, useState } from "react";
import IArticles from "../types/Articles";
import MySpinner from "./MySpinner";

const Articles = () => {
	const [articles, setArticles] = useState<IArticles[]>([]);
	const [spinner, setSpinner] = useState(true);

	const getArticles = async () => {
		try {
			const resp = await fetch(
				"https://api.spaceflightnewsapi.net/v4/articles",
			);
			if (resp.ok) {
				const arrOfArticles = await resp.json();
				// console.log(arrOfArticles.results);
				setArticles(arrOfArticles.results);
				setSpinner(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticles();
	}, []);
	return (
		<>
			{spinner ? (
				<MySpinner></MySpinner>
			) : (
				articles.map(a => (
					<SingleArticle key={a.id} article={a}></SingleArticle>
				))
			)}
		</>
	);
};

export default Articles;
