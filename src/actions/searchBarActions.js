// set searchTerm value
export function updateSearchTerm(searchTerm) {
  return {
    type: "UPDATE_SEARCH_TERM",
    payload: searchTerm
  }
}
