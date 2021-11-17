import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img alt="google" src={google}/>
            </div>
            <div>
                <img alt="slack" src={slack}/>
            </div>
            <div>
                <img alt="atlassian" src={atlassian}/>
            </div>
            <div>
                <img alt="dropbox" src={dropbox}/>
            </div>
            <div>
                <img alt="shopify" src={shopify}/>
            </div>
        </div>
    )
}

export default Brand
