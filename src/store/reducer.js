export const initState = {
    name: '',
    pwd: '',
}

export function loginReducer(state, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                name: 'lovecrosszhu',
                pwd: '123456'
            }
        default:
            return state;
    }
}