# Playbook Comercial Bediesel (Control de Petróleo)

Versión inicial – Bastian / Besimplit

---

## 1. Posicionamiento de Bediesel

**Problema central:**
- El diésel no cuadra a fin de mes.
- Se pierde tiempo cuadrando papeleo y planillas.
- No se sabe con precisión el rendimiento por máquina ni dónde se va el combustible.

**Propuesta de valor:**
- Bediesel registra cada carga directamente desde el camión surtidor (o estanque) y centraliza todo el consumo de combustible por máquina y faena.
- Con eso, las constructoras pueden:
  - Detectar pérdidas y desvíos de 1–2% en diésel.
  - Reducir horas administrativas de digitación y cuadratura.
  - Tomar decisiones sobre rendimientos de máquinas y proyectos.

**Modelo comercial base:**
- 1 UF por cada 10.000 L mensuales estimados.  
  Incluye: control de petróleo + gestión documental básica + mantención asociada a las máquinas que consumen.

---

## 2. Estructura de campañas (pensado para hoy y futuro)

### 2.1. Frío (Meta Ads → formulario → WhatsApp → llamada)

**Objetivo:** generar leads de empresas con consumo de diésel relevante y camión surtidor / estanques.

- Campaña: **FRÍO – LEADS – Petróleo** (ya existe).
- Creativos:
  - Anuncio actual "Petroleo" (el que mejor CPL está mostrando).
  - Anuncio de video "problema → solución" (a crear con Remotion).
- Destino recomendado:
  - Landing actual: `/plataforma/control-de-combustible/`.
  - Evitar mandar tráfico frío a la home `/` para este mensaje.

**Flujo:**
1. Usuario ve anuncio en Meta (FB/IG) sobre control de combustible.
2. Completa formulario de Meta:
   - Nombre, empresa, correo, fono.
   - Escenario de abastecimiento (camión surtidor / estanques / proveedor / otro).
3. Automatización (Make/Zapier/Meta → ManyChat):
   - Crea contacto en WhatsApp.
   - Dispara flujo "Petróleo – Frío" en ManyChat.
4. ManyChat pregunta por WhatsApp:
   - Confirma escenario.
   - Pide **litros/mes** (valor libre, no rango).
   - Pregunta "¿Cuándo te puedo llamar 10–15 minutos?" con botones: Hoy / Mañana / Otro momento.
5. Cierre del flujo:
   - Guarda campos: `petroleo_escenario`, `petroleo_litros_mes`, `petroleo_cuando_llamar`.
   - Notifica a Bastian (o CRM) para que programe y haga la llamada.

### 2.2. Templado (remarketing / seguimiento)

**Objetivo:** recapturar leads que visitaron la landing de petróleo o interactuaron con anuncios, pero aún no pidieron demo.

Ideas (para una segunda fase):
- Campaña de remarketing con creativos tipo:
  - "¿Todavía cuadras el combustible con papel y WhatsApp?".
  - "¿Sabes cuántos litros pierdes al mes en tus obras?".
- Públicos:
  - Visitantes de `/plataforma/control-de-combustible/`.
  - Personas que vieron el 50%+ del video de Bediesel.

### 2.3. Caliente (leads ya contactados / en negociación)

**Objetivo:** mover leads que ya tuvieron llamada/demo hacia el cierre.

Acciones:
- Envío de material por WhatsApp/correo:
  - Mini PDF/resumen de Bediesel.
  - Casos rápidos de ahorro (ejemplo con 50.000 L/mes).
  - Checklists de implementación.
- Remarketing de prueba de 30 días o similar, si en el futuro lo implementas.

---

## 3. Guion de llamada inicial (10–15 minutos)

### 3.1. Objetivo de la llamada

- Confirmar contexto (litros/mes, escenario de abastecimiento, forma actual de control).
- Identificar el principal dolor (pérdidas, tiempo, falta de visibilidad).
- Calificar tamaño y encaje.
- Cerrar una **demo corta** (no vender todo en la primera llamada).

### 3.2. Apertura

> Hola [Nombre], ¿cómo estás? Habla Bastian de Besimplit.
>
> Te llamo porque rellenaste el formulario de **control de petróleo** y marcaste que tienen [camión surtidor propio / estanques / proveedor]. ¿Tienes 10 minutos ahora, o prefieres que agendemos para más tarde?

Si dice que puede ahora, sigues. Si no, reservas día/hora y listo.

### 3.3. Preguntas clave (no más de 3–4)

1. **Litros/mes** (si no lo tienes de WA):

> Para dimensionar, ¿más o menos cuántos litros de diésel están cargando al mes entre todas las máquinas?

2. **Cómo controlan hoy:**

> Hoy, ¿cómo están registrando las cargas del camión / estanques?  
> ¿Papel, planillas, fotos por WhatsApp, algún sistema?

3. **Principal dolor:**

> ¿Qué es lo que más te complica con el combustible hoy?  
> (Ej: no cuadra a fin de mes, sospechas de pérdidas, mucho tiempo en cuadrar, no saben rendimientos, etc.)

4. **Actores clave (opcional, si se da):**

> ¿Quién más se involucra en esto?  
> (jefe de maquinaria, jefe de obra, administración)

### 3.4. Mini pitch adaptado

Usa sus respuestas para encajar el mensaje:

> Te explico muy rápido cómo funciona Bediesel:  
> - El chofer del camión surtidor registra cada carga desde el celular: máquina, litros, horómetro o km.  
> - Toda esa info llega directa a la plataforma, donde puedes ver **rendimientos por máquina y por faena**, y comparar consumo real vs esperado.  
> - Con eso, es mucho más fácil detectar pérdidas de 1–2% y dejar de depender de papel o planillas.

Si ya tienes litros/mes, mete un ejemplo:

> Con el consumo que me comentaste (~[X] L/mes), un 1% de pérdida son [X * 0,01] L al mes.  
> A precio actual, eso ya es más que el costo mensual de Bediesel, que está en torno a 1 UF por cada 10.000 L.

### 3.5. Cierre hacia demo

> En vez de seguir contándotelo por teléfono, lo mejor es que lo veas.  
> ¿Te parece si agendamos una demo de 20–30 minutos, donde te muestro:  
> - cómo registra el chofer desde el camión,  
> - cómo se ven los reportes de rendimientos,  
> - y un par de casos de clientes que estaban en una situación parecida?

> ¿Qué día y hora te calza mejor?

Registra inmediatamente:
- Fecha y hora de demo.
- Litros/mes (si salió).
- Escenario real (si cambió respecto del formulario).
- Dolor principal.

---

## 4. Seguimiento post-llamada

### 4.1. Si agenda demo

Envíale por WhatsApp o correo (máx. 1 mensaje corto):

> Hola [Nombre], gracias por el tiempo.  
> Te dejo confirmado: **demo de Bediesel el [día] a las [hora]**.  
> En la demo te muestro: registro desde camión, reportes de consumo y cómo detectar pérdidas de 1–2%.

### 4.2. Si no agenda demo (o queda “dando vueltas”)

- Anotar motivo: no tiene tiempo, no decide él, ve poco beneficio, etc.
- Programar un **recordatorio** para volver a contactarlo en 2–4 semanas (según el caso).

---

## 5. Métricas a mirar mes a mes

1. **Embudo básico:**
   - Impresiones → clics → formularios enviados → leads contactados → demos realizadas → cierre.

2. **Por escenario:**
   - Camión surtidor propio.
   - Estanques móviles/fijos.
   - Proveedor que abastece en faena.

3. **Por tamaño (litros/mes):**
   - < 30.000 L/mes.  
   - 30.000–100.000 L/mes.  
   - > 100.000 L/mes.

4. **Por origen de campaña/anuncio:**
   - Anuncio "Petroleo" vs nuevo video vs imagen.

---

## 6. Checklist rápido para Bediesel

Antes de implementar con un cliente:

- [ ] Litros/mes aproximados definidos.  
- [ ] Escenario de abastecimiento claro (camión / estanques / proveedor).  
- [ ] Personas que registran (chofer, encargado de petróleo).  
- [ ] Quién revisa los reportes (jefe de maquinaria, administración).  
- [ ] Decidido desde qué fecha se empiezan a registrar cargas en Bediesel.  
- [ ] Primer informe de prueba acordado (ej: cierre del primer mes, rendimientos por máquina).
