
<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" rx="32" fill="#333333"/>
<path d="M171.329 62.0004C174.004 62.0004 176.05 64.3824 175.647 67.0263L165.47 133.754C165.098 136.196 162.998 138 160.528 138H156.536C154.065 138 151.965 136.195 151.593 133.752L146.475 100.097C145.959 96.7004 141.064 96.6981 140.544 100.095L135.392 133.757C135.019 136.198 132.919 138 130.45 138H126.228C123.736 138 121.625 136.165 121.277 133.698L111.934 67.3793C111.533 64.5384 113.739 62.0004 116.608 62.0004V62.0004C118.99 62.0004 120.999 63.7757 121.292 66.1401L126.3 106.542C126.727 109.986 131.688 110.076 132.239 106.649L137.323 75.0372C137.713 72.6134 139.805 70.8311 142.26 70.8311H145.462C147.932 70.8311 150.031 72.6339 150.405 75.0748L155.314 107.156C155.837 110.574 160.774 110.541 161.251 107.116L167.003 65.766C167.304 63.6072 169.15 62.0004 171.329 62.0004V62.0004Z" fill="#FFA500"/>
<path d="M26.4359 66.1555C27.9057 63.8511 30.9536 63.1539 33.2791 64.5903L78.8027 92.7096C80.2774 93.6205 81.1751 95.2302 81.1751 96.9635V103.056C81.1751 104.779 80.2881 106.381 78.8276 107.295L33.6996 135.537C31.4802 136.926 28.5652 136.367 27.0161 134.257L26.8039 133.967C25.0771 131.614 25.7244 128.289 28.2077 126.755L64.5246 104.327C67.6902 102.372 67.6879 97.7678 64.5202 95.8161L27.923 73.2668C25.5461 71.8023 24.829 68.6751 26.3302 66.3212L26.4359 66.1555Z" fill="#1E90FF"/>
</svg>
</a>
  <br>
  Webpackerize
  <br>
</h1>

<h4 align="center">Prepara todo lo necesario para trabajar con <a href="https://webpack.js.org/" target="_blank">Webpack</a>.</h4>

<p align="center">
  <a href="#funcion">Función</a> •
  <a href="#uso">Uso</a> •
  <a href="#alias">Alias</a> •
  <a href="#manejo-de-imágenes-y-fuentes">Manejo de imágenes y fuentes</a> •
  <a href="#dependencias">Dependencias</a> •
  <a href="#contribuir">**Contribuir**</a> •
  <a href="#licencia">licencia</a> •
</p>

## Funcion
Incluye las dependencias necesarias, junto con archivos de configuración listos para usar. Esto te permite empezar a trabajar con Webpack de manera sencilla y rápida sin tener que configurar nada tú mismo. Es ideal si buscas una forma fácil de empezar a trabajar con Webpack en tu proyecto.

## Uso
Para usar Webpackerize, simplemente ejecuta el siguiente comando en la raíz de tu proyecto:

```bash
npx webpackerize
```
Webpackerize creará los archivos y carpetas necesarios para usar Webpack.

Una vez ejecutado el comando, podrás utilizar los siguientes scripts:

| Script  | Descripción                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| `build` | Genera una versión del código empaquetado y optimizado, Listo para producción                                     |
| `dev`   | Genera una versión del código que no esta optimizado. |
| `start` | Inicia el servidor de desarrollo de Webpack para que puedas ver tu aplicación en tiempo real mientras trabajas.        |


Puedes ejecutar estos scripts desde la línea de comandos con el comando `npm run <nombre-del-script>`. Por ejemplo, para preparar el proyecto para producción, deberías ejecutar el siguiente comando:

```bash
npm run build
```

## Alias
Webpackerize establece los siguientes alias por defecto para que puedas referenciar tus imágenes y estilos de manera más fácil en tu código:

- `@images`: directorio `src/assets/images`
- `@styles`: directorio `src/styles`
Para utilizar los alias, simplemente referéncialos en tu código con la sintaxis de `import` o `require`. 

Por ejemplo, si quieres importar una imagen en un archivo JavaScript, puedes hacerlo así:

```javascript
import logo from '@images/logo.png';
```

De esta manera, Webpack sabe que debe buscar la imagen en el directorio `src/assets/images`.

## Manejo de imágenes y fuentes
Webpackerize también maneja automáticamente las imágenes y fuentes que se encuentran en el directorio `src/assets`. Esto significa que puedes agregar imágenes y fuentes a tus proyectos sin necesidad de configurar nada adicional.

Para incluir una imagen en tu proyecto, simplemente coloca la imagen en el directorio `src/assets/images`. Luego, puedes importar la imagen en tu código utilizando el alias `@images`, como se muestra en el ejemplo anterior.

Webpackerize también configura automáticamente la carga de fuentes en tu proyecto. Para incluir una fuente en tu proyecto, coloca la fuente que deses usar en el directorio `src/assets/fonts`.

## Dependencias

Webpackerize instala las siguientes dependencias

| Tecnología         | Descripción                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| Babel              | Transpila el código JavaScript a una versión compatible con una gran cantidad de navegadores |
| TailwindCSS        | Un framework de diseño CSS que te permite crear diseños personalizados con poco esfuerzo |
| Webpack            | Empaqueta y optimiza el código JavaScript para su uso en un navegador |
| HtmlWebpackPlugin | Genera un archivo HTML para incluir automáticamente todos los paquetes compilados de JavaScript |
| css-loader         | Carga archivos CSS en su aplicación                                                      |
| postcss-loader     | Carga archivos CSS y los transforma con PostCSS, que permite aplicar transformaciones en el código CSS |
| autoprefixer      | Plugin de PostCSS que añade prefijos CSS automáticamente para garantizar la compatibilidad entre navegadores |
| terser-webpack-plugin | Optimizador de JavaScript que utiliza el motor de compresión Terser |
| css-minimizer-webpack-plugin | Plugin que minimiza el CSS generado por Webpack |


## Contribuir
Si quieres contribuir al proyecto, puedes seguir estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu función o corrección de errores.
3. Realiza los cambios necesarios y haz commit de los mismos.
4. Haz un pull request.

## Licencia
Webpackerize está disponible bajo la Licencia MIT. Ver el archivo LICENSE para más información.

### Nota
Este paquete lo hice para uso personal, pero pienso que puede ser de utilidad para mas personas, por lo que le añadire mas cosas conforme las necesite :)