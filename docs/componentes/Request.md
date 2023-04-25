# &lt;Request /&gt;

Variable para realizar solicitudes HTTP por medio de axios con el tipo especifico

### Loader and Alerts
El componente busca un elemento en el DOM con ID "loaderAyf" para renderizar el contenido del Loader y un ID "alerts" para los resultados de la petición.

## Props

| Nombre         | Tipo        | Parametros                 | Descripción |
|----------------|-------------|----------------------------|-------------|
| send           | function    | (SendRequestAxios) => {}   | Lanza una petición de tipo especificado  |

## SendRequestAxios

| Nombre         | Tipo        | Valor por defecto   | Obligatorio | Descripción |
|----------------|-------------|---------------------|-------------|-------------|
| urlServicio    | string      |                     | SI          | Especifica la URL complementaria del servicio (después de V3)  |
| body           | object      |                     | NO          | Parametros de la solicitud                        |
| headers        | object      |                     | NO          | Encabezados de la solicitud |
| showLoader     | boolean     | true                | NO          | Indica si la petición se ejecuta con visualización de loader o no. |
| method         | string      | get                 | SI          | Especifica el tipo de petición, puede ser: post, put, get o delete |

## Retorno
Todos los parametros devuelven una promesa de tipo IRespuestaGeneral. 

## IRespuestaGeneral

| Nombre            | Tipo                         | Descripción                           |
|-------------------|------------------------------|---------------------------------------|
| codigo            | number                       | Codigo de respuesta HTTP              |
| datos             | any|Array<any>               | Objeto de respuesta de la solicitud   |
| descripcion       | string                       | Descripción de la solicitud           |
| errores?          | null o Array< IErrorGeneral >| Errores ocurridos en la ejecución     |
| ok                | boolean                      | Si la solicitud fue exitosa o no      |
| paginacion?       | IPaginacion                  | Objeto de paginación                  |


## IErrorGeneral

| Nombre            | Tipo                       | Descripción                           |
|-------------------|----------------------------|---------------------------------------|
| codigo            | string                     | Codigo GUID de error                  |
| descripcion       | string                     | Descripción del error                 |

## IPaginacion

| Nombre            | Tipo                       | Descripción                           |
|-------------------|----------------------------|---------------------------------------|
| siguiente         | string                     | Pagina siguiente                      |
| anteriror         | string                     | Pagina anterior                       |
| primera           | string                     | Primer pagina                         |
| ultima            | string                     | Ultima pagina                         |
| totalRegistros    | number                     | Total registros                       |


## Ejemplos

### Importaciones

```js
import { SendRequest } from 'packagename';
```

### USO

```js
SendRequest.send({
    urlServicio: "/Controlador/Servicio",
    body: {
        parametro1: "Ejemplo",
        parametro2: "solicitud",
    },
    method:"post",
    headers: {
        method: "OPTIONS"
    }
})
```

### Capturando promesa

```js
SendRequest.send({
    urlServicio: "/Controlador/Servicio",
    body: {
        parametro1: "Ejemplo",
        parametro2: "solicitud",
    },
    method: "put",
    headers: {
        method: "OPTIONS"
    }
}).then((response:IRespuestaGeneral) => {
    return response;
})
```