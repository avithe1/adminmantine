import React, { useState } from 'react';

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import CHeader from '../demo/Header';
import CSidebar from '../demo/CSidebar';
import CDashboard from '../demo/CDashboard';
import CPanel from '../demo/CPanel';

export default function Admin() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          //background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#f4f5fe',
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 80, lg: 80 }} styles={{
          root: {
            //background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#ecedf6;',
          },
        }}>
          <CSidebar />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} styles={{
            root: {
              //background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#ecedf6;',
            },
          }}>
            <CPanel />
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          &#169; Avinash 2022
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%", alignItems: "center" }}>
              <CHeader />
            </div>

          </div>
        </Header>
      }
    >
      <CDashboard />
    </AppShell>
  );
}