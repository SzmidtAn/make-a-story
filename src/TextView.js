import React from "react";

export class TextView extends React.Component {
    render() {
        return (
            <div className="textArea">
                <input placeholder="Write your sentence here... You must to use given words!" />
            </div>
        )
    }
}