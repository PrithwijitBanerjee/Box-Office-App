import { useStarredShows } from "../../lib/useStarredShows"
import ShowCard from "./ShowCard"
// import { useEffect, useReducer } from "react"

// const usePersistedState = (reducer,initialState,starredKey) => { //custom hooks...
//     const [starredArr,dispatch] = useReducer(reducer,initialState, initialState => {
//         let persistedValue = localStorage.getItem(starredKey);
//         if(persistedValue === null || persistedValue === undefined || persistedValue === '')
//         {
//             persistedValue = initialState;
//         }else {
//             persistedValue = JSON.parse(localStorage.getItem(starredKey));
//         }
//         return persistedValue;
//     });

//     useEffect(() => {
//         localStorage.setItem(starredKey,JSON.stringify(starredArr));
//     },[starredKey,starredArr]);

//     return [starredArr,dispatch];
// }

// const starredShowsReducer = (currentState,action) => {
//     switch (action.type) {
//         case 'STAR': return currentState.concat(action.showId);
//         case 'UNSTAR': return currentState.filter(item => item !== action.showId);
//         default: return currentState;
//     }
// }
const ShowGrid = ({ shows }) => {
    //   const [starredList,dispatch] = useReducer(starredShowsReducer,[]);

    //  const [starredList,dispatch] = usePersistedState(starredShowsReducer,[],'starredShows');

    const [starredList, dispatch] = useStarredShows(); //custom hooks...
    const onStarClick = showId => {
        const isStarIdPresent = starredList.includes(showId);
        isStarIdPresent ? dispatch({ type: 'UNSTAR', showId }) : dispatch({ type: 'STAR', showId })
    }
    return (
        <>
            {
                shows && shows?.map(item => (
                    <ShowCard
                        key={item?.show?.id}
                        name={item?.show?.name}
                        summary={item?.show?.summary}
                        image={item?.show?.image ? item.show.image.medium : '/box-office-img-placeholder.png'}
                        id={item?.show?.id}
                        onStar={onStarClick}
                        isStarred={starredList.includes(item?.show?.id)}
                    />
                ))
            }
        </>
    )
}

export default ShowGrid