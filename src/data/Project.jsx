import React from "react";

const Project = ({ title, imgUrl, linkUrl }) => {
    return (
        <div id='Project'>
            <a href={linkUrl}>
                <img src={imgUrl} />
            <h3>{title}</h3>
            </a>
        </div>
    );
};

export default Project;