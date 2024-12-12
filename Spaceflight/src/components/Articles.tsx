import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import { useEffect, useState } from "react";
import IArticles from "../types/Articles";

const Articles = () => {
	const [articles, setArticles] = useState<IArticles[]>([]);

	const getArticles = async () => {
		try {
			const resp = await fetch(
				"https://api.spaceflightnewsapi.net/v4/articles",
			);
			if (resp.ok) {
				const arrOfArticles = await resp.json();
				// console.log(arrOfArticles.results);
				setArticles(arrOfArticles.results);
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
			{articles.map(a => (
				<SingleArticle key={a.id} article={a}></SingleArticle>
			))}
		</>
	);
};

export default Articles;
