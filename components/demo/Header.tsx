import Image from "next/image";
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const CHeader = () => {
    return (
        <div className={classes.headercontainer}>
            <div className={classes.containerleft}>
                <div className={classes.headerimage} >
                    <Image src="https://assets.website-files.com/6049feb0a862ecb2aaeba05e/612c9b5885836264ee781a91_cameraah%20logo.png"
                        height="40px"
                        width="154px" />
                </div>
                <div className={classes.navlinks}>
                    <div className={classes.navtext}>Home</div>
                    <div className={classes.navtext}>I'm a Creator</div>
                    <div className={classes.navtext}>Product</div>
                    <div className={classes.navtext}>Our work</div>
                    <div className={classes.navtext}>About Cameraah</div>
                </div>

            </div>
            <div className={classes.containerright}>
                <button className={classes.signinbutton}>Log out</button>
                <ColorSchemeToggle />
            </div>
        </div>
    )
}

export default CHeader;