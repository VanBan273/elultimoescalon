import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const LearnMore = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic>Informacion</Hero>
        </Fragment>
    );
};

export default LearnMore;
