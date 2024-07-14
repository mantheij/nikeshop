import React from "react";

function BottomPanel() {


    return(
        <div style={{zIndex:100}}>
            <p id={"bottomPanel"} style={{fontSize:'10px', zIndex:100}}>
                <a id={"imprint"} href="/imprint" style={{marginRight:'10px'}}>IMPRINT</a>
                <a id={"support"} href="/support" style={{marginRight:'10px'}}>CUSTOMER SUPPORT</a>
                <a id={"tos"} href="/tos">TERMS OF USE</a>
            </p>
        </div>
    )
}

export default BottomPanel;