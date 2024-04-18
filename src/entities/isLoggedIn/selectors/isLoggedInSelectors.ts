const getIsLoggedInSelector = (state:any) => state.isLoggedIn;
const getIsLoggedInAuthSelector = (state:any) => state.isLoggedIn.isLoggedIn;
const getIsLoggedInUser = (state:any) => state.isLoggedIn.user
export const isloggedInSelectors = {
    getIsLoggedInSelector,
    getIsLoggedInAuthSelector,
    getIsLoggedInUser
}