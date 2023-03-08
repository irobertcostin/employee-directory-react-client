
import React, {useState} from "react";
import styled from "styled-components";


function Button ({value}) {

    return(
        <>
            <button className="btn">{value}</button>
        </>
    )
}


export default Button;