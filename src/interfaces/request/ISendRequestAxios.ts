export default interface ISendRequestAxios {
    urlServicio: string,
    body?: any,
    headers?: any,
    showLoader?:boolean,
    method: "post"|"get"|"put"|"delete"
}
