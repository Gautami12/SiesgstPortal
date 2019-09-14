import React from 'react';
import ReactDOM from 'react-dom';
import {images} from './images';
import {Gallery, GalleryImage} from 'react-gesture-gallery';
const INITIAL_INDEX = 0;

function LandingPage(){
    const [index, setIndex] = React.useState(INITIAL_INDEX);
    React.useEffect(() =>{
        const interval = setInterval(() =>{
            if(index === images.length -1){
                setIndex(INITIAL_INDEX);
            }
            else{
            setIndex(index+1);
            }
        }, 3500)
        return () =>{
            clearInterval(interval)
        }

    }, [index])
    return (
<Gallery
index={index}
onRequestChange = {i =>{
    setIndex(i);
}}
>
{images.map(image => (
    <GalleryImage  src = {image} />))}

</Gallery>
    )
}
export default LandingPage;