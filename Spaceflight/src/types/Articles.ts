interface Launch {
	launch_id: string;
	provider: string;
}

interface IArticles {
	events: [];
	featured: boolean;
	id: number;
	image_url: string;
	launches: Launch[];
	news_site: string;
	published_at: string;
	summary: string;
	title: string;
	updated_at: string;
	url: string;
}

export default IArticles;
