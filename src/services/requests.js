
async function httpGetAllCases(){

    return fetch("http://localhost:8080/allCases").then((response)=>response.json()).then((data)=>{return data});

    // TODO: once API is ready.
    // Load Cases and return JSON
}

async function httpSubmitCase(){
    //TODO: Once API is ready.
    // Submit given Cases data backend?
}

export{ httpGetAllCases,httpSubmitCase}