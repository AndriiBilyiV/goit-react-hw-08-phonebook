export const getFilter = state => state.filter.value;
export const getContacts = state => state.contacts.items;
export const getLoadingStatus = state => state.contacts.isLoading;
export const getErrorStatus = state => state.contacts.error;