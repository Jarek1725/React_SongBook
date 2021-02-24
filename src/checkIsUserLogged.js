export function isLoggedCorrectly(){
    fetch('http://localhost:8080/server_war_exploded/isLoggedIn', {
        method:'POST',
        headers:{"Content-Type": "multipart/form-data"},
        credentials: 'include',
    }).then(res=>{
        return res
        // console.log(res)
    })
}