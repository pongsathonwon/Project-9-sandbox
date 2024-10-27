import { useReducer } from "react";

const PAGINATION_ACTIONS = {
  query: "QUERY",
  sort: "SORT",
  next: "NEXT",
};

const reducer = (pagination, { action, payload }) => {
  if (action === PAGINATION_ACTIONS.query) {
    return {
      limit: 6,
      sort: pagination.sort,
      categories: payload.categories ?? null,
      collection: payload.collection ?? null,
      startAfter: null,
    };
  }
  if (action === PAGINATION_ACTIONS.sort) {
    return {
      ...pagination,
      sort: payload,
      startAfter: null,
    };
  }
  if (action === PAGINATION_ACTIONS.next) {
    return {
      ...pagination,
      startAfter: payload,
    };
  }
  throw new Error("no action");
};

const initialState = { sort: "ratings:desc", limit: 6 };

function usePagination() {
  const [pagination, dispatch] = useReducer(reducer, initialState);
  const setQuery = (queryEndpoint) => {
    dispatch({ action: PAGINATION_ACTIONS.query, payload: queryEndpoint });
  };
  const setSort = (sortParams) => {
    dispatch({ action: PAGINATION_ACTIONS.sort, payload: sortParams });
  };
  const setNext = (startAfter) => {
    dispatch({ action: PAGINATION_ACTIONS.next, payload: startAfter });
  };
  return { pagination, setQuery, setSort, setNext };
}

export default usePagination;
