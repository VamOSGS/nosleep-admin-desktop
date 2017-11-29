import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import '../style/main.less';
import config from '../../config';
import { Provider } from 'react-redux';
import store from './store';

render(App);
if (module.hot) {
    module.hot.accept();
    const NewApp = require('./components/App').default;
    render(NewApp);
}

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component pass={config.password} />
            </Provider>
        </AppContainer>,
        document.getElementById('root'));
}

