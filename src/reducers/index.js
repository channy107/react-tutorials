// reducer 가 두개이상일때는 합쳐주는 파일이 필요함
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});


export default reducers;
