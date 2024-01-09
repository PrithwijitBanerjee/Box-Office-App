import { useEffect, useReducer } from "react"

const usePersistedState = (reducer,initialState,starredKey) => { //custom hooks...
    const [starredArr,dispatch] = useReducer(reducer,initialState, initialState => {
        let persistedValue = localStorage.getItem(starredKey);
        if(persistedValue === null || persistedValue === undefined || persistedValue === '')
        {
            persistedValue = initialState;
        }else {
            persistedValue = JSON.parse(localStorage.getItem(starredKey));
        }
        return persistedValue;
    });

    useEffect(() => {
        localStorage.setItem(starredKey,JSON.stringify(starredArr));
    },[starredKey,starredArr]);

    return [starredArr,dispatch];
}

const starredShowsReducer = (currentState,action) => {
    switch (action.type) {
        case 'STAR': return currentState.concat(action.showId);
        case 'UNSTAR': return currentState.filter(item => item !== action.showId);
        default: return currentState;
    }
}

export const useStarredShows = () => {
    return usePersistedState(starredShowsReducer,[],'starredShows');
}