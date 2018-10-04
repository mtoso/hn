export const applySetResult = result => prevState => ({
    hits: result.hits,
    page: result.page,
    isLoading: false
});
  
export const applyUpdateResult = result => prevState => ({
    hits: [...prevState.hits, ...result.hits],
    page: result.page,
    isLoading: false
});