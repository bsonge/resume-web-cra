import { React } from "react";
import "./Footer.scss";

const Footer = (props) => {
    return(
        <div className="site-footer">
            <div className="sitemap-footer">

            </div>
            <div className="contact-footer">
                <em>Questions?  Want to hire me?  Contact me at <a href="mailto:bfsonge@gmail.com">bfsonge@gmail.com</a>.</em>
            </div>
        </div>
    );
}

export default Footer;