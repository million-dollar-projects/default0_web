import type { SiteContent } from "@/lib/locales/types";
export const es: SiteContent = {
  brand: "Default0",
  nav: { features: "Funciones", scenarios: "Escenarios", faq: "FAQ" },
  labels: { testimonials: "Testimonios", faq: "FAQ", language: "Idioma" },
  hero: {
    badge: "Auto-silencio inteligente para la barra de menús de macOS",
    title: "Silencio automático para que una reproducción inesperada no vuelva a ponerte en una situación incómoda.",
    description:
      "Default0 baja el volumen del sistema a 0 justo en los momentos de mayor riesgo y evita salidas inesperadas por altavoz en reuniones, oficina, biblioteca o de noche.",
    helper: "Ligero en barra de menús | Inicio automático | Funciona en local",
    primaryCta: "Descarga gratis (macOS)",
    secondaryCta: "Ver reglas automáticas"
  },
  values: {
    title: "No es reaccionar tarde, es prevenir a tiempo",
    items: [
      {
        title: "Silencio automático en momentos críticos",
        description: "Al desbloquear, cambiar la salida de audio, desconectar Bluetooth, iniciar sesión por primera vez o activar apps, se aplica silencio automático."
      },
      {
        title: "Reducir la ventana de error a cero",
        description: "Antes de que puedas reaccionar, Default0 ya actúa para evitar que el sonido salga por altavoz por accidente."
      },
      {
        title: "Protección sin fricción",
        description: "Control claro desde la barra de menús con pausa en un clic cuando lo necesites."
      }
    ]
  },
  featureTitle: "Cada regla está pensada para evitar esos audios inesperados que te exponen",
  features: [
    { title: "Silencio al desbloquear", description: "Tras desbloquear la pantalla, se aplica silencio automático para evitar reproducciones accidentales al volver al equipo." },
    { title: "Silencio al cambiar salida", description: "Cuando cambia la salida de audio predeterminada, se silencia al instante para evitar fugas entre auriculares y altavoz." },
    { title: "Silencio al desconectar Bluetooth", description: "Si un dispositivo Bluetooth se desconecta, se silencia antes de que el audio vuelva al altavoz." },
    { title: "Silencio en primer inicio", description: "Durante la primera fase de inicio de sesión tras arrancar el sistema, se aplica silencio para reducir riesgos tempranos." },
    { title: "Silencio al abrir app", description: "Puedes definir apps de alto riesgo como reuniones, video, redes sociales o entretenimiento para silenciar al activarse." },
    { title: "Control manual rápido", description: "Silenciar y quitar silencio al instante para retomar el control en situaciones puntuales." },
    { title: "Configuración personalizada", description: "Incluye inicio automático, cambio de tema, visibilidad de icono en Dock e interfaz multilingüe." }
  ],
  scenariosTitle: "Momentos en los que más necesitas a Default0",
  scenarios: [
    { title: "Cambio entre reuniones", description: "Cuando sales de una llamada y entras en otra, evita reproducciones automáticas de plataformas o pestañas del navegador." },
    { title: "Oficina y espacios públicos", description: "En oficinas abiertas y bibliotecas, una sola reproducción accidental se nota de inmediato." },
    { title: "Conexión inestable de auriculares", description: "Si los auriculares Bluetooth se desconectan, se silencia antes del retorno al altavoz." },
    { title: "Usuarios de multitarea intensa", description: "Si cambias constantemente de apps, dispositivos y bloqueo, las reglas automáticas evitan olvidos." }
  ],
  comparison: {
    title: "¿Por qué no basta con “acordarte” de bajar el volumen?",
    items: ["Lo manual depende de tu memoria; lo automático depende de reglas.", "Lo manual llega tarde; lo automático se adelanta.", "Lo manual exige atención cada vez; lo automático te protege tras una sola configuración."],
    conclusion: "Default0 no te quita el control: te cubre justo en los momentos en los que más fácil es fallar."
  },
  testimonials: [
    { quote: "Cambiar de dispositivo era mi mayor dolor de cabeza. Ahora entro a reuniones con mucha más tranquilidad.", name: "Carla Moreno", role: "Product Manager" },
    { quote: "Trabajo en espacios compartidos y el riesgo de audio accidental prácticamente desapareció.", name: "Diego León", role: "Diseñador" },
    { quote: "Ya no vivo pendiente del icono de volumen. Se siente como una red de seguridad silenciosa.", name: "Lucía Vega", role: "Ingeniera Frontend" },
    { quote: "Paso del software de reuniones al de edición todo el día y ahora casi no temo una reproducción accidental.", name: "Mateo Ríos", role: "Creador de contenido" },
    { quote: "Antes revisaba el volumen cada vez que desbloqueaba. Ahora vuelvo al trabajo sin pensar en eso.", name: "Elena Cruz", role: "Responsable de operaciones" }
  ],
  faqs: [
    { question: "¿Default0 consume muchos recursos?", answer: "No. Es una utilidad ligera para barra de menús con bajo impacto diario." },
    { question: "¿Puedo activar solo algunas reglas?", answer: "Sí. Cada regla de auto-silencio se puede activar o desactivar de forma independiente." },
    { question: "¿Puedo elegir apps específicas como disparador?", answer: "Sí. Puedes seleccionar una o varias apps para silenciar automáticamente al activarse." },
    { question: "¿Se puede iniciar automáticamente al encender?", answer: "Sí. Puedes activar el inicio automático desde ajustes." },
    { question: "¿Qué pasa si no quiero que esté activo siempre?", answer: "Puedes pausar la protección con un clic y reanudarla cuando quieras." },
    { question: "¿Soporta varios idiomas?", answer: "Sí. Incluye español, inglés, chino simplificado, japonés, coreano, alemán y más." }
  ],
  cta: {
    title: "No esperes al susto para reaccionar.",
    description: "Desde hoy, deja el riesgo de olvidar el silencio en manos de Default0.",
    primary: "Descargar Default0",
    secondary: "Ver guía rápida",
    helper: "Para macOS | App de barra de menús | Lista para usar"
  },
  footer: {
    tagline: "Default0, protección automática de silencio.",
    links: ["Funciones", "Feedback", "Registro de cambios", "FAQ", "Privacidad", "Contacto"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

