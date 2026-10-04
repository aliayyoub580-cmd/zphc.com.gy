export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    verification: string;
    team: string;
    antiDoping: string;
    tools: string;
    blog: string;
    contact: string;
    menu: string;
  };
  status: {
    welcomeAgain: string;
    deviceCountry: string;
    onSite: string;
    deviceTime: string;
    lastVisit: string;
    previousStay: string;
  };
  hero: {
    welcome: string;
    title: string;
    phrases: string[];
  };
  main: {
    sloganTitle: string;
    subtitle: string;
    categoryTags: string;
    quote: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    privacyPrompt: string;
    privacyLink: string;
    pandaCaption: string;
  };
  footer: {
    officialStickers: string;
    links: {
      welcome: string;
      products: string;
      verification: string;
      team: string;
      antiDoping: string;
      tools: string;
      blog: string;
      contact: string;
      privacyPolicy: string;
      cookiePolicy: string;
      gdpr: string;
      terms: string;
      disclaimer: string;
      editorialStandards: string;
      accessibility: string;
      officialDomains: string;
    };
  };
}

export const RTL_LANGUAGES = ['ar', 'fa', 'he', 'ur'];

export const TRANSLATIONS: Record<string, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      verification: 'Verification',
      team: 'Team',
      antiDoping: 'Anti-Doping',
      tools: 'Tools',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'WELCOME AGAIN',
      deviceCountry: 'Device country',
      onSite: 'On site',
      deviceTime: 'Device time',
      lastVisit: 'Last visit',
      previousStay: 'Previous stay',
    },
    hero: {
      welcome: 'WELCOME',
      title: 'ZPHC® — Official Fitness Gear, Wellness & Athletic Performance',
      phrases: [
        'We proved what’s possible by building yesterday’s talent. Now, ZPHC® is searching the world for you.',
        'ZPHC® World Sports Club: Where global talent is discovered, built, and destined for greatness.',
        'ZPHC® World Sports Club: Honoring a legacy of champions, igniting the world’s next legends.',
        'A proud history of uncovering greatness. A global mission to find the next generation.',
        'ZPHC® World Sports Club: Transforming raw global talent into tomorrow’s unstoppable forces.',
        'Proven legacy, global future: ZPHC® World Sports Club is scouting new talent today.',
        'We saw greatness in them. We see it in you. ZPHC® is searching the world for your fire.',
        'For every heart that beats for the game — ZPHC® uncovers talent, builds dreams, and changes lives.',
      ],
    },
    main: {
      sloganTitle: 'HELPING ATHLETES TO REACH NEW GOALS!',
      subtitle:
        'We are a global official distributor and brand-information hub for sports accessories, apparel, team media, clean-sport education and responsible training culture.',
      categoryTags:
        '(apparel, rehabilitation equipment, medical apparel for professionals, medical masks, robes, gloves and related general questions)',
      quote:
        'Discover the official ZPHC® website: premium fitness gear, sports accessories, science-backed wellness guides, and anti-doping education. Explore now!',
      p1: 'Standing at a new launching point that carries hope and vitality, ZPHC® continues to grow through practical work, disciplined presentation and respect for the people who build the culture around sport. We are striving to operate as an international-level information hub, product-presentation platform and team community while keeping the central principle clear: people first.',
      p2: 'The ZPHC® website is designed for visitors who want clear information about branded sports accessories, apparel, team media, clean-sport education and health-oriented training topics. The purpose is not to make exaggerated promises. The purpose is to present the brand, protect the intellectual property of the website and give visitors a responsible route to contact us when they need current product or collaboration information.',
      p3: 'Our culture values consistent effort, disciplined training, intelligent recovery, legal compliance, respect for the rules of sport and transparent communication. Every photograph, product image and written section is presented for informational purposes, and all final questions about availability, specifications, permissions or use should be directed through the official contact form.',
      p4: 'We look forward to opening new countries and new communities with reliable partners, athletes, supporters and team members who want to help develop and present high-quality sports clothes, accessories and responsible training culture.',
      privacyPrompt: 'Please read our',
      privacyLink: 'privacy policy',
      pandaCaption: 'ZPHC® simply the best! Better than all the rest!',
    },
    footer: {
      officialStickers: 'Official ZPHC® stickers',
      links: {
        welcome: 'Welcome',
        products: 'Products',
        verification: 'Verification',
        team: 'ZPHC® Team',
        antiDoping: 'Anti-Doping',
        tools: 'ZPHC® Tools',
        blog: 'Blog',
        contact: 'Contact',
        privacyPolicy: 'Privacy Policy',
        cookiePolicy: 'Cookie Policy',
        gdpr: 'GDPR & Data Rights',
        terms: 'Terms',
        disclaimer: 'Disclaimer',
        editorialStandards: 'Editorial Standards',
        accessibility: 'Accessibility',
        officialDomains: 'Official Domains & Authenticity',
      },
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      products: 'Продукция',
      verification: 'Верификация',
      team: 'Команда',
      antiDoping: 'Антидопинг',
      tools: 'Инструменты',
      blog: 'Блог',
      contact: 'Контакты',
      menu: 'Меню',
    },
    status: {
      welcomeAgain: 'ДОБРО ПОЖАЛОВАТЬ',
      deviceCountry: 'Страна устройства',
      onSite: 'На сайте',
      deviceTime: 'Время устройства',
      lastVisit: 'Последний визит',
      previousStay: 'Предыдущий сеанс',
    },
    hero: {
      welcome: 'ДОБРО ПОЖАЛОВАТЬ',
      title: 'ZPHC® — Официальная спортивная экипировка, здоровье и атлетические достижения',
      phrases: [
        'Мы доказали возможности, взрастив чемпионов вчера. Теперь ZPHC® ищет именно вас по всему миру.',
        'ZPHC® World Sports Club: Где мировые таланты находят признание и идут к величию.',
        'ZPHC® World Sports Club: Чествуя наследие чемпионов, зажигаем новые мировые легенды.',
        'Для каждого сердца, бьющегося спортом — ZPHC® открывает таланты и воплощает мечты.',
      ],
    },
    main: {
      sloganTitle: 'ПОМОГАЕМ АТЛЕТАМ ДОСТИГАТЬ НОВЫХ ЦЕЛЕЙ!',
      subtitle:
        'Мы являемся официальным международным дистрибьютором и брендовым информационным хабом спортивных аксессуаров, экипировки, медиа команды, антидопингового образования и культуры ответственных тренировок.',
      categoryTags:
        '(одежда, реабилитационное оборудование, профессиональная экипировка, маски, халаты, перчатки и общие вопросы)',
      quote:
        'Откройте официальный сайт ZPHC®: премиальная спортивная экипировка, аксессуары, научно обоснованные руководства по здоровью и антидопинговые материалы. Исследуйте прямо сейчас!',
      p1: 'Стоя на новом этапе развития, полном надежды и энергии, ZPHC® продолжает расти благодаря практической работе, дисциплине и уважению к людям, формирующим спортивную культуру. Наш главный принцип: люди прежде всего.',
      p2: 'Сайт ZPHC® создан для тех, кто ищет прозрачную информацию о фирменных спортивных товарах, экипировке, антидопинговом просвещении и здоровом тренинге без преувеличенных обещаний.',
      p3: 'Наша культура ценит упорный труд, дисциплинированные тренировки, грамотное восстановление, соблюдение спортивных регламентов и открытое общение.',
      p4: 'Мы рады открывать новые страны и сообщества вместе с надежными партнерами, спортсменами и энтузиастами качественного спорта.',
      privacyPrompt: 'Пожалуйста, ознакомьтесь с нашей',
      privacyLink: 'политикой конфиденциальности',
      pandaCaption: 'ZPHC® просто лучшие! Лучше всех остальных!',
    },
    footer: {
      officialStickers: 'Официальные стикеры ZPHC®',
      links: {
        welcome: 'Главная',
        products: 'Продукция',
        verification: 'Верификация',
        team: 'Команда ZPHC®',
        antiDoping: 'Антидопинг',
        tools: 'Инструменты ZPHC®',
        blog: 'Блог',
        contact: 'Контакты',
        privacyPolicy: 'Политика конфиденциальности',
        cookiePolicy: 'Политика файлов cookie',
        gdpr: 'GDPR и права на данные',
        terms: 'Условия',
        disclaimer: 'Отказ от ответственности',
        editorialStandards: 'Редакционные стандарты',
        accessibility: 'Доступность',
        officialDomains: 'Официальные домены и подлинность',
      },
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      verification: 'Verifizierung',
      team: 'Team',
      antiDoping: 'Anti-Doping',
      tools: 'Werkzeuge',
      blog: 'Blog',
      contact: 'Kontakt',
      menu: 'Menü',
    },
    status: {
      welcomeAgain: 'WILLKOMMEN ZURÜCK',
      deviceCountry: 'Geräteland',
      onSite: 'Auf der Website',
      deviceTime: 'Gerätezeit',
      lastVisit: 'Letzter Besuch',
      previousStay: 'Vorherige Sitzung',
    },
    hero: {
      welcome: 'WILLKOMMEN',
      title: 'ZPHC® — Offizielle Fitnessausrüstung, Wellness & sportliche Leistung',
      phrases: [
        'Wir haben bewiesen, was möglich ist. Jetzt sucht ZPHC® weltweit nach deinem Talent.',
        'ZPHC® World Sports Club: Wo weltweite Talente gefördert und zu Spitzenleistungen geführt werden.',
        'Ein stolzes Erbe an Meistern, ein weltweiter Antrieb für die Legenden von morgen.',
      ],
    },
    main: {
      sloganTitle: 'WIR HELFEN ATHLETEN, NEUE ZIELE ZU ERREICHEN!',
      subtitle:
        'Wir sind ein offizieller weltweiter Distributor und Informationsknotenpunkt für Sportzubehör, Bekleidung, Teammedien, sauberen Sport und verantwortungsvolle Trainingskultur.',
      categoryTags:
        '(Bekleidung, Rehabilitationsgeräte, medizinische Ausrüstung, Masken, Kittel, Handschuhe und allgemeine Anfragen)',
      quote:
        'Entdecken Sie die offizielle ZPHC® Website: Premium-Fitnessausrüstung, Sportzubehör und Anti-Doping-Bildung.',
      p1: 'ZPHC® wächst durch engagierte Arbeit, disziplinierte Präsentation und Respekt für die Menschen im Sport. Unser Grundsatz: Der Mensch steht an erster Stelle.',
      p2: 'Die ZPHC®-Website bietet klare Informationen zu Sportausrüstung, Bekleidung und Anti-Doping-Themen ohne übertriebene Versprechen.',
      p3: 'Unsere Kultur schätzt konsequentes Training, intelligente Regeneration und transparente Kommunikation.',
      p4: 'Wir freuen uns darauf, mit zuverlässigen Partnern neue Märkte und Gemeinschaften zu erschließen.',
      privacyPrompt: 'Bitte lesen Sie unsere',
      privacyLink: 'Datenschutzerklärung',
      pandaCaption: 'ZPHC® einfach die Besten! Besser als der Rest!',
    },
    footer: {
      officialStickers: 'Offizielle ZPHC® Sticker',
      links: {
        welcome: 'Startseite',
        products: 'Produkte',
        verification: 'Verifizierung',
        team: 'ZPHC® Team',
        antiDoping: 'Anti-Doping',
        tools: 'ZPHC® Werkzeuge',
        blog: 'Blog',
        contact: 'Kontakt',
        privacyPolicy: 'Datenschutz',
        cookiePolicy: 'Cookie-Richtlinie',
        gdpr: 'DSGVO & Datenrechte',
        terms: 'AGB',
        disclaimer: 'Haftungsausschluss',
        editorialStandards: 'Redaktionelle Standards',
        accessibility: 'Barrierefreiheit',
        officialDomains: 'Offizielle Domains',
      },
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      verification: 'Vérification',
      team: 'Équipe',
      antiDoping: 'Antidopage',
      tools: 'Outils',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'BIENVENUE',
      deviceCountry: 'Pays de l’appareil',
      onSite: 'Sur le site',
      deviceTime: 'Heure locale',
      lastVisit: 'Dernière visite',
      previousStay: 'Visite précédente',
    },
    hero: {
      welcome: 'BIENVENUE',
      title: 'ZPHC® — Équipement de fitness officiel, bien-être et performance athlétique',
      phrases: [
        'Nous avons prouvé ce qui est possible. Aujourd’hui, ZPHC® recherche vos talents dans le monde entier.',
        'ZPHC® World Sports Club : Là où les talents mondiaux se révèlent et atteignent l’excellence.',
        'Un héritage de champions, une mission pour inspirer les futures légendes du sport.',
      ],
    },
    main: {
      sloganTitle: 'AIDER LES ATHLÈTES À ATTEINDRE DE NOUVEAUX OBJECTIFS !',
      subtitle:
        'Distributeur officiel mondial et centre d’information pour les accessoires de sport, vêtements d’entraînement, éducation antidopage et culture sportive responsable.',
      categoryTags:
        '(vêtements, équipement de réhabilitation, équipement médical professionnel, masques, blouses, gants et questions générales)',
      quote:
        'Découvrez le site officiel de ZPHC® : équipement de fitness haut de gamme, accessoires sportifs et guides scientifiques.',
      p1: 'ZPHC® continue de grandir grâce au travail rigoureux, à la discipline et au respect des personnes qui bâtissent la culture du sport. Notre principe fondateur : l’humain d’abord.',
      p2: 'Le site ZPHC® s’adresse aux visiteurs souhaitant des informations claires et vérifiées sur nos gammes de produits et notre démarche éducative.',
      p3: 'Notre culture valorise l’effort régulier, la récupération intelligente, le respect des règles sportives et la communication transparente.',
      p4: 'Nous avons hâte de développer de nouveaux partenariats et de soutenir les athlètes à travers le monde.',
      privacyPrompt: 'Veuillez lire notre',
      privacyLink: 'politique de confidentialité',
      pandaCaption: 'ZPHC® tout simplement le meilleur ! Bien au-dessus du reste !',
    },
    footer: {
      officialStickers: 'Autocollants officiels ZPHC®',
      links: {
        welcome: 'Accueil',
        products: 'Produits',
        verification: 'Vérification',
        team: 'Équipe ZPHC®',
        antiDoping: 'Antidopage',
        tools: 'Outils ZPHC®',
        blog: 'Blog',
        contact: 'Contact',
        privacyPolicy: 'Politique de confidentialité',
        cookiePolicy: 'Politique des cookies',
        gdpr: 'RGPD & Données',
        terms: 'Conditions',
        disclaimer: 'Avertissement légal',
        editorialStandards: 'Normes éditoriales',
        accessibility: 'Accessibilité',
        officialDomains: 'Domaines officiels',
      },
    },
  },

  it: {
    nav: {
      home: 'Home',
      products: 'Prodotti',
      verification: 'Verifica',
      team: 'Squadra',
      antiDoping: 'Antidoping',
      tools: 'Strumenti',
      blog: 'Blog',
      contact: 'Contatto',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'BENTORNATO',
      deviceCountry: 'Paese dispositivo',
      onSite: 'Sul sito',
      deviceTime: 'Ora dispositivo',
      lastVisit: 'Ultima visita',
      previousStay: 'Permanenza prec.',
    },
    hero: {
      welcome: 'BENVENUTO',
      title: 'ZPHC® — Abbigliamento fitness ufficiale, benessere e prestazioni sportive',
      phrases: [
        'Abbiamo dimostrato ciò che è possibile. Ora ZPHC® cerca il tuo talento in tutto il mondo.',
        'ZPHC® World Sports Club: Dove il talento sportivo globale viene scoperto e valorizzato.',
      ],
    },
    main: {
      sloganTitle: 'AIUTARE GLI ATLETI A RAGGIUNGERE NUOVI OBIETTIVI!',
      subtitle:
        'Siamo un distributore ufficiale globale e punto di riferimento per accessori sportivi, abbigliamento, media del team ed educazione antidoping.',
      categoryTags:
        '(abbigliamento, attrezzature di riabilitazione, accessori professionali e domande generali)',
      quote:
        'Scopri il sito ufficiale ZPHC®: abbigliamento fitness premium, accessori e guide sul benessere scientifico.',
      p1: 'ZPHC® cresce con lavoro pratico, disciplina e rispetto per chi vive lo sport. Il nostro principio: prima le persone.',
      p2: 'Il sito fornisce informazioni chiare senza promesse esagerate, proteggendo la proprietà intellettuale del marchio.',
      p3: 'Promuoviamo impegno costante, recupero intelligente, rispetto delle regole e trasparenza.',
      p4: 'Accogliamo collaborazioni affidabili per promuovere lo sport responsabile in ogni paese.',
      privacyPrompt: 'Si prega di leggere la nostra',
      privacyLink: 'informativa sulla privacy',
      pandaCaption: 'ZPHC® semplicemente il migliore! Meglio di tutti gli altri!',
    },
    footer: {
      officialStickers: 'Adesivi ufficiali ZPHC®',
      links: {
        welcome: 'Home',
        products: 'Prodotti',
        verification: 'Verifica',
        team: 'Squadra ZPHC®',
        antiDoping: 'Antidoping',
        tools: 'Strumenti ZPHC®',
        blog: 'Blog',
        contact: 'Contatto',
        privacyPolicy: 'Informativa sulla privacy',
        cookiePolicy: 'Gestione Cookie',
        gdpr: 'GDPR & Diritti',
        terms: 'Termini',
        disclaimer: 'Disclaimer',
        editorialStandards: 'Standard editoriali',
        accessibility: 'Accessibilità',
        officialDomains: 'Domini ufficiali',
      },
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      verification: 'Verificación',
      team: 'Equipo',
      antiDoping: 'Antidopaje',
      tools: 'Herramientas',
      blog: 'Blog',
      contact: 'Contacto',
      menu: 'Menú',
    },
    status: {
      welcomeAgain: 'BIENVENIDO',
      deviceCountry: 'País del dispositivo',
      onSite: 'En el sitio',
      deviceTime: 'Hora del dispositivo',
      lastVisit: 'Última visita',
      previousStay: 'Estancia anterior',
    },
    hero: {
      welcome: 'BIENVENIDO',
      title: 'ZPHC® — Ropa deportiva oficial, bienestar y rendimiento atlético',
      phrases: [
        'Demostramos lo que es posible forjando campeones. Ahora ZPHC® busca tu talento en todo el mundo.',
        'ZPHC® World Sports Club: Donde el talento global se descubre y se guía hacia la grandeza.',
        'Honrando el legado de los campeones, inspirando a las próximas leyendas mundiales.',
      ],
    },
    main: {
      sloganTitle: '¡AYUDANDO A LOS ATLETAS A ALCANZAR NUEVAS METAS!',
      subtitle:
        'Somos un distribuidor oficial global y centro informativo para accesorios deportivos, indumentaria, educación sobre juego limpio y cultura de entrenamiento responsable.',
      categoryTags:
        '(ropa, equipo de rehabilitación, indumentaria médica, mascarillas, batas, guantes y consultas generales)',
      quote:
        'Descubra el sitio web oficial de ZPHC®: equipo de fitness de primera calidad, accesorios deportivos y guías de bienestar respaldadas por la ciencia.',
      p1: 'ZPHC® continúa creciendo a través del trabajo riguroso, la disciplina y el respeto a quienes forjan la cultura deportiva. Nuestro principio central: las personas primero.',
      p2: 'El sitio web de ZPHC® ofrece información clara y veraz sobre nuestros productos y filosofía, sin promesas exageradas.',
      p3: 'Nuestra cultura valora el esfuerzo constante, la recuperación inteligente, el cumplimiento de las normativas y la comunicación transparente.',
      p4: 'Esperamos seguir abriendo nuevos países con socios comprometidos y atletas apasionados por el deporte de calidad.',
      privacyPrompt: 'Por favor, lea nuestra',
      privacyLink: 'política de privacidad',
      pandaCaption: '¡ZPHC® simplemente lo mejor! ¡Superando al resto!',
    },
    footer: {
      officialStickers: 'Stickers oficiales ZPHC®',
      links: {
        welcome: 'Inicio',
        products: 'Productos',
        verification: 'Verificación',
        team: 'Equipo ZPHC®',
        antiDoping: 'Antidopaje',
        tools: 'Herramientas ZPHC®',
        blog: 'Blog',
        contact: 'Contacto',
        privacyPolicy: 'Política de privacidad',
        cookiePolicy: 'Política de cookies',
        gdpr: 'RGPD y Derechos de datos',
        terms: 'Términos',
        disclaimer: 'Descargo de responsabilidad',
        editorialStandards: 'Estándares editoriales',
        accessibility: 'Accesibilidad',
        officialDomains: 'Dominios oficiales',
      },
    },
  },

  'es-419': {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      verification: 'Verificación',
      team: 'Equipo',
      antiDoping: 'Antidopaje',
      tools: 'Herramientas',
      blog: 'Blog',
      contact: 'Contacto',
      menu: 'Menú',
    },
    status: {
      welcomeAgain: 'HOLA DE NUEVO',
      deviceCountry: 'País del dispositivo',
      onSite: 'En el sitio',
      deviceTime: 'Hora local',
      lastVisit: 'Última visita',
      previousStay: 'Sesión anterior',
    },
    hero: {
      welcome: 'BIENVENIDOS',
      title: 'ZPHC® — Ropa deportiva oficial, bienestar y alto rendimiento en Latinoamérica',
      phrases: [
        'Forjamos campeones del pasado, hoy ZPHC® busca a la próxima generación en toda la región.',
        'ZPHC® World Sports Club: El hogar de los atletas que sueñan en grande.',
      ],
    },
    main: {
      sloganTitle: '¡IMPULSANDO A LOS ATLETAS HACIA SUS METAS!',
      subtitle:
        'Distribuidor oficial y comunidad deportiva para accesorios, ropa de entrenamiento y guías de bienestar.',
      categoryTags: '(indumentaria, rehabilitación, accesorios deportivos y soporte al atleta)',
      quote:
        'Conoce la línea oficial ZPHC®: máxima durabilidad, rendimiento atlético y entrenamiento responsable.',
      p1: 'ZPHC® avanza con determinación y pasión por el deporte en América Latina. Las personas siempre son nuestra prioridad.',
      p2: 'Información auténtica, directa y confiable para toda nuestra comunidad deportiva.',
      p3: 'Entrenamiento disciplinado, respeto por el deporte y honestidad en cada paso.',
      p4: 'Expandiendo nuestra presencia en toda Latinoamérica con atletas y socios destacados.',
      privacyPrompt: 'Consulta nuestra',
      privacyLink: 'política de privacidad',
      pandaCaption: '¡ZPHC® simplemente el mejor! ¡Por encima de todos!',
    },
    footer: {
      officialStickers: 'Stickers oficiales ZPHC®',
      links: {
        welcome: 'Inicio',
        products: 'Productos',
        verification: 'Verificación',
        team: 'Equipo ZPHC®',
        antiDoping: 'Antidopaje',
        tools: 'Herramientas',
        blog: 'Blog',
        contact: 'Contacto',
        privacyPolicy: 'Privacidad',
        cookiePolicy: 'Cookies',
        gdpr: 'Datos y Derechos',
        terms: 'Términos',
        disclaimer: 'Aviso legal',
        editorialStandards: 'Estándares',
        accessibility: 'Accesibilidad',
        officialDomains: 'Dominios oficiales',
      },
    },
  },

  'pt-br': {
    nav: {
      home: 'Início',
      products: 'Produtos',
      verification: 'Verificação',
      team: 'Equipe',
      antiDoping: 'Antidoping',
      tools: 'Ferramentas',
      blog: 'Blog',
      contact: 'Contato',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'BEM-VINDO DE VOLTA',
      deviceCountry: 'País do dispositivo',
      onSite: 'No site',
      deviceTime: 'Hora do dispositivo',
      lastVisit: 'Última visita',
      previousStay: 'Sessão anterior',
    },
    hero: {
      welcome: 'BEM-VINDO',
      title: 'ZPHC® — Equipamentos oficiais de fitness, bem-estar e performance atlética',
      phrases: [
        'Construímos os campeões do ontem. Agora a ZPHC® procura o seu talento pelo mundo.',
        'ZPHC® World Sports Club: Onde o talento esportivo mundial é revelado.',
      ],
    },
    main: {
      sloganTitle: 'AJUDANDO ATLETAS A ALCANÇAR NOVOS OBJETIVOS!',
      subtitle:
        'Distribuidor oficial global e centro informativo de acessórios esportivos, vestuário, educação antidoping e cultura de treino consciente.',
      categoryTags:
        '(vestuário, equipamentos de reabilitação, acessórios profissionais e dúvidas gerais)',
      quote:
        'Conheça o site oficial da ZPHC®: equipamentos esportivos premium, vestuário de alto nível e educação antidoping.',
      p1: 'A ZPHC® cresce com trabalho sério, disciplina e respeito aos atletas. Princípio central: as pessoas em primeiro lugar.',
      p2: 'O site foi criado para quem busca dados autênticos sobre nossa marca e produtos sem exageros.',
      p3: 'Valorizamos treino disciplinado, recuperação correta e comunicação honesta.',
      p4: 'Expandindo fronteiras com parceiros comprometidos com o esporte limpo e de qualidade.',
      privacyPrompt: 'Por favor, leia nossa',
      privacyLink: 'política de privacidade',
      pandaCaption: 'ZPHC® simplesmente o melhor! Melhor que todo o resto!',
    },
    footer: {
      officialStickers: 'Stickers oficiais ZPHC®',
      links: {
        welcome: 'Início',
        products: 'Produtos',
        verification: 'Verificação',
        team: 'Equipe ZPHC®',
        antiDoping: 'Antidoping',
        tools: 'Ferramentas ZPHC®',
        blog: 'Blog',
        contact: 'Contato',
        privacyPolicy: 'Política de privacidade',
        cookiePolicy: 'Política de cookies',
        gdpr: 'LGPD e Direitos',
        terms: 'Termos',
        disclaimer: 'Aviso legal',
        editorialStandards: 'Padrões editoriais',
        accessibility: 'Acessibilidade',
        officialDomains: 'Domínios oficiais',
      },
    },
  },

  tr: {
    nav: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      verification: 'Doğrulama',
      team: 'Takım',
      antiDoping: 'Anti-Doping',
      tools: 'Araçlar',
      blog: 'Blog',
      contact: 'İletişim',
      menu: 'Menü',
    },
    status: {
      welcomeAgain: 'TEKRAR HOŞ GELDİNİZ',
      deviceCountry: 'Cihaz ülkesi',
      onSite: 'Sitede',
      deviceTime: 'Cihaz saati',
      lastVisit: 'Son ziyaret',
      previousStay: 'Önceki süre',
    },
    hero: {
      welcome: 'HOŞ GELDİNİZ',
      title: 'ZPHC® — Resmi Fitness Ekipmanları, Sağlık ve Atletik Performans',
      phrases: [
        'Dünün yeteneklerini zirveye taşıdık. Şimdi ZPHC® tüm dünyada sizi arıyor.',
        'ZPHC® World Sports Club: Küresel yeteneklerin keşfedildiği ve zirveye ulaştığı yer.',
      ],
    },
    main: {
      sloganTitle: 'SPORCULARIN YENİ HEDEFLERE ULAŞMASINA YARDIMCI OLUYORUZ!',
      subtitle:
        'Spor aksesuarları, giyim, takım medyası, temiz spor eğitimi ve sorumlu antrenman kültürü için resmi uluslararası distribütör ve bilgi merkezi.',
      categoryTags: '(spor giyim, rehabilitasyon ekipmanları, medikal giyim ve genel sorular)',
      quote:
        'Resmi ZPHC® web sitesini keşfedin: birinci sınıf fitness ekipmanları, spor aksesuarları ve bilimsel rehberler.',
      p1: 'ZPHC®, disiplinli çalışma ve spora emek verenlere duyduğu saygıyla büyümeye devam ediyor. İlkemiz: önce insan.',
      p2: 'ZPHC® web sitesi, güvenilir spor aksesuarları ve sağlık odaklı antrenman konularında net bilgi sunar.',
      p3: 'Kültürümüz düzenli antrenmanı, bilinçli toparlanmayı ve şeffaf iletişimi destekler.',
      p4: 'Güvenilir ortaklarımızla yeni ülkelerde spor kültürünü geliştirmeyi hedefliyoruz.',
      privacyPrompt: 'Lütfen inceleyiniz:',
      privacyLink: 'Gizlilik politikası',
      pandaCaption: 'ZPHC® kesinlikle en iyisi! Diğerlerinin hepsinden üstün!',
    },
    footer: {
      officialStickers: 'Resmi ZPHC® Çıkartmaları',
      links: {
        welcome: 'Ana Sayfa',
        products: 'Ürünler',
        verification: 'Doğrulama',
        team: 'ZPHC® Takımı',
        antiDoping: 'Anti-Doping',
        tools: 'ZPHC® Araçları',
        blog: 'Blog',
        contact: 'İletişim',
        privacyPolicy: 'Gizlilik Politikası',
        cookiePolicy: 'Çerez Politikası',
        gdpr: 'KVKK ve Veri Hakları',
        terms: 'Koşullar',
        disclaimer: 'Yasal Uyarı',
        editorialStandards: 'Yayın Standartları',
        accessibility: 'Erişilebilirlik',
        officialDomains: 'Resmi Alan Adları',
      },
    },
  },

  uz: {
    nav: {
      home: 'Bosh sahifa',
      products: 'Mahsulotlar',
      verification: 'Tekshirish',
      team: 'Jamoa',
      antiDoping: 'Antidoping',
      tools: 'Vositalar',
      blog: 'Blog',
      contact: 'Aloqa',
      menu: 'Menyu',
    },
    status: {
      welcomeAgain: 'XUSH KELIBSIZ',
      deviceCountry: 'Qurilma mamlakati',
      onSite: 'Saytda',
      deviceTime: 'Qurilma vaqti',
      lastVisit: 'Oxirgi tashrif',
      previousStay: 'Oldingi seans',
    },
    hero: {
      welcome: 'XUSH KELIBSIZ',
      title: 'ZPHC® — Rasmiy sport kiyimlari, salomatlik va atletik yutuqlar',
      phrases: [
        'Biz kechagi chempionlarni tayyorlab nimalarga qodirligimizni isbotladik. Endi ZPHC® sizni qidirmoqda.',
        'ZPHC® World Sports Club: Xalqaro iqtidorlar kashf qilinadigan va ulug‘vorlikka erishiladigan maskan.',
      ],
    },
    main: {
      sloganTitle: 'SPORTCHILARGA YANGI MARRALARNI ZABT ETISHDA YORDAM BERAMIZ!',
      subtitle:
        'Sport anjomlari, kiyimlar, jamoa mediasi va antidoping ta’limi bo‘yicha rasmiy xalqaro axborot markazi.',
      categoryTags: '(sport kiyimlari, reabilitatsiya uskunalari, aksessuarlar va umumiy savollar)',
      quote:
        'Rasmiy ZPHC® saytini kashf eting: yuqori sifatli sport jihozlari va salomatlik qo‘llanmalari.',
      p1: 'ZPHC® amaliy mehnat, intizom va sport madaniyatini qurayotgan insonlarga bo‘lgan hurmat orqali o‘sishda davom etmoqda.',
      p2: 'Saytimiz mahsulotlar va to‘g‘ri mashg‘ulotlar haqida ishonchli ma’lumot berish uchun yaratilgan.',
      p3: 'Bizning madaniyatimiz qat’iy intizom, to‘g‘ri tiklanish va halol raqobatni qadrlaydi.',
      p4: 'Ishonchli hamkorlarimiz bilan birgalikda yangi mamlakatlarni ochishdan xursandmiz.',
      privacyPrompt: 'Iltimos, tanishib chiqing:',
      privacyLink: 'Maxfiylik siyosati',
      pandaCaption: 'ZPHC® shunchaki eng zo‘ri! Barchasidan a’lo!',
    },
    footer: {
      officialStickers: 'Rasmiy ZPHC® stikerlari',
      links: {
        welcome: 'Bosh sahifa',
        products: 'Mahsulotlar',
        verification: 'Tekshirish',
        team: 'ZPHC® Jamoasi',
        antiDoping: 'Antidoping',
        tools: 'ZPHC® Vositalari',
        blog: 'Blog',
        contact: 'Aloqa',
        privacyPolicy: 'Maxfiylik siyosati',
        cookiePolicy: 'Kuki siyosati',
        gdpr: 'Ma’lumotlar huquqlari',
        terms: 'Qoidalar',
        disclaimer: 'Ogohlantirish',
        editorialStandards: 'Tahririyat standartlari',
        accessibility: 'Qulaylik',
        officialDomains: 'Rasmiy domenlar',
      },
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      verification: 'التحقق',
      team: 'الفريق',
      antiDoping: 'مكافحة المنشطات',
      tools: 'الأدوات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      menu: 'القائمة',
    },
    status: {
      welcomeAgain: 'أهلاً بك مجدداً',
      deviceCountry: 'بلد الجهاز',
      onSite: 'في الموقع',
      deviceTime: 'وقت الجهاز',
      lastVisit: 'آخر زيارة',
      previousStay: 'المدة السابقة',
    },
    hero: {
      welcome: 'مرحباً بكم',
      title: 'ZPHC® — المعدات الرياضية الرسمية، العافية والأداء الرياضي العالي',
      phrases: [
        'لقد أثبتنا ما هو ممكن من خلال بناء أبطال الأمس. الآن، تبحث ZPHC® عنك في جميع أنحاء العالم.',
        'نادي ZPHC® الرياضي العالمي: حيث تُكتشف المواهب العالمية وتتجه نحو المجد.',
        'تكريماً لإرث الأبطال، وإشعالاً لأساطير العالم القادمة.',
      ],
    },
    main: {
      sloganTitle: 'مساعدة الرياضيين على تحقيق أهداف جديدة!',
      subtitle:
        'الموزع الرسمي العالمي ومركز المعلومات للمستلزمات الرياضية والملابس والتثقيف الرياضي المسؤول.',
      categoryTags: '(الملابس، معدات إعادة التأهيل، الملابس الطبية الرياضية والأسئلة العامة)',
      quote:
        'اكتشف موقع ZPHC® الرسمي: معدات لياقة بدنية فاخرة، مستلزمات رياضية وأدلة صحية موثوقة علمياً.',
      p1: 'انطلاقاً من مرحلة جديدة مليئة بالأمل والحيوية، تواصل ZPHC® النمو من خلال العمل الجاد والانضباط واحترام الرياضيين. مبدؤنا: الإنسان أولاً.',
      p2: 'صُمم موقع ZPHC® لتقديم معلومات واضحة حول المستلزمات الرياضية والأزياء والتدريب الصحي دون مبالغة.',
      p3: 'ثقافتنا تقدر الجهد المستمر والتدريب المنضبط والتعافي الذكي والتواصل الشفاف.',
      p4: 'نتطلع إلى التعاون مع شركاء ورياضيين موثوقين حول العالم لبناء ثقافة تدريبية مسؤولة.',
      privacyPrompt: 'يرجى قراءة',
      privacyLink: 'سياسة الخصوصية',
      pandaCaption: 'ZPHC® ببساطة الأفضل! أفضل من البقية جميعاً!',
    },
    footer: {
      officialStickers: 'ملصقات ZPHC® الرسمية',
      links: {
        welcome: 'الرئيسية',
        products: 'المنتجات',
        verification: 'التحقق',
        team: 'فريق ZPHC®',
        antiDoping: 'مكافحة المنشطات',
        tools: 'أدوات ZPHC®',
        blog: 'المدونة',
        contact: 'اتصل بنا',
        privacyPolicy: 'سياسة الخصوصية',
        cookiePolicy: 'سياسة ملفات تعريف الارتباط',
        gdpr: 'حقوق البيانات',
        terms: 'الشروط',
        disclaimer: 'إخلاء المسؤولية',
        editorialStandards: 'المعايير التحريرية',
        accessibility: 'سهولة الوصول',
        officialDomains: 'النطاقات الرسمية',
      },
    },
  },

  fa: {
    nav: {
      home: 'صفحه اصلی',
      products: 'محصولات',
      verification: 'اعتبارسنجی',
      team: 'تیم',
      antiDoping: 'ضد دوپینگ',
      tools: 'ابزارها',
      blog: 'وبلاگ',
      contact: 'تماس',
      menu: 'منو',
    },
    status: {
      welcomeAgain: 'خوش آمدید',
      deviceCountry: 'کشور دستگاه',
      onSite: 'در سایت',
      deviceTime: 'زمان دستگاه',
      lastVisit: 'آخرین بازدید',
      previousStay: 'مدت قبلی',
    },
    hero: {
      welcome: 'خوش آمدید',
      title: 'ZPHC® — پوشاک و تجهیزات ورزشی رسمی، سلامت و عملکرد ورزشی',
      phrases: [
        'ما با پرورش قهرمانان دیروز توانایی خود را اثبات کردیم. اکنون ZPHC® به دنبال استعدادهای شماست.',
        'باشگاه ورزشی جهانی ZPHC®: جایی که استعدادهای ورزشی کشف و شکوفا می‌شوند.',
      ],
    },
    main: {
      sloganTitle: 'کمک به ورزشکاران برای دستیابی به اهداف جدید!',
      subtitle:
        'مرکز رسمی بین‌المللی اطلاعات و توزیع لوازم ورزشی، پوشاک و آموزش‌های ورزش پاک.',
      categoryTags: '(پوشاک ورزشی، تجهیزات توانبخشی و پاسخ به سوالات عمومی)',
      quote:
        'سایت رسمی ZPHC® را کشف کنید: پوشاک و تجهیزات ورزشی ممتاز، مقالات علمی و آموزش سلامت.',
      p1: 'ZPHC® با تلاش عملی و احترام به جامعه ورزشی در حال پیشرفت است. اصل بنیادین ما: اولویت با انسان‌هاست.',
      p2: 'سایت ZPHC® اطلاعاتی دقیق و شفاف درباره محصولات و ورزش اصولی ارائه می‌دهد.',
      p3: 'فرهنگ ما بر پایه تمرین هدفمند، ریکاوری علمی و صداقت استوار است.',
      p4: 'ما مشتاقانه آماده همکاری با ورزشکاران و حامیان ورزش پاک در سراسر جهان هستیم.',
      privacyPrompt: 'لطفاً مطالعه فرمایید:',
      privacyLink: 'سیاست حفظ حریم خصوصی',
      pandaCaption: 'ZPHC® به سادگی بهترین! برتر از تمام دیگران!',
    },
    footer: {
      officialStickers: 'استیکرهای رسمی ZPHC®',
      links: {
        welcome: 'صفحه اصلی',
        products: 'محصولات',
        verification: 'اعتبارسنجی',
        team: 'تیم ZPHC®',
        antiDoping: 'ضد دوپینگ',
        tools: 'ابزارهای ZPHC®',
        blog: 'وبلاگ',
        contact: 'تماس',
        privacyPolicy: 'حریم خصوصی',
        cookiePolicy: 'کوکی‌ها',
        gdpr: 'حقوق داده‌ها',
        terms: 'شرایط',
        disclaimer: 'سلب مسئولیت',
        editorialStandards: 'استانداردهای نگارش',
        accessibility: 'دسترس‌پذیری',
        officialDomains: 'دامنه‌های رسمی',
      },
    },
  },

  he: {
    nav: {
      home: 'בית',
      products: 'מוצרים',
      verification: 'אימות',
      team: 'צוות',
      antiDoping: 'אנטי-סימום',
      tools: 'כלים',
      blog: 'בלוג',
      contact: 'יצירת קשר',
      menu: 'תפריט',
    },
    status: {
      welcomeAgain: 'ברוך שובך',
      deviceCountry: 'מדינת המכשיר',
      onSite: 'באתר',
      deviceTime: 'שעון המכשיר',
      lastVisit: 'ביקור אחרון',
      previousStay: 'שהייה קודמת',
    },
    hero: {
      welcome: 'ברוכים הבאים',
      title: 'ZPHC® — ציוד כושר רשמי, בריאות וביצועים ספורטיביים',
      phrases: [
        'הוכחנו מה אפשרי בבניית אלופי העבר. כעת ZPHC® מחפשת את הכישרון שלך ברחבי העולם.',
        'מועדון הספורט העולמי ZPHC®: המקום שבו כישרונות ספורט מגיעים לגדולה.',
      ],
    },
    main: {
      sloganTitle: 'עוזרים לספורטאים להגיע ליעדים חדשים!',
      subtitle:
        'מפיץ עולמי רשמי ומרכז מידע לאביזרי ספורט, ביגוד אימונים וחינוך לספורט הוגן.',
      categoryTags: '(ביגוד, ציוד שיקום ושאלות כלליות על אימון)',
      quote:
        'גלו את האתר הרשמי של ZPHC®: ציוד כושר מוביל ומדריכי בריאות מבוססי מדע.',
      p1: 'ZPHC® ממשיכה לצמוח מתוך מחויבות, משמעת וכבוד לספורטאים. העיקרון שלנו: אנשים במקום הראשון.',
      p2: 'האתר נועד לספק מידע אותנטי ואמין ללא הבטחות שווא.',
      p3: 'אנו מאמינים באימון עקבי, התאוששות חכמה ושקיפות מלאה.',
      p4: 'מצפים להרחיב שיתופי פעולה עם שותפים וספורטאים מובילים בעולם.',
      privacyPrompt: 'אנא קרא את',
      privacyLink: 'מדיניות הפרטיות',
      pandaCaption: 'ZPHC® פשוט הכי טוב! טוב יותר מכל השאר!',
    },
    footer: {
      officialStickers: 'מדבקות ZPHC® רשמיות',
      links: {
        welcome: 'בית',
        products: 'מוצרים',
        verification: 'אימות',
        team: 'צוות ZPHC®',
        antiDoping: 'אנטי-סימום',
        tools: 'כלי ZPHC®',
        blog: 'בלוג',
        contact: 'יצירת קשר',
        privacyPolicy: 'מדיניות פרטיות',
        cookiePolicy: 'עוגיות',
        gdpr: 'זכויות מידע',
        terms: 'תנאים',
        disclaimer: 'הצהרת אחריות',
        editorialStandards: 'תקנים',
        accessibility: 'נגישות',
        officialDomains: 'דומיינים רשמיים',
      },
    },
  },

  hi: {
    nav: {
      home: 'होम',
      products: 'उत्पाद',
      verification: 'सत्यापन',
      team: 'टीम',
      antiDoping: 'एंटी-डोपिंग',
      tools: 'उपकरण',
      blog: 'ब्लॉग',
      contact: 'संपर्क',
      menu: 'मेनू',
    },
    status: {
      welcomeAgain: 'पुनः स्वागत है',
      deviceCountry: 'डिवाइस देश',
      onSite: 'साइट पर',
      deviceTime: 'डिवाइस समय',
      lastVisit: 'अंतिम विज़िट',
      previousStay: 'पिछला सत्र',
    },
    hero: {
      welcome: 'स्वागत है',
      title: 'ZPHC® — आधिकारिक फिटनेस गियर, वेलनेस और एथलेटिक प्रदर्शन',
      phrases: [
        'हमने कल के चैंपियनों को बनाकर साबित किया है। अब ZPHC® दुनिया भर में आपकी प्रतिभा की खोज कर रहा है।',
        'ZPHC® वर्ल्ड स्पोर्ट्स क्लब: जहाँ वैश्विक प्रतिभा को पहचाना और निखारा जाता है।',
      ],
    },
    main: {
      sloganTitle: 'एथलीटों को नए लक्ष्य हासिल करने में मदद करना!',
      subtitle:
        'खेल के सामान, परिधान, टीम मीडिया और जिम्मेदार प्रशिक्षण संस्कृति के लिए आधिकारिक वैश्विक वितरक और सूचना केंद्र।',
      categoryTags: '(परिधान, पुनर्वास उपकरण, सुरक्षा गियर और सामान्य प्रश्न)',
      quote:
        'आधिकारिक ZPHC® वेबसाइट देखें: प्रीमियम फिटनेस गियर, स्पोर्ट्स एक्सेसरीज और विज्ञान-आधारित वेलनेस गाइड।',
      p1: 'ZPHC® व्यावहारिक काम, अनुशासन और खेल जगत के लोगों के प्रति सम्मान के साथ लगातार आगे बढ़ रहा है। हमारा मूल सिद्धांत: लोग सबसे पहले।',
      p2: 'ZPHC® वेबसाइट का उद्देश्य बिना किसी अतिशयोक्ति के सही और प्रामाणिक जानकारी प्रदान करना है।',
      p3: 'हमारी संस्कृति निरंतर प्रयास, अनुशासित प्रशिक्षण और पारदर्शी संवाद को महत्व देती है।',
      p4: 'हम विश्वसनीय भागीदारों और एथलीटों के साथ नए देशों में खेल संस्कृति विकसित करने के लिए तत्पर हैं।',
      privacyPrompt: 'कृपया पढ़ें:',
      privacyLink: 'गोपनीयता नीति',
      pandaCaption: 'ZPHC® सबसे बेहतर! बाकी सभी से आगे!',
    },
    footer: {
      officialStickers: 'आधिकारिक ZPHC® स्टिकर्स',
      links: {
        welcome: 'होम',
        products: 'उत्पाद',
        verification: 'सत्यापन',
        team: 'ZPHC® टीम',
        antiDoping: 'एंटी-डोपिंग',
        tools: 'उपकरण',
        blog: 'ब्लॉग',
        contact: 'संपर्क',
        privacyPolicy: 'गोपनीयता नीति',
        cookiePolicy: 'कुकी नीति',
        gdpr: 'डेटा अधिकार',
        terms: 'नियम व शर्तें',
        disclaimer: 'अस्वीकरण',
        editorialStandards: 'संपादकीय मानक',
        accessibility: 'सुलभता',
        officialDomains: 'आधिकारिक डोमेन',
      },
    },
  },

  ur: {
    nav: {
      home: 'صفحہ اول',
      products: 'مصنوعات',
      verification: 'تصدیق',
      team: 'ٹیم',
      antiDoping: 'اینٹی ڈوپنگ',
      tools: 'ٹولز',
      blog: 'بلاگ',
      contact: 'رابطہ',
      menu: 'مینو',
    },
    status: {
      welcomeAgain: 'خوش آمدید',
      deviceCountry: 'ڈیوائس کا ملک',
      onSite: 'سائٹ پر وقت',
      deviceTime: 'ڈیوائس کا وقت',
      lastVisit: 'آخری وزٹ',
      previousStay: 'پچھلا قیام',
    },
    hero: {
      welcome: 'خوش آمدید',
      title: 'ZPHC® — آفیشل فٹنس گیئر، تندرستی اور اعلیٰ ایتھلیٹک کارکردگی',
      phrases: [
        'ہم نے کل کے چیمپئنز بنا کر ثابت کیا۔ اب ZPHC® پوری دنیا میں آپ کے ہنر کی تلاش میں ہے۔',
        'ZPHC® ورلڈ اسپورٹس کلب: جہاں عالمی صلاحیتوں کو تراش کر عظمت کی بلندیوں تک پہنچایا جاتا ہے۔',
      ],
    },
    main: {
      sloganTitle: 'ایتھلیٹس کو نئی منازل حاصل کرنے میں مدد فراہم کرنا!',
      subtitle:
        'کھیلوں کے سامان، ملبوسات، اینٹی ڈوپنگ آگاہی اور ذمہ دارانہ ٹریننگ کے لیے آفیشل عالمی مرکز۔',
      categoryTags: '(ملبوسات، بحالی کا سامان، طبی پیشہ ورانہ گیئر اور عمومی سوالات)',
      quote:
        'آفیشل ZPHC® ویب سائٹ دریافت کریں: پریمیم فٹنس گیئر، اسپورٹس لوازمات اور سائنسی رہنمائی۔',
      p1: 'ZPHC® سخت محنت، نظم و ضبط اور کھیلوں کی ثقافت سے وابستہ لوگوں کے احترام کے ساتھ ترقی کی راہ پر گامزن ہے۔ ہمارا بنیادی اصول: انسان سب سے پہلے۔',
      p2: 'ہماری ویب سائٹ کھیلوں کے ملبوسات اور صحت مند طرز زندگی کے بارے میں شفاف اور مستند معلومات فراہم کرتی ہے۔',
      p3: 'ہماری اقدار میں مسلسل کوشش، باقاعدہ تربیت اور شفاف روابط کو مرکزی اہمیت حاصل ہے۔',
      p4: 'ہم باصلاحیت ایتھلیٹس اور پرعزم شراکت داروں کے ساتھ مل کر کھیل کی ترقی کے لیے پرامید ہیں۔',
      privacyPrompt: 'براہ کرم ملاحظہ فرمائیں:',
      privacyLink: 'پرائیویسی پالیسی',
      pandaCaption: 'ZPHC® بلا شبہ بہترین! باقی تمام سے برتر!',
    },
    footer: {
      officialStickers: 'آفیشل ZPHC® اسٹیکرز',
      links: {
        welcome: 'صفحہ اول',
        products: 'مصنوعات',
        verification: 'تصدیق',
        team: 'ZPHC® ٹیم',
        antiDoping: 'اینٹی ڈوپنگ',
        tools: 'ZPHC® ٹولز',
        blog: 'بلاگ',
        contact: 'رابطہ',
        privacyPolicy: 'پرائیویسی پالیسی',
        cookiePolicy: 'کوکی پالیسی',
        gdpr: 'ڈیٹا حقوق',
        terms: 'شرائط',
        disclaimer: 'دستبرداری',
        editorialStandards: 'ادارتی معیارات',
        accessibility: 'رسائی',
        officialDomains: 'آفیشل ڈومینز',
      },
    },
  },

  ja: {
    nav: {
      home: 'ホーム',
      products: '製品',
      verification: '認証',
      team: 'チーム',
      antiDoping: 'アンチドーピング',
      tools: 'ツール',
      blog: 'ブログ',
      contact: 'お問い合わせ',
      menu: 'メニュー',
    },
    status: {
      welcomeAgain: 'おかえりなさい',
      deviceCountry: 'アクセス国',
      onSite: '滞在時間',
      deviceTime: '現在時刻',
      lastVisit: '前回の訪問',
      previousStay: '前回の滞在',
    },
    hero: {
      welcome: 'ようこそ',
      title: 'ZPHC® — 公式フィットネスギア、ウェルネス＆アスリートパフォーマンス',
      phrases: [
        '昨日の才能を育み、可能性を証明した。今、ZPHC®は世界中からあなたの情熱を探しています。',
        'ZPHC® ワールドスポーツクラブ：世界基準の才能が見出され、頂点を目指す場所。',
      ],
    },
    main: {
      sloganTitle: 'アスリートが新たな目標に到達できるよう支援します！',
      subtitle:
        'スポーツアクセサリー、アパレル、クリーンなスポーツ教育、責任あるトレーニング文化の公式グローバルディストリビューター。',
      categoryTags: '(ウェア、リハビリ機器、プロ用医療ウェア、マスク、手袋、その他一般的なお問い合わせ)',
      quote:
        '公式ZPHC®ウェブサイト：プレミアムフィットネスギア、スポーツアクセサリー、科学に基づく健康ガイドをご覧ください。',
      p1: 'ZPHC®は実践的な取り組みと規律ある姿勢、そしてスポーツに関わる人々への敬意を持って成長を続けています。最優先事項：人間第一。',
      p2: '過度な誇張を排し、信頼できる高品質な製品と情報をお届けすることを使命としています。',
      p3: '継続的な努力、科学的なリカバリー、スポーツマンシップを大切にしています。',
      p4: '信頼できるパートナーやアスリートと共に、世界中で健全なスポーツ文化を築いていきます。',
      privacyPrompt: 'ご確認をお願いします：',
      privacyLink: 'プライバシーポリシー',
      pandaCaption: 'ZPHC®はまさに最高！誰よりも優れています！',
    },
    footer: {
      officialStickers: '公式ZPHC®ステッカー',
      links: {
        welcome: 'ホーム',
        products: '製品',
        verification: '認証',
        team: 'ZPHC®チーム',
        antiDoping: 'アンチドーピング',
        tools: 'ZPHC®ツール',
        blog: 'ブログ',
        contact: 'お問い合わせ',
        privacyPolicy: 'プライバシーポリシー',
        cookiePolicy: 'クッキーポリシー',
        gdpr: 'GDPRとデータ権利',
        terms: '利用規約',
        disclaimer: '免責事項',
        editorialStandards: '編集基準',
        accessibility: 'アクセシビリティ',
        officialDomains: '公式ドメイン',
      },
    },
  },

  ko: {
    nav: {
      home: '홈',
      products: '제품',
      verification: '정품인증',
      team: '팀',
      antiDoping: '도핑방지',
      tools: '도구',
      blog: '블로그',
      contact: '문의하기',
      menu: '메뉴',
    },
    status: {
      welcomeAgain: '다시 오신 것을 환영합니다',
      deviceCountry: '접속 국가',
      onSite: '체류 시간',
      deviceTime: '기기 시간',
      lastVisit: '최근 방문',
      previousStay: '이전 체류',
    },
    hero: {
      welcome: '환영합니다',
      title: 'ZPHC® — 공식 피트니스 기어, 웰니스 및 엘리트 스포츠 퍼포먼스',
      phrases: [
        '우리는 과거의 챔피언들을 키워내며 가능성을 증명했습니다. 이제 ZPHC®가 당신의 재능을 찾습니다.',
        'ZPHC® 월드 스포츠 클럽: 전 세계의 잠재력이 발굴되어 위대함으로 나아가는 곳.',
      ],
    },
    main: {
      sloganTitle: '운동선수들이 새로운 목표에 도달할 수 있도록 돕습니다!',
      subtitle:
        '스포츠 용품, 의류, 팀 미디어, 클린 스포츠 교육 및 책임감 있는 트레이닝 문화를 위한 공식 글로벌 유통 허브입니다.',
      categoryTags: '(의류, 재활 장비, 전문가용 의료 보호구, 마스크 및 일반 문의)',
      quote:
        '공식 ZPHC® 웹사이트를 만나보세요: 프리미엄 피트니스 기어, 스포츠 액세서리 및 과학적 웰니스 가이드.',
      p1: 'ZPHC®는 실천적 노력과 규율, 그리고 스포츠 문화를 이끄는 이들에 대한 존중을 바탕으로 성장하고 있습니다. 우리의 원칙: 사람이 최우선입니다.',
      p2: '과장된 약속 없이 진정성 있는 브랜드 정보와 협력 기회를 제공합니다.',
      p3: '규칙적인 훈련, 지능적인 회복, 스포츠 규정 준수를 핵심 가치로 삼고 있습니다.',
      p4: '믿을 수 있는 파트너들과 함께 전 세계에 올바른 트레이닝 문화를 확산시켜 나갑니다.',
      privacyPrompt: '확인해 주시기 바랍니다:',
      privacyLink: '개인정보처리방침',
      pandaCaption: 'ZPHC® 단연 최고! 그 누구보다 뛰어납니다!',
    },
    footer: {
      officialStickers: '공식 ZPHC® 스티커',
      links: {
        welcome: '홈',
        products: '제품',
        verification: '정품인증',
        team: 'ZPHC® 팀',
        antiDoping: '도핑방지',
        tools: 'ZPHC® 도구',
        blog: '블로그',
        contact: '문의하기',
        privacyPolicy: '개인정보처리방침',
        cookiePolicy: '쿠키 정책',
        gdpr: '데이터 권리',
        terms: '이용약관',
        disclaimer: '면책조항',
        editorialStandards: '편집 기준',
        accessibility: '웹 접근성',
        officialDomains: '공식 도메인',
      },
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      products: 'Produk',
      verification: 'Verifikasi',
      team: 'Tim',
      antiDoping: 'Anti-Doping',
      tools: 'Alat',
      blog: 'Blog',
      contact: 'Kontak',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'SELAMAT DATANG KEMBALI',
      deviceCountry: 'Negara perangkat',
      onSite: 'Di situs',
      deviceTime: 'Waktu perangkat',
      lastVisit: 'Kunjungan terakhir',
      previousStay: 'Sesi sebelumnya',
    },
    hero: {
      welcome: 'SELAMAT DATANG',
      title: 'ZPHC® — Perlengkapan Fitness Resmi, Kebugaran & Performa Atletik',
      phrases: [
        'Kami membuktikan apa yang mungkin dengan membangun juara kemarin. Sekarang ZPHC® mencari bakat Anda.',
        'ZPHC® World Sports Club: Tempat di mana bakat global ditemukan dan berkembang.',
      ],
    },
    main: {
      sloganTitle: 'MEMBANTU ATLET MENCAPAI TARGET BARU!',
      subtitle:
        'Distributor resmi global dan pusat informasi untuk aksesori olahraga, pakaian, dan edukasi olahraga bersih.',
      categoryTags: '(pakaian, peralatan rehabilitasi, perlengkapan medis, dan pertanyaan umum)',
      quote:
        'Temukan situs resmi ZPHC®: perlengkapan kebugaran premium, aksesori olahraga, dan panduan kesehatan.',
      p1: 'ZPHC® terus berkembang melalui kerja nyata, disiplin, dan rasa hormat pada komunitas olahraga. Prinsip kami: utamakan manusia.',
      p2: 'Situs ZPHC® menyajikan informasi yang jelas, akurat, dan dapat dipercaya tanpa klaim berlebihan.',
      p3: 'Budaya kami menjunjung latihan teratur, pemulihan cerdas, dan komunikasi yang transparan.',
      p4: 'Kami siap membuka jaringan baru bersama mitra terpercaya di seluruh dunia.',
      privacyPrompt: 'Silakan baca',
      privacyLink: 'kebijakan privasi kami',
      pandaCaption: 'ZPHC® benar-benar yang terbaik! Lebih unggul dari yang lain!',
    },
    footer: {
      officialStickers: 'Stiker Resmi ZPHC®',
      links: {
        welcome: 'Beranda',
        products: 'Produk',
        verification: 'Verifikasi',
        team: 'Tim ZPHC®',
        antiDoping: 'Anti-Doping',
        tools: 'Alat ZPHC®',
        blog: 'Blog',
        contact: 'Kontak',
        privacyPolicy: 'Kebijakan Privasi',
        cookiePolicy: 'Kebijakan Cookie',
        gdpr: 'Hak Data',
        terms: 'Syarat Ketentuan',
        disclaimer: 'Pernyataan Penyangkalan',
        editorialStandards: 'Standar Editorial',
        accessibility: 'Aksesibilitas',
        officialDomains: 'Domain Resmi',
      },
    },
  },

  ms: {
    nav: {
      home: 'Laman Utama',
      products: 'Produk',
      verification: 'Pengesahan',
      team: 'Pasukan',
      antiDoping: 'Anti-Doping',
      tools: 'Alatan',
      blog: 'Blog',
      contact: 'Hubungi',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'SELAMAT KEMBALI',
      deviceCountry: 'Negara peranti',
      onSite: 'Dalam laman',
      deviceTime: 'Masa peranti',
      lastVisit: 'Lawatan terakhir',
      previousStay: 'Tempoh sebelum',
    },
    hero: {
      welcome: 'SELAMAT DATANG',
      title: 'ZPHC® — Kelengkapan Kecergasan Rasmi, Kesejahteraan & Prestasi Atletik',
      phrases: [
        'Kami membuktikan kemampuan dengan membina juara semalam. Kini ZPHC® mencari bakat anda.',
        'ZPHC® World Sports Club: Di mana bakat sukan global digilap menuju kegemilangan.',
      ],
    },
    main: {
      sloganTitle: 'MEMBANTU ATLET MENCAPAI MATLAMAT BAHARU!',
      subtitle:
        'Pengedar rasmi global dan hab maklumat untuk pakaian sukan, aksesori dan budaya latihan berhemah.',
      categoryTags: '(pakaian sukan, peralatan pemulihan dan pertanyaan umum)',
      quote:
        'Terokai laman web rasmi ZPHC®: peralatan kecergasan premium dan panduan sukan berasaskan sains.',
      p1: 'ZPHC® terus maju melalui dedikasi, disiplin dan rasa hormat terhadap peminat sukan. Prinsip kami: mengutamakan insan.',
      p2: 'Laman web ZPHC® menyediakan maklumat jelas tanpa janji melampau.',
      p3: 'Kami menghargai latihan berdisiplin, pemulihan pintar dan integriti dalam sukan.',
      p4: 'Membuka lembaran baharu bersama rakan kongsi sukan di persada antarabangsa.',
      privacyPrompt: 'Sila baca',
      privacyLink: 'dasar privasi kami',
      pandaCaption: 'ZPHC® sememangnya yang terbaik! Mengatasi yang lain!',
    },
    footer: {
      officialStickers: 'Pelekat Rasmi ZPHC®',
      links: {
        welcome: 'Laman Utama',
        products: 'Produk',
        verification: 'Pengesahan',
        team: 'Pasukan ZPHC®',
        antiDoping: 'Anti-Doping',
        tools: 'Alatan ZPHC®',
        blog: 'Blog',
        contact: 'Hubungi',
        privacyPolicy: 'Dasar Privasi',
        cookiePolicy: 'Dasar Kuki',
        gdpr: 'Hak Data',
        terms: 'Terma',
        disclaimer: 'Penafian',
        editorialStandards: 'Piawaian Editorial',
        accessibility: 'Kebolehcapaian',
        officialDomains: 'Domain Rasmi',
      },
    },
  },

  pl: {
    nav: {
      home: 'Strona główna',
      products: 'Produkty',
      verification: 'Weryfikacja',
      team: 'Zespół',
      antiDoping: 'Antydoping',
      tools: 'Narzędzia',
      blog: 'Blog',
      contact: 'Kontakt',
      menu: 'Menu',
    },
    status: {
      welcomeAgain: 'WITAMY PONOWNIE',
      deviceCountry: 'Kraj urządzenia',
      onSite: 'Na stronie',
      deviceTime: 'Czas urządzenia',
      lastVisit: 'Ostatnia wizyta',
      previousStay: 'Poprzednia sesja',
    },
    hero: {
      welcome: 'WITAMY',
      title: 'ZPHC® — Oficjalny sprzęt fitness, zdrowie i wyniki sportowe',
      phrases: [
        'Udowodniliśmy, co jest możliwe, trenując mistrzów. Teraz ZPHC® szuka talentów na całym świecie.',
        'ZPHC® World Sports Club: Gdzie globalne talenty osiągają mistrzostwo.',
      ],
    },
    main: {
      sloganTitle: 'POMAGAMY SPORTOWCOM OSIĄGAĆ NOWE CELE!',
      subtitle:
        'Oficjalny międzynarodowy dystrybutor i centrum informacyjne akcesoriów sportowych, odzieży, edukacji antydopingowej i odpowiedzialnego treningu.',
      categoryTags: '(odzież sportowa, sprzęt rehabilitacyjny, akcesoria medyczne i pytania ogólne)',
      quote:
        'Odkryj oficjalną stronę ZPHC®: najwyższej klasy odzież fitness, akcesoria sportowe i poradniki zdrowotne.',
      p1: 'ZPHC® rozwija się dzięki rzetelnej pracy, dyscyplinie i szacunkowi dla społeczności sportowej. Zasada przewodnia: człowiek na pierwszym miejscu.',
      p2: 'Serwis dostarcza rzetelnych informacji bez przesadnych obietnic reklamowych.',
      p3: 'Cenimy systematyczny trening, mądrą regenerację i przejrzystą komunikację.',
      p4: 'Wspólnie z zaufanymi partnerami budujemy kulturę czystego sportu na całym świecie.',
      privacyPrompt: 'Prosimy o zapoznanie się z naszą',
      privacyLink: 'polityką prywatności',
      pandaCaption: 'ZPHC® po prostu najlepsi! Lepszy niż cała reszta!',
    },
    footer: {
      officialStickers: 'Oficjalne naklejki ZPHC®',
      links: {
        welcome: 'Strona główna',
        products: 'Produkty',
        verification: 'Weryfikacja',
        team: 'Zespół ZPHC®',
        antiDoping: 'Antydoping',
        tools: 'Narzędzia ZPHC®',
        blog: 'Blog',
        contact: 'Kontakt',
        privacyPolicy: 'Polityka prywatności',
        cookiePolicy: 'Polityka cookies',
        gdpr: 'RODO i Prawa do danych',
        terms: 'Regulamin',
        disclaimer: 'Zastrzeżenia prawne',
        editorialStandards: 'Standardy redakcyjne',
        accessibility: 'Dostępność',
        officialDomains: 'Oficjalne domeny',
      },
    },
  },

  sw: {
    nav: {
      home: 'Mwanzo',
      products: 'Bidhaa',
      verification: 'Uhakiki',
      team: 'Timu',
      antiDoping: 'Kupinga Dawa za Kusisimua',
      tools: 'Zana',
      blog: 'Blogu',
      contact: 'Wasiliana',
      menu: 'Menyu',
    },
    status: {
      welcomeAgain: 'KARIBU TENA',
      deviceCountry: 'Nchi ya kifaa',
      onSite: 'Kwenye tovuti',
      deviceTime: 'Muda wa kifaa',
      lastVisit: 'Ziara ya mwisho',
      previousStay: 'Muda uliopita',
    },
    hero: {
      welcome: 'KARIBU',
      title: 'ZPHC® — Vifaa Rasmi vya Mazoezi, Siha na Utendaji wa Kimichezo',
      phrases: [
        'Tulithibitisha kile kinachowezekana kwa kukuza mabingwa wa jana. Sasa ZPHC® inatafuta kipaji chako duniani.',
        'Klabu ya Michezo ya Dunia ya ZPHC®: Ambapo vipaji vya kimataifa vinang’aa.',
      ],
    },
    main: {
      sloganTitle: 'KUWASAIDIA WANARIADHA KUFIKIA MALENGO MAPYA!',
      subtitle:
        'Msambazaji rasmi wa kimataifa na kitovu cha habari cha vifaa vya michezo, mavazi na elimu ya michezo safi.',
      categoryTags: '(mavazi, vifaa vya tiba, vifaa tiba vya kitaalamu na maswali ya jumla)',
      quote:
        'Gundua tovuti rasmi ya ZPHC®: mavazi bora ya michezo, vifaa na miongozo ya kisayansi ya afya.',
      p1: 'ZPHC® inaendelea kukua kwa bidii, nidhamu na heshima kwa wanaojenga utamaduni wa michezo. Kanuni kuu: watu kwanza.',
      p2: 'Tovuti ya ZPHC® inatoa maelezo sahihi na wazi kuhusu bidhaa na mafunzo sahihi.',
      p3: 'Tunathamini mazoezi thabiti, kupumzika kwa akili na mawasiliano ya uwazi.',
      p4: 'Tunatarajia kushirikiana na wadau waaminifu kuendeleza michezo bora duniani.',
      privacyPrompt: 'Tafadhali soma',
      privacyLink: 'sera yetu ya faragha',
      pandaCaption: 'ZPHC® kwa hakika ndio bora! Bora kuliko wengine wote!',
    },
    footer: {
      officialStickers: 'Vibandiko Rasmi vya ZPHC®',
      links: {
        welcome: 'Mwanzo',
        products: 'Bidhaa',
        verification: 'Uhakiki',
        team: 'Timu ya ZPHC®',
        antiDoping: 'Kupinga Dawa za Kusisimua',
        tools: 'Zana za ZPHC®',
        blog: 'Blogu',
        contact: 'Wasiliana',
        privacyPolicy: 'Sera ya Faragha',
        cookiePolicy: 'Sera ya Vidakuzi',
        gdpr: 'Haki za Data',
        terms: 'Vigezo',
        disclaimer: 'Kanusho',
        editorialStandards: 'Viwango vya Uhariri',
        accessibility: 'Ufikiaji',
        officialDomains: 'Vikoa Rasmi',
      },
    },
  },
};
