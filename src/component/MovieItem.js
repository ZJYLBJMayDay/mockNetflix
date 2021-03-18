import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../redux/actionCreators";

const MovieItem = ({ data, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="movieItem">
      <img src={data.img} alt="movie" />
      <div className="title">{data.title}</div>
      <div className="button">
        {type === "My List" ? (
          <button onClick={() => dispatch(removeItem(data))}>Remove</button>
        ) : (
          <button onClick={() => dispatch(addItem(data))}>Add</button>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
