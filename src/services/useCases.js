import { useCallback, useEffect, useState } from "react";

import { httpGetAllCases, httpSubmitCase } from "./requests";

function useCases(){
    const [cases,saveCases] = useState([]);
    const [newCase,setNewCases] = useState(false)

    const getCases = useCallback(async ()=>{
        const fetchCases = await httpGetAllCases();
        saveCases(fetchCases);
    },[]);

    useEffect(()=>{
        getCases();
    },[getCases]);

    const submitCases = useCallback(async (e)=>{
        e.preventDefault();

        const data = new FormData(e.target);
        // all fields on cases
        // for example
        // const mission = data.get("mission-name");
        // const reocket = data.get("roclet-selector");

        const response = await httpSubmitCase(
            {
                // all those const goes here 
                //for example
                // mission,
                //reccket
            });

        const success = false; // set success based on response 

        if(success){
            getCases();
            setTimeout(()=>{
                setNewCases(false);
            },800);
        }
        else
        { 
            // function if success fails 
        }
    },[getCases])

    return {
        cases,
        newCase,
        submitCases,
    }
}

export default useCases;