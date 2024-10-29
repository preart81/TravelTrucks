export const selectLoading = state => state.trucks.isLoading;

export const selectError = state => state.trucks.error;

export const selectFilter = state => state.trucks.filter;

export const selectAllTrucks = state => state.trucks.items;

export const selectCurrentTruck = state => state.trucks.currentTrack;

export const selectAllLocations = state => state.trucks.allLocations;

export const selectTotalItems = state => state.trucks.totalItems;

export const selectCurrentPage = state => state.trucks.currentPage;

export const selectItemsPerPage = state => state.trucks.itemsPerPage;
