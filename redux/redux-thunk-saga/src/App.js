import {createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';


import {userReducer} from './redux/Reducers';

import { Provider } from 'react-redux';
import Users from './Users';

// saga config
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/saga';
const sagaMiddleWare = createSagaMiddleWare();


// const store = createStore(userReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = createStore(userReducer, compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleWare.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <h1> Thunk or Saga example</h1>
      <Users />
    </Provider>
    
  );
}

export default App;
