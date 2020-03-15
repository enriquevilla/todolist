import React from "react";

let CheckboxItem = (props) => {
    return (
        <div>
            <input type="checkbox"/>
            <span className="checklist-item" readOnly={true}>
                {props.item}
            </span>
        </div>
    )
}

export default CheckboxItem;