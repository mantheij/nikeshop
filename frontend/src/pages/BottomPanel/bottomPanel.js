import React from "react";
import './BottomPanel.css';  // Importiere die CSS-Datei

function BottomPanel() {
    return (
        <div className="bottom-panel-container">
            <p className="bottom-panel-links">
                <a id="imprint" href="/imprint">IMPRINT</a>
                <a id="support" href="/support">CUSTOMER SUPPORT</a>
                <a id="tos" href="/tos">TERMS OF USE</a>
            </p>
        </div>
    );
}

export default BottomPanel;
