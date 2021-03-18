import React from "react";
import { useSelector } from "react-redux";
import { selectorMyList, selectorRecommendationList } from "../redux/selector";
import MovieItem from "./MovieItem";

const List = ({ type }) => {
  const myList = useSelector(selectorMyList);
  const recommendationList = useSelector(selectorRecommendationList);
  const data = type === "My List" ? myList : recommendationList;
  return (
    <div className="list">
      <h3>{type}</h3>
      <div className="movieItems">
        {data.map((item) => {
          return <MovieItem data={item} key={item.id} type={type} />;
        })}
      </div>
    </div>
  );
};

export default List;
