# Ejecutar CIELO localmente en Windows

Guía para Windows 10/11, usando **PowerShell** o una pestaña de PowerShell en **Windows Terminal**. Necesitas conexión a Internet para instalar herramientas y descargar el repositorio. Después puedes servir la página localmente; las fuentes externas usan alternativas del sistema sin conexión.

## 1. Instalar lo necesario con un comando

Abre PowerShell desde el menú Inicio y pega esta línea:

```powershell
winget install --exact --source winget Git.Git Python.Python.3.13 --accept-package-agreements --accept-source-agreements
```

Instala **Git** para descargar y actualizar el repositorio y **Python 3.13** para iniciar el servidor local. El comando acepta los acuerdos de las fuentes y los paquetes; Windows puede pedir permiso para instalar. El proyecto no requiere Node.js, npm ni paquetes de pip.

WinGet permite instalar varios paquetes en una sola línea; consulta la [documentación de Microsoft](https://learn.microsoft.com/en-us/windows/package-manager/winget/install). Python 3.13 está publicado con ese identificador en el [catálogo oficial de WinGet](https://github.com/microsoft/winget-pkgs/tree/master/manifests/p/Python/Python/3/13).

Si `winget` no se reconoce, instala o actualiza **App Installer / Instalador de aplicación** desde Microsoft Store y vuelve a abrir PowerShell. Microsoft explica su disponibilidad en [Instalar y usar WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/). En una computadora administrada, la instalación puede requerir ayuda de su administrador.

Si una versión antigua de WinGet no admite los dos paquetes juntos, actualiza App Installer o instálalos por separado:

```powershell
winget install --exact --id Git.Git --source winget --accept-package-agreements --accept-source-agreements
winget install --exact --id Python.Python.3.13 --source winget --accept-package-agreements --accept-source-agreements
```

**Cierra PowerShell y ábrelo de nuevo** después de instalar. Así se actualizan las rutas de los programas. Comprueba:

```powershell
git --version
py -3.13 --version
```

Ambos deben mostrar una versión. El segundo debe indicar `Python 3.13.x`.

## 2. Descargar el repositorio

Desde la carpeta donde quieras guardar el proyecto, ejecuta:

```powershell
git clone https://github.com/MwkOC/Cielo_Without-limits.git
cd Cielo_Without-limits
```

Si ya lo descargaste, entra en esa carpeta y omite `git clone`. Si su ruta tiene espacios, usa comillas, por ejemplo:

```powershell
cd "C:\Users\TuUsuario\Documents\Mis proyectos\Cielo_Without-limits"
```

Sustituye la ruta del ejemplo por la tuya. Confirma que estás en la raíz del repositorio:

```powershell
Test-Path .\public\index.html
```

Debe responder `True`. Si descargaste el ZIP de GitHub, extráelo primero y entra en la carpeta que contiene `public` y `README.md`; el ZIP suele agregar `-main` al nombre de la carpeta.

## 3. Iniciar el servidor local

Desde esa raíz, ejecuta:

```powershell
py -3.13 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Deja esa terminal abierta. Cuando aparezca el mensaje `Serving HTTP`, abre en Edge, Chrome o Firefox:

**<http://localhost:4173>**

También puedes abrir una segunda pestaña de PowerShell y ejecutar:

```powershell
Start-Process "http://localhost:4173"
```

El servidor usa exclusivamente `public/`, igual que el despliegue de Vercel. Escucha en tu propia computadora; no necesitas abrir puertos del router ni configurar un dominio. Esto es una vista previa local y no publica la web en Internet.

## 4. Editar, actualizar y detener

- Edita los textos en `public/index.html`, los estilos en `public/css/styles.css` y las interacciones en `public/js/main.js` con tu editor de texto.
- Guarda y recarga el navegador; si no ves el cambio, pulsa `Ctrl + Shift + R`. No hay compilación ni recarga automática.
- Para detener el servidor, vuelve a su terminal y pulsa `Ctrl+C`.
- Para iniciarlo otro día, abre PowerShell, entra en la raíz del repositorio y repite el comando del paso 3. No hace falta reinstalar las herramientas.

Si usaste Git y quieres descargar cambios ya publicados en GitHub, primero revisa tu trabajo local:

```powershell
git status
git pull --ff-only origin main
```

Si Git informa de cambios locales o ramas divergentes, conserva tus ediciones y resuelve esa situación antes de actualizar; no uses comandos de descarte para forzarlo.

## 5. Solucionar problemas

| Problema | Solución |
| --- | --- |
| `git` o `py` no se reconoce | Cierra y vuelve a abrir la terminal. Comprueba que la instalación terminó correctamente. |
| Python está instalado pero falta `py` | Comprueba `python --version`; si indica Python 3, usa `python -m http.server 4173 --bind 127.0.0.1 --directory public`. Si tampoco funciona, revisa la instalación y el launcher de Python. |
| Se abre Microsoft Store al escribir `python` | Usa `py -3.13` como en esta guía, en lugar del alias `python`. |
| `Test-Path` responde `False` o hay un error 404 | Entra en la carpeta que contiene `public/index.html`, no dentro de `public` ni en la carpeta superior al repositorio. |
| El puerto 4173 está ocupado | Detén el servidor anterior con `Ctrl+C`, o cambia el puerto a `4174` y abre `http://localhost:4174`. |
| `localhost` no abre la página | Comprueba que el servidor siga ejecutándose y prueba `http://127.0.0.1:4173`. Usa HTTP, no HTTPS. |
| No se ven cambios | Guarda el archivo y recarga con `Ctrl + Shift + R`. |

Para publicar en Internet desde GitHub, continúa con [Desplegar gratis en Vercel](DEPLOY_VERCEL.md).
