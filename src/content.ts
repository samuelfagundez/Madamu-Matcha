// ---------------------------------------------------------------------------
// Contenido único del negocio. Editar SOLO este archivo para actualizar
// nombre, dirección, horario, fotos, redes, etc. Todo el sitio lee de aquí.
// ---------------------------------------------------------------------------

export interface DayHours {
  day: string;
  hours: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export const content = {
  name: "Madamu Matcha",
  shortName: "Madamu",
  tagline: "Cafetería de matcha acogedora y de moda en L'Eixample, Valencia",
  description:
    "Madamu Matcha es una cafetería especializada en matcha en pleno L'Eixample de Valencia, con un ambiente acogedor y de moda que engancha desde la primera visita. Cada matcha latte se prepara al momento, con opciones de leche de avena o de coco y variantes tan curiosas como el matcha de plátano o el salted caramel matcha. Un local totalmente accesible, con acceso, aseo y aparcamiento adaptados para sillas de ruedas, e inclusivo con la comunidad LGBTQ+, perfecto tanto para un rato tranquilo como para quedar con amigos.",
  metaDescription:
    "Madamu Matcha: cafetería de matcha en L'Eixample, Valencia. Matcha latte preparado al momento, con leche de avena o coco. 4,6★ en Google con 85 opiniones.",
  keywords: [
    "Madamu Matcha",
    "Valencia",
    "L'Eixample",
    "cafetería de matcha",
    "matcha bar",
    "matcha latte",
    "cafetería accesible",
    "matcha cerca de mí",
  ],
  priceRange: "1 € - 10 €",
  priceRangeDisplay: "1 € – 10 € por persona aprox.",
  // "servesCuisine" (schema.org) aplica a cualquier FoodEstablishment,
  // incluida una cafetería especializada — no solo a "Restaurant".
  cuisine: "Matcha y bebidas de té verde",

  rating: {
    value: 4.6,
    count: 85,
    countDisplay: "85",
  },

  highlights: [
    "El matcha latte se prepara al momento, según cuentan sus clientes habituales.",
    "Variantes originales como el matcha de plátano o el salted caramel matcha, con leche de avena o de coco.",
    "Ambiente acogedor y de moda, ideal para tomarlo con calma o quedar con amigos.",
    "Local 100% accesible: acceso, aseo y aparcamiento adaptados para sillas de ruedas.",
  ],

  address: {
    streetAddress: "C/ de Cadis, 37",
    addressLocality: "València",
    addressRegion: "Comunitat Valenciana",
    postalCode: "46004",
    addressCountry: "ES",
    full: "C/ de Cadis, 37, L'Eixample, 46004 València",
  },

  // Sin coordenadas verificadas: el mapa usa la dirección en texto (Google
  // la geolocaliza al vuelo), así que no hace falta lat/lng aquí.
  geo: null as { latitude: number; longitude: number } | null,

  phone: "+34 643 07 11 74",
  phoneDisplay: "643 07 11 74",
  // Solo dígitos, con código de país, sin "+" — formato que exige wa.me.
  whatsappNumber: "34643071174",
  // Pendiente: el listado de Google Maps no mostraba un correo público.
  email: "",

  // URL final del sitio en GitHub Pages (repo público "Madamu-Matcha").
  siteUrl: "https://samuelfagundez.github.io/Madamu-Matcha/",

  social: {
    instagram: "https://www.instagram.com/madamumatcha",
    // Pendiente: el listado de Google Maps no mostraba página de Facebook.
    facebook: "",
    tiktok: "",
    whatsapp:
      "https://wa.me/34643071174?text=" +
      encodeURIComponent("¡Hola! Vengo de la página web de Madamu Matcha."),
  },

  hours: [
    { day: "Lunes", hours: "11:00 – 19:00" },
    { day: "Martes", hours: "10:00 – 18:00" },
    { day: "Miércoles", hours: "10:00 – 18:00" },
    { day: "Jueves", hours: "10:00 – 18:00" },
    { day: "Viernes", hours: "10:00 – 18:00" },
    { day: "Sábado", hours: "10:00 – 18:00" },
    { day: "Domingo", hours: "Cerrado" },
  ] as DayHours[],

  // openingHoursSpecification en formato schema.org (día en inglés).
  // Domingo cerrado: sin entrada (schema.org no requiere declarar los
  // días cerrados).
  openingHoursSchema: [
    { days: ["Monday"], opens: "11:00", closes: "19:00" },
    {
      days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],

  gallery: [
    {
      src: "/gallery/madamu-matcha-iced-matcha-flores.jpg",
      alt: "Matcha helado de Madamu Matcha con flores de fondo, cafetería de matcha en Valencia",
    },
    {
      src: "/gallery/madamu-matcha-latte-preparacion.jpg",
      alt: "Preparación de un matcha latte al momento en Madamu Matcha, con colador y leche de avena",
    },
    {
      src: "/gallery/madamu-matcha-barra-ingredientes.jpg",
      alt: "Barra de Madamu Matcha con matcha en polvo, batidor chasen y leche de avena",
    },
  ] as Photo[],

  // Embed de Google Maps sin API key, geolocalizando por dirección de texto.
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Madamu Matcha, C/ de Cadis, 37, 46004 València") +
    "&hl=es&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/9iJB9UFE2VH2dhPp7",
};

/** Link de WhatsApp click-to-chat con mensaje predefinido. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de Madamu Matcha y tengo una consulta.";
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de Madamu Matcha y me gustaría hacer un pedido.";

// Link externo del sistema de reservas (se abre en pestaña nueva). Mientras
// no se defina, "Hacer un pedido" cae de vuelta a WhatsApp automáticamente.
export const reservationLink = "";

/** Href del botón "Contáctanos": siempre WhatsApp. */
export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}

/** Href del botón "Hacer un pedido": link externo si ya está definido, si no WhatsApp. */
export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
