import { Header } from "components/Header";
import { AboutJS } from "components/AboutJS";
import { Baner } from "components/Baner";
import { Review } from "components/Review";
import { AboutBook } from "components/AboutBook";
import { Posts } from "components/Posts";

import "./style.scss";
import "./reset.scss";

function App() {
	return (
		<>
			<Header />
			<AboutJS />
			<Baner />
			<Review />
			<AboutBook />
			<Posts />
		</>
	);
}

export default App;
