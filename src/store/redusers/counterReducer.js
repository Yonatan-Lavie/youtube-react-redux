export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'PLUSE':
            return state + 1;
        case 'MINUS':
            return state - 1;
    
        default:
           return state;
    }
}