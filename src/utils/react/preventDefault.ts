import React from "react";

export const preventDefault = <T extends (e: any) => void>(fn: T) => 
    <E extends React.SyntheticEvent<any>>(e: E) => {
      e.preventDefault()
      fn(e)
    }
    