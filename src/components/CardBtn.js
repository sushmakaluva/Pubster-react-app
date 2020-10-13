import React from "react";

function CardBtn(props) {
    return (
        <button
            onClick={props.onClick}
            data-value={props["data-value"]}
            className={`card-btn ${props["data-value"]} `}
            style={{

                borderRadius: 50,
                height: 50,
                width: 50,
                position: "absolute",
                border: "none",
                float: "center",
                bottom: 10,
                color: "#FFF",
                cursor: "pointer",
            }}
        />
    );
}

export default CardBtn;