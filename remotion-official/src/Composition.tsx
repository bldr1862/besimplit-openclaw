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

// Video institucional general
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

// Video Bediesel A: Robo y desorden (Edison)
export const BedieselRoboDesorden: React.FC = () => {
  const frame = useCurrentFrame();

  const screenDuration = 90; // 3s a 30fps

  const baseStyle: React.CSSProperties = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: textMain,
  };

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a", justifyContent: "center"}}>
      {/* Logo fijo en esquina */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 64,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Img
          src={staticFile("logo-besimplit.png")}
          style={{height: 56}}
        />
      </div>

      {/* Screen 1 */}
      <Sequence from={0} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f9fafb",
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,64,175,0.9))",
            opacity: fadeIn(frame, 0, 15),
          }}
        >
          <h1 style={{fontSize: 70, margin: 0}}>
            ¿El diésel no cuadra a fin de mes?
          </h1>
          <p style={{fontSize: 34, margin: 0, maxWidth: 900}}>
            Muchos litros salen del estanque, pero las planillas no alcanzan a explicar
            dónde se pierden.
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 2 */}
      <Sequence from={screenDuration} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f9fafb",
            backgroundColor: "#020617",
            opacity: fadeIn(frame, screenDuration, 15),
          }}
        >
          <p style={{fontSize: 40, margin: 0, maxWidth: 900}}>
            Papel, Excel y fotos por WhatsApp = imposible saber <br />
            dónde se pierden los litros a tiempo.
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 3 */}
      <Sequence from={screenDuration * 2} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 80,
            color: "#f9fafb",
            backgroundColor: "#020617",
            opacity: fadeIn(frame, screenDuration * 2, 15),
          }}
        >
          <div style={{flex: 1, paddingRight: 40}}>
            <h1 style={{fontSize: 60, margin: 0}}>Bediesel registra cada carga</h1>
            <p style={{fontSize: 34, marginTop: 24, maxWidth: 900}}>
              Desde el camión surtidor o estanque hacia cada máquina y camión. <br />
              Litros, horómetro o km, fecha y operador, todo en una sola app.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 500,
                borderRadius: 32,
                overflow: "hidden",
                border: "1px solid #1e293b",
                boxShadow: "0 24px 60px rgba(15,23,42,0.75)",
                backgroundColor: "#0b1120",
              }}
            >
              <Img
                src={staticFile("dashboard_petroleo.png")}
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 4 */}
      <Sequence from={screenDuration * 3} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 80,
            color: "#f9fafb",
            backgroundColor: "#020617",
            opacity: fadeIn(frame, screenDuration * 3, 15),
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 500,
                borderRadius: 32,
                overflow: "hidden",
                border: "1px solid #1e293b",
                boxShadow: "0 24px 60px rgba(15,23,42,0.75)",
                backgroundColor: "#0b1120",
              }}
            >
              <Img
                src={staticFile("dashboard_rendimientos.png")}
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div>
          </div>
          <div style={{flex: 1, paddingLeft: 40}}>
            <h1 style={{fontSize: 54, margin: 0}}>Detecta pérdidas de 1–2%</h1>
            <p style={{fontSize: 32, marginTop: 24, maxWidth: 900}}>
              Ve rendimientos por máquina, camión y faena. <br />
              Menos sospechas y más datos para tomar decisiones.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 5 */}
      <Sequence from={screenDuration * 4} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f9fafb",
            background:
              "radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 60%), #020617",
            opacity: fadeIn(frame, screenDuration * 4, 15),
          }}
        >
          <h1 style={{fontSize: 60, margin: 0}}>Controla cada litro de diésel</h1>
          <p style={{fontSize: 32, margin: 0, maxWidth: 900}}>
            Agenda una demo de Bediesel y ve cómo se ve tu operación con datos reales.
          </p>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

// Video Bediesel B: Orden y visibilidad (Italo/agro)
export const BedieselOrdenVisibilidad: React.FC = () => {
  const frame = useCurrentFrame();

  const screenDuration = 90; // 3s a 30fps

  const baseStyle: React.CSSProperties = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: textMain,
  };

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a", justifyContent: "center"}}>
      {/* Logo fijo en esquina */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 64,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Img
          src={staticFile("logo-besimplit.png")}
          style={{height: 56}}
        />
      </div>

      {/* Screen 1 */}
      <Sequence from={0} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f9fafb",
            background:
              "linear-gradient(135deg, rgba(21,128,61,0.95), rgba(4,120,87,0.95))",
            opacity: fadeIn(frame, 0, 15),
          }}
        >
          <h1 style={{fontSize: 70, margin: 0}}>
            ¿No sabes cuántos litros se gasta cada tractor?
          </h1>
          <p style={{fontSize: 34, margin: 0, maxWidth: 900}}>
            En servicios agrícolas, cada equipo trabaja en un campo distinto y el consumo
            termina perdido entre cuadernos y chats.
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 2 */}
      <Sequence from={screenDuration} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f9fafb",
            backgroundColor: "#022c22",
            opacity: fadeIn(frame, screenDuration, 15),
          }}
        >
          <p style={{fontSize: 40, margin: 0, maxWidth: 900}}>
            Registros sueltos en cuadernos y WhatsApp <br />
            = sin historia clara de consumo por equipo.
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 3 */}
      <Sequence from={screenDuration * 2} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 80,
            color: "#f0fdf4",
            backgroundColor: "#022c22",
            opacity: fadeIn(frame, screenDuration * 2, 15),
          }}
        >
          <div style={{flex: 1, paddingRight: 40}}>
            <h1 style={{fontSize: 60, margin: 0}}>Bediesel como libro de combustible</h1>
            <p style={{fontSize: 34, marginTop: 24, maxWidth: 900}}>
              Registra cada carga desde tu estanque de 5.000 L hacia cada tractor y equipo. <br />
              Litros, horómetro, campo y operador en un solo lugar.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 500,
                borderRadius: 32,
                overflow: "hidden",
                border: "1px solid #14532d",
                boxShadow: "0 24px 60px rgba(6,95,70,0.75)",
                backgroundColor: "#022c22",
              }}
            >
              <Img
                src={staticFile("dashboard_report_maquinas.png")}
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 4 */}
      <Sequence from={screenDuration * 3} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 80,
            color: "#f0fdf4",
            backgroundColor: "#022c22",
            opacity: fadeIn(frame, screenDuration * 3, 15),
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 280,
                borderRadius: 40,
                overflow: "hidden",
                border: "1px solid #14532d",
                boxShadow: "0 18px 40px rgba(6,95,70,0.75)",
                backgroundColor: "#022c22",
              }}
            >
              <Img
                src={staticFile("iphone-app-bediesel.png")}
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div>
          </div>
          <div style={{flex: 1, paddingLeft: 40}}>
            <h1 style={{fontSize: 54, margin: 0}}>Orden por máquina y temporada</h1>
            <p style={{fontSize: 32, marginTop: 24, maxWidth: 900}}>
              Sabes cuántos litros se gasta cada tractor, <br />
              en qué campo y en qué periodo.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Screen 5 */}
      <Sequence from={screenDuration * 4} durationInFrames={screenDuration}>
        <AbsoluteFill
          style={{
            ...baseStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: 80,
            textAlign: "center",
            color: "#f0fdf4",
            background:
              "radial-gradient(circle at top, rgba(34,197,94,0.35), transparent 60%), #022c22",
            opacity: fadeIn(frame, screenDuration * 4, 15),
          }}
        >
          <h1 style={{fontSize: 60, margin: 0}}>Deja de adivinar el diésel</h1>
          <p style={{fontSize: 32, margin: 0, maxWidth: 900}}>
            Escríbenos y te mostramos Bediesel funcionando en tu operación agrícola.
          </p>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
