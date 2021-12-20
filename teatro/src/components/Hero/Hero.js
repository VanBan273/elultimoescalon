import React, { Fragment } from "react";
import Button from "./../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";

import classes from "./Hero.module.scss";

const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>EL ULTIMO ESCALON</h1>
            <span className={classes.hero__content__tagline}>
                obra de teatro de no se quien
            </span>
            <p className={classes.hero__content__description}>
                La obra va de no se que y no se cuanto, esta guapisima y sale Elena
            </p>
            <div className={classes.hero__content__cta}>
                <Button to="/booknow">Comprar Entradas</Button>
                <Button to="/learnmore" outline>
                    Learn More
                </Button>
            </div>
        </Fragment>
    );
};

const Hero = ({ isDynmic, children }) => {
    return (
        <div className={classes.container}>
            <video
                autoPlay={false}
                muted
                loop
                className={classes.video}
                id={"video"}
                src={coverVID}
            ></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    {!isDynmic && <HomePageContent />}
                    {isDynmic && <h1 className={classes.hero__content__title}>{children}</h1>}
                </div>
            </div>
        </div>
    );
};

export default Hero;
