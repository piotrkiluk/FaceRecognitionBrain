import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center mt3 mb3 w50'>
            <img src={ imageUrl } alt='Image_Face_Recognition' width='500px' height='auto'/>
        </div> 
    ); 
}

export default FaceRecognition;