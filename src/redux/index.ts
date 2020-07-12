import { createStore, applyMiddleware, compose} from 'redux';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";
import logger from 'redux-logger';
import rootSaga from "./saga/sagas";

export const history = createBrowserHistory();

//saga中间件
const sagaMiddleware = createSagaMiddleware();

//增强器函数
const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = createStore(rootReducer(history), composeEnhancer(
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        logger,
    )
))

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(routinePromiseWatcherSaga);

export default store;