import handleResponseFromAPI from "./2-then";

const successPromise = Promise.resolve();
handleResponseFromAPI(successPromise);

const failPromise = Promise.reject();
handleResponseFromAPI(failPromise);
