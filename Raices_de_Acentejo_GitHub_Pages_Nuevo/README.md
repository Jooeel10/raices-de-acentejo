# Raíces de Acentejo Eventos — Norte Km0

Web promocional **estática, responsive y lista para GitHub Pages**. Contiene información del evento, maridajes, programa, actividades, identidad visual, presentación del equipo, ejemplos de entradas y preguntas frecuentes.

## Abrir la web

Abre `index.html` en un navegador (puede abrirse directamente sin servidor). Todas las imágenes y el JavaScript funcionan sin instalación de dependencias. Si quieres probarla con servidor local, ejecuta en la carpeta:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo, `raices-de-acentejo`).
2. Sube el **contenido interior** de esta carpeta (incluye `index.html`, `styles.css`, `main.js`, `assets/` y `.nojekyll`) a la rama `main`.
3. En GitHub, ve a **Settings → Pages → Build and deployment → Deploy from a branch**. Escoge `main` y carpeta `/ (root)`.
4. La URL tendrá el formato `https://TU_USUARIO.github.io/raices-de-acentejo/` (la URL es un ejemplo, no una web publicada actualmente).

> El sitio tiene `noindex,nofollow` para evitar que motores de búsqueda interpreten como confirmado el evento académico. Cuando todo el proyecto quede aprobado y sea comercializable, actualiza esta etiqueta y la información pública.

## Secciones

- Inicio y concepto de empresa.
- Tres propuestas de maridaje: Viña Norte Blanco Seco + queso tierno; Hollera Monje + semicurado; Viña Norte Tradicional + curado.
- Actividades, microgrupos y cata de cierre con 30 plazas sujetas a reserva.
- Programa orientativo y galería conceptual.
- Equipo fundador: Joel Perdigón Abreu, Johel González Núñez y Gabriel Llanos Tejera.
- Información práctica y preguntas frecuentes.

## Datos pendientes antes de comercializar el evento

- Confirmar sede y aforo autorizado (Hotel Puerto Palace es la primera opción, no existe reserva).
- Confirmar fecha, hora, programa y precio mediante contrato.
- Solicitar autorización de marca e imágenes de terceros si se incorporan.
- Contratar un sistema real de entradas con pagos, validación QR, política de devolución y protección de datos.
- Publicar un contacto empresarial real; no se ha inventado correo, teléfono o dominio.
- Verificar disponibilidad, añadas, fichas de proveedores y alérgenos.
- Ajustar el cartel y las maquetas de entradas que figuran en la galería para que sus QR apunten al destino publicado real.

**IMPORTANTE:** Los QR y números de entrada de la galería son solo maquetas e información, no acreditan venta ni acceso. Esta versión no incluye plataforma de pagos, base de datos ni formularios de inscripción.

## Material gráfico

Los logotipos y artes del proyecto proceden de materiales facilitados o generados durante la elaboración de esta propuesta. Los renders de stands y tablas son **conceptuales**, no fotografías de un evento realizado. Antes de publicar fotografías de productores o proveedores, comprobar permisos y licencias. La tipografía se carga de Google Fonts cuando hay conexión; si no, se muestran fuentes de sistema y Georgia.

## Archivos

- `index.html` — contenido y estructura semántica.
- `styles.css` — diseño responsive y estilos accesibles.
- `main.js` — menú móvil, galería ampliable, compartir enlace y accesibilidad.
- `assets/` — imágenes optimizadas en formato WebP y vector corporativo SVG.

Generado como prototipo para el proyecto intermodular de 2.º CFGS Dirección de Servicios de Restauración (curso 2026–2027).
