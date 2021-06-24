import React, {useState} from 'react';
import { Card, CardImg } from 'reactstrap';
import MovieModalgit  from './MovieModal';
import img from '../add.png';

function AddAMovie(handleAdd) {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    return (
    <div className='row justify-content-center mt-3'>
      <Card onClick={() => setShow(true)}>
        <CardImg
          top
          width='100%'
          style={{ height: `300px` }}
          src={img}
          alt='Card image cap'
        />
      </Card>
      {show && (
        <MovieModal isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
        </div>
    )
}

export default AddAMovie
