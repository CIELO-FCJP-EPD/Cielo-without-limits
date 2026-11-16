# CIELO — Sin límites

Primera versión de la web institucional del Círculo de Investigación Estudiantil en Litigación Oral. Página estática en español, basada en `Prompt_CIELO_Web.md`, las veinte diapositivas y los SVG coloreados del proyecto.

## Abrir la web

Abre `index.html` con tu navegador. Mantén junto a él las carpetas `SVG coloreados/` y `assets/`.

Para una vista previa mediante servidor local, ejecuta desde esta carpeta:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Abre <http://127.0.0.1:4173>. Para detener el servidor, usa Ctrl+C en su terminal. No requiere instalar dependencias, ejecutar un compilador ni crear cuentas. El servidor solo escucha en tu computadora.

## Contenido y edición

- `index.html`: HTML institucional, estilos adaptables y JavaScript de interacción. Cada sección tiene un identificador descriptivo, como `nosotros`, `formacion`, `comisiones`, `unete` o `contacto`.
- `SVG coloreados/`: los emblemas y mascotas con sus colores y fondos transparentes. Se conservan todos los archivos de origen.
- `assets/portada-montana.webp`: copia local del poster ambiental indicado en `Prompt.md`.
- `Prompt_CIELO_Web.md`: especificación y trazabilidad de los contenidos.

Los textos se editan directamente en el HTML y permanecen disponibles sin JavaScript. El objeto `CIELO` al final del archivo centraliza los contactos y el origen del video. Si cambias el correo o Instagram, actualiza también los enlaces en HTML para conservar su funcionamiento sin JavaScript. El año del pie se actualiza automáticamente cuando JavaScript está disponible.

Las colecciones `publications`, `events` y `opportunities` están reservadas y vacías: **añadir objetos no genera tarjetas automáticamente en esta versión**. Para incorporar contenido real, reemplaza el estado informativo de su sección con los artículos o actividades confirmados, o implementa el listado correspondiente. No hay backend, registro de usuarios, formulario de envío ni almacenamiento de datos personales.

## Qué incluye

Portada, propósito, misión, visión, Atenea y Tuku, modelo de seis etapas, cuatro comisiones y equipo de debate, organización propuesta, espacio editorial, agenda, oportunidades, participación, siete preguntas frecuentes y contacto.

Las metas y la organización del plan 2026–2027 se identifican como propuestas. No se publican nombres de autoridades, fechas de eventos, alianzas, métricas, artículos ni convocatorias no aportados.

Las interacciones implementadas son navegación por anclas, menú móvil con Escape y cierre al seleccionar, desplegables nativos, pausa/reproducción del fondo y copia del correo con alternativa manual. El enlace de correo abre la aplicación de correo; no envía un mensaje automáticamente.

## Medios y conexión

El video ambiental remoto del prompt responde HTTP 200 y pesa aproximadamente 9,7 MB. Se carga solo en pantallas de más de 767 px cuando no se solicita movimiento reducido, ahorro de datos o una conexión lenta detectada. El fondo se pausa fuera de la portada y al ocultar la pestaña; una pausa manual se conserva al desplazarse. La alternativa estática es el poster local; si este no se carga, queda el fondo azul y el contenido.

El paisaje es una ilustración ambiental del prompt, no una fotografía de Puno ni una actividad de CIELO. Las fuentes Instrument Serif y Plus Jakarta Sans se solicitan a Google Fonts; Georgia y las fuentes del sistema actúan como alternativas. El video y las fuentes necesitan conexión; el contenido, poster, SVG y navegación básica funcionan localmente. No se incluyen analítica, cookies propias ni feeds sociales incrustados.

## Pendientes antes de publicación pública

- Confirmar vigencia del correo `cielo.litigacion@gmail.com` y del usuario `@cielo.fcjp`, transcritos de las diapositivas. La consulta automática a Instagram estuvo limitada; no se pudo verificar su disponibilidad en vivo.
- Aportar las URLs completas de Facebook y YouTube, y confirmar el teléfono si se quiere mostrarlo. Por ahora se omiten.
- Confirmar directiva, nombres, cargos y activación de las áreas.
- Entregar publicaciones completas, fechas de actividades y convocatoria vigente cuando existan.
- Elegir dominio y alojamiento; definir URL canónica y una imagen social antes de configurar esos metadatos.
- Revisar visualmente escritorio, móvil y zoom al 200 % en un navegador real. En la sesión de implementación no hubo un navegador conectado, por lo que no se atribuye una validación visual completa.

## Comprobaciones realizadas

- Sintaxis del JavaScript y simulación DOM de menú, Escape, cierre exterior, copia de correo y alternativa cuando no está disponible el portapapeles.
- Simulación de video: escritorio, móvil, movimiento reducido, ahorro de datos, pausa manual, salida/entrada de la portada y cambio de preferencias.
- Doce secciones, un H1, identificadores únicos, destinos de todas las anclas y atributos de accesibilidad básicos de las imágenes.
- Respuestas HTTP 200 del HTML y de los recursos gráficos locales usados.

Las simulaciones comprueban lógica, no geometría, reproducción multimedia real ni comportamiento de lectores de pantalla. Los puntos de adaptación están preparados en CSS, pero la inspección visual a 360, 390, 768, 1024 y 1440 px queda pendiente de un navegador conectado.
