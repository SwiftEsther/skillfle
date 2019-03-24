import React, {Fragment} from 'react';
import Institution from './Institution/Institution';
import unilag_logo from '../../assets/Unilag_logo.png';
import ui_logo from '../../assets/UI_logo.png';
import fb_logo from '../../assets/fb_logo.png';
import ms_logo from '../../assets/microsoft_logo.png';
import ms from '../../assets/ms.jpeg';
import './Institutions.css';

const Institutions = () => (
    <Fragment>
        <div className="institutions">
            <ul>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
                <li>
                    <Institution 
                        logo={ms}/>
                </li>
            </ul>
        
            <div className="text">
                <div className="content">
                    <h1>New Skillfle Global Skills index</h1>
                    <p>See new skills companies and recruiters require of you to get hired ahead of other participants &nbsp;</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    </Fragment>
)

export default Institutions;