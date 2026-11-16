# Prompt maestro — CIELO · Sin límites

Documento preparado el 21 de septiembre de 2026 para diseñar e implementar la web de CIELO. Integra `Prompt.md`, las veinte imágenes de `Imagenes diapos/Blue Corporate Modern Business Proposal Presentation/` y las tres webs indicadas por el usuario. No reemplaza ni modifica `Prompt.md`.

## Lectura de las referencias y decisiones

- **[Internacia](https://internacia.wordpress.com/):** su navegación distingue identidad, noticias, entrevistas, publicaciones y eventos. Su [presentación institucional](https://internacia.wordpress.com/quienes-somos-2/) explica el trabajo por comisiones. Para CIELO se toma esa organización editorial y la conexión entre investigación, difusión y participación; no se trasladan sus temas, historia ni publicaciones.
- **[THEMIS](https://themis.com.pe/):** diferencia organización, iniciativas y productos. Sus páginas de [comisiones](https://themis.com.pe/nosotros/comisiones/) y [nosotros](https://themis.com.pe/nosotros/) explican funciones, misión y preguntas frecuentes. Para CIELO se toma la claridad institucional y la presentación de áreas de trabajo; no se incorporan tienda, autoridades, testimonios, cifras ni trayectoria ajenos.
- **[International Law Institute](https://www.ili.org/):** hace visibles formación, noticias, áreas de especialidad y próximas actividades, con acceso a su [oferta formativa](https://www.ili.org/trainings/professional-development/). Para CIELO se toma la separación entre propuesta académica y agenda, con acciones claras para consultar oportunidades; no se atribuyen programas, convenios ni alcance internacional del ILI.
- **`Prompt.md`:** aporta una portada cinematográfica, Instrument Serif y Plus Jakarta Sans, video ambiental, entradas suaves y un pie translúcido. La prohibición de añadir navegación o secciones pertenece al encargo original de Nexeus y se sustituye expresamente por la arquitectura institucional de este documento. También se sustituye el bloqueo del desplazamiento y la composición absoluta de toda la página.
- **Diapositivas:** constituyen la fuente de identidad y contenido de CIELO. Son un plan estratégico 2026–2027; las propuestas no equivalen a actividades ejecutadas, comisiones activas ni convocatorias abiertas.

Alcance de la revisión web: se consultó el contenido accesible y la estructura de navegación de las páginas enlazadas. No hubo navegador visual conectado para verificar capturas, colores, animaciones o distribución exacta en pantalla. La dirección visual que sigue es una propuesta para CIELO basada principalmente en sus imágenes y en `Prompt.md`, no una reproducción visual verificada de las tres webs.

---

## Inicio del prompt listo para usar

Actúa como diseñador de interfaces, editor de contenido institucional y desarrollador frontend. Construye una web institucional completa, elegante, accesible y adaptable para **CIELO — Círculo de Investigación Estudiantil en Litigación Oral**, una agrupación estudiantil vinculada al ámbito de la Facultad de Ciencias Jurídicas y Políticas de la Universidad Nacional del Altiplano, Puno, Perú.

La página debe ayudar a comprender quiénes somos, cómo proponemos formar a nuestros miembros, qué áreas desarrollaremos, qué contenidos y actividades publicamos y cómo ponerse en contacto o consultar una convocatoria. Debe transmitir rigor académico, vocación de investigación, formación práctica, ética, comunidad y aspiración de crecimiento.

No ejecutes una copia literal de Nexeus ni una mezcla de textos de otras instituciones. Realiza una propuesta propia para CIELO siguiendo las especificaciones que vienen a continuación.

### 1. Fuentes y jerarquía de decisiones

Lee antes de implementar:

1. Este prompt, que resuelve la combinación de fuentes y define el alcance de la web.
2. Las veinte diapositivas numeradas `1.png` a `20.png` en `Imagenes diapos/Blue Corporate Modern Business Proposal Presentation/`.
3. `SVG coloreados/LEEME.md` y los ocho SVG de esa carpeta.
4. `Prompt.md`, como referencia del tratamiento de la portada, tipografías y animación, con las excepciones explícitas de este documento.
5. Las webs de Internacia, THEMIS e ILI citadas arriba, como referencias de organización del contenido.

Las diapositivas determinan los datos sobre CIELO. Las otras webs aportan patrones de organización, nunca hechos sobre CIELO. Las decisiones de diseño de este prompt son propuestas de implementación, no hechos institucionales.

Corrige errores ortográficos de las diapositivas al convertirlos en texto web. Usa **«CIELO — Sin límites»** como lema principal. Si aparece la versión inglesa, escribe **«Without limits»**, no «whit out limits» ni «with out limits». Mantén el nombre completo de CIELO sin inventar otra expansión del acrónimo.

### 2. Alcance y entrega técnica

Implementa la primera versión como **una página larga con secciones enlazables**, en un `index.html` situado en la raíz del proyecto, con CSS y JavaScript propios integrados y referencias relativas a los SVG locales. Sin frameworks, sin compilación y sin backend obligatorio, conservando así la sencillez técnica de `Prompt.md`.

Debe funcionar abriendo el HTML junto a sus carpetas de recursos y también desde un servidor estático. No depender de `fetch()` para cargar los contenidos esenciales desde archivos locales. El documento puede usar fuentes y video externos, con alternativas locales o tipográficas cuando no haya conexión. Un HTML con recursos externos no debe describirse como completamente autónomo o sin conexión.

No construir todavía tienda, pagos, intranet, acceso de miembros, panel administrativo, chatbot, CRM o sistema de certificados. No desplegar públicamente como parte de esta implementación. La arquitectura debe permitir añadir páginas de artículos y un gestor de contenidos más adelante, sin convertir esa posibilidad en trabajo obligatorio de esta primera versión.

Separar conceptualmente contenido, estilos e interacción dentro del archivo, con comentarios claros y un objeto de configuración para datos cambiantes. Mantener en HTML el contenido institucional esencial para que sea legible sin JavaScript.

### 3. Identidad y dirección visual

Crear una estética editorial académica contemporánea: una portada de gran impacto, títulos serif expresivos, párrafos muy legibles, líneas doradas finas y composiciones con espacio en blanco. La personalidad debe resultar universitaria y cercana, con presencia de Atenea y Tuku, sin parecer un bufete comercial ni una plantilla de venta de cursos.

Paleta propuesta basada en los recursos proporcionados:

| Token | Valor orientativo | Uso |
| --- | --- | --- |
| `--navy` | `#082347` | Portada, bloques institucionales y pie |
| `--navy-deep` | `#0B1F36` | Capas oscuras y profundidad |
| `--gold` | `#B58C3E` | Acentos, números y detalles |
| `--gold-light` | `#D7B873` | Acentos legibles sobre azul |
| `--paper` | `#F7F5EF` | Secciones editoriales claras |
| `--white` | `#FFFFFF` | Contraste y fondos |
| `--slate` | `#8797B7` | Superficies secundarias inspiradas en las diapositivas |
| `--ink` | `#17263B` | Texto sobre fondos claros |

Son decisiones de diseño y aproximaciones a las imágenes, no códigos oficiales certificados. No cambiar innecesariamente los rellenos de los SVG para igualarlos: algunas variantes tienen pequeñas diferencias heredadas de los JPEG.

Tipografía: **Instrument Serif 400** para H1, H2 y citas breves; **Plus Jakarta Sans 400, 500, 600 y 700** para navegación, texto y botones. Usar `font-display: swap`; Georgia y `system-ui` como alternativas. Priorizar archivos locales si existen y, si no, permitir Google Fonts con reserva tipográfica. No añadir más familias ni letras excesivamente estrechas que dificulten leer el contenido.

Composición: contenedor central de aproximadamente 1200–1320 px; márgenes fluidos de 20–64 px; secciones con 72–112 px de separación en escritorio y 40–64 px en móvil. H1 con `clamp(44px, 6vw, 88px)`; H2 entre 32 y 56 px; cuerpo de 16–18 px, interlineado 1.6–1.75 y líneas de unas 60–75 letras. Evitar convertir todas las secciones en rejillas idénticas de tarjetas. Alternar texto e imagen, listas editoriales, cronología y paneles.

### 4. Uso preciso de los recursos gráficos

Usar los SVG de `SVG coloreados/`, respetando mayúsculas y minúsculas:

| Recurso | Aplicación |
| --- | --- |
| `Logo_Cielo_fA.svg` | Marca principal sobre azul, portada y pie |
| `Logo_cielo_FB.svg` | Marca principal sobre fondos claros |
| `Logo_UNA_FA.svg` | Identificación universitaria secundaria sobre oscuro |
| `Logo_UNA_FB.svg` | Identificación universitaria secundaria sobre claro |
| `Logo_Asociacion.svg` | Emblema de Ciencias Jurídicas y Políticas que aparece en las diapositivas; usar sobre oscuro |
| `Buho_blanco_FA.svg` | Símbolo compacto de Tuku sobre oscuro |
| `Buho_cielo_FA.svg` | Recurso editorial con círculo y nombre CIELO |
| `buho_fondoazul.svg` | Búho con gafas para el módulo Tuku; es transparente a pesar del nombre |

El logo de CIELO debe ser más prominente que los dos emblemas académicos. Su presencia no autoriza a presentar la web como portal oficial de la universidad, ni acredita convenios, patrocinio o reconocimiento administrativo.

Usar `object-fit: contain`, mantener proporciones y reservar dimensiones para evitar saltos. Los SVG blancos necesitan una superficie oscura; no aplicar filtros globales que destruyan el dorado. Incluir descripciones alternativas útiles cuando la imagen tenga significado y `alt=""` cuando repita un texto adyacente.

Las diapositivas son fuentes de información: no insertar veinte capturas como sustituto de la web. No reutilizar sus fotos de oficina como si fueran fotografías del equipo. Si se necesita una imagen institucional, preferir los símbolos propios; una fotografía de la facultad solo debe emplearse con calidad y procedencia adecuadas. No inventar retratos ni testimonios de integrantes.

### 5. Navegación y recorrido

Cabecera con marca a la izquierda y enlaces a **Nosotros**, **Formación**, **Comisiones**, **Publicaciones**, **Agenda** y **Contacto**. Añadir un botón diferenciado **«Quiero formar parte»** que lleve a `#unete`. El logo lleva a `#inicio`.

La cabecera puede ser `sticky`. Sobre la portada tendrá una superficie azul translúcida; al desplazarse, una base opaca o suficientemente contrastada. En móvil, usar un menú desplegable accesible con `aria-expanded`, cierre con Escape y al seleccionar un enlace. No ocultar la navegación básica si JavaScript falla.

Orden de secciones e identificadores:

1. `#inicio`: portada cinematográfica.
2. `#nosotros`: identidad, propósito, misión y visión.
3. `#identidad`: Atenea, Tuku y lema.
4. `#formacion`: modelo de formación continua y beneficios.
5. `#comisiones`: áreas de trabajo propuestas.
6. `#organizacion`: estructura de gestión del plan.
7. `#publicaciones`: investigación y difusión.
8. `#agenda`: actividades y ritmo de trabajo propuesto.
9. `#oportunidades`: concursos y vinculación.
10. `#unete`: participación y desarrollo de miembros.
11. `#preguntas`: preguntas frecuentes.
12. `#contacto`: canales y pie institucional.

No convertir los doce bloques en doce enlaces de primer nivel. Los contenidos extensos se pueden organizar con subsecciones y desplegables, manteniendo visible lo esencial.

### 6. Portada: contenido y adaptación de `Prompt.md`

La primera pantalla debe sentirse cinematográfica y despejada, con el texto alineado a la izquierda, un fondo ambiental y un emblema CIELO equilibrado en la zona derecha cuando haya espacio. El fondo pertenece solo al hero; el resto de la página tiene flujo vertical normal.

Texto de portada, como propuesta editorial basada en las diapositivas:

- Antetítulo: **«Círculo de Investigación Estudiantil en Litigación Oral»**.
- H1: **«CIELO. Sin límites.»**
- Introducción: **«Impulsamos la investigación jurídica y la formación en litigación oral para aprender a argumentar, defender ideas y crecer con excelencia y ética.»**
- Acción principal: **«Conoce nuestra formación»**, hacia `#formacion`.
- Acción secundaria: **«Quiero formar parte»**, hacia `#unete`.
- Referencia contextual discreta: **«Derecho · Universidad Nacional del Altiplano · Puno»**.
- Indicador de desplazamiento accesible hacia `#nosotros`.

Conservar como recurso ambiental de referencia el video indicado en `Prompt.md`:

`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_123836_11a3c5e0-713f-4bef-a8e9-7dd93bdea3b0.mp4`

Poster indicado en el mismo archivo:

`https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/693205bf-8048-456a-879e-4e0a1b85a098.webp`

Es una referencia ambiental de montaña descrita por el prompt original; no presentarla como una filmación de Puno, del campus o de actividades de CIELO. Su disponibilidad y peso deben comprobarse al implementar. Mantener `autoplay muted loop playsinline`, `object-fit: cover` y una capa azul que garantice la lectura. Tratar el video como decorativo y ofrecer un control visible de pausa/reproducción.

Con `prefers-reduced-motion`, ahorro de datos o fallo de carga, mostrar el poster; si también falla, usar fondo azul con el emblema. El texto y los botones deben estar disponibles inmediatamente. En móvil puede usarse solo el poster. No descargar ni reproducir un video pesado innecesariamente. El encuadre de Nexeus y sus posiciones absolutas no son obligatorios: adaptarlos al nuevo texto y al logo.

### 7. Nosotros: contenido institucional

Encabezado: **«Investigamos para comprender. Practicamos para defender nuestras ideas.»**

Presentación, como adaptación editorial de las diapositivas 1 y 5:

> CIELO es un espacio académico estudiantil dedicado al estudio, la investigación y el fortalecimiento de competencias en litigación oral. Su propuesta combina el análisis crítico de problemas jurídicos, la argumentación y la práctica mediante debates, audiencias y simulaciones procesales, con especial interés en el Derecho Penal.

Incorporar un bloque **«Plan estratégico 2026–2027»** para contextualizar las líneas de desarrollo. No deducir de ese período la fecha de fundación.

Reproducir fielmente los tres contenidos de la diapositiva 19, con puntuación y ortografía cuidadas:

**Misión**

> Formar estudiantes de Derecho con una sólida preparación académica y práctica mediante la investigación, el debate, la litigación oral y la participación en competencias jurídicas.

**Visión**

> Consolidar a la organización como un espacio estudiantil de referencia para la formación práctica y académica en Derecho Penal, capaz de generar investigación, desarrollar habilidades de litigación y representar a la institución en competencias jurídicas nacionales.

**Eje de gestión**

> Litigar para aprender, investigar para argumentar y competir para crecer.

No presentar esa visión como un liderazgo ya alcanzado. Evitar cifras de alumnos formados, años de trayectoria, premios, convenios o publicaciones si no se aportan evidencias.

### 8. Identidad: Atenea y Tuku

Diseñar una sección breve y memorable con dos composiciones distintas:

- **Atenea:** explicar que, según la presentación institucional, representa sabiduría, estrategia e inteligencia práctica. Utilizar el emblema propio como imagen principal y vincular el símbolo con estudio, reflexión y preparación.
- **Tuku:** presentar al búho como personaje de divulgación de CIELO. La diapositiva 3 lo describe como sabio, observador y con un toque de humor. Usar el SVG con gafas en contenidos didácticos y el búho compacto en detalles secundarios.

Dar al lema **«CIELO — Sin límites»** una presencia consistente, sin repetirlo en cada bloque. No convertir Tuku en un asistente conversacional funcional: el material solo sustenta un personaje e identidad editorial.

### 9. Modelo de formación continua

Representar como secuencia accesible de seis etapas, tomada de la diapositiva 12:

**Estudiar → Investigar → Argumentar → Litigar → Publicar → Competir.**

En escritorio puede ser una banda horizontal; en móvil debe pasar a una lista vertical, sin desbordarse ni exigir arrastrar para leer. Para cada etapa usar una frase editorial breve:

1. **Estudiar:** fortalecer bases jurídicas mediante formación continua.
2. **Investigar:** analizar problemas, jurisprudencia y legislación.
3. **Argumentar:** desarrollar razonamiento, oratoria y refutación.
4. **Litigar:** practicar con casos hipotéticos y simulaciones de audiencias.
5. **Publicar:** compartir hallazgos y materiales de divulgación.
6. **Competir:** orientar la preparación hacia retos y competencias jurídicas.

Explicar la colaboración entre áreas de la diapositiva 11: una investigación puede convertirse en publicación; una noticia, en debate; y un caso jurisprudencial, en simulación. Las frases describen el modelo propuesto, no garantizan actividades disponibles o plazas en concursos.

Desarrollar los beneficios de las diapositivas 17 y 18 en tres grupos:

- **Académicos:** análisis de problemas jurídicos, investigación, argumentación, litigación y producción de publicaciones.
- **De comunidad y gestión:** trabajo en equipo, responsabilidades, liderazgo, organización y vínculos con estudiantes y profesionales.
- **Personales:** seguridad para expresarse, recepción de críticas, disciplina, identificación de fortalezas, colaboración con personas diferentes y disposición a asumir retos.

No prometer empleo, premios, certificados ni resultados garantizados.

### 10. Comisiones y equipo de debate

Encabezado: **«Áreas de trabajo que conectan conocimiento y práctica»**. Aclaración visible: **«Líneas de organización propuestas en el plan 2026–2027»**, mientras no se confirme su activación.

Mostrar cuatro comisiones y un equipo, sin convertirlos en cinco direcciones. Cada ficha incluirá nombre, propósito, funciones y una relación con otra área. Usar contenido de las diapositivas 9 y 10:

**Comisión de Comunicaciones y Publicaciones**

- Noticias jurídicas y explicación de temas relevantes de Derecho Penal.
- Carruseles, infografías, videos y cobertura de actividades.
- Planificación de un calendario editorial mensual.
- Relación editorial propuesta: transforma aportes académicos en contenidos comprensibles.

**Comisión de Investigación Académica**

- Investigación en grupos pequeños.
- Comentarios de jurisprudencia y legislación.
- Artículos, boletines y columnas.
- Preparación progresiva de trabajos para publicación.
- Relación propuesta: aporta sustento al debate, la divulgación y las simulaciones.

**Comisión de Litigación y Simulación de Audiencias**

- Preparación constante de casos hipotéticos.
- Práctica del rol de jueces y audiencias internas simuladas.
- Retroalimentación y rúbricas sobre argumentación, teoría del caso, interrogatorio y objeciones.
- Relación propuesta: lleva el estudio jurídico al ejercicio práctico.

**Comisión de Oportunidades y Vinculación**

- Seguimiento de concursos, torneos, moot courts, seminarios y convocatorias.
- Construcción de una base de oportunidades.
- Contacto con organizaciones y universidades.
- Avisos anticipados sobre requisitos y fechas límite.
- Relación propuesta: conecta la preparación con oportunidades externas verificadas.

**Equipo de Debate y Argumentación**

- Técnicas de investigación, oratoria y refutación.
- Preparación para competencias.
- Relación propuesta: ejercita las habilidades de exposición y respuesta que nutren la litigación.

No inventar coordinadores, cantidades de integrantes, correos por comisión ni proyectos concluidos. Los botones de estas fichas expanden funciones o llevan a `#unete`; nunca enlazan a páginas inexistentes.

### 11. Organización y gestión

Mostrar una estructura sencilla a partir de las diapositivas 7 y 8, con la etiqueta **«Estructura descrita en el plan»**:

- **Presidencia:** dirección estratégica, representación institucional, supervisión de áreas y relaciones con docentes, universidades y organizaciones.
- **Vicepresidencia:** seguimiento del trabajo interno, supervisión de coordinadores y reemplazo de Presidencia.
- **Secretaría General:** actas, cronograma, registro de miembros y control de asistencia y actividades.

Mencionar las tres direcciones propuestas: **Dirección Académica**, **Dirección de Comunicaciones** y **Dirección de Relaciones Institucionales y Oportunidades**. Explicar que la junta mantiene el orden previsto en el estatuto y aborda organización de eventos y fondos según la presentación, sin inventar artículos estatutarios.

La relación jerárquica exacta entre esas direcciones y las cinco áreas anteriores no está definida en las diapositivas: no dibujar dependencias como si estuvieran confirmadas. Presentar ambos niveles con esa distinción. No asignar cargos a Aylin, Beatriz o Rosalinda: aparecen como autoras de la presentación, no como autoridades identificadas.

### 12. Publicaciones, actualidad y Tuku datos

Crear un espacio editorial con el título **«Conocimiento que se comparte»**, inspirado en la organización de Internacia y el enfoque institucional de THEMIS.

Categorías previstas: artículos, comentarios de jurisprudencia, boletines, actualidad jurídica e infografías/Tuku datos. «Podcast» aparece como destacado en la captura de Instagram, pero no existen episodios entregados: tratarlo como formato futuro, sin reproductores ni episodios ficticios.

Si se incorporan publicaciones reales, sus fichas deben incluir título, categoría, resumen, autor, fecha y destino de lectura o documento. No mostrar campos vacíos ni tiempos de lectura inventados. Incorporar búsqueda por título/tema y filtros solo si hay un catálogo real que consultar; ofrecer estado sin resultados y opción de limpiar filtros.

Estado inicial con los materiales actuales: **«Este espacio reunirá artículos, análisis y materiales de divulgación de CIELO. Puedes conocer el contenido compartido en nuestras redes.»** Añadir el acceso a Instagram, sin simular un catálogo existente ni anunciar una fecha de publicación.

La captura sobre «Terminación anticipada» demuestra la presencia de material de divulgación en una diapositiva, pero no aporta un artículo completo ni su URL. No inventar su texto, autoría, fecha o enlace. Para publicar explicaciones jurídicas sustantivas se requerirá material revisado y fuentes correspondientes; esta primera web presenta a la agrupación.

### 13. Agenda y plan de actividades

Separar **«Actividades anunciadas»** de **«Ritmo de trabajo propuesto»**. La primera puede estar vacía; la segunda siempre puede explicar fielmente el plan.

Para eventos reales futuros, preparar fichas con título, tipo, fecha, hora, modalidad, lugar o plataforma, organizador y enlace confirmado. Usar zona horaria `America/Lima`. Distinguir «Próximo», «Finalizado» y «Por confirmar» a partir de datos; no activar una inscripción si no hay convocatoria y destino válidos.

Si no existen eventos confirmados, texto sugerido: **«Aquí publicaremos las próximas actividades cuando sus fechas estén confirmadas.»** No generar fechas a partir de las frecuencias del plan ni construir una agenda ficticia.

Presentar la diapositiva 16 como una tabla o calendario de frecuencias, expresamente rotulado **«Metas del plan 2026–2027»**:

| Frecuencia propuesta | Contenido del plan |
| --- | --- |
| Semanal | Una publicación académica, una noticia o tema de actualidad y reuniones internas de comisión |
| Mensual | Una simulación de audiencia, una sesión académica, una reunión general y un informe de oportunidades |
| Cada dos meses | Un proyecto de investigación y un evento abierto |
| Semestral | Una gran simulación, una convocatoria o incorporación de miembros y evaluación de desempeño |

En un detalle desplegable, explicar que la reunión general mensual revisará: qué hicimos, qué estamos haciendo, qué necesitamos y qué haremos el próximo mes. No presentar porcentajes de cumplimiento sin registros reales.

### 14. Oportunidades y vinculación

Bloque compacto conectado con la comisión correspondiente: concursos, moot courts, torneos, seminarios y convocatorias. Si existen registros reales, mostrar organizador, requisitos, fecha límite, estado y enlace a la fuente oficial. Identificar claramente cuándo una oportunidad es externa a CIELO.

Estado inicial: **«La propuesta de vinculación contempla identificar y compartir oportunidades de formación y participación.»** Enlazar al contacto para consultas.

Internacia, THEMIS, ILI e Iter Criminis son referentes mencionados o consultados, no aliados acreditados. No crear una franja de patrocinadores con sus logos. Tampoco presentar los escudos de la universidad y facultad como convenios comerciales.

### 15. Quiero formar parte

Sección de convocatoria informativa con un tono acogedor y exigente respecto del compromiso. Encabezado propuesto: **«Tus ganas de aprender pueden ser el comienzo»**.

Incluir la idea de la diapositiva 14: interés por aprender litigación y Derecho Penal, junto con disposición para trabajar en el desarrollo de la organización.

Explicar los tipos de miembros de la diapositiva 13:

- **Miembros en formación:** capacitaciones, participación en actividades, posibilidad de rotar por comisiones y acompañamiento durante los primeros meses, según el modelo propuesto.
- **Miembros ordinarios:** progresión vinculada a participación activa, cumplimiento de tareas, participación en un proyecto y evaluación básica. No inventar duración, puntajes ni automatismos de admisión.
- **Miembros fundadores:** reconocer que la categoría figura en el plan; no inventar sus nombres, requisitos o atribuciones. Puede mencionarse brevemente, sin ofrecerla como modalidad de postulación.

Mostrar compromisos de un miembro activo: asistir a reuniones, participar en actividades, cumplir tareas, participar en al menos una simulación y colaborar en un proyecto.

Expresar de manera clara lo que **el perfil del plan no exige**: experiencia previa en litigación, conocimientos avanzados de Derecho Penal, pertenecer al décimo superior, concursos previos ni ser ya un excelente orador. El énfasis está en disposición para aprender y compromiso. No convertirlo en reglas definitivas de una convocatoria todavía no publicada.

La comparación aspirante/miembro de la diapositiva 15 puede resumirse como progresión: del interés al compromiso, del potencial al progreso, de recibir formación a contribuir y de buscar oportunidades a generarlas.

CTA inicial: **«Consultar cómo participar»**, dirigido a contacto. Usar «Postula ahora» únicamente si existe una convocatoria abierta y un formulario real confirmado. No mostrar cupos, precio, fecha límite ni admisión asegurada.

### 16. Preguntas frecuentes

Implementar desplegables accesibles con respuestas basadas en las diapositivas:

1. **¿Qué es CIELO?** Explicar el nombre completo, su carácter estudiantil y su interés por investigación, Derecho Penal y litigación oral.
2. **¿Necesito experiencia previa?** El perfil propuesto prioriza aprendizaje y compromiso; no exige experiencia previa en litigación.
3. **¿Qué habilidades puedo desarrollar?** Investigación, argumentación, oratoria, práctica de audiencias, trabajo en equipo y liderazgo.
4. **¿Cómo se trabaja?** Explicar el modelo continuo y la colaboración entre áreas como propuesta del plan.
5. **¿Cómo puedo incorporarme?** Consultar los canales de CIELO; los requisitos y fechas dependen de la convocatoria que se publique.
6. **¿Pueden participar estudiantes de otras universidades o ciclos?** El material no define ese alcance: indicar que debe consultarse con la agrupación, sin afirmar admisión universal ni exclusiones.
7. **¿Dónde conocer las actividades?** Agenda y canales sociales identificados, sin prometer frecuencia real de actualización.

### 17. Contacto, redes y pie

Usar los siguientes datos con su procedencia y estado bien diferenciados en la configuración:

| Dato | Evidencia | Tratamiento inicial |
| --- | --- | --- |
| Puno, Perú | Diapositivas 4–6 | Mostrar como ubicación general |
| Instagram `@cielo.fcjp` | Diapositiva 5 | Enlace propuesto `https://www.instagram.com/cielo.fcjp/`, construido desde el usuario visible; comprobar destino al implementar |
| `cielo.litigacion@gmail.com` | Captura de la diapositiva 6 | Puede usarse como canal aportado para `mailto:`; confirmar vigencia antes de publicar |
| `942 556 253` | Captura de la diapositiva 6 | Dato visible, pendiente de confirmar como contacto actual; no asumir que admite WhatsApp |
| «Jr. Grau, Puno, Perú» | Captura de la diapositiva 6 | Dirección incompleta: mantener solo Puno en la web inicial; no inventar número, mapa ni coordenadas |
| Facebook «CIELO - Litigación Oral FCJP UNA Puno» | Diapositiva 6 | Nombre visible, URL completa no aportada; no reconstruir un identificador truncado |
| YouTube | URL codificada en la captura de la diapositiva 6 | No crear enlace hasta disponer del destino inequívoco |
| Google Sites `sites.google.com/view/cielo-unap` | Diapositiva 6 | Antecedente visible, no destino principal automático de la nueva web |

No afirmar que estos canales se comprobaron en vivo cuando solo se leyeron en una captura.

Primera versión: ofrecer un enlace de correo y el acceso social que pueda validarse. Puede incluirse «Copiar correo» con aviso accesible y alternativa de selección manual. No hace falta un formulario de envío sin backend. Si posteriormente se conecta uno, exigir validación, mensajes reales de error/éxito y un destino efectivo; nunca simular «Mensaje enviado».

Pie inspirado en el acabado translúcido de `Prompt.md`, pero en flujo normal al final de la página, con contraste suficiente y alternativa opaca si no existe `backdrop-filter`. Incluir marca CIELO, lema, enlaces agrupados a Institución, Formación y Comunidad, contacto y año actual. Omitir símbolos de marca registrada y páginas legales vacías. Los iconos sociales aparecen solo cuando tienen destino válido.

### 18. Animación e interacción

Recuperar el ritmo de entrada de `Prompt.md` sin sacrificar lectura: antetítulo suave, aparición del título, párrafo y botones con pequeños desplazamientos. Duraciones aproximadas de 450–900 ms y escalonados breves, usando Web Animations API o CSS. Movimiento de 8–18 px, reducido en móvil. No animar todo continuamente ni ocultar información hasta finalizar una secuencia.

Para secciones inferiores, entradas discretas una sola vez mediante `IntersectionObserver`; mantener contenido visible por defecto si falla JavaScript. Respetar `prefers-reduced-motion` tanto para transiciones como para video y desplazamiento suave.

Interacciones reales: navegación por anclas, menú móvil, desplegables, control del video y copia de correo si se incluye. Filtros y búsqueda solo cuando existan contenidos para filtrar. Evitar enlaces `href="#"`, botones ornamentales, carruseles automáticos y efectos que dificulten seleccionar texto.

### 19. Adaptación, accesibilidad y rendimiento

- `lang="es"`, UTF-8 y viewport adaptable. Un solo H1, jerarquía de títulos coherente y regiones `header`, `nav`, `main`, `section` y `footer`.
- Añadir «Saltar al contenido», foco visible y navegación completa con teclado. Menú y desplegables deben comunicar estado y devolver el foco de forma predecible cuando corresponda.
- Objetivo de contraste mínimo 4.5:1 en texto normal y 3:1 en texto grande. No usar dorado tenue para párrafos sobre blanco sin medir el contraste.
- Controles de al menos 44 × 44 px como objetivo de diseño táctil; no depender exclusivamente del color o del hover.
- Probar 360, 390, 768, 1024 y 1440 px, además de zoom al 200 %. No usar `overflow: hidden` para tapar errores ni bloquear el desplazamiento de la página.
- `scroll-margin-top` para que los títulos no queden detrás de la cabecera. No fijar alturas que corten misión, visión o nombres largos de comisiones.
- Imágenes con dimensiones reservadas, carga diferida fuera de la primera pantalla y sin dependencias decorativas pesadas. No incrustar las veinte diapositivas ni cargar el ZIP.
- Sin feeds sociales incrustados ni rastreadores por defecto; los enlaces a redes bastan para esta versión.
- Título propuesto: **«CIELO — Investigación y Litigación Oral | Puno»**. Descripción: **«Conoce CIELO, su propuesta de investigación jurídica, formación en litigación oral y participación estudiantil en Puno.»**
- Añadir metadatos sociales solo con una imagen de vista previa existente. No inventar URL canónica, dominio, dirección postal completa ni datos estructurados de eventos que no existen.

### 20. Modelo de contenido y estados

Preparar un objeto de configuración fácil de editar con nombre, lema, descripción, contactos, enlaces y período del plan. Mantener colecciones independientes para publicaciones, eventos y oportunidades, inicialmente vacías si no hay datos reales.

Para cada futuro registro permitir: identificador, título, resumen, categoría, fechas pertinentes, fuente, enlace y estado editorial. En eventos añadir modalidad y lugar; en publicaciones, autor y cuerpo/documento; en oportunidades, organizador y requisitos. No renderizar metadatos incompletos como si estuvieran confirmados.

Separar estos conceptos:

- **Información institucional aportada:** identidad, misión, visión y símbolos.
- **Propuesta del plan:** comisiones, frecuencias y desarrollo de miembros.
- **Registro publicado:** contenido o evento con material real y destino válido.
- **Dato pendiente:** contacto sin vigencia confirmada, persona sin cargo documentado, fecha o enlace ausente.

Los pendientes se anotan en la documentación de entrega. La interfaz pública usa textos naturales de ausencia de contenido, sin desplegar códigos internos, etiquetas «TODO» ni ejemplos ficticios presentados como reales.

### 21. Criterios de aceptación y entrega

La entrega será satisfactoria si:

1. La portada identifica a CIELO y permite avanzar hacia formación y participación.
2. El sitio integra el estilo de `Prompt.md` con una estructura institucional navegable y contenido en español.
3. Misión, visión y eje de gestión corresponden a la diapositiva 19.
4. El modelo incluye las seis etapas, las cuatro comisiones y el equipo de debate, sin confundirlos con las tres direcciones.
5. Las metas 2026–2027 se presentan como metas y los eventos sin confirmar no aparecen como disponibles.
6. Se utilizan los SVG coloreados con el contraste correcto, preservando originales y proporciones.
7. Los estados vacíos resultan útiles y no contienen artículos, miembros, cifras, logros o convenios inventados.
8. Todos los botones y enlaces visibles tienen un comportamiento coherente; las consultas no aparentan enviarse sin destino real.
9. La web se puede leer sin JavaScript, sin video y sin fuentes externas.
10. Funciona en móvil, teclado y movimiento reducido, sin cortes ni desplazamiento horizontal accidental.
11. No aparecen textos, nombres, marca ni enlaces de Nexeus en la interfaz.
12. Se entrega `index.html`, los recursos adicionales realmente necesarios y una breve guía con cómo abrir la página, editar contenido y completar datos pendientes. Informar qué comprobaciones se hicieron y cualquier limitación visual pendiente; no declarar revisiones que no se ejecutaron.

Diseña e implementa el resultado completo dentro de este alcance. Antes de ampliar funciones, resuelve la presentación, legibilidad, navegación y fidelidad a los datos existentes. Los datos faltantes no impiden construir la web: utiliza los estados definidos y deja una lista precisa de lo que falta para su publicación definitiva.

## Fin del prompt

---

## Trazabilidad de las diapositivas

Ruta base: `Imagenes diapos/Blue Corporate Modern Business Proposal Presentation/`.

| Imagen | Información incorporada o criterio aplicado |
| --- | --- |
| `1.png` | Plan 2026–2027, presentación académica y autores del documento, sin atribuirles cargos |
| `2.png` | Instituciones aspiracionales; no son convenios acreditados |
| `3.png` | Atenea, Tuku, azul y lema; corrección de la versión inglesa |
| `4.png` | Identidad visual y jerarquía de emblemas |
| `5.png` | Nombre completo, Instagram y enfoque académico; no reutilizar conteos de seguidores |
| `6.png` | Canales visibles, ubicación y antecedente de divulgación; enlaces parciales pendientes |
| `7.png` | Junta, tres direcciones y reorganización propuesta |
| `8.png` | Funciones de Presidencia, Vicepresidencia y Secretaría General |
| `9.png` | Comunicaciones, Investigación y Litigación |
| `10.png` | Oportunidades y equipo de Debate |
| `11.png` | Colaboración transversal entre áreas |
| `12.png` | Modelo de seis etapas y formación continua |
| `13.png` | Miembros en formación, ordinarios y fundadores |
| `14.png` | Perfil de participación y compromisos |
| `15.png` | Progresión aspirante/miembro y experiencia no exigida en el perfil |
| `16.png` | Metas semanales, mensuales, bimestrales y semestrales; reunión general |
| `17.png` | Beneficios académicos, de liderazgo y comunidad |
| `18.png` | Desarrollo personal, disciplina y recepción de críticas |
| `19.png` | Misión, visión y eje de gestión |
| `20.png` | Cierre de presentación; no aporta información institucional adicional |

Pendientes para una publicación definitiva: autoridades y cargos actuales; activación real de comisiones; convocatoria vigente, requisitos y alcance de admisión; catálogo de publicaciones; fechas de eventos; URL exacta de Facebook y YouTube; vigencia del correo y teléfono; dominio final y material fotográfico propio. El documento ya define cómo avanzar sin inventarlos.
