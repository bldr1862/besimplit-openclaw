# Pipeline Leads Bediesel – Tabla base

Usa esta tabla para registrar todos los leads de la campaña de petróleo (Bediesel).  
Con esto después se pueden calcular tasas de contacto, demo y cierre, por segmento.

> Nota: las primeras filas de ejemplo incluyen los leads actuales (Edison, Italo, Cristian).

## Tabla de leads

| ID | Fecha lead | Nombre | Empresa                     | Ciudad / Región | Segmento (Construcción/Agro/Transporte/etc.) | Litros/mes aprox. | Escenario (camión/estanque/proveedor)               | Origen (Video/Imagen/?) | WhatsApp flujo ManyChat | WhatsApp directo Bastian | Llamada hecha | Demo agendada | Demo realizada | Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido) | Notas clave |
|----|------------|--------|-----------------------------|-----------------|----------------------------------------------|--------------------|-------------------------------------------------------|-------------------------|--------------------------|---------------------------|--------------|--------------|----------------|------------------------------------------------------------------------|------------|
| 1  | 2026-02-05 | Edison | Maquinarias Torres y White | Puerto Montt    | Maquinaria / Construcción                    | ~10.000 L/mes      | Camión surtidor propio + estanque Petroline 1.000 L | ?                       | No                       | Sí                        | Sí           | (pendiente)  | (pendiente)    | Propuesta enviada                                                                 | 9 camiones, 5 máquinas, 2 vehículos menores. Sospecha de robo; registro en hoja. |
| 2  | 2026-02-06 | Italo  | Agroservicios Moratelli    | Litueche        | Agro                                         | 10.000–20.000 L/mes| Estanques móviles/fijos en faena + estanque 5.000 L  | ?                       | Sí                       | Sí                        | Sí           | (pendiente)  | (pendiente)    | Propuesta enviada                                                                 | 6 equipos; tractor 700–800 L, 400–500 HP; foco en orden, no robo.               |
| 3  | 2026-02-06 | Cristian | Transportes JR            | (pendiente)     | Transporte de áridos/caminos (estimado)      | (pendiente)        | Camión surtidor propio                               | ?                       | Sí                       | No                        | No           | No           | No             | Lead en espera (respondió ManyChat, no respondió WhatsApp)                         | Falta levantar litros/mes y dolor principal.                                     |
| 4  | 2026-02-07 | Jorge  | Abba Servicios Limitada    | (pendiente)     | Construcción / Servicios                     | (pendiente)        | Camión surtidor propio                               | ?                       | No                       | No                        | No           | No           | No             | Lead nuevo (formulario Meta, no respondió ManyChat)                               | Camión surtidor propio; falta levantar litros/mes y tamaño de flota.             |
| 5  | 2026-02-07 | Jairo  | Transporte VASOVICH SpA    | (pendiente)     | Transporte / Faenas                          | +30.000 L/mes      | Estanques móviles o fijos en faena                    | ?                       | Sí                       | No                        | No           | No           | No             | Lead nuevo (respondió ManyChat, falta contacto directo)                            | Alto consumo (>30.000 L/mes); estanques móviles/fijos en faena.                   |
| 6  | 2026-02-07 | Fernando | Concremag S.A.           | (pendiente)     | Construcción / Hormigones                    | (pendiente)        | Proveedor lleva petróleo + registro interno           | ?                       | No                       | No                        | No           | No           | No             | Lead nuevo (formulario Meta, no respondió ManyChat)                               | Proveedor externo abastece; alguien interno registra las cargas.                 |

## Cómo usar la tabla

1. **Cada nuevo lead** → añadir una fila con:
   - Fecha en que entró (fecha del formulario o del primer contacto).  
   - Nombre, empresa, ciudad/región, segmento.  
   - Litros/mes aproximados (cuando los tengas).  
   - Escenario de abastecimiento (camión surtidor, estanques, proveedor, mixto).  
   - Origen (cuando logremos guardar ad_id/ad_name).  
   - Si completó flujo de ManyChat, si respondió WhatsApp directo, si se hizo llamada, demo, etc.

2. **Actualizar Estado actual** a medida que avanza:
   - `Lead` → `Lead contactado` → `Demo agendada` → `Demo realizada` → `Propuesta enviada` → `Cerrado ganado / perdido`.

3. **Indicadores que podrás sacar después:**
   - % de leads que responden WhatsApp (flujo + directo).  
   - % de leads con llamada efectiva.  
   - % que llegan a demo.  
   - Tasa de cierre (ganados / total).  
   - Comparar por segmento (Construcción vs Agro vs Transporte), por litros/mes y por escenario.
