import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import logo from "../public/Netflix_2015_logo";
import BottomList from "./component/BottomList";
import logo from "./Netflix_2015_logo.svg";
import List from "./component/List";
import { fetchData } from "./redux/actionCreators";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <div>
        <img className="logo" src={logo} alt="netflix logo" />
      </div>
      <List type="My List" />
      <List type="Recommendations List" />
      <BottomList />
    </div>
  );
};

export default App;
