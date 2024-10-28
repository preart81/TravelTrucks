export const selectLoading = state => state.trucks.isLoading;

export const selectError = state => state.trucks.error;

export const selectFilter = state => state.trucks.filter;

export const selectAllTrucks = state => state.trucks.items;

export const selectCurrentTruck = state => state.trucks.currentTrack;

export const selectAllLocations = state => state.trucks.allLocations;
