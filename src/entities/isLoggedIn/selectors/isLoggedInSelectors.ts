const getIsLoggedInSelector = (state:any) => state.isLoggedIn;
const getIsLoggedInAuthSelector = (state:any) => state.isLoggedIn.isLoggedIn;

export const isloggedInSelectors = {
    getIsLoggedInSelector,
    getIsLoggedInAuthSelector
}