import React from "react";
import PostData from "./Post";
function Posts(){
    return (
        <>
           
            <div className="postings">
                <p>{PostData.posting}</p>
                <p>{PostData.posting}</p>
                <p>{PostData.posting}</p>
              
            </div>
           
        </>

    );
}
export default Posts