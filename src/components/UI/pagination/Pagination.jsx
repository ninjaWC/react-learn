import React from "react";
import {getPagesArray} from "../../../utils/pages";
import cl from "./Pagination.module.css"

const Pagination = ({totalPage, page, changePage})=>{
  let pagesArray = getPagesArray(totalPage);
  return(
    <div className={cl.pages}>
          {pagesArray.map( p =>
            <span 
              onClick={()=>changePage(p)}
              key={p}
              className={page === p  ?`${cl.pages__item} ${cl.page__current}`  : `${cl.pages__item}`}
            > {p} 
            </span>
          )}
    </div>
  );
};
export default Pagination;