# SVG coloreados

Ocho versiones vectoriales reconstruidas a partir de los JPEG de referencia, con fondo transparente. Los archivos originales permanecen intactos.

Los SVG originales eran monocromos y algunos incluían el fondo dentro del trazado. Por eso estas versiones reconstruyen las áreas de color desde los JPEG, en lugar de aplicar un único relleno al SVG negro. Contienen trazados vectoriales reales, sin imágenes incrustadas ni recursos externos.

Los SVG se encuentran en `public/assets/logos/` (desde la raíz del repositorio).

## Uso

| Archivo | Fondo recomendado | Colores visibles |
| --- | --- | --- |
| `Buho_blanco_FA.svg` | Oscuro | Blanco |
| `Buho_cielo_FA.svg` | Oscuro | Blanco y dorado |
| `Logo_Asociacion.svg` | Oscuro | Blanco y dorado |
| `Logo_Cielo_fA.svg` | Oscuro | Blanco y dorado |
| `Logo_UNA_FA.svg` | Oscuro | Blanco y dorado |
| `Logo_UNA_FB.svg` | Claro | Azul marino y dorado |
| `Logo_cielo_FB.svg` | Claro | Azul marino y dorado |
| `buho_fondoazul.svg` | Oscuro | Blanco y dorado |

El fondo y las zonas negativas del mismo color se hicieron transparentes. En las variantes oscuras, el blanco forma parte del dibujo y se conserva. Aunque el nombre `buho_fondoazul.svg` se mantiene para identificar su referencia, el archivo nuevo no tiene fondo azul.

Se ajustó el `viewBox` al contenido con un pequeño margen para facilitar su uso en la web. Los colores se estimaron a partir de los JPEG comprimidos: no son especificaciones oficiales de marca. Los matices y degradados del dorado se simplificaron a colores planos; las variantes conservan sus pequeñas diferencias de tono.

Abre `vista-previa.html` en el navegador para ver los ocho archivos sobre fondos claros, oscuros o cuadriculados. Los diseños blancos están pensados para fondos oscuros.
