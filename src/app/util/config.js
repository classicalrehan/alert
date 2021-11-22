let constant;
//for local
//168613
//if (process.env.NODE_ENV == "local") {    
constant = {
    host: 'http://localhost:9090/',
    alert: "alert-service/alert/",
    env: "local"
};
//}
export default constant;