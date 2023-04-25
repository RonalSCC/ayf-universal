import { DataSource } from "../../interfaces";
import { IAutocompleteTerceros } from "../../interfaces/autocompletarTercero/IAutocompleteTerceros";
import { Autocompletar } from "../Base";


export default function AutocompleteTerceros(propsAutocompletarTerceros:IAutocompleteTerceros) {

    const {
        handleRenderText,
        handleSelect,
        handleIconElement,
        handleParamsRequest,
        initialUrl,
        inputProps
    } = propsAutocompletarTerceros;

    const ConstruirObjetoPeticion = (filtro:string) => {
        return {
            Clave: 'TercerosClienteProveedor',
            Condiciones: JSON.stringify({
                TextoFiltrado: filtro
            })
        };
    }

  return (
    <>
        <Autocompletar
            service={{
                url: `${initialUrl}ConsultasGenerales/ConsultarInformacionListas`,
                dataText:'TerNombre',
                dataValue:'TerID',
                params: ConstruirObjetoPeticion,
                ...handleParamsRequest
            }}
            renderText={handleRenderText}
            inputProps={inputProps}
            iconElement={handleIconElement}
            onSelected={ handleSelect}
            returnObject
        />
    </>
  )
}
