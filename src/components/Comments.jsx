import React from "react";

const Comments = (comments)=>{
  
  return(
    <div>
      {comments.map((comment)=>
            <div
              key={comment.id}
            >
              <span>
                #{comment.id}. {comment.body}
              </span>
              <div>
                name: {comment.name}
              </div>
              <div>
                email: {comment.email}
              </div>
            </div>
          )}
    </div>
  )
}

export default Comments;