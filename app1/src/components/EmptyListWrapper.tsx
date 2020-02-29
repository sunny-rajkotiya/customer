import React, { StatelessComponent } from "react";

export const EmptyListWrapper:StatelessComponent<{list:any[],message:string}> = ({list,message,children}) =>  { 
  
  if(list.length>0){
    return (<div>{children}</div>)
  }

  return (
      <p>
        {message}
      </p>
  )
}
