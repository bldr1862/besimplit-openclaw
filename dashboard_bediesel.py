import pandas as pd
import streamlit as st
from pathlib import Path

PIPELINE_CSV = Path("prospectos_bediesel/leads_pipeline_bediesel.csv")


def load_pipeline() -> pd.DataFrame:
  if not PIPELINE_CSV.exists():
    return pd.DataFrame()

  df = pd.read_csv(PIPELINE_CSV)
  df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
  return df


def classify_task(row: pd.Series) -> str | None:
  estado = row["Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)"]
  wa_flow = str(row["WhatsApp flujo ManyChat"]).lower()
  wa_direct = str(row["WhatsApp directo Bastian"]).lower()
  llamada = str(row["Llamada hecha"]).lower()
  demo = str(row["Demo agendada"]).lower()
  demo_realizada = str(row["Demo realizada"]).lower()

  if "cerrado" in estado.lower() or "propuesta enviada" in estado.lower():
    return None

  if wa_flow == "no" and "lead nuevo" in estado.lower():
    return "Enviar mensaje directo inicial"

  if wa_flow == "sí" and wa_direct == "no" and llamada == "no":
    return "Enviar mensaje directo tras flujo ManyChat"

  if wa_direct == "sí" and llamada == "no":
    return "Llamar lead"

  if llamada == "sí" and demo == "no":
    return "Agendar demo"

  if demo == "sí" and demo_realizada == "no":
    return "Realizar demo / confirmar asistencia"

  return None


def build_message(row: pd.Series, task: str) -> str:
  nombre = row["Nombre"] or ""
  empresa = row["Empresa"] or ""
  escenario = row["Escenario (camión/estanque/proveedor)"] or ""
  litros = (row["Litros/mes aprox."] or "").strip()

  saludo = f"Hola {nombre}, soy Bastian de Besimplit.".strip()

  contexto = ""
  if empresa or escenario:
    contexto = f" Vi que en {empresa} trabajan con {escenario.lower()}.".strip()

  litros_txt = ""
  if litros and litros != "(pendiente)":
    litros_txt = f" Con el consumo que me comentaste (~{litros}), tiene sentido revisar cómo están controlando el diésel.".strip()

  if task == "Enviar mensaje directo inicial":
    return (
      f"{saludo}{(' ' + contexto) if contexto else ''}\n\n"
      "Vi que completaste el formulario de control de petróleo, pero no alcanzaste a seguir el flujo automático de WhatsApp. "
      "¿Te parece si coordinamos una llamada de 10–15 minutos para ver si Bediesel calza con tu operación?"
    )

  if task == "Enviar mensaje directo tras flujo ManyChat":
    return (
      f"{saludo}{(' ' + contexto) if contexto else ''}{(' ' + litros_txt) if litros_txt else ''}\n\n"
      "Vi tus respuestas en WhatsApp y creo que podríamos ayudarte a ordenar el combustible. "
      "¿Te sirve que lo conversemos en una llamada corta de 10–15 minutos?"
    )

  if task == "Llamar lead":
    return (
      f"{saludo}{(' ' + contexto) if contexto else ''}{(' ' + litros_txt) if litros_txt else ''}\n\n"
      "Quería llamarte para entender mejor cómo están controlando hoy el diésel y mostrarte en qué consiste Bediesel. "
      "Dura 10–15 minutos y con eso vemos si vale la pena avanzar a una demo."
    )

  if task == "Agendar demo":
    return (
      f"{saludo}{(' ' + contexto) if contexto else ''}{(' ' + litros_txt) if litros_txt else ''}\n\n"
      "Como ya conversamos de Bediesel, el siguiente paso es que lo veas en acción. "
      "¿Te parece si agendamos una demo de 20–30 minutos esta semana para revisar tu caso específico?"
    )

  if task == "Realizar demo / confirmar asistencia":
    return (
      f"{saludo}{(' ' + contexto) if contexto else ''}{(' ' + litros_txt) if litros_txt else ''}\n\n"
      "Te escribo para confirmar la demo de Bediesel y asegurarme de que el horario sigue bien para ti."
    )

  return f"{saludo}{(' ' + contexto) if contexto else ''}{(' ' + litros_txt) if litros_txt else ''}"


def volumen_tag(litros: str) -> str:
  litros = (litros or "").strip()
  if litros.startswith("~10.000"):
    return "<10k"
  if "10.000–20.000" in litros:
    return "10–20k"
  if "+30" in litros or "30.000" in litros or "40.000" in litros or "50.000" in litros:
    return ">30k"
  return "(pendiente)"


def badge(label: str, color: str) -> str:
  return (
    f"<span style='display:inline-block;padding:2px 8px;margin:0 4px 4px 0;"
    f"border-radius:999px;font-size:12px;background-color:{color};color:white;'>"
    f"{label}</span>"
  )


def main():
  st.set_page_config(page_title="Pipeline Bediesel", layout="wide")

  df = load_pipeline()
  if df.empty:
    st.warning("No se pudo cargar la tabla de leads desde prospectos_bediesel/leads_pipeline_bediesel.csv")
    return

  st.title("Pipeline Bediesel")
  st.caption("Vista de pipeline y tareas a partir de leads_pipeline_bediesel.csv")

  total_leads = len(df)
  estados = df["Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)"].value_counts()

  col1, col2, col3, col4 = st.columns(4)
  col1.metric("Total de leads", total_leads)
  col2.metric("Propuestas enviadas", int(estados.get("Propuesta enviada", 0)))
  col3.metric("Leads en espera", int(estados.get("Lead en espera (respondió ManyChat, no respondió WhatsApp)", 0)))
  nuevos = int(estados[estados.index.str.contains("Lead nuevo", case=False)].sum()) if not estados.empty else 0
  col4.metric("Leads nuevos", nuevos)

  st.markdown("---")

  tab_tablero, tab_detalle = st.tabs(["Tablero por lead", "Detalle y tareas"])

  # ---- TABLERO POR LEAD ----
  with tab_tablero:
    st.subheader("Tablero de leads")

    df["Tarea"] = df.apply(classify_task, axis=1)

    col_f1, col_f2 = st.columns(2)
    segmento_sel = col_f1.multiselect(
      "Segmento", sorted(df["Segmento (Construcción/Agro/Transporte/etc.)"].unique()),
    )
    estado_sel = col_f2.multiselect(
      "Estado", sorted(df["Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)"].unique()),
    )

    filtered_df = df.copy()
    if segmento_sel:
      filtered_df = filtered_df[filtered_df["Segmento (Construcción/Agro/Transporte/etc.)"].isin(segmento_sel)]
    if estado_sel:
      filtered_df = filtered_df[filtered_df["Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)"].isin(estado_sel)]

    for _, row in filtered_df.iterrows():
      tarea = row["Tarea"] or "Sin tarea pendiente"
      seg = row["Segmento (Construcción/Agro/Transporte/etc.)"]
      vol = volumen_tag(row["Litros/mes aprox."])
      escenario = row["Escenario (camión/estanque/proveedor)"]
      estado = row["Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)"]
      ultimo_contacto = row.get("Último contacto", "(pendiente)")

      seg_color = "#4b5563"  # gris
      vol_color = "#0ea5e9" if vol == "<10k" else "#22c55e" if vol == "10–20k" else "#ef4444" if vol == ">30k" else "#6b7280"
      esc_color = "#6366f1"  # azul violeta
      estado_lower = estado.lower()
      if "lead nuevo" in estado_lower:
        estado_color = "#f97316"  # naranja
      elif "espera" in estado_lower:
        estado_color = "#eab308"  # amarillo
      elif "propuesta" in estado_lower:
        estado_color = "#22c55e"  # verde
      else:
        estado_color = "#6b7280"  # gris

      tarea_color = "#3b82f6" if tarea and tarea != "Sin tarea pendiente" else "#9ca3af"
      fecha_color = "#0f766e"  # verde azulado

      seg_tag = badge(f"Segmento: {seg}", seg_color) if seg else ""
      vol_tag = badge(f"Volumen: {vol}", vol_color) if vol else ""
      esc_tag = badge(f"Escenario: {escenario}", esc_color) if escenario else ""
      est_tag = badge(f"Estado: {estado}", estado_color) if estado else ""
      tarea_tag = badge(f"Tarea: {tarea}", tarea_color)
      fecha_tag = badge(f"Último contacto: {ultimo_contacto}", fecha_color)

      with st.container(border=True):
        st.markdown(f"**{row['Nombre']} – {row['Empresa']}**")
        st.markdown(seg_tag + vol_tag + esc_tag + est_tag + tarea_tag + fecha_tag, unsafe_allow_html=True)

  # ---- DETALLE Y TAREAS ----
  with tab_detalle:
    st.subheader("Detalle de lead y tareas")

    df["Tarea"] = df.apply(classify_task, axis=1)

    # Opcional: filtro por lead
    lead_options = ["Todos"] + list(df["ID"].astype(str) + " – " + df["Nombre"] + " / " + df["Empresa"])
    selected = st.selectbox("Selecciona un lead (opcional)", lead_options)

    if selected == "Todos":
      tareas_df = df[df["Tarea"].notna()].copy()
      if tareas_df.empty:
        st.info("No hay tareas pendientes según las reglas actuales.")
      else:
        tipos_tarea = tareas_df["Tarea"].unique()
        for tipo in tipos_tarea:
          st.markdown(f"## {tipo}")
          subset = tareas_df[tareas_df["Tarea"] == tipo]
          for _, row in subset.iterrows():
            with st.container(border=True):
              # encabezado lead
              st.markdown(
                f"<div style='padding:4px 8px;border-radius:999px;display:inline-block;"
                "background-color:#1d4ed8;color:white;font-weight:600;'>"
                f"{row['Nombre']} – {row['Empresa']}</div>",
                unsafe_allow_html=True,
              )
              st.write(
                f"Segmento: {row['Segmento (Construcción/Agro/Transporte/etc.)']} · "
                f"Litros/mes aprox.: {row['Litros/mes aprox.']} · "
                f"Escenario: {row['Escenario (camión/estanque/proveedor)']} · "
                f"Estado: {row['Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)']} · "
                f"Último contacto: {row.get('Último contacto', '(pendiente)')}"
              )
              st.write(f"Notas: {row['Notas clave']}")

              mensaje = build_message(row, tipo)
              st.markdown(
                "<div style='margin-top:8px;padding:8px 12px;border-radius:8px;"
                "background-color:#0f172a;color:#e5e7eb;font-size:13px;'>"
                "<div style='font-weight:600;margin-bottom:4px;'>Mensaje sugerido</div>"
                f"<pre style='white-space:pre-wrap;margin:0;'>{mensaje}</pre>"  # noqa: E501
                "</div>",
                unsafe_allow_html=True,
              )
    else:
      selected_id = int(selected.split(" – ")[0])
      row = df[df["ID"] == selected_id].iloc[0]
      tarea = row["Tarea"] or "Sin tarea pendiente"

      with st.container(border=True):
        st.markdown(
          f"<div style='padding:4px 8px;border-radius:999px;display:inline-block;"
          "background-color:#1d4ed8;color:white;font-weight:600;'>"
          f"{row['Nombre']} – {row['Empresa']}</div>",
          unsafe_allow_html=True,
        )
        st.write(f"Segmento: {row['Segmento (Construcción/Agro/Transporte/etc.)']}")
        st.write(f"Litros/mes aprox.: {row['Litros/mes aprox.']}")
        st.write(f"Escenario: {row['Escenario (camión/estanque/proveedor)']}")
        st.write(f"Estado actual: {row['Estado actual (Lead/Demo/Propuesta/Cerrado ganado/Cerrado perdido)']}")
        st.write(f"Último contacto: {row.get('Último contacto', '(pendiente)')}")
        st.write(f"Notas: {row['Notas clave']}")
        st.write(f"Tarea pendiente: {tarea}")

        if tarea and tarea != "Sin tarea pendiente":
          mensaje = build_message(row, tarea)
          st.markdown(
            "<div style='margin-top:8px;padding:8px 12px;border-radius:8px;"
            "background-color:#0f172a;color:#e5e7eb;font-size:13px;'>"
            "<div style='font-weight:600;margin-bottom:4px;'>Mensaje sugerido</div>"
            f"<pre style='white-space:pre-wrap;margin:0;'>{mensaje}</pre>"  # noqa: E501
            "</div>",
            unsafe_allow_html=True,
          )


if __name__ == "__main__":
  main()
