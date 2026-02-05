import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";
import React from "react";

const bg = "#f5f5f5";
const primary = "#0081cb";
const textMain = "#111827";
const textMuted = "#6b7280";

const Title: React.FC<{children: React.ReactNode}> = ({children}) => (
  <h1
    style={{
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 64,
      margin: 0,
      color: textMain,
    }}
  >
    {children}
  </h1>
);

const Subtitle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <p
    style={{
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 32,
      margin: "24px 0 0",
      color: textMuted,
      maxWidth: 900,
    }}
  >
    {children}
  </p>
);

const Bullet: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      marginBottom: 12,
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 26,
      color: textMuted,
    }}
  >
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: primary,
        marginTop: 10,
      }}
    />
    <div>{children}</div>
  </div>
);

const fadeIn = (frame: number, start: number, duration: number) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: bg}}>
      <AbsoluteFill
        style={{
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header con logo */}
        <div style={{display: "flex", alignItems: "center", gap: 16}}>
          <Img
            src="https://besimplit.com/wp-content/uploads/2017/07/logo-bs-positivo.svg"
            style={{height: 60}}
          />
        </div>

        {/* 1) Apertura */}
        <Sequence from={0} durationInFrames={90}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              opacity: fadeIn(frame, 0, 15),
            }}
          >
            <div style={{flex: 1}}>
              <Title>
                Obras más rentables. <br />
                Costos bajo control. <br />
                Flota operativa.
              </Title>
              <Subtitle>
                Besimplit es una plataforma diseñada para constructoras, áridos, minería y
                empresas con maquinaria propia que necesitan conectar producción, costos y
                maquinaria en un solo lugar.
              </Subtitle>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                padding: 24,
                boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{fontSize: 22, fontWeight: 600, color: textMain}}>
                ¿Qué resuelve Besimplit?
              </div>
              <Bullet>Control de faenas y producción desde terreno.</Bullet>
              <Bullet>Costos plan vs real por obra.</Bullet>
              <Bullet>Control de combustible con Bediesel.</Bullet>
              <Bullet>
                Gestión de mantención, documentación y checklists de maquinaria.
              </Bullet>
            </div>
          </div>
        </Sequence>

        {/* 2) Bediesel */}
        <Sequence from={90} durationInFrames={120}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              opacity: fadeIn(frame, 90, 15),
            }}
          >
            <div style={{flex: 1}}>
              <Title>Bediesel: controla cada litro de petróleo</Title>
              <Subtitle>
                El chofer del camión surtidor registra cada carga desde el teléfono, incluso
                sin internet. En oficina ves rendimientos por máquina y faena, y detectas
                pérdidas de 1–2% que se suelen pasar desapercibidas.
              </Subtitle>
              <div style={{marginTop: 32}}>
                <Bullet>Registro de cargas en terreno (offline).</Bullet>
                <Bullet>Rendimientos reales por máquina y por faena.</Bullet>
                <Bullet>Ahorro en combustible y en tiempo administrativo.</Bullet>
              </div>
            </div>
            <div style={{flex: 1, display: "flex", justifyContent: "center"}}>
              <div
                style={{
                  width: width * 0.4,
                  borderRadius: 32,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 24px 60px rgba(15,23,42,0.1)",
                  backgroundColor: "#ffffff",
                }}
              >
                <Img
                  src={staticFile("home-2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </Sequence>

        {/* 3) Gestión de activos */}
        <Sequence from={210} durationInFrames={120}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              opacity: fadeIn(frame, 210, 15),
            }}
          >
            <div style={{flex: 1}}>
              <Title>Gestión de activos: flota operativa y segura</Title>
              <Subtitle>
                Planifica mantenciones preventivas, registra correctivas, mantiene documentos
                al día y usa checklists digitales para detectar problemas antes de que se
                transformen en fallas graves.
              </Subtitle>
              <div style={{marginTop: 32}}>
                <Bullet>Mantenciones por horas/km con alertas.</Bullet>
                <Bullet>Historial de correctivas y costos por máquina.</Bullet>
                <Bullet>Documentos y licencias con fechas de vencimiento.</Bullet>
                <Bullet>Checklists diarios desde el celular, con fotos.</Bullet>
              </div>
            </div>
            <div style={{flex: 1, display: "flex", justifyContent: "center"}}>
              <div
                style={{
                  width: width * 0.4,
                  borderRadius: 32,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 24px 60px rgba(15,23,42,0.1)",
                  backgroundColor: "#ffffff",
                }}
              >
                <Img
                  src={staticFile("home-1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </Sequence>

        {/* 4) Cierre */}
        <Sequence from={330} durationInFrames={150}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 24,
              opacity: fadeIn(frame, 330, 15),
            }}
          >
            <Title>Besimplit: tu operación, en un solo tablero</Title>
            <Subtitle>
              Controla producción, costos y maquinaria con una plataforma diseñada para el
              mundo real de las faenas. Menos tiempo armando planillas, más tiempo tomando
              decisiones.
            </Subtitle>
            <div style={{marginTop: 24}}>
              <Bullet>
                Constructoras de movimiento de tierra y obras viales.
              </Bullet>
              <Bullet>Plantas de áridos, minería, forestal y agrícola.</Bullet>
              <Bullet>Empresas de arriendo y operación de maquinaria.</Bullet>
            </div>
            <div
              style={{
                marginTop: 32,
                padding: "16px 24px",
                borderRadius: 999,
                backgroundColor: primary,
                color: "white",
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              Agenda una demo en besimplit.com
            </div>
          </div>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
