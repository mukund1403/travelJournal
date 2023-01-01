import React from "react"

export default function Entries(props){
    return(
        <div className="entries">
            <img className="entries--image" src={props.item.imageUrl}/>
            <div className="entries--details">
            <span>
                    <img className="entries--tag"  src="https://png.pngtree.com/element_our/sm/20180515/sm_5afb0cf7bd445.jpg"/>
                    <span className="entries--location"> {props.item.location.toUpperCase()} </span>
                    <a className="entries--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h2 className="entries--title">{props.item.title}</h2>
                <p className="entries--date">{props.item.startDate} - {props.item.endDate}</p> 
                <p className="entries--description">{props.item.description}</p>
            </div>
        </div>
    )
    
}