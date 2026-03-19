import type { PrivacyContent } from "@/lib/locales/privacy/types";

export const esPrivacy: PrivacyContent = {
  title: "Política de Privacidad",
  subtitle: "Fecha de entrada en vigor: 19 de marzo de 2026 | Nombre de la app: default0 | Desarrollador: GuoQi Yang",
  sections: [
    {
      heading: "1. Datos que recopilamos",
      paragraphs: [
        "default0 valora tu privacidad. Esta Política de Privacidad explica cómo tratamos la información.",
        "Las funciones principales de default0 se ejecutan en tu dispositivo local.",
        "En la versión que usas actualmente, no recopilamos, almacenamos ni vendemos tu información de identificación personal.",
        "No subimos a servidores del desarrollador la siguiente información local para identificarte:"
      ],
      items: [
        "Tus reglas de silencio configuradas",
        "Tu lista de apps seleccionadas (bundle id)",
        "Configuración local (idioma, tema, inicio al arrancar, etc.)",
        "Registros locales de activación (por ejemplo, motivo/hora de activación del silencio)"
      ]
    },
    {
      heading: "2. Permisos",
      paragraphs: ["default0 puede solicitar los siguientes permisos del sistema, solo para las funciones correspondientes:"],
      ordered: true,
      items: [
        "Permiso de Apple Events\nUso: controlar el volumen de salida del sistema (silenciar/reactivar automáticamente).",
        "Permiso de ubicación (para escenarios de nombre de Wi-Fi)\nUso: leer el SSID Wi-Fi actual en macOS para admitir reglas automáticas como \"silenciar cuando cambie el Wi-Fi\".\nNota: este permiso es un requisito del sistema y no se utiliza para rastreo de ubicación.",
        "Permiso de solo lectura para archivos seleccionados por el usuario\nUso: cuando seleccionas manualmente un archivo .app desde Finder, leer información de la app para reglas como \"silenciar al abrir una app\".\nNota: solo accede al alcance de archivos que tú seleccionas activamente.",
        "Permiso de acceso a red\nUso: completar solicitudes de red necesarias (por ejemplo, flujos relacionados con App Store, consulta de versión o redirección a sitios web).\nNota: default0 no crea un perfil personal tuyo a partir de estas solicitudes."
      ]
    },
    {
      heading: "3. Compras y pagos en App Store",
      paragraphs: [
        "Si compras funciones Pro en la versión de App Store, la transacción es procesada por Apple a través de StoreKit.",
        "No obtenemos directamente tu información de pago completa (como números de tarjeta bancaria)."
      ]
    },
    {
      heading: "4. Almacenamiento y seguridad de datos",
      paragraphs: [
        "default0 usa principalmente almacenamiento local (como UserDefaults/mecanismos del sistema) para guardar la configuración.",
        "Tomamos medidas razonables para proteger la seguridad de los datos durante el funcionamiento de la app."
      ]
    },
    {
      heading: "5. Servicios y enlaces de terceros",
      paragraphs: [
        "La app puede incluir enlaces a páginas externas (como la página de feedback o el sitio oficial).",
        "El tratamiento de datos de sitios de terceros se rige por sus propias políticas de privacidad."
      ]
    },
    {
      heading: "6. Privacidad infantil",
      paragraphs: ["default0 no ofrece contenido específicamente dirigido a menores ni recopila activamente información personal de menores."]
    },
    {
      heading: "7. Tus derechos",
      paragraphs: [
        "Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de datos, puedes contactarnos por el siguiente medio.",
        "También puedes desinstalar la app y borrar los datos locales en cualquier momento para detener el procesamiento local posterior."
      ]
    },
    {
      heading: "8. Actualizaciones de la política",
      paragraphs: ["Podemos actualizar esta política según cambios del producto o requisitos legales. Tras actualizarla, la publicaremos en esta página y actualizaremos la \"Fecha de entrada en vigor\"."]
    }
  ],
  contactTitle: "Si tienes alguna pregunta sobre esta política, contáctanos en",
  contactEmail: "help@default0.com",
  backHome: "Volver al inicio"
};
