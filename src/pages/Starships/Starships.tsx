import { useState, useEffect } from "react";
import { Starship } from "../../components";
import { starshipCall } from "../../api";
import { shipType } from "../../types/types";
import InfiniteScroll from "react-infinite-scroll-component";

const Starships = () => {
	const [ships, setShips] = useState<shipType[]>([]);
	const [pages, setPages] = useState<number>(4);

	useEffect(() => {
		const getShips = async () => {
			const getShipData = await starshipCall(pages);
			//https://www.youtube.com/watch?v=gJ5MnBVl1ZM
			// Infinite Scroll With API Call In React JS using react-infinite-scroll-component -NPM
			setShips(getShipData);
		};
		getShips();
	}, []);
	return (
		<InfiniteScroll
			dataLength={ships.length} //This is important field to render the next data
			next={}
			hasMore={true}
			loader={<h4>Loading more ships...</h4>}
			// endMessage={
			// <p style={{ textAlign: 'center' }}>
			// 	<b>Yay! You have seen it all</b>
			// </p>
			// }
		>
			<div>
				<h1>starships</h1>
				{ships.map((ship, index) => (
					<Starship key={index} ship={ship} />
				))}
			</div>
		</InfiniteScroll>
	);
};

export default Starships;
