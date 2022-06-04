import classes from "./CDashboard.module.css";
import { ChartPie, BuildingCastle, BuildingArch, BuildingBank } from 'tabler-icons-react';
import { Text } from '@mantine/core';

import { List, ThemeIcon } from '@mantine/core';
import { CircleCheck, CircleDashed } from 'tabler-icons-react';

export default function CDashboard() {

    return (
        <section className={classes.main}>

            <div className={classes.maincontainer}>
                <div className={classes.main_top}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className={classes.dashtext}>Dashboard</div>
                        <div style={{ fontSize: "14px", color: "darkgray", fontWeight: "bold" }}>Payment updates</div>
                    </div>

                    <div>
                        <input className={classes.searchbox} type="text" placeholder='Search' />
                    </div>
                </div>

                <div className={classes.main_cards}>
                    <div className={classes.cardcontainer}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <ChartPie size={24} strokeWidth={2.5} />
                            <div style={{ marginRight: "18px", color: "darkgray", fontWeight: "bolder" }}>:</div>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Text size="xs" color="darkgray" weight={700}>Transfer via</Text>
                            <Text size="xs" color="darkgray" weight={700}>Card number</Text>
                        </div>


                        <p className={classes.carddollar}>1500$</p>
                    </div>

                    <div className={classes.cardcontainer}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <BuildingBank size={24} strokeWidth={2.5} />
                            <div style={{ marginRight: "18px", color: "darkgray", fontWeight: "bolder" }}>:</div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Text size="xs" color="darkgray" weight={700}>Transfer</Text>
                            <Text size="xs" color="darkgray" weight={700}>Same bank</Text>
                        </div>
                        <p className={classes.carddollar}>900$</p>
                    </div>

                    <div className={classes.cardcontainer}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <BuildingCastle size={24} strokeWidth={2.5} />
                            <div style={{ marginRight: "18px", color: "darkgray", fontWeight: "bolder" }}>:</div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Text size="xs" color="darkgray" weight={700}>Transfer</Text>
                            <Text size="xs" color="darkgray" weight={700}>Other bank</Text>
                        </div>
                        <p className={classes.carddollar}>100$</p>
                    </div>

                    <div className={classes.cardcontainer}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <BuildingArch size={24} strokeWidth={2.5} />
                            <div style={{ marginRight: "18px", color: "darkgray", fontWeight: "bolder" }}>:</div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Text size="xs" color="darkgray" weight={700}>Transfer to</Text>
                            <Text size="xs" color="darkgray" weight={700}>Other banks</Text>
                        </div>
                        <p className={classes.carddollar}>1800$</p>
                    </div>
                </div>


                <div className={classes.main_graph}>
                    <div className={classes.graphheading}>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ fontSize: "14px", color: "darkgray", fontWeight: "bold" }}>
                                Balance
                            </div>
                            <div className={classes.graphheadingleft}>
                                $1500
                            </div>
                        </div>


                        <div className={classes.graphheadingright}>
                            2nd June 2022
                        </div>
                    </div>
                    <div className={classes.graph}>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                        <div className={classes.graphbar}></div>
                    </div>
                </div>


                <div className={classes.main_history}>
                    <div className={classes.historyheading}>
                        <div className={classes.graphheadingleft}>
                            History
                        </div>
                        <div style={{ fontSize: "14px", color: "darkgray", fontWeight: "bold" }}>
                            Transactions of last 6 months
                        </div>
                    </div>
                    <div className={classes.historylist}>
                        <List
                            spacing="lg"
                            size="lg"
                            center
                            icon={
                                <ThemeIcon color="teal" size={28} radius="xl">
                                    <CircleCheck size={18} />
                                </ThemeIcon>
                            }
                            styles={{
                                item: { width:'100%' },
                              }}
                        >
                            <List.Item>Car insurance - 23:00 - $500 - Completed</List.Item>
                            <List.Item>LIC Premium - 8:00 - $100 - Completed</List.Item>
                            <List.Item>Bike insurance - 13:00 - $70 - Completed</List.Item>
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <CircleDashed size={16} />
                                    </ThemeIcon>
                                }
                            >
                                Term insurance - 12:00 - $90 - Completed
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>

        </section>
    )
}