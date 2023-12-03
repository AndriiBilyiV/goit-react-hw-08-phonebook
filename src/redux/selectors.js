export const getFilter = state => state.filter.value;
export const getContacts = state => state.contacts.items;
export const getLoadingStatus = state => state.contacts.isLoading;
export const getErrorStatus = state => state.contacts.error;
export const getIsLoggedIn = state => state.user.isLoggedIn;
export const getEmail = state => state.user.user.email;
export const getIsRefreshing = state => state.user.isRefreshing;
