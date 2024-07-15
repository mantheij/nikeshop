import React from "react";

function BottomPanel() {


    return(
        <div style={{zIndex:100}}>
            <p id={"bottomPanel"} style={{fontSize:'10px', zIndex:100}}>
                <a id={"imprint"} href="/imprint" style={{color:'black', marginRight:'10px', textDecoration:"none"}}>IMPRINT</a>
                <a id={"support"} href="/support" style={{color:'black', marginRight:'10px', textDecoration:"none"}}>CUSTOMER SUPPORT</a>
                <a id={"tos"} href="/tos" style={{color:'black', textDecoration:"none"}}>TERMS OF USE</a>
            </p>
        </div>
    )
}

export default BottomPanel;