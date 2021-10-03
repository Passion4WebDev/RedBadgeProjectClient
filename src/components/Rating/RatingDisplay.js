import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, CardTitle, CardText } from "reactstrap";
import RatingCreate from "./RatingCreate";
import RatingEdit from "./RatingEdit";

const RatingDisplay = (props) => {
  const [ratings, setRatings] = useState([]);
  const [ratingUpdateActive, setRatingUpdateActive] = useState(false);
  const [updateMyRating, setUpdateMyRating] = useState({});

  const fetchAll = () => {
    fetch("http://localhost:3200/rating/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${props.token}`
        
      }),
    })
      .then((res) => res.json())
      .then((logRating) => {
        setRatings(logRating);
        console.log(logRating);
      });
  }; 

  
  useEffect(() => {
    fetchAll();
  }, []);

  const editUpdateRating = (rating) => {
    setUpdateMyRating(rating);
  };

  const updateOn = () => {
    setRatingUpdateActive(true);
  };

  const updateOff = () => {
    setRatingUpdateActive(false);
  };

  const deleteRating = (rating) => {
    fetch(`http://localhost:3200/rating/delete/${rating.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${props.token}`
        })
    })
      .then(() => fetchAll())
  }

  const ratingMapper = () => {
    return ratings.map((rating, index) => {
      return (
        <div key={index}>
        <Row style={{"display":"flex", "justifyContent": "center"}}>

          <Col sm="6">
            <Card body className="ratingCard">
              <CardTitle tag="h3">{rating.title}</CardTitle>
              <CardText>{rating.date}</CardText>
              <CardText>{rating.entry}</CardText>
              <Button onClick={() => {
              editUpdateRating(rating);
              updateOn();
            }}
            
            ratings={ratings}
            editUpdateRating={editUpdateRating}
            updateOn={updateOn}
            fetchAll={fetchAll}
            token={props.token}
            className="ratingButton"
            color="warning">Edit</Button>
            <Button onClick={() => {
              deleteRating(rating);
            }}
            className="ratingButton"
            color="warning">Delete</Button>
            </Card>
          </Col>
        </Row>
        </div>
      );
    });
  };

  return (
    <div>
      <RatingCreate fetchAll={fetchAll} token={props.token} />

      {ratings.length > 0 ? ratingMapper() : <p className="noRatings">Thank you for visiting, don't forget to post a rating!</p>}

      {ratingUpdateActive ? (
        <RatingEdit
          updateMyRating={updateMyRating}
          updateOff={updateOff}
          token={props.token}
          fetchAll={fetchAll}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default RatingDisplay;