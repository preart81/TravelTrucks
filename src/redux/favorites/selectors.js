export const selectIsFavorite = (state, { id = null }) => {
  if (!id) {
    return false;
  }
  return state.favorites.ids.some(favId => favId === id);
};

export const selectFavorites = state => state.favorites.ids;
