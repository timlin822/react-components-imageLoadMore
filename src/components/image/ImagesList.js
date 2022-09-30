import {useState,useEffect} from 'react';

import ImageCard from './ImageCard';

import IMAGES_DATA from 'data/ImagesData';

import './Image.css';

const ImagesList=()=>{
    const showImageNumber=8;
    const [visibleIndex,setVisibleIndex]=useState(8);
    const [visible,setVisible]=useState(false);

    useEffect(()=>{
        if(visibleIndex<IMAGES_DATA.length){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[visibleIndex]);

    const clickHandler=()=>{
        setVisibleIndex(visibleIndex+showImageNumber);
    };

    return (
        <>
            <div className="image-grid">
                {IMAGES_DATA.slice(0,visibleIndex).map(image=>(
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
            {visible && <button className="btn-load-more" onClick={clickHandler}>更多圖片</button>}
        </>
    );
}

export default ImagesList;