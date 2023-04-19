import React from "react";
import ContactUserCardData from "./ContactUserCard";
function UserProfile(){
    return (
       <div className="bio">
            
            <img src = "https://i.pinimg.com/originals/4d/9c/8d/4d9c8d5cd0be156a55331956ead00cef.jpg" alt="Headshot"/>
            <div>
                <p >{ContactUserCardData.contact_info}</p>
                <p>{ContactUserCardData.title}</p>

            </div>
            
                
    
       </div>
    );
}
export default UserProfile