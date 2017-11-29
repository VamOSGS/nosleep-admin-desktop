import React, { Fragment } from 'react';
import Field from './Field';
import config from '../../../config';
import SiteListContainer from '../containers/SiteListContainer';
import FieldContainer from '../containers/FieldContainer';

const App = props => (
    <Fragment>
        {props.pass == config.password ?
            <Fragment>
                <h3 className={'head'}>Nosleep heroku</h3>
                <FieldContainer />
                <SiteListContainer />
            </Fragment> :
            `You don't have access to this App`}
    </Fragment>
)

export default App;