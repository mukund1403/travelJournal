import React from "react"
import Navbar from "./Navbar"
import data from "./data"
import Entries from "./Entries"

export default function App(){
    const entries = data.map((item) =>{
        return (
            <Entries
                key = {item.title} 
                item = {item}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <section className="list">
                {entries}
            </section>
        </div>
    )
    
}
