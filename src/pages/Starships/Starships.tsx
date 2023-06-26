import { useState, useEffect } from "react";
import { Starship } from "../../components";
import { starshipCall } from "../../api";
import { shipType } from "../../types/types";
import InfiniteScroll from "react-infinite-scroll-component";

const Starships = () => {
  const [ships, setShips] = useState<shipType[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getShips = async () => {
      const getShipsData = await starshipCall(pages);

      //https://www.youtube.com/watch?v=gJ5MnBVl1ZM
      // Infinite Scroll With API Call In React JS using react-infinite-scroll-component -NPM
      setShips(getShipsData.results);
      setHasMore(getShipsData.results.length > 0);
    };
    getShips();
  }, []);

  const getMoreShips = async () => {
    const newPage = pages + 1;
    const additionalShips = await starshipCall(newPage);
    const results = additionalShips.results;

    if (results.length === 0) {
      setHasMore(false);
      setIsLoading(false);
    } else {
      setPages(newPage);
      setIsLoading(true);
      setShips((prevShips) => [...prevShips, ...results]);
      setHasMore(additionalShips.next !== null);
    }
  };

  return (
    <InfiniteScroll
      dataLength={ships.length}
      next={getMoreShips}
      hasMore={hasMore}
      loader={isLoading && <h4>Loading more ships...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
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
