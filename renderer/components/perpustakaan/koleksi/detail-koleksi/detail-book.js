import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from "../../../../assets/css/app";
import Nav from "./navbar-detail-book";
import Router from "next/router";

export default class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        collapseOpen: false
        };
    }

    render() {
        return (
            <div className="root-detail">
                <header>
                    <Nav />
                </header>
                <main>
                    {this.props.children}
                </main>
                <style jsx>{appCss}</style>
            </div>
        );
    }
} 