import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const RatingEdit = (props) => {

    const [editBlog, setEditBlog] = useState(props.updateMyRating.blog);
    const [editDate, setEditDate] = useState(props.updateMyRating.date);
    const [editEntry, setEditEntry] = useState(props.updateMyRating.entry);

    const ratingUpdate = (e, rating) => {
        e.preventDefault();
        fetch(`http://localhost:3200/rating/update/${props.updateMyRating.id}`, {
            method: 'PUT',
            body: JSON.stringify({rating: {blog: editBlog, date: editDate, entry: editEntry}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => {
            props.fetchAll();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
        <ModalHeader className="modalHeader">Edit Your Rating</ModalHeader>
        <ModalBody>
            <Form onSubmit={ratingUpdate}>
                <FormGroup>
                    <Label htmlFor="blog" className="modalBlog">Edit Blog:</Label>
                    <Input name="blog" value={editBlog} onChange={(e) => setEditBlog(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date" className="modalBlog">Edit Date:</Label>
                    <Input name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="entry" className="modalBlog">Edit Rating:</Label>
                    <Input type="textarea" name="entry" value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
                </FormGroup>
        <Button type="submit" className="updateButton" color="warning">Update Rating</Button>
    </Form>
        </ModalBody>
    </Modal>
    )
};

export default RatingEdit;