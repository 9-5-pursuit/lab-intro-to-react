import React from "react"

import contactUserCard from "./ContactUserCard"


function contact (){
    console.log(contactUserCard)
    return(
      
        <div>
            <h2>Contact</h2>
            <img src={contactUserCard.imageLink} alt= "faceless photo" width ="200" height="200"/>
            <p>{contactUserCard.name}</p>
            <p>{contactUserCard.description}</p>
        </div>
    )
}
    export default contact

