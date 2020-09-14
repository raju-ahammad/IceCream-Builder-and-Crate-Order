import React, { Component } from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./App.css";
import Layout from './Layout';

export class App extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Body />
                <Footer />
            </Layout>
        );
    }
}

export default App;
