import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./App.css"

export default function App() {
            
            // console.log(data)
    const resultArray=data.map((item) => {
        return <Card 
                    key={item.id}
                    item={item}
                />
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                {resultArray}
            </div>
        </div>
    )
}
                    //we also can write like this
                    // img={item.coverImg}
                    // rating={item.stats.rating}
                    // reviewCount={item.stats.reviewCount}
                    // country={item.location}
                    // title={item.title}
                    // price={item.price}
                    // openSpots={item.openSpots}