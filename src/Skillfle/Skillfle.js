import React, {Fragment} from 'react';
import Header from '../Components/Header/Header';
import Institutions from '../Components/Institutions/Institutions';
import Footer from '../Components/Footer/Footer';
import Steps from '../Components/Steps/Steps';

const SkillfleApp = () => (
    <Fragment>
        <Header />
        <Institutions />
        <Steps />
        <Footer />
    </Fragment>
)

export default SkillfleApp;