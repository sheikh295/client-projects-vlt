export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      how: "Cómo trabajamos",
      reviews: "Opiniones",
      contact: "Contacto",
      call: "Llamar",
      quote: "Pedir presupuesto",
    },
    hero: {
      brand: "Limpiezas El Genio",
      location: "Madrid",
      headline: "Tu casa, impecable. Sin complicaciones.",
      sub:
        "Equipos profesionales en Chamberí y toda Madrid: limpieza profunda, tras reforma, oficinas y tapicería.",
      ctaPrimary: "WhatsApp ahora",
      ctaSecondary: "Ver servicios",
      form: {
        title: "Te llamamos",
        subtitle: "Elige un hueco y te contactamos.",
        name: "Nombre",
        phone: "Teléfono",
        slot: "Preferencia",
        slots: ["Mañana", "Tarde", "Cuanto antes"],
        submit: "Pedir llamada",
        success: "¡Listo! Te llamamos pronto.",
      },
    },
    services: {
      eyebrow: "Qué hacemos",
      title: "Limpieza a medida para cada espacio",
      sub: "Desde un piso nuevo hasta una reforma, adaptamos el equipo, el método y el horario a lo que necesitas.",
      items: [
        {
          title: "Limpieza de hogares",
          desc: "General o profunda: cocina, baños, armarios, suelos y ese olor a limpio que mencionan en las reseñas.",
        },
        {
          title: "Tras reforma o mudanza",
          desc: "Equipos amplios y coordinados para polvo de obra, restos y detalles que otras empresas dejan pasar.",
        },
        {
          title: "Oficinas y locales",
          desc: "Mantenimiento recurrente o limpiezas puntuales para oficinas, comercios y espacios de trabajo.",
        },
        {
          title: "Tapicería y sofás",
          desc: "Limpieza especializada de sofás y tapicerías — incluso manchas difíciles de años.",
        },
        {
          title: "Cristales y ventanas",
          desc: "Cristales limpios, sin marcas, con acabado profesional en vivienda o local.",
        },
        {
          title: "Pisos turísticos y eventos",
          desc: "Entrada/salida de alquiler, fin de contrato y preparación de espacios para celebraciones.",
        },
      ],
    },
    process: {
      eyebrow: "Así de fácil",
      title: "De la llamada a una casa que brilla",
      sub: "Comunicación clara, presupuestos transparentes y un equipo que cuida tu espacio como propio.",
      steps: [
        {
          num: "01",
          title: "Cuéntanos qué necesitas",
          desc: "WhatsApp o llamada. Te escuchamos y te damos un presupuesto claro, sin sorpresas.",
        },
        {
          num: "02",
          title: "Acordamos día y equipo",
          desc: "Horarios flexibles. Para limpiezas grandes enviamos varios profesionales coordinados.",
        },
        {
          num: "03",
          title: "Limpieza a fondo",
          desc: "Método, respeto por tu vivienda y revisión final. Si algo queda, lo resolvemos.",
        },
      ],
    },
    trust: {
      eyebrow: "Por qué confían en nosotros",
      title: "4,9 estrellas no se improvisan",
      sub: "Más de 100 vecinos de Madrid ya lo han comprobado. Puntualidad, detalle y trato cercano.",
      points: [
        {
          title: "Equipos con método",
          desc: "Varias personas cuando hace falta, perfectamente organizadas, sin perder ni un rincón.",
        },
        {
          title: "Transparencia total",
          desc: "Presupuesto claro desde el primer contacto. Sin cargos ocultos.",
        },
        {
          title: "Productos y cuidado",
          desc: "Traemos lo necesario. Cuidamos armarios, suelos y cada detalle de tu casa.",
        },
      ],
    },
    reviews: {
      eyebrow: "Lo que dicen nuestros clientes",
      title: "Reseñas reales de Google",
      sub: "4,9 de 5 · 104 opiniones en Google Maps",
      cta: "Ver en Google Maps",
      items: [
        {
          name: "Cliente verificado",
          text: "La experiencia no pudo ser mejor. Vinieron más de seis personas, perfectamente coordinadas, y limpiaron todos los armarios por dentro — algo que muchas empresas pasan por alto.",
          focus: "Tras reforma",
        },
        {
          name: "Cliente verificado",
          text: "Fernando y su equipo realizaron una limpieza en profundidad de mi piso. Fueron puntuales y profesionales; se nota la experiencia y el cuidado. Totalmente recomendables.",
          focus: "Limpieza profunda",
        },
        {
          name: "Cliente verificado",
          text: "Limpiaron tapicerías con manchas imposibles de años y dejaron todo perfecto. Trato cercano y limpieza a un nivel profundo. Sin duda los volveremos a llamar.",
          focus: "Tapicería",
        },
        {
          name: "Cliente verificado",
          text: "The guys were amazing, they came on time, did everything efficiently. The smell they left is awesome and the service was great!",
          focus: "Home cleaning",
        },
        {
          name: "Cliente verificado",
          text: "Buscaba una empresa de confianza y ha sido un acierto total. Comunicación fluida, servicio excelente y dejaron todo impecable. Totalmente recomendados.",
          focus: "Hogar",
        },
        {
          name: "Cliente verificado",
          text: "Me encantó cómo dieron el presupuesto y mi hogar quedó muy limpio y con un buen olor. De verdad son unos verdaderos Genios — los volveré a llamar.",
          focus: "Limpieza profunda",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Antes de llamarnos",
      sub: "Lo que más nos preguntan los vecinos de Madrid.",
      items: [
        {
          q: "¿Cómo pedís presupuesto?",
          a: "Por WhatsApp o teléfono. Nos cuentas el tipo de limpieza, metros aproximados y zona — te damos un presupuesto claro, sin compromiso.",
        },
        {
          q: "¿Traéis productos y material?",
          a: "Sí. Venimos con productos y equipo. Si prefieres productos concretos en casa, lo adaptamos.",
        },
        {
          q: "¿Hacéis limpiezas tras reforma?",
          a: "Es una de nuestras especialidades. Enviamos equipos amplios y coordinados para polvo de obra, armarios y cada detalle.",
        },
        {
          q: "¿Cubrís solo Chamberí o toda Madrid?",
          a: "Estamos en Chamberí (Donoso Cortés, 39) y nos desplazamos a hogares, oficinas y locales por toda la Comunidad de Madrid.",
        },
        {
          q: "¿Puedo elegir horario?",
          a: "Sí. Trabajamos de lunes a sábado con horarios flexibles; te proponemos el hueco que mejor te encaje.",
        },
      ],
    },
    areas: {
      eyebrow: "Madrid",
      title: "Chamberí y toda la ciudad",
      sub: "Base en C/ de Donoso Cortés, 39. Desplazamientos a hogares, oficinas y locales en la Comunidad de Madrid.",
    },
    contact: {
      eyebrow: "Empezar",
      title: "¿Listo para una casa que huela a limpio?",
      sub: "Escríbenos por WhatsApp o llámanos. Te respondemos rápido con un presupuesto sin compromiso.",
      phone: "Llamar al 641 63 24 51",
      whatsapp: "Escribir por WhatsApp",
      hoursTitle: "Horario",
      hours: [
        "Lun–Mié, Vie: 9:00–20:00",
        "Jueves: 9:00–20:30",
        "Sábado: 10:00–15:00",
        "Domingo: cerrado",
      ],
      addressTitle: "Dirección",
      address: "C/ de Donoso Cortés, 39\nChamberí, 28015 Madrid",
    },
    footer: {
      tagline: "Limpieza profesional en Madrid",
      rights: "Demo de página de inicio · Diseño propuesto",
    },
  },
  en: {
    nav: {
      services: "Services",
      how: "How we work",
      reviews: "Reviews",
      contact: "Contact",
      call: "Call",
      quote: "Get a quote",
    },
    hero: {
      brand: "Limpiezas El Genio",
      location: "Madrid",
      headline: "Your home, spotless. No fuss.",
      sub:
        "Professional teams across Chamberí and Madrid: deep cleans, post-renovation, offices, and upholstery.",
      ctaPrimary: "WhatsApp now",
      ctaSecondary: "See services",
      form: {
        title: "Book a callback",
        subtitle: "Pick a slot — we’ll call you back.",
        name: "Name",
        phone: "Phone",
        slot: "Preference",
        slots: ["Morning", "Afternoon", "ASAP"],
        submit: "Request call",
        success: "Done! We’ll call you soon.",
      },
    },
    services: {
      eyebrow: "What we do",
      title: "Cleaning tailored to every space",
      sub: "From a new flat to a full renovation — we match the team, method, and schedule to what you need.",
      items: [
        {
          title: "Home cleaning",
          desc: "Standard or deep: kitchen, bathrooms, cupboards, floors — and that fresh clean scent clients rave about.",
        },
        {
          title: "Post-renovation & moving",
          desc: "Larger coordinated crews for construction dust, debris, and the details other firms skip.",
        },
        {
          title: "Offices & commercial",
          desc: "Recurring maintenance or one-off cleans for offices, shops, and workplaces.",
        },
        {
          title: "Upholstery & sofas",
          desc: "Specialist sofa and fabric cleaning — including stubborn stains years in the making.",
        },
        {
          title: "Windows & glass",
          desc: "Streak-free glass with a professional finish for homes and commercial spaces.",
        },
        {
          title: "Holiday lets & events",
          desc: "Turnover cleans, end-of-tenancy, and spaces prepared for celebrations.",
        },
      ],
    },
    process: {
      eyebrow: "Simple steps",
      title: "From a message to a home that shines",
      sub: "Clear communication, transparent quotes, and a team that treats your space with care.",
      steps: [
        {
          num: "01",
          title: "Tell us what you need",
          desc: "WhatsApp or a call. We listen and give you a clear quote — no surprises.",
        },
        {
          num: "02",
          title: "We set the day and team",
          desc: "Flexible hours. For bigger jobs we send several coordinated professionals.",
        },
        {
          num: "03",
          title: "A thorough clean",
          desc: "Methodical work, respect for your home, and a final check. Anything left? We fix it.",
        },
      ],
    },
    trust: {
      eyebrow: "Why people choose us",
      title: "4.9 stars aren’t accidental",
      sub: "Over 100 Madrid neighbours already know. Punctual, detailed, and genuinely friendly.",
      points: [
        {
          title: "Teams with a method",
          desc: "Extra hands when needed, perfectly organised — no corner left behind.",
        },
        {
          title: "Full transparency",
          desc: "A clear quote from the first contact. No hidden fees.",
        },
        {
          title: "Products & care",
          desc: "We bring what we need. Cupboards, floors, and every detail of your home.",
        },
      ],
    },
    reviews: {
      eyebrow: "What clients say",
      title: "Real Google reviews",
      sub: "4.9 out of 5 · 104 reviews on Google Maps",
      cta: "View on Google Maps",
      items: [
        {
          name: "Verified customer",
          text: "The experience couldn’t have been better. More than six people came, perfectly coordinated, and cleaned inside every cupboard — something many companies overlook.",
          focus: "Post-renovation",
        },
        {
          name: "Verified customer",
          text: "Fernando and his team deep-cleaned my flat. They were punctual and professional; you can feel the experience and care. Highly recommended.",
          focus: "Deep clean",
        },
        {
          name: "Verified customer",
          text: "They cleaned upholstery with impossible years-old stains and left everything perfect. Warm service and a truly deep clean. We’ll call them again without a doubt.",
          focus: "Upholstery",
        },
        {
          name: "Verified customer",
          text: "The guys were amazing, they came on time, did everything efficiently. The smell they left is awesome and the service was great!",
          focus: "Home cleaning",
        },
        {
          name: "Verified customer",
          text: "I was looking for a trustworthy company and it was a total win. Smooth communication, excellent service, and they left everything spotless. Highly recommended.",
          focus: "Home",
        },
        {
          name: "Verified customer",
          text: "I loved how they gave the quote, and my home was left very clean with a great smell. They’re true Genios — I’ll call them again.",
          focus: "Deep clean",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Before you call",
      sub: "What Madrid neighbours ask us most.",
      items: [
        {
          q: "How do I get a quote?",
          a: "WhatsApp or phone. Tell us the type of clean, approximate size, and area — we’ll give you a clear, no-obligation quote.",
        },
        {
          q: "Do you bring products and equipment?",
          a: "Yes. We arrive with products and kit. If you prefer specific products at home, we can adapt.",
        },
        {
          q: "Do you do post-renovation cleans?",
          a: "It’s one of our specialties. We send larger coordinated crews for construction dust, cupboards, and every detail.",
        },
        {
          q: "Only Chamberí, or all of Madrid?",
          a: "We’re based in Chamberí (Donoso Cortés, 39) and travel to homes, offices, and shops across the Community of Madrid.",
        },
        {
          q: "Can I choose the time?",
          a: "Yes. We’re open Monday to Saturday with flexible hours — we’ll suggest a slot that works for you.",
        },
      ],
    },
    areas: {
      eyebrow: "Madrid",
      title: "Chamberí and across the city",
      sub: "Based at C/ de Donoso Cortés, 39. We travel to homes, offices, and shops across the Community of Madrid.",
    },
    contact: {
      eyebrow: "Get started",
      title: "Ready for a home that smells clean?",
      sub: "Message us on WhatsApp or give us a call. We’ll reply quickly with a no-obligation quote.",
      phone: "Call 641 63 24 51",
      whatsapp: "Message on WhatsApp",
      hoursTitle: "Hours",
      hours: [
        "Mon–Wed, Fri: 9:00–20:00",
        "Thursday: 9:00–20:30",
        "Saturday: 10:00–15:00",
        "Sunday: closed",
      ],
      addressTitle: "Address",
      address: "C/ de Donoso Cortés, 39\nChamberí, 28015 Madrid",
    },
    footer: {
      tagline: "Professional cleaning in Madrid",
      rights: "Homepage demo · Proposed design",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
