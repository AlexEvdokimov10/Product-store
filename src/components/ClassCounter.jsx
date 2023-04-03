import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div>
                <h1>
                    Chosen product {this.props.products}
                </h1>
            </div>
        )
    }
}
export default ClassCounter;