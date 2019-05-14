import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//import * as actions from './actions';

const store = createStore(reducers);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));

// // 이렇게 하면 더이상 console에 찍히지 않음
// unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);