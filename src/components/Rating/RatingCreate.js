import React, { useState } from "react";
import {Button, Input, Form, FormGroup, Label, Popover, PopoverBody,} from "reactstrap";

const RatingCreate = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);
    
    const handlePost = (e) => {
        e.preventDefault();
        fetch('http://localhost:3200/rating/create', {
            method: 'POST',
            body: JSON.stringify({rating:{blog: title, date: date, entry: entry}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${props.token}`
            })
        }).then((res) => res.json())
          .then((logRating) => {
            console.log(logRating)
            setTitle('')
            setDate('')
            setEntry('')
          
        })
      }
    return (
      
      <div className="ratingCreate">
        <div>&nbsp;</div>
        <h3 className="ratingCreateBlog">Create New Blog</h3>
        <Form onSubmit={handlePost}>
          <FormGroup>
            <Label htmlFor="Blog" className="ratingCreateLabel">
              Blog:
            </Label>
            <Input
              name="blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date" className="ratingCreateLabel">
              Date:
            </Label>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="entry" className="ratingCreateLabel">
              Rating:
            </Label>
            <Input
              type="textarea"
              name="entry"
              value={entry}
              placeholder="Write a rating..."
              style={{ height: "215px" }}
              onChange={(e) => setEntry(e.target.value)}
            />
          </FormGroup>
          <Button
            className="button hvr-sweep-to-right"
            onClick={handlePost}
            type="submit"
            color="warning"
            id="Popover"
            size="lg"
          >
            Post Rating
          </Button>
          <Popover className="popover" placement="right" isOpen={popoverOpen} trigger="focus" target="Popover" toggle={() => {setPopoverOpen(!popoverOpen)}}>
              <PopoverBody>Review Posted!</PopoverBody>
          </Popover>
        </Form>
      </div>
    );
};

export default RatingCreate;
