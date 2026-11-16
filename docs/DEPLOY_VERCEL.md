# Desplegar CIELO gratis en Vercel desde GitHub

Guía para [MwkOC/Cielo_Without-limits](https://github.com/MwkOC/Cielo_Without-limits). Revisada el 15 de noviembre de 2026. No necesitas Node.js, un framework ni la CLI de Vercel.

## 1. Usar el plan gratuito

Selecciona **Hobby**, que es gratuito y tiene límites de uso. Para mantener el despliegue gratuito, no actives una prueba Pro ni servicios adicionales de pago. Consulta las condiciones vigentes de [Hobby](https://vercel.com/docs/plans/hobby).

Hobby se destina a uso personal no comercial. Que el sitio sea estudiantil no garantiza por sí solo que cualquier uso institucional encaje: revisa tu caso antes de publicarlo. La condición figura en las [preguntas de precios de Vercel](https://vercel.com/pricing). Este tutorial explica la configuración técnica y no activa un plan de pago.

## 2. Subir la estructura nueva a GitHub

En la rama `main` deben aparecer estas rutas:

```text
Cielo_Without-limits/
├── public/
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/
├── docs/
├── references/
├── archive/
├── vercel.json
├── .gitignore
└── README.md
```

Si usas la terminal, desde la raíz del repositorio:

```bash
git status
git add -A
git diff --cached --stat
git commit -m "Organiza el sitio y documenta el despliegue en Vercel"
git push origin main
```

Revisa lo preparado antes del commit: `git add -A` incluye todos los cambios y movimientos pendientes del repositorio. Estos comandos son instrucciones para ti; no se ejecutaron como parte de la reorganización.

También puedes usar GitHub Desktop: revisa los cambios, crea un commit y pulsa **Push origin**. Incluye tanto las rutas nuevas como la eliminación de las ubicaciones anteriores. En GitHub, verifica que `public/index.html` y `vercel.json` ya estén subidos.

## 3. Importar el repositorio

1. Abre [Vercel](https://vercel.com/) e inicia sesión con **Continue with GitHub**.
2. Selecciona tu espacio **Hobby** en el panel.
3. Entra en **Add New… → Project**.
4. En **Import Git Repository**, busca `Cielo_Without-limits` y pulsa **Import**.
5. Si no aparece, usa **Configure GitHub App** o la opción para instalar la integración y concede acceso a este repositorio. Vuelve al panel y repite la búsqueda.

Esta conexión habilita los despliegues desde GitHub; no hace falta agregar un workflow de GitHub Actions. Consulta la [integración oficial con GitHub](https://vercel.com/docs/git/vercel-for-github).

## 4. Configurar este proyecto

Usa los siguientes valores al importar:

| Campo | Valor |
| --- | --- |
| Project Name | Un nombre disponible, por ejemplo `cielo-sin-limites` |
| Framework Preset | **Other** |
| Root Directory | Raíz del repositorio: `./`; no selecciones `public` |
| Build Command | Vacío; activa Override si la interfaz lo necesita para dejarlo vacío |
| Output Directory | `public` |
| Install Command | Vacío |
| Environment Variables | Ninguna |

El archivo `vercel.json` incluido en la raíz ya fija los valores del sitio:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "public"
}
```

Mantén **Root Directory** en `./` para que Vercel lea esta configuración. La salida `public/` contiene todo lo necesario para la página. Los documentos, referencias y variantes anteriores quedan fuera del contenido servido. La URL final usa `/`, sin agregar `/public`.

No hay que ejecutar `npm install`, `npm run build` ni crear una carpeta `dist`. La configuración de sitios estáticos se explica en [Configuring a Build](https://vercel.com/docs/builds/configure-a-build), y los campos del archivo en [vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

## 5. Desplegar y comprobar

Pulsa **Deploy**. Cuando termine, abre **Visit** o el dominio asignado en el proyecto, por ejemplo `https://nombre-disponible.vercel.app`. El nombre exacto depende de su disponibilidad; este tutorial no reserva un dominio.

Comprueba en la URL desplegada:

- Portada, ciudad de Puno y lago visibles.
- Logos y dos pequeñas nubes escondidas cargados.
- Menú móvil y enlaces a las secciones funcionando.
- Botón **Pausar fondo** deteniendo el movimiento.
- Correo e Instagram apuntando a los contactos correctos.

Usa el subdominio asignado `vercel.app` para este procedimiento: no necesitas comprar un dominio propio. La organización local del repositorio no publica la web por sí sola.

## 6. Actualizar la web

Edita los archivos de `public/`, pruébalos localmente y sube un commit a `main`. La integración Git permite desplegar automáticamente; las ramas y pull requests generan versiones de prueba y la rama de producción actualiza el sitio principal. Consulta [Deploying Git Repositories](https://vercel.com/docs/git).

En **Settings → Git**, verifica que la rama de producción sea `main`. Para revisar versiones anteriores, entra en **Deployments** y abre el enlace de cada versión antes de decidir si restaurarla.

## 7. Problemas habituales

| Problema | Qué revisar |
| --- | --- |
| Error 404 en la página principal | `public/index.html` debe estar subido a la rama desplegada; salida `public`, raíz `./`. |
| Página sin estilos o imágenes | Sube también `public/css`, `public/js` y `public/assets`. Respeta las mayúsculas de los nombres. |
| Vercel intenta ejecutar npm o detecta otro framework | Comprueba `vercel.json` en la raíz y el preset Other. |
| Aparece una versión anterior | Confirma el commit del último despliegue y recarga con `Ctrl + Shift + R`. |
| El repositorio no aparece | Revisa la cuenta de GitHub y el acceso de la GitHub App de Vercel. |
| Restricción con un repositorio privado de una organización | Hobby no admite ese caso: revisa las [restricciones de Git](https://vercel.com/docs/git). No cambies la visibilidad de este repo personal por defecto. |
| Un commit no genera despliegue | Revisa integración, rama e identidad del autor según las [reglas de colaboración](https://vercel.com/docs/deployments/troubleshoot-project-collaboration). |
| Se alcanza un límite de Hobby | Revisa Usage y las condiciones actuales del plan; no actives Pro automáticamente para resolverlo. |

## 8. Probar localmente antes de subir

Si usas Windows, sigue primero el [tutorial local para Windows](DESPLIEGUE_LOCAL_WINDOWS.md), que incluye el comando de instalación de Git y Python. Desde la raíz del repositorio en PowerShell:

```powershell
py -3.13 -m http.server 4173 --bind 127.0.0.1 --directory public
```

En Linux/macOS, con Python 3 instalado:

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Abre <http://localhost:4173>. El mismo directorio `public/` es la salida estática configurada para Vercel. Para detener el servidor, pulsa `Ctrl+C`.
