# Meta Ads - Creatives & Adsets Overview (act_1465382983659605)

Periodo: **últimos 30 días** (date_preset=last_30d)  
Nivel: **ad** (anuncio)

Datos obtenidos vía API:

```text
campaign_name                              adset_name                                      ad_name                   impresiones  clics  gasto (CLP)  leads
------------------------------------------------------------------------------------------------------------------------------------------
FRIO - LEADS - Petroleo                    Publico Abierto x Intereses                     Petroleo                  13.272       195    17.610       5
FRIO - LEADS - Petroleo                    ADSET - Petroleo - Lookalike Leads Calificados  Petroleo                  10.025       134    17.512       5
FRIO - LEADS - Petroleo                    Alimentación - Publico Similar Historical Qualified Leads  Alimentación   9.558        106    21.310       8
FRIO - LEADS - Petroleo                    ADSET - Petroleo - Lookalike Leads Calificados  AD - Petroleo - Video     11.196       95     19.146       2
FRIO - LEADS - Petroleo                    ADSET - Petroleo - Lookalike Leads Calificados  AD - Petroleo - Imagen    869          7      1.961        0
```

> Nota: La columna "leads" se construyó tomando el valor del `action_type = "lead"` cuando existe, o 0 en caso contrario.

## Lecturas rápidas

### 1. Adsets

- **Publico Abierto x Intereses** (ad "Petroleo")
  - 13.272 impresiones, 195 clics, 5 leads, $17.610 CLP.
- **ADSET - Petroleo - Lookalike Leads Calificados** (ad "Petroleo" genérico)
  - 10.025 impresiones, 134 clics, 5 leads, $17.512 CLP.
- **Alimentación - Publico Similar Historical Qualified Leads** (ad "Alimentación")
  - 9.558 impresiones, 106 clics, 8 leads, $21.310 CLP.

### 2. Creativos dentro del adset Bediesel (Lookalike)

En `ADSET - Petroleo - Lookalike Leads Calificados` aparecen 3 anuncios:

1. **Petroleo** (sin sufijo, probablemente el original/genérico):  
   - 10.025 impresiones, 134 clics, 5 leads, $17.512 CLP.

2. **AD - Petroleo - Video**:  
   - 11.196 impresiones, 95 clics, 2 leads, $19.146 CLP.

3. **AD - Petroleo - Imagen**:  
   - 869 impresiones, 7 clics, 0 leads, $1.961 CLP.

## Conclusiones operativas (nivel creativo)

- El anuncio **Petroleo** (genérico) dentro del adset lookalike es el que mejor CPL tiene hasta ahora (5 leads con ~17,5k CLP de gasto).
- El video (**AD - Petroleo - Video**) trae clics, pero su aporte a leads es menor (2 leads con ~19k CLP).
- El anuncio de imagen (**AD - Petroleo - Imagen**) casi no tiene volumen (869 impresiones, 0 leads) → hoy no aporta mucho, pero también ha tenido poco gasto.

Siguiente paso lógico:  
- Mantener el creativo que ya está probadamente trayendo leads ("Petroleo").  
- Introducir el nuevo video "problema → solución" para competir contra el video actual.  
- Evaluar si el anuncio de imagen se mantiene, se pausa o se reemplaza por una imagen mejor alineada al nuevo flujo (camión surtidor/estanques/proveedor + problema claro).
