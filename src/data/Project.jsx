import React from "react";

const Project = ({ title, imgUrl, linkUrl }) => {
    return (
        <div>
            <a href={linkUrl}>
                <img src={imgUrl} />
            </a>
            <h3>{title}</h3>
        </div>
    );
};

export default Project;