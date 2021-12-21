import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const Pricing = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic>FOTOS</Hero>
        </Fragment>
    );
};

export default Pricing;
