import { useEffect, useState } from "react";

const usePersistedState = (initialState,sessionKey) => { //custom hooks...
   const [state,setState] = useState(() => {
        let isPersistedValue = JSON.parse(sessionStorage.getItem(sessionKey));
        if(isPersistedValue !== null || isPersistedValue !== undefined || isPersistedValue !== '')
        {
            return isPersistedValue;
        }else{
            return initialState;
        }
   });
   useEffect(() =>{
        sessionStorage.setItem(sessionKey,JSON.stringify(state));
   },[state,sessionKey]);

   return [state,setState];
};


export const useSearchStr = () => { //custom hooks built on another custom hooks...
    return usePersistedState('','searchStr');
}