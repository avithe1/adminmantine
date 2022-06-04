import classes from './CSidebar.module.css';
import { useMantineTheme } from '@mantine/core';
import { Activity, Home, Clipboard, AddressBook, Adjustments, Trophy } from 'tabler-icons-react';

export default function CSidebar() {
    const theme = useMantineTheme();
    return (
        <div className={classes.sidebar}>
            <section className={classes.menu}>
                <button className={classes.menu__button}>
                    <Home size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]} />
                </button>
                <button className={theme.colorScheme === 'dark' ? classes.menu__buttonhighlightdark : classes.menu__buttonhighlight }>
                    <Clipboard size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]}/>
                </button>
                <button className={classes.menu__button}>
                    <AddressBook size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]} />
                </button>
                <button className={classes.menu__button}>
                    <Trophy size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]} />
                </button>
                <button className={classes.menu__button}>
                    <Adjustments size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]} />
                </button>
                <button className={classes.menu__button}>
                    <Activity size={22} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8]}/>
                </button>
            </section>
        </div>
    )
}