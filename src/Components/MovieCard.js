
import React from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

import Rate from './Rate';

const MovieCard = ({ movie: { Title, Poster, Description, rate } }) => {
  return (
    <div className='container2'>
      
      <Card  style={{ height: `550px` , width:'300px' }}>
        <CardTitle>
          <div className='row justify-content-center mt-2'>
            <h6>{Title}</h6>
          </div>
        </CardTitle>
        <CardImg
          top
          width='100%'
          style={{ height: `300px` }}
          src={Poster}
          alt='Card image cap'
        />
        <CardBody>
          <div className='row'>
            <CardText>{Description}</CardText>
          </div>
          <div className='row'>
            <Rate rating={rate} />
          </div>
        </CardBody>
      </Card>

    </div>
  );
};

export default MovieCard
