import React from "react";
import Header from '../components/Header';

const layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            {children}
        </div>
    )
}

export default layout;