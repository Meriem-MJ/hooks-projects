import React, {useState} from 'react';
import { Card, CardImg } from 'reactstrap';
import MovieModal  from './MovieModal';
import img from '../add.png';

const AddAMovie = ({handleAdd}) => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    return (
    <div className="add">
      <Card onClick={() => setShow(true)}>
        <CardImg
          style={{ height: `100`}}
          src={img}
          alt='movie poster'
        />
      </Card>
      {show && (
        <MovieModal isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
        </div>
    )
}

export default AddAMovie
