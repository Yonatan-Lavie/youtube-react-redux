export const siteNameReducer = (state = 'Youtube React Redux', action) => {
    switch (action.type) {
        case "CHANGE_SITE_NAME":
            return action.payload;
    
        default:
            return state;
    }

}