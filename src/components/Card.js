import React from "react";
import CardBtn from "./CardBtn";
import "./style.css";

function Card(props) {
    return (
        <div
            className="card"
            style={{
                backgroundImage: `url(${props.image})` ,
                backgroundSize: "cover",
                backgroundClip: "content-box",
                height: 400,
                width: 400,
                position: "relative",
                border: 6,
                display: "block"
            }}
        >
            <CardBtn
                data-value="pass"
                onClick={props.handleBtnClick}
            />

            <CardBtn
                data-value="pick"
                onClick={props.handleBtnClick} />
        </div>
    )
}

export default Card;