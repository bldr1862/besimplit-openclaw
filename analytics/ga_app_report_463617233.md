# GA4 App Usage Report - Plataforma Besimplit (Últimos 28 días)

Propiedad (app): **463617233**

## 1. Resumen de actividad

Consulta directa a la Google Analytics Data API (`runReport` con métricas `activeUsers` y `sessions` sin dimensiones) entrega:

- Usuarios activos (28 días): **235**
- Sesiones (28 días): **2.848**

Esto implica, en promedio aproximado:

- ~12 sesiones por usuario activo en el período.

> Nota: Estos valores vienen de un `runReport` agregado sin dimensiones, por eso aparecen como una sola fila con métricas.

## 2. Pantallas / vistas más usadas

Usando la dimensión `unifiedPagePathScreen` (que corresponde en la UI a "Page path and screen class") y la métrica `screenPageViews`, las 10 rutas más vistas en los últimos 28 días son:

| Ruta (unifiedPagePathScreen)                                                                 | Vistas (screenPageViews) |
|----------------------------------------------------------------------------------------------|--------------------------|
| `/machines/list`                                                                             | 3.784                    |
| `/projects/list`                                                                             | 2.939                    |
| `/hhrr/list`                                                                                 | 2.375                    |
| `/machines/maintenance/summary/`                                                             | 855                      |
| `/projects/reports/list/bcabec02-3f7f-4ed1-b443-fedd58d16edc/`                               | 848                      |
| `/projects/aridos/project-outgoing-movement/new/bcabec02-3f7f-4ed1-b443-fedd58d16edc`       | 602                      |
| `/formularios/list/`                                                                         | 600                      |
| `/projects/diesel/project-diesel/list/aa895a3b-6c4c-46c9-9739-2618df91d154/`                | 595                      |
| `/projects/aridos/project-trucks-reports/list/bcabec02-3f7f-4ed1-b443-fedd58d16edc`         | 559                      |
| `/general/diesel/list/`                                                                      | 536                      |

### Lecturas rápidas

- **Flota / máquinas** domina el uso:
  - `/machines/list` es la pantalla más vista (3.784 vistas), lo que sugiere que el listado de máquinas es un punto central del trabajo diario.
  - `/machines/maintenance/summary/` también aparece alto (855 vistas), señal de que el resumen de mantención tiene uso real.

- **Proyectos** también es muy relevante:
  - `/projects/list` tiene casi tantas vistas como máquinas.
  - Varias rutas específicas de proyectos (`/projects/reports/...`, `/projects/aridos/...`, `/projects/diesel/...`) aparecen entre las top 10.

- **Recursos humanos** tiene peso propio:
  - `/hhrr/list` está en tercer lugar (2.375 vistas), indicando que la gestión de personal dentro de la plataforma se usa bastante.

- **Formularios y diésel general**:
  - `/formularios/list/` (600 vistas) muestra adopción del módulo de formularios/checklists.
  - `/general/diesel/list/` (536 vistas) indica uso del módulo de diésel a nivel general, además de las vistas específicas por proyecto.

En resumen, en los últimos 28 días la plataforma se ha usado principalmente para:

1. **Gestión de flota y mantenciones** (`/machines/list`, `/machines/maintenance/summary/`).
2. **Gestión de proyectos y sus reportes** (rutas `/projects/...`).
3. **Gestión de RRHH** (`/hhrr/list`).
4. **Formularios / checklists y control de diésel** (`/formularios/list/`, `/general/diesel/list/`).

Este uso real respalda muy bien las propuestas de valor que estamos trabajando (flota operativa, control de combustible, gestión de activos y formularios/checklists) y se puede usar como evidencia cuando hablemos de adopción en demos y material comercial.
