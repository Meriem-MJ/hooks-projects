import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  InputGroup,
  Label,
  Input,
} from 'reactstrap';

const MovieModal = ({ isOpen, toggle, handleAdd }) => {
  const [newMovie, setNewMovie] = useState({
    Title: ``,
    Description: ``,
    Poster: ``,
    rate: 0,
  });
  const onChangeHandler = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(newMovie);
  };
  return (
    <div>
      <Modal isOpen={isOpen} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <InputGroup row>
            <Label for='Title' sm={2}>
              Title:
            </Label>
            <Input
              type='text'
              name='Title'
              placeholder='movie title'
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='Poster' sm={2}>
              Poster:
            </Label>
            <Input
              type='url'
              name='Poster'
              placeholder='poster link '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='Description' sm={2}>
              Description:
            </Label>
            <Input
              type='textarea'
              name='Description'
              placeholder='movie description '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='rate' sm={2}>
              Rate:
            </Label>
            <Input
              type='text'
              name='rate'
              placeholder='rate the movie '
              onChange={onChangeHandler}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={(e) => {
              handleClick(e);
              toggle();
            }}
          >
            Add
          </Button>{' '}
          <Button color='danger' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};


export default MovieModal;