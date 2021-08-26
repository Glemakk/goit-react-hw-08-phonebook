const getIsLoggedIn = (state) => state.auth.isLoggedIn
const getUserName = (state) => state.auth.user.name
const getFetchedCurrentUser = (state) => state.auth.isFetchedCurrentUser

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getFetchedCurrentUser,
}

export default authSelectors
