import React from 'react';
import {Overlay} from "./Overlay";

export function Popup(props) {
    return (
        <div>
            <Overlay isShown={true} id="entire-overlay">
                <div>
                    </div>ЗАНЯТО
            </Overlay>
        </div>
    )
}