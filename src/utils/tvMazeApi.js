
// Custom Api....
const apiGet = async urlQuery => {
    try {
        const response = await fetch(`${urlQuery}`);
        const body = await response.json();
        return body;
    } catch (error) {
        throw new Error('Something Went Wrong');
    }
}

//get all shows/movies list based on query string that has been passed...
export const getShowsRes = query => apiGet(`${process.env.REACT_APP_BASE_LIVE_URL}/search/shows?q=${query}`);

//get all actors list based on query string that has been passed...
export const getPeopleRes = query => apiGet(`${process.env.REACT_APP_BASE_LIVE_URL}/search/people?q=${query}`);

//get particular movie detail based on show id........
// export const getShowById = id => apiGet(`${process.env.REACT_APP_BASE_LIVE_URL}/shows/${id}`);

//get particular movie detail along with embedded seasons and cast information based on show id........
export const getShowById = id => apiGet(`${process.env.REACT_APP_BASE_LIVE_URL}/shows/${id}?embed[]=seasons&embed[]=cast`);