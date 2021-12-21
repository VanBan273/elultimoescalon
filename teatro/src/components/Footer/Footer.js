import React from "react";
import Button from "../../UI/Button/Button";
import { FaYoutube, FaInstagram, FaTwitter, FaSnapchatGhost, FaFacebook } from "react-icons/fa";

import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";

const footerColumns = [
    {
        id: 1,
        headline: "Quienes somos",
        links: ["Fotos", "Actores", "Algo", "Algo2"],
    },
    {
        id: 2,
        headline: "Contacto",
        links: ["Contactemail", "telefono", "direccion"],
    },
    {
        id: 3,
        headline: "Algo aqui",
        links: ["cosas", "cosas2", "cosas3", "cosas 4"],
    },
    {
        id: 4,
        headline: "Socials",
        links: ["Youtube", "Facebook", "Twitter", "Instagram"],
    },
];

const socials = [
    <FaYoutube />,
    <FaInstagram />,
    <FaTwitter />,
    <FaFacebook />,
];

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.footer__newsletter}>
                    <h4 className={classes.footer__newsletter__headline}>
                        Esperamos que disfruteis
                    </h4>
                    <span>noseque no se cuanto</span>
                    
                </div>
                <div className={classes.footer__content}>
                    {footerColumns.map(({ id, headline, links }) => (
                        <div className={classes.footer__content__col} key={id}>
                            <div className={classes.footer__content__col__headline}>{headline}</div>
                            <ul className={classes.footer__content__col__links}>
                                {links.map((link, index) => (
                                    <li key={index + 1}>
                                        <a href="/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={classes.footer__base}>
                    <Logo />
                    <span className={classes.footer__base__year}>
                        El Ultimo Escalon&nbsp;&copy;&nbsp;{new Date().getFullYear()}
                    </span>
                    <ul className={classes.footer__base__socials}>
                        {socials.map((icon, index) => (
                            <li key={index + 1}>
                                <a href="/">{icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
