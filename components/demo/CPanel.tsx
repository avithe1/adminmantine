import Image from "next/image"
import { Calendar, Notification, UserCheck } from 'tabler-icons-react';
import classes from "./CPanel.module.css";

export default function CPanel() {
    return (
        <main className={classes.panel}>

            <div className={classes.paneliconscontainer}>
                <div className={classes.paneliconbox}><Calendar size={25} className={classes.panelicon}/></div>
                <div className={classes.paneliconbox}><Notification size={25} className={classes.panelicon}/></div>
                <div className={classes.paneliconbox}><UserCheck size={25} className={classes.panelicon}/></div>
            </div>

            <div className={classes.creditcardcontainer}>
                <Image src="https://www.mastercard.com.hk/content/dam/public/mastercardcom/hk/en/consumer/find-a-card/cards/world-mastercard_1280x720.png"
                    height="500px" width="800px"></Image>
            </div>

            <div className={classes.recentcontainer}>
                <div className={classes.historyheading}> 
                    <div className={classes.panelheading}>
                        Recent activity
                    </div>
                </div>
                <div className={classes.historylist}>
                    <ul className={classes["list-group"]}>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classes.upcomingcontainer}>
                <div className={classes.historyheading}>
                    <div className={classes.panelheading}>
                        Upcoming payments
                    </div>
                </div>
                <div className={classes.historylist}>
                    <ul className={classes["list-group"]}>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                        <li>ABC
                            <span className={classes.badge}>def</span>
                        </li>
                    </ul>
                </div>
            </div>

        </main>
    )
}