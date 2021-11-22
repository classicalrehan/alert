//exporting fetch
export function ajaxCall(url, reqObj) {
    let defaultObj = {
        method: 'GET',
        mode:'cors',
        cache:'no-cache',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "SystemId":"naukriindia",
            "AppId":"4"
        },
    };
    let ajaxObj = { ...defaultObj, ...reqObj };
    return new Promise((resolve, reject) => {
        fetch(url, ajaxObj).then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        }).catch(err => {
            reject(err);
        });
    })
}
