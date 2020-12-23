import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
            <div className='center ma w-25'>
                <div className='absolute mt3'>
                    <img id='inputImage' src={ imageUrl } alt='Image_Face_Recognition' width='500px' height='auto'/>
                    <div 
                        className='bounding-box' 
                        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                    </div>
                </div> 
            </div>
    ); 
}

export default FaceRecognition;