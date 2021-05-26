import React from "react";
import {useLocation, useParams} from "react-router-dom"
import FarmCard from "../components/Farm/FarmCard";

export default function Farm(props) {
  const location = useLocation()
  const params = useParams()
  console.table([params, location]);
  return (
    <>
      <h1>{props.id}</h1>
      <h2>TVL : $123,456,234.234</h2>
      {[1, 3, 5, 5].map((farm, index) => {
        return <FarmCard farm={farm} key={index} />;
      })}
    </>
  );
}
