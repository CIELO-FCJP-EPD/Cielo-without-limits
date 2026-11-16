# CIELO — Sin límites

Web institucional del Círculo de Investigación Estudiantil en Litigación Oral, en Puno. HTML, CSS y JavaScript estáticos, sin dependencias ni compilación.

## Ejecutar localmente

En **Windows**, instala Git y Python desde PowerShell con:

```powershell
winget install --exact --source winget Git.Git Python.Python.3.13 --accept-package-agreements --accept-source-agreements
```

Cierra y vuelve a abrir la terminal. Desde la raíz del repositorio, inicia la página con:

```powershell
py -3.13 -m http.server 4173 --bind 127.0.0.1 --directory public
```

El [tutorial local para Windows](docs/DESPLIEGUE_LOCAL_WINDOWS.md) explica instalación, descarga desde GitHub y solución de problemas. La instalación con WinGet se basa en la [documentación de Microsoft](https://learn.microsoft.com/en-us/windows/package-manager/winget/install).

En **Linux/macOS**, con Python 3 instalado:

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Abre <http://localhost:4173>. Detén el servidor con `Ctrl+C`. También puedes abrir `public/index.html` directamente; el servidor local facilita comprobar las rutas y el portapapeles.

## Estructura

```text
.
├── public/                        # Sitio que se publica en Vercel
│   ├── index.html                 # Contenido y estructura
│   ├── css/styles.css             # Diseño adaptable y animaciones
│   ├── js/main.js                 # Menú, contactos y controles
│   └── assets/
│       ├── images/                # Paisaje, cabello y nubes actuales
│       └── logos/                 # Emblemas y mascotas SVG
├── docs/
│   ├── DEPLOY_VERCEL.md            # Tutorial de GitHub a Vercel
│   ├── DESPLIEGUE_LOCAL_WINDOWS.md # Instalación y localhost en Windows
│   ├── design/                    # Marca, especificaciones y prompts
│   │   ├── branding.md
│   │   ├── vista-previa.html
│   │   ├── specifications/        # Encargos originales
│   │   └── prompts/               # Prompts de los recursos generados
│   └── history/                   # Documentación de la primera versión
├── references/                    # Material de origen conservado
│   ├── branding/                  # JPEG y SVG originales
│   ├── photos/                    # Foto referencial de Puno
│   └── presentations/             # Diapositivas y ZIP originales
├── archive/generated-images/      # Variantes anteriores, sin uso en la web
├── .gitignore
├── vercel.json                    # Publica únicamente public/
└── README.md
```

## Editar la página

- **Textos y enlaces:** `public/index.html`.
- **Colores, tamaños, adaptación móvil y movimiento:** `public/css/styles.css`.
- **Interacciones y contactos:** `public/js/main.js`. Si cambias correo o Instagram, actualiza también sus enlaces en el HTML para conservar el funcionamiento sin JavaScript.
- **Portada:** `public/assets/images/portada-puno-azul-base.webp`, `cabello-viento.webp` y `nubes-referencias.webp`. El cabello se anima por capas SVG definidas en el HTML; las nubes contienen el escarabajo y el pibble.
- **Logos:** `public/assets/logos/`. La [guía de marca](docs/design/branding.md) y la [vista previa](docs/design/vista-previa.html) permiten revisar sus variantes.

El fondo ya no usa un video remoto. El botón de pausa controla el movimiento y se respeta la preferencia de movimiento reducido. Las fuentes Instrument Serif y Plus Jakarta Sans se solicitan a Google Fonts, con fuentes locales de respaldo. Las ilustraciones y los logos se sirven desde el proyecto.

Las colecciones `publications`, `events` y `opportunities` están vacías: añadirles objetos no crea tarjetas automáticamente. No hay backend ni formulario de envío; el enlace de correo abre la aplicación de correo.

## Desplegar

Sigue el [tutorial para desplegar gratis en Vercel desde GitHub](docs/DEPLOY_VERCEL.md). La configuración incluida usa `public/` como directorio de salida; documentación, referencias y variantes anteriores quedan fuera del sitio publicado.

## Documentación y pendientes

Los documentos de `docs/design/specifications/` y `docs/history/` conservan las instrucciones y comprobaciones de versiones anteriores. Sus nombres de carpetas y menciones al video describen ese estado histórico; esta guía y el código de `public/` describen la versión actual.

Antes de una publicación institucional, confirma los contactos, autoridades, actividades y convocatorias. Aún no se han definido URL canónica ni imagen social para un dominio definitivo. Las metas y la organización 2026–2027 se presentan como propuestas.
