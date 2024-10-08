# Api Rest con Typescript

Implementación de una api rest utilizando Express y Typescript para el desarrollo de código seguro utilizando tipado estático.

## Configuración

Es necesario instalar los tipos de express para que el entorno los reconozca y evitar los problemas que genera el compilador durante el desarrollo.

```bash

npm i @types/express -D

```

## Requerimientos

- Typrescript
- Express

## Configuración de tipos

Es un patrón frecuente crear el archivo `types.d.ts` en el cual se almancenaran todos los tipos disponibles para el paquete, sin embargo, en este solo se deben incluir definiciones de tipos y no enums, ya que los enums se compilan a código Javascript y en consecuencia generar problemas de compilación. En caso de utilizar enums se debe cambiar la extensión del archivo por `types.ts`

## Conclusión

TypeScript es una herramienta excelente para detectar posibles errores y problemas durante el desarrollo, ya que proporciona tipado estático que ayuda a prevenir errores antes de que el código se ejecute. Sin embargo, TypeScript no realiza ninguna validación en tiempo de ejecución (runtime). Esto significa que aunque el código sea seguro en términos de tipos, es necesario implementar validaciones manuales para garantizar que los datos sean correctos y seguros en tiempo real.

## Disclaimer

Este proyecto fue desarrollado siguiendo un tutorial creado por el youtuber **Midudev**. Puedes encontrar el tutorial completo en el siguiente [enlace](https://www.youtube.com/watch?v=ZpY5KdGQvwI). Todo el crédito por el contenido y la estructura del proyecto debe ser atribuido a él.
