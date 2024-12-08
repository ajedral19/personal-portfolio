import { fetch_parsed_data } from "../../../../lib/data";

const fetchRows = async () => {
	const res = await fetch_parsed_data("json");
	return await res.data.projects.rows;
};

export async function getStaticProps() {
	return { props: { projects: await fetchRows() } };
}

export async function getStaticPaths() {
	const rows = await fetchRows();

	const paths = rows.map((post) => ({
		params: {
			id: post.id,
			category: post.category,
			title: post.title,
		},
	}));

	return { paths, fallback: false };
}

const Project = ({ projects }) => {
	return <h1>Testing</h1>;
};

export default Project;
