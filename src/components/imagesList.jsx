import React from "react";
import './imagesList.css'
import ImageCard from './image-card'
const ImagesList = (props) =>{
    console.log(props.sendResultResponse)
        return(
            <div>
                <p>result : 
                    <span>{props.sendResultResponse.total ? props.sendResultResponse.total : 0 }</span>  
                </p>
                {(props.sendResultResponse.total && props.sendResultResponse.results) && (
                        <div className='image_list'>
                        {props.sendResultResponse.results.map((para)=>{
                            return(
                            <ImageCard para={para} key={para.id}/>
                            )})}

                        </div>)}
            </div>
        )
                        
}
export default ImagesList


