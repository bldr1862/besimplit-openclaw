# Flujos ManyChat - Besimplit

## 1. Flujo ManyChat - Petróleo (Bediesel) – Frío

> **Nota:** Este flujo asume que el lead viene de una campaña de petróleo (Bediesel) y que ya capturamos en Meta:
> - Escenario de abastecimiento (camión surtidor / estanques / proveedor / otro)
> - Litros/mes (opción múltiple)
> 
> El flujo se dispara según el `ad_name` / `adset_name` de la campaña de petróleo.

### Trigger

- Nuevo lead desde formulario de Meta **de la campaña de petróleo**.
- Condición en ManyChat: `ad_name` o `adset_name` contiene "Petroleo" (o el texto que definas en el nombre del conjunto/anuncio).

Custom fields recomendados en ManyChat:

- `petroleo_escenario` → `camion` / `estanque` / `proveedor` / `otro` (desde Meta).
- `petroleo_litros_mes` → `<10k` / `10k-30k` / `>30k` (desde WA).
- `petroleo_cuando_llamar` → `hoy` / `mañana` / `otro`.

---

### Escenario 1 – Camión surtidor propio

**Mensaje 1 – Saludo + litros**

> Hola {{first_name}}, soy de Besimplit.  
> Me llegaron tus datos y vi que tienen **camión surtidor propio** para abastecer las máquinas. Justo ahí es donde más valor aporta nuestro sistema de control de petróleo.  
>  
> Para dimensionar bien tu operación, ¿cuántos litros de petróleo consumen aproximadamente al mes?

[Usuario responde → guardar en `petroleo_litros_mes`]

**Mensaje 2 – Mini pitch + uso de litros**

> Gracias {{first_name}} 🙌  
>  
> Con **{{petroleo_litros_mes}} al mes** hay mucha plata pasando por el camión surtidor.  
>  
> Lo que hace Besimplit es que el chofer registra cada carga (máquina, litros, horómetro/km) desde el celular, y en la oficina se ve todo ordenado por máquina y faena, sin planillas ni fotos por WhatsApp.  
>  
> Así se puede controlar el rendimiento de cada equipo e incluso las horas de trabajo.

**Mensaje 3 – Preguntar cuándo llamar**

> ¿Cuándo te puedo llamar 10–15 minutos para ver cómo lo están manejando hoy y si esto hace sentido para ustedes?

Botones:
- Hoy  
- Mañana  
- Otro momento

**Mensaje 4 – Confirmación**

- Si **Hoy**:
  > Perfecto 👍  
  > Te llamo hoy para revisar cómo están controlando el combustible.

- Si **Mañana**:
  > Perfecto 👍  
  > Te llamo mañana para revisar cómo están controlando el combustible.

- Si **Otro momento**:
  > De acuerdo 🙂  
  > Cuando tengas un espacio, me avisas por aquí y coordinamos la llamada.

En todos los casos, guardar en `petroleo_cuando_llamar` el valor elegido.

---

### Escenario 2 – Estanques móviles o fijos

**Mensaje 1 – Saludo + litros**

> Hola {{first_name}}, soy de Besimplit.  
> Me llegaron tus datos y vi que usan **estanques móviles o fijos** para abastecer las máquinas. Es un caso muy común entre nuestros clientes.  
>  
> Para dimensionar bien tu operación, ¿cuántos litros de petróleo consumen aproximadamente al mes?

[Usuario responde → guardar en `petroleo_litros_mes`]

**Mensaje 2 – Mini pitch**

> Gracias {{first_name}} 🙌  
>  
> Con **{{petroleo_litros_mes}} al mes**, tener claro qué máquina se llevó qué cantidad desde los estanques puede marcar mucha diferencia en costos.  
>  
> Con Besimplit, cada vez que se carga desde el estanque se registra en el celular (máquina, litros, horómetro/km) y en la oficina ves todo por máquina y faena, sin depender de papeles ni fotos sueltas.

**Mensaje 3 – Preguntar cuándo llamar**

> ¿Cuándo te puedo llamar 10–15 minutos para ver cómo lo están manejando hoy y si esto hace sentido para ustedes?

Botones y confirmaciones: igual que en el escenario 1.

---

### Escenario 3 – Proveedor lleva el petróleo y alguien interno registra

**Mensaje 1 – Saludo + litros**

> Hola {{first_name}}, soy de Besimplit.  
> Me llegaron tus datos y vi que tienen un **proveedor de petróleo** que abastece las máquinas y alguien interno registra las cargas. Es un esquema muy común en faenas.  
>  
> Para dimensionar bien tu operación, ¿cuántos litros de petróleo consumen aproximadamente al mes?

[Usuario responde → guardar en `petroleo_litros_mes`]

**Mensaje 2 – Mini pitch (ajustado)**

> Gracias {{first_name}} 🙌  
>  
> Con **{{petroleo_litros_mes}} al mes**, es clave tener **trazabilidad clara de cada carga** para evitar pérdidas y malos entendidos entre lo que entrega el proveedor y lo que se registra.  
>  
> Besimplit permite que esa persona registre cada carga desde el celular (máquina, litros, horómetro/km) y que en la oficina se pueda cuadrar fácil lo que entregó el proveedor con lo que realmente se cargó a las máquinas.

**Mensaje 3 – Preguntar cuándo llamar**

> ¿Cuándo te puedo llamar 10–15 minutos para revisar cómo lo están haciendo hoy y ver si te ayuda a tener esa trazabilidad?

Botones y confirmaciones: igual que en el escenario 1.

---

### Escenario 4 – Otro tipo de abastecimiento

**Mensaje 1 – Saludo + litros**

> Hola {{first_name}}, soy de Besimplit.  
> Me llegaron tus datos y vi que abastecen de una forma distinta a camión, estanques o proveedor en faena. Igual podemos revisar tu caso 🙂  
>  
> Para dimensionar bien tu operación, ¿cuántos litros de petróleo consumen aproximadamente al mes?

[Usuario responde → guardar en `petroleo_litros_mes`]

**Mensaje 2 – Mini pitch genérico**

> Gracias {{first_name}} 🙌  
>  
> Con **{{petroleo_litros_mes}} al mes**, tener claro qué máquina se llevó qué cantidad de combustible puede marcar una diferencia grande en costos, independiente de cómo abastecen hoy.  
>  
> Besimplit permite registrar cada carga desde el celular (máquina, litros, horómetro/km) y tener la info ordenada por equipo y faena, en lugar de depender solo de papeles o planillas.

**Mensaje 3 – Preguntar cuándo llamar**

> ¿Cuándo te puedo llamar 10–15 minutos para entender mejor tu forma de trabajo y ver si esto encaja en tu operación?

Botones y confirmaciones: igual que en el escenario 1.

---

## 2. Flujo ManyChat - Plan de Gestión de Activos (mantención, doc, checklist)

*(sin cambios respecto a la versión anterior, se mantiene para referencia futura)*

### Paso 1 – Mensaje inicial

> Hola {{first_name}} 👋  
>  
> Gracias por dejar tus datos para conocer mejor cómo gestionar tus máquinas y flota.  
>  
> ¿Te puedo hacer algunas preguntas rápidas para entender cómo están manejando hoy mantenciones, documentos y checklists?

Botones:
- **Sí, claro**  
- **Prefiero que me envíes info primero**

**Si elige “Prefiero que me envíes info primero”**:

> Te cuento en simple:  
>  
> En Besimplit tenemos un **plan de gestión de activos** que te ayuda a:  
> • Planificar mantenciones preventivas  
> • Registrar correctivas con su costo  
> • Mantener documentos al día  
> • Hacer checklists diarios desde el celular  
>  
> Si te parece, igual te hago 2–3 preguntas rápidas para ver si encaja con tu operación 👇

Botón: **Ok, hazme las preguntas**

---

### Paso 2 – Tipo de operación

> ¿En qué tipo de operación usan principalmente las máquinas?

Botones:
- Construcción / obras civiles  
- Áridos / plantas  
- Minería  
- Forestal / agrícola  
- Rental de maquinaria  
- Otra

Respuesta contextual:

> Perfecto, en operaciones como {{industria}} es muy común ver:  
> • Mantenciones preventivas hechas "cuando se acuerdan"  
> • Faltan datos claros de correctivas y costos  
> • Documentos (seguros, revisiones, licencias) repartidos en Excel y carpetas

---

### Paso 3 – Tamaño de flota

> Aproximadamente, ¿cuántas máquinas o equipos críticos tienen hoy?

Botones:
- Menos de 10  
- Entre 10 y 20  
- Entre 20 y 50  
- Más de 50

Mensaje breve según rango:

- Menos de 10:
  > Gracias, incluso con pocas máquinas se puede justificar bien el orden en mantenciones y documentos.
- 10 o más:
  > Ok, ya con ese tamaño de flota tener todo en Excel y papel suele volverse inmanejable.

---

### Paso 4 – Cómo gestionan hoy mantenciones y documentos

> ¿Cómo gestionan hoy las mantenciones y documentos de las máquinas?

Botones:
- Planillas Excel + papel  
- Sistema propio / ERP  
- No lo tenemos muy ordenado  
- Otro

Respuesta contextual:

- Si "Excel + papel" o "No lo tenemos muy ordenado":
  > Es el escenario más común. Ahí es donde más impacta tener todo centralizado con alertas e historial.

- Si "Sistema propio / ERP":
  > Súper. Lo importante es ver si hoy tienen visibilidad fácil de: qué se le ha hecho a cada máquina, cuánto ha costado y qué documentos están por vencer.

---

### Paso 5 – Prioridad principal

> ¿Qué te preocupa más hoy respecto a tus máquinas?

Botones:
- Paradas inesperadas / fallas  
- Multas / problemas por papeles  
- No saber cuánto gastamos en cada máquina  
- Todo lo anterior

Respuesta:

> Entendido, eso nos ayuda a enfocarnos en lo que más duele en tu caso.

---

### Paso 6 – Mini pitch antes de pedir llamada

> Para que tengas una idea concreta:  
>  
> 🔹 Con el plan de gestión de activos de Besimplit puedes tener **mantenciones preventivas planificadas**, con alertas antes de que toque cada servicio.  
> 🔹 Cada correctiva queda registrada con su costo e impacto en horas de detención, para identificar máquinas "tragaplata".  
> 🔹 Y los documentos de máquinas y operadores quedan centralizados, con avisos de vencimiento para evitar multas y detenciones.  
>  
> Lo mejor es revisar tu caso en una llamada corta (10–15 min) y ver si tiene sentido para tu flota.

> ¿Te parece si coordinamos una llamada?

Botones:
- **Sí, hoy**  
- **Sí, mañana**  
- **Otro día / Enviar info por correo**

---

### Paso 7 – Captura de horario / cierre

**Si elige “Sí, hoy” o “Sí, mañana”**:

> Perfecto 👍  
>  
> ¿En qué horario te acomoda más que te llamemos? (por ejemplo, "entre 10:00 y 12:00" o "después de las 16:00")

[Respuesta libre]

> Súper. Nuestro equipo te contactará en ese rango horario para entender bien cómo están gestionando hoy las mantenciones, documentos y checklists, y ver si el plan de gestión de activos les aporta valor.  
>  
> Mientras tanto puedes revisar más info aquí:  
> 👉 **[enlace a la landing de Gestión de Activos]**

**Si elige “Otro día / Enviar info por correo”**:

> Ningún problema 🙂  
>  
> ¿Prefieres que primero te enviemos un resumen por correo y luego veamos si agendamos llamada?

Botones:
- Sí, envía resumen  
- Prefiero coordinar llamada más adelante

Si **"Sí, envía resumen"**:

> Perfecto, te enviaremos un resumen del plan de gestión de activos (mantenciones, documentos y checklists) y quedamos atentos para cuando quieras hablar.
