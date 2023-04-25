import IRespuestaGeneral from "./IRespuestaGeneral";
import ISendRequestAxios from "./ISendRequestAxios";

export default interface IRequestAYF {
    send(DatosEnvio:ISendRequestAxios): Promise<IRespuestaGeneral>,
    post(DatosEnvio:ISendRequestAxios): Promise<IRespuestaGeneral>,
    get(DatosEnvio:ISendRequestAxios): Promise<IRespuestaGeneral>,
    delete(DatosEnvio:ISendRequestAxios): Promise<IRespuestaGeneral>,
    put(DatosEnvio:ISendRequestAxios): Promise<IRespuestaGeneral>,
}