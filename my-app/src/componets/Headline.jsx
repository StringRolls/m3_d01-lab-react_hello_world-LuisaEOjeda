import React from 'react';

import "./Headline.css";
import "../App.css"

export default function Headline() {
    return (
        <section className="headline">
            <h1>Say hello to 
            ReactJS</h1>
            <p>You will learn how to use 
                the most popular frontend library, 
                and become a super Ninja developer.
            </p>
            <div>
                <button type="button">Awesome!</button>
            </div>
        </section>
    )
}