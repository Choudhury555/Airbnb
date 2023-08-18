import React from "react"


export default function Card(props) {
    // console.log(props)
    // console.log(props.openSpots)
    let badgeText
    if(props.item.openSpots === 0){
        badgeText="SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText="Online"
    }
    else{
        badgeText=""   
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="card-image"/>
            <div className="card-stats">
                <img src={require("../images/star.png")} className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ₹{props.item.price}</span> / person</p>
        </div>
    )
}