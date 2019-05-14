import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    // 1. u의 값만 0으로 바꾸고싶다.
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // 변경하고자 하는 값 이외의 값이 있을 경우
            // number: state.number + 1을 하게 되면 다른값이
            // 날아가므로 ...연산자를 통해 복사한 후에
            // 값을 바꿔준다.
            return {
                ...state,
                number: state.number + 1,
                // 기존 값들은 남아 있고 u만 덮어씌워짐
                dumbObject: { ...state.dumbObject, u: 0 }
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}