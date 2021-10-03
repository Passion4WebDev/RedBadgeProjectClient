import React, { useState, useEffect } from "react";
import RatingCreate from "./RatingCreate";
import { Table } from "reactstrap";

const RatingIndex = (props) => {
  console.log(props.token);
    const [ratings, setRatings] = useState([]);

  const fetchRatings = () => {
    console.log("fetching?");
    console.log(props.token)
    fetch("http://localhost:3200/rating/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token
      }),
    })
      .then((res) => res.json())

      .then((logRatings) => {
        setRatings(logRatings);
        console.log(logRatings);
        console.log(ratings);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRatings();
    console.log(ratings);
  }, []);

  return (
    <Table striped bordered className="table">
      <thead>
        <tr>
          <th>Blog</th>
          <th>Date</th>
          <th>Ratings</th>
        </tr>
      </thead>
      <tbody>
            {ratings.map((ratings) => (
              <>
              <tr>
                <td>{ratings.blog}</td>
                <td>{ratings.date}</td>
                <td>{ratings.entry}</td>
                </tr>
            </>
            ))}
      </tbody>
    </Table>
  );
};

export default RatingIndex;
