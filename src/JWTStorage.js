
export let inMemoryToken;

export function login_function (jwt_token, noRedirect){
    inMemoryToken = {
        token : jwt_token
    }
}