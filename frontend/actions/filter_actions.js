import { fetchEvents } from "../actions/event_actions";

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const changeCategory = category => {
  return ({
    type: UPDATE_CATEGORY,
    category
  })
};

export const changeBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const changeFilters = filters => ({
  type: UPDATE_FILTERS,
  filters
})

export const updateCategory = category => (dispatch, getState) => {
  dispatch(changeCategory(category));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateBounds = bounds => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateFilters = filters => (dispatch, getState) => {
  dispatch(changeFilters(filters));
  return fetchEvents(getState().ui.filters)(dispatch);
}