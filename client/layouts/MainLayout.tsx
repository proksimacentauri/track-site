import React from 'react';
import NavBar from "../components/NavBar";
import { Container } from '../node_modules/@mui/material/index';
import Player from "../components/Player";
import Head from "next/head";

interface  MainLayoutProps {
    title?: string,
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'music site'}</title>
            </Head>
          <NavBar />
            <Container style={{ marginTop: '90px'}}>
                {children}
            </Container>
            <Player />
        </>
    )
};

export default MainLayout;