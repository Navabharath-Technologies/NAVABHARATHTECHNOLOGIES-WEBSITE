// Translation data
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_resources: "Resources",
        nav_contact: "Contact",
        search_placeholder: "Search...",
        contact_name_placeholder: "Name",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Message",
        about_explore: "Explore",

        // Hero Section
        hero_title: "Smarter Solutions for Better Future",
        hero_subtitle: "IT Solutions | Web Development | AI | SaaS Solution",
        hero_description: "Transform your business with Ascent Business Solutions, a trusted provider of digital transformation services, end-to-end IT support, & secure data modernization solutions. We help businesses improve operational efficiency, strengthen IT infrastructure, enhance data security, & scale faster with reliable, future-ready technology solutions.",
        hero_cta: "Get Started",

        // About Section
        about_title: "About Us",
        about_description: "Navabharath Technologies is a leading IT solutions provider dedicated to delivering innovative and robust digital products. With a team of expert developers and designers, we transform ideas into reality. Our mission is to empower businesses with scalable, efficient technology and comprehensive end-to-end services.",
        about_feature1: "Innovative Solutions",
        about_feature2: "Digital Marketing",
        about_feature3: "Customer-Centric Approach",
        about_feature4: "Expert Team",

        // Services Section
        services_title: "Our Services",
        services_subtitle: "Comprehensive solutions for your business needs",
        service1_title: "Web Development",
        service1_description: "Custom websites built with modern technologies to ensure performance and scalability.",
        service2_title: "Mobile App Development",
        service2_description: "Native and cross-platform mobile applications designed for seamless user experiences.",
        service3_title: "Cloud Solutions",
        service3_description: "Secure and scalable cloud infrastructure setup and management services.",
        service4_title: "UI/UX Design",
        service4_description: "User-centered design that creates engaging and intuitive digital products.",
        service5_title: "Digital Marketing",
        service5_description: "Implementing intelligent marketing strategies to boost your online presence.",
        service6_title: "IVR Solutions",
        service6_description: "Advanced Interactive Voice Response systems to automate customer interactions and streamline call management with intelligent voice menus.",
        service7_title: "AI Solutions",
        service7_description: "Cutting-edge artificial intelligence and machine learning solutions to automate processes, enhance decision-making, and unlock data-driven insights for your business.",

        // Why Choose Us Section
        why_choose_title: "Why Choose Navabharath Technologies?",
        why_feature1_title: "Future-Ready Solutions",
        why_feature1_desc: "Building lasting digital foundations.",
        why_feature2_title: "High Security Standards",
        why_feature2_desc: "Ensuring safe and protected data.",
        why_feature3_title: "End-to-End Development",
        why_feature3_desc: "From research to deployment and support.",
        why_feature4_title: "Result-Driven Approach",
        why_feature4_desc: "We focus on performance, speed, and usability.",
        why_feature5_title: "Client-Centric Team",
        why_feature5_desc: "Dedicated support and transparent communication.",
        why_feature6_title: "DevOps Services",
        why_feature6_desc: "Secure, scalable, and reliable infrastructure.",


        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "Ready to start your project? Get in touch with us today.",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",

        // Footer
        footer_tagline: "Smarter Solutions for Better Future",
        footer_links_title: "Company",
        footer_support: "Support",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_social_title: "Follow Us",
        footer_copyright: "© 2025 Navabharath Technologies. All rights reserved.",

        // Resources Page
        resources_intro_title: "Knowledge Hub",
        resources_intro_desc: "Explore our collection of resources, guides, and insights to help you stay ahead in the digital world. From technical documentation to industry best practices, we've curated valuable content to support your business journey.",
        resource_card1_title: "Documentation",
        resource_card1_desc: "Comprehensive guides and technical documentation for our services and solutions. Learn how to integrate and maximize the value of our technology.",
        resource_view_btn: "View Documentation",
        resource_card2_title: "Blog & Insights",
        resource_card2_desc: "Stay updated with the latest trends, tips, and insights from our team of experts. Discover industry news and best practices.",
        resource_read_btn: "Read Blog",
        resource_card3_title: "Video Tutorials",
        resource_card3_desc: "Watch step-by-step video tutorials and webinars covering various topics from development to deployment and optimization.",
        resource_watch_btn: "Watch Videos",
        resource_card4_title: "Downloads",
        resource_card4_desc: "Access whitepapers, case studies, and downloadable resources to help you make informed decisions for your business.",
        resource_download_btn: "Get Downloads",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Find answers to frequently asked questions about our services, processes, and technology solutions.",
        resource_faq_btn: "View FAQ",
        resource_card6_title: "Developer Tools",
        resource_card6_desc: "Access APIs, SDKs, and developer tools to integrate our solutions seamlessly into your applications.",
        resource_tools_btn: "Explore Tools",

        // Privacy Policy Page
        privacy_sec1_title: "1. Information We Collect",
        privacy_sec1_strong1: "Directly from Users:",
        privacy_sec1_p1: "Name, email, phone number, company name, and message content submitted via the 'Contact Us' form.",
        privacy_sec1_strong2: "Automatically Collected:",
        privacy_sec1_p2: "IP address, browser type, operating system, pages visited, and time spent on site (via cookies/analytics).",
        privacy_sec2_title: "2. How We Use the Information",
        privacy_sec2_li1: "To respond to inquiries (the primary use of the contact form data).",
        privacy_sec2_li2: "To improve the website and marketing efforts.",
        privacy_sec2_li3: "For internal record-keeping and billing related to services provided.",
        privacy_sec3_title: "3. Data Sharing and Disclosure",
        privacy_sec3_strong1: "Service Providers:",
        privacy_sec3_p1: "We may share data with third-party vendors (e.g., hosting providers, CRM software, Google Analytics) who process data on our behalf.",
        privacy_sec3_strong2: "Legal Compliance:",
        privacy_sec3_p2: "We may disclose information if required by law, court order, or government request.",
        privacy_sec4_title: "4. Data Retention",
        privacy_sec4_p1: "We retain contact inquiries for a specific period (e.g., 2 years) and client data for the duration of the contract plus a standard retention period (e.g., 5 years) for legal and tax purposes.",
        privacy_sec5_title: "5. Cookies and Tracking",
        privacy_sec5_p1: "We use cookies (e.g., functional, analytical) to enhance your experience. You can choose to disable cookies through your individual browser options.",

        // Terms Page
        terms_sec1_title: "1. Acceptance of Terms",
        terms_sec1_p1: "By accessing the website or engaging our services, you agree to these terms and conditions. If you do not agree, please do not use our services.",
        terms_sec2_title: "2. Scope of Services",
        terms_sec2_p1: "We provide Web Development, Mobile App Development, UI/UX Design, and related IT services. Specific project details, including scope, budget, and timeline, will be governed by a separate Statement of Work (SOW) or Service Agreement.",
        terms_sec3_title: "3. Intellectual Property (IP) Ownership",
        terms_sec3_strong1: "Client IP:",
        terms_sec3_p1: "All final deliverables (code, design files, content) are owned by the Client upon final payment.",
        terms_sec3_strong2: "Agency IP:",
        terms_sec3_p2: "Navabharath Technologies retains ownership of any pre-existing tools, proprietary code libraries, or generic software/methodologies used to create the deliverables.",
        terms_sec4_title: "4. Client Responsibilities",
        terms_sec4_p1: "The client must provide timely content, necessary access to systems, and prompt feedback. Project delays caused by the client may result in schedule and cost adjustments.",
        terms_sec5_title: "5. Payment Terms",
        terms_sec5_li1: "Invoicing: Specific deposit requirements (e.g., 50% upfront) and payment milestones will be outlined in the SOW.",
        terms_sec5_li2: "Late Fees: We reserve the right to charge interest on late payments.",
        terms_sec5_li3: "Refunds/Cancellations: Deposits are generally non-refundable unless otherwise specified in the agreement.",

        // Privacy Policy Page - Additional Keys
        privacy_sec6_title: "6. User Rights",
        privacy_sec6_p1: "Depending on your location, you may have rights such as the right to access, correct, or delete your personal data. Please contact us to exercise these rights.",
        privacy_sec7_title: "7. Security",
        privacy_sec7_p1: "We implement general security measures, including secure servers and encryption, to protect your data from unauthorized access, alteration, or disclosure.",
        privacy_sec8_title: "8. International Transfers",
        privacy_sec8_p1: "If you are accessing our services from outside India, please be aware that your information may be transferred to, stored, and processed in India where our servers are located.",
        privacy_sec9_title: "9. Contact Information",
        privacy_sec9_p1: "If you have any questions about this Privacy Policy, please contact us at:",

        // Terms Page - Additional Keys
        terms_sec6_title: "6. Warranties and Maintenance",
        terms_sec6_strong1: "Bug Fix Period:",
        terms_sec6_p1: " We provide a limited warranty period (e.g., 30 or 60 days post-launch) during which we will fix errors in the delivered code free of charge.",
        terms_sec6_strong2: "Exclusions:",
        terms_sec6_p2: " The warranty does not cover issues caused by third-party modifications, client content changes, or software updates outside our control.",
        terms_sec7_title: "7. Limitation of Liability",
        terms_sec7_p1: "Our liability is limited to the amount paid by the client for the specific service. We are not liable for consequential business losses (e.g., loss of revenue) resulting from a bug or service failure.",
        terms_sec8_title: "8. Termination",
        terms_sec8_p1: "Either party may terminate a project or agreement under specific conditions, such as material breach of contract, non-payment, or insolvency, as detailed in the service agreement.",
        terms_sec9_title: "9. Indemnification",
        terms_sec9_p1: "The client agrees to hold Navabharath Technologies harmless from any claims or lawsuits (e.g., copyright infringement) arising from the content or materials the client provided for the project.",
        terms_sec10_title: "10. Governing Law",
        terms_sec10_p1: "These Terms and Conditions are governed by and construed in accordance with the laws of Karnataka, India.",
        terms_sec11_title: "11. Changes to Terms",
        terms_sec11_p1: "We reserve the right to update these terms at any time. The latest revision date will be indicated on this page.",

        // Explore Page
        explore_banner_title: "Explore",
        explore_banner_desc: "Discover our journey, mission, and vision",
        explore_intro_title: "Navabharath Technologies — Empowering Growth Through Smart IT Solutions",
        explore_intro_desc: "Navabharath Technologies is a forward-thinking IT solutions company delivering smart, scalable, & results-driven digital services. With a strong focus on innovation & customer-centric design, we help businesses transform, automate, & grow in today's fast-evolving digital world. Backed by an experienced team & modern technologies, we ensure seamless execution, optimized workflows, & high-quality delivery. Our dedication to excellence, transparency, and reliability makes us a trusted partner for businesses of all sizes.",
        explore_what_do_title: "What We Do",
        explore_what_do_1: "Building custom websites, applications, & digital products designed for long-term performance.",
        explore_what_do_2: "Smart strategies & technologies that match your goals and workflow.",
        explore_what_do_3: "Robust, reliable, & optimized digital systems for maximum efficiency.",
        explore_what_do_4: "Solutions crafted with usability, experience, & business impact in mind.",
        explore_mission_title: "Our Mission",
        explore_mission_p1: "Our mission is to empower businesses with advanced digital solutions that accelerate growth & strengthen their competitive edge. We focus on enhancing operational efficiency through smart, automated, & scalable technologies that streamline every workflow. By delivering high-quality digital experiences, we ensure long-term success & sustainable development for our clients. We continuously innovate and adapt to evolving industry needs to deliver modern, future-ready solutions. Through our commitment to excellence, we strive to create meaningful value & help businesses operate smarter, faster, & more efficiently.",
        explore_vision_title: "Our Vision",
        explore_vision_p1: "Our vision is to be a global leader in digital transformation, recognized for our ability to turn complex challenges into simple, effective technological solutions. We aspire to build a future where every business, regardless of size, has access to the tools they need to thrive in a digital-first economy. By fostering a culture of creativity, integrity, and collaboration, we aim to set new standards in the IT industry. We see ourselves as catalysts for change, driving progress and innovation that not only benefits our clients but also contributes to a more connected and efficient world.",
        explore_values_title: "What We Do",
        explore_what_we_do_p1: "We specialize in a wide range of IT services designed to meet the diverse needs of modern enterprises. From custom software development and mobile app creation to cloud computing and data analytics, we offer end-to-end solutions that drive results. Our team of experts works closely with clients to understand their unique challenges and goals, delivering tailored strategies that maximize ROI. Whether you need to modernize legacy systems, build a new digital product from scratch, or optimize your existing infrastructure, we have the expertise and experience to help you succeed.",
        explore_trust_title: "Why Businesses Trust Us",
        explore_trust_1_title: "1. Innovation-Driven Approach",
        explore_trust_1_desc: "We use modern tools and best practices to deliver future-ready solutions.",
        explore_trust_2_title: "2. Customer-Centric Execution",
        explore_trust_2_desc: "Every project is personalized to your business goals & workflows.",
        explore_trust_3_title: "3. Skilled Professionals",
        explore_trust_3_desc: "A team that blends creativity, expertise, & industry knowledge.",
        explore_trust_4_title: "4. Quality & Transparency",
        explore_trust_4_desc: "Clear communication, reliable processes, & timely delivery at every stage.",
    },
    es: {
        nav_home: "Inicio",
        search_placeholder: "Buscar...",
        contact_name_placeholder: "Nombre",
        contact_email_placeholder: "Correo Electrónico",
        contact_message_placeholder: "Mensaje",
        about_explore: "Explorar",
        nav_about: "Sobre Nosotros",
        nav_services: "Servicios",
        nav_resources: "Recursos",
        nav_contact: "Contacto",
        hero_title: "Soluciones Más Inteligentes para un Mejor Futuro",
        hero_subtitle: "Soluciones de TI | Desarrollo Web | IA | Solución SaaS",
        hero_description: "Empoderamos a las empresas con soluciones tecnológicas inteligentes que impulsan la innovación, mejoran la eficiencia y crean valor sostenible para el panorama digital del mañana.",
        hero_cta: "Comenzar",
        about_title: "Sobre Nosotros",
        about_description: "Navabharath Technologies es un proveedor líder de soluciones de TI dedicado a ofrecer productos digitales innovadores y robustos. Con un equipo de desarrolladores y diseñadores expertos, transformamos ideas en realidad. Nuestra misión es empoderar a las empresas con tecnología escalable y eficiente.",
        about_feature1: "Soluciones Innovadoras",
        about_feature2: "Enfoque Centrado en el Cliente",
        about_feature3: "Equipo Experto",
        services_title: "Nuestros Servicios",
        services_subtitle: "Soluciones integrales para las necesidades de su negocio",
        service1_title: "Desarrollo Web",
        service1_description: "Sitios web personalizados construidos con tecnologías modernas para garantizar rendimiento y escalabilidad.",
        service2_title: "Desarrollo de Aplicaciones Móviles",
        service2_description: "Aplicaciones móviles nativas y multiplataforma diseñadas para experiencias de usuario fluidas.",
        service3_title: "Soluciones en la Nube",
        service3_description: "Configuración y gestión de infraestructura en la nube segura y escalable.",
        service4_title: "Diseño UI/UX",
        service4_description: "Diseño centrado en el usuario que crea productos digitales atractivos e intuitivos.",
        contact_title: "Contáctenos",
        contact_subtitle: "¿Listo para comenzar su proyecto? Póngase en contacto con nosotros hoy.",
        form_name: "Nombre",
        form_email: "Correo Electrónico",
        form_message: "Mensaje",
        form_submit: "Enviar Mensaje",
        footer_tagline: "Empoderando Su Futuro Digital",
        footer_links_title: "Empresa",
        footer_support: "Soporte",
        footer_about: "Acerca de",
        footer_services: "Servicios",
        footer_contact: "Contacto",
        footer_social_title: "Síguenos",
        footer_copyright: "© 2025 Navabharath Technologies. Todos los derechos reservados."
    },
    fr: {
        nav_home: "Accueil",
        search_placeholder: "Rechercher...",
        contact_name_placeholder: "Nom",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Message",
        about_explore: "Explorer",
        nav_about: "À Propos",
        nav_services: "Services",
        nav_resources: "Ressources",
        nav_contact: "Contact",
        hero_title: "Des Solutions Plus Intelligentes pour un Meilleur Avenir",
        hero_subtitle: "Solutions informatiques | Développement Web | IA | Solution SaaS",
        hero_description: "Nous donnons aux entreprises les moyens de disposer de solutions technologiques intelligentes qui favorisent l'innovation, améliorent l'efficacité et créent une valeur durable pour le paysage numérique de demain.",
        hero_cta: "Commencer",
        about_title: "À Propos de Nous",
        about_description: "Navabharath Technologies est un fournisseur de solutions informatiques de premier plan dédié à la fourniture de produits numériques innovants et robustes. Avec une équipe de développeurs et de concepteurs experts, nous transformons les idées en réalité. Notre mission est de donner aux entreprises les moyens de disposer d'une technologie évolutive et efficace.",
        about_feature1: "Solutions Innovantes",
        about_feature2: "Approche Centrée sur le Client",
        about_feature3: "Équipe d'Experts",
        services_title: "Nos Services",
        services_subtitle: "Des solutions complètes pour les besoins de votre entreprise",
        service1_title: "Développement Web",
        service1_description: "Sites Web personnalisés construits avec des technologies modernes pour garantir performance et évolutivité.",
        service2_title: "Développement d'Applications Mobiles",
        service2_description: "Applications mobiles natives et multiplateformes conçues pour des expériences utilisateur fluides.",
        service3_title: "Solutions Cloud",
        service3_description: "Configuration et gestion d'infrastructure cloud sécurisée et évolutive.",
        service4_title: "Conception UI/UX",
        service4_description: "Conception centrée sur l'utilisateur qui crée des produits numériques attrayants et intuitifs.",
        contact_title: "Contactez-Nous",
        contact_subtitle: "Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui.",
        form_name: "Nom",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Envoyer le Message",
        footer_tagline: "Donner du Pouvoir à Votre Avenir Numérique",
        footer_links_title: "Entreprise",
        footer_support: "Assistance",
        footer_about: "À Propos",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_social_title: "Suivez-Nous",
        footer_copyright: "© 2025 Navabharath Technologies. Tous droits réservés."
    },
    de: {
        nav_home: "Startseite",
        search_placeholder: "Suchen...",
        contact_name_placeholder: "Name",
        contact_email_placeholder: "E-Mail",
        contact_message_placeholder: "Nachricht",
        about_explore: "Erkunden",
        nav_about: "Über Uns",
        nav_services: "Dienstleistungen",
        nav_resources: "Ressourcen",
        nav_contact: "Kontakt",
        hero_title: "Intelligentere Lösungen für eine Bessere Zukunft",
        hero_subtitle: "IT-Lösungen | Webentwicklung | KI | SaaS-Lösung",
        hero_description: "Wir befähigen Unternehmen mit intelligenten Technologielösungen, die Innovation vorantreiben, Effizienz steigern und nachhaltigen Wert für die digitale Landschaft von morgen schaffen.",
        hero_cta: "Loslegen",
        about_title: "Über Uns",
        about_description: "Navabharath Technologies ist ein führender IT-Lösungsanbieter, der sich der Bereitstellung innovativer und robuster digitaler Produkte widmet. Mit einem Team aus erfahrenen Entwicklern und Designern verwandeln wir Ideen in Realität. Unsere Mission ist es, Unternehmen mit skalierbarer und effizienter Technologie zu befähigen.",
        about_feature1: "Innovative Lösungen",
        about_feature2: "Kundenorientierter Ansatz",
        about_feature3: "Expertenteam",
        services_title: "Unsere Dienstleistungen",
        services_subtitle: "Umfassende Lösungen für Ihre Geschäftsanforderungen",
        service1_title: "Webentwicklung",
        service1_description: "Maßgeschneiderte Websites, die mit modernen Technologien erstellt wurden, um Leistung und Skalierbarkeit zu gewährleisten.",
        service2_title: "Mobile App-Entwicklung",
        service2_description: "Native und plattformübergreifende mobile Anwendungen, die für nahtlose Benutzererfahrungen entwickelt wurden.",
        service3_title: "Cloud-Lösungen",
        service3_description: "Sichere und skalierbare Cloud-Infrastruktur-Einrichtung und Verwaltungsdienste.",
        service4_title: "UI/UX-Design",
        service4_description: "Benutzerzentriertes Design, das ansprechende und intuitive digitale Produkte schafft.",
        contact_title: "Kontaktieren Sie Uns",
        contact_subtitle: "Bereit, Ihr Projekt zu starten? Kontaktieren Sie uns noch heute.",
        form_name: "Name",
        form_email: "E-Mail",
        form_message: "Nachricht",
        form_submit: "Nachricht Senden",
        footer_tagline: "Stärkung Ihrer Digitalen Zukunft",
        footer_links_title: "Unternehmen",
        footer_support: "Support",
        footer_about: "Über",
        footer_services: "Dienstleistungen",
        footer_contact: "Kontakt",
        footer_social_title: "Folgen Sie Uns",
        footer_copyright: "© 2025 Navabharath Technologies. Alle Rechte vorbehalten."
    },
    it: {
        nav_home: "Home",
        search_placeholder: "Cerca...",
        contact_name_placeholder: "Nome",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Messaggio",
        about_explore: "Esplora",
        nav_about: "Chi Siamo",
        nav_services: "Servizi",
        nav_resources: "Risorse",
        nav_contact: "Contatti",
        hero_title: "Soluzioni Più Intelligenti per un Futuro Migliore",
        hero_subtitle: "Soluzioni IT | Sviluppo Web | AI | Soluzione SaaS",
        hero_description: "Diamo alle aziende soluzioni tecnologiche intelligenti che guidano l'innovazione, migliorano l'efficienza e creano valore sostenibile per il panorama digitale di domani.",
        hero_cta: "Inizia",
        about_title: "Chi Siamo",
        about_description: "Navabharath Technologies è un fornitore leader di soluzioni IT dedicato alla fornitura di prodotti digitali innovativi e robusti. Con un team di sviluppatori e designer esperti, trasformiamo le idee in realtà. La nostra missione è dare alle aziende una tecnologia scalabile ed efficiente.",
        about_feature1: "Soluzioni Innovative",
        about_feature2: "Approccio Centrato sul Cliente",
        about_feature3: "Team di Esperti",
        services_title: "I Nostri Servizi",
        services_subtitle: "Soluzioni complete per le esigenze della tua azienda",
        service1_title: "Sviluppo Web",
        service1_description: "Siti web personalizzati costruiti con tecnologie moderne per garantire prestazioni e scalabilità.",
        service2_title: "Sviluppo App Mobile",
        service2_description: "Applicazioni mobili native e multipiattaforma progettate per esperienze utente fluide.",
        service3_title: "Soluzioni Cloud",
        service3_description: "Configurazione e gestione di infrastrutture cloud sicure e scalabili.",
        service4_title: "Design UI/UX",
        service4_description: "Design incentrato sull'utente che crea prodotti digitali coinvolgenti e intuitivi.",
        contact_title: "Contattaci",
        contact_subtitle: "Pronto per iniziare il tuo progetto? Mettiti in contatto con noi oggi.",
        form_name: "Nome",
        form_email: "Email",
        form_message: "Messaggio",
        form_submit: "Invia Messaggio",
        footer_tagline: "Potenziare il Tuo Futuro Digitale",
        footer_links_title: "Azienda",
        footer_support: "Supporto",
        footer_about: "Chi Siamo",
        footer_services: "Servizi",
        footer_contact: "Contatti",
        footer_social_title: "Seguici",
        footer_copyright: "© 2025 Navabharath Technologies. Tutti i diritti riservati."
    },
    pt: {
        nav_home: "Início",
        search_placeholder: "Buscar...",
        contact_name_placeholder: "Nome",
        contact_email_placeholder: "E-mail",
        contact_message_placeholder: "Mensagem",
        about_explore: "Explorar",
        nav_about: "Sobre Nós",
        nav_services: "Serviços",
        nav_resources: "Recursos",
        nav_contact: "Contato",
        hero_title: "Soluções Mais Inteligentes para um Futuro Melhor",
        hero_subtitle: "Soluções de TI | Desenvolvimento Web | IA | Solução SaaS",
        hero_description: "Capacitamos empresas com soluções tecnológicas inteligentes que impulsionam a inovação, aumentam a eficiência e criam valor sustentável para o cenário digital de amanhã.",
        hero_cta: "Começar",
        about_title: "Sobre Nós",
        about_description: "Navabharath Technologies é um fornecedor líder de soluções de TI dedicado a fornecer produtos digitais inovadores e robustos. Com uma equipe de desenvolvedores e designers especializados, transformamos ideias em realidade. Nossa missão é capacitar empresas com tecnologia escalável e eficiente.",
        about_feature1: "Soluções Inovadoras",
        about_feature2: "Abordagem Centrada no Cliente",
        about_feature3: "Equipe Especializada",
        services_title: "Nossos Serviços",
        services_subtitle: "Soluções abrangentes para as necessidades do seu negócio",
        service1_title: "Desenvolvimento Web",
        service1_description: "Sites personalizados construídos com tecnologias modernas para garantir desempenho e escalabilidade.",
        service2_title: "Desenvolvimento de Aplicativos Móveis",
        service2_description: "Aplicativos móveis nativos e multiplataforma projetados para experiências de usuário perfeitas.",
        service3_title: "Soluções em Nuvem",
        service3_description: "Configuração e gerenciamento de infraestrutura em nuvem segura e escalável.",
        service4_title: "Design UI/UX",
        service4_description: "Design centrado no usuário que cria produtos digitais envolventes e intuitivos.",
        contact_title: "Entre em Contato",
        contact_subtitle: "Pronto para iniciar seu projeto? Entre em contato conosco hoje.",
        form_name: "Nome",
        form_email: "E-mail",
        form_message: "Mensagem",
        form_submit: "Enviar Mensagem",
        footer_tagline: "Capacitando Seu Futuro Digital",
        footer_links_title: "Empresa",
        footer_support: "Suporte",
        footer_about: "Sobre",
        footer_services: "Serviços",
        footer_contact: "Contato",
        footer_social_title: "Siga-nos",
        footer_copyright: "© 2025 Navabharath Technologies. Todos os direitos reservados."
    },
    ar: {
        nav_home: "الرئيسية",
        search_placeholder: "بحث...",
        contact_name_placeholder: "الاسم",
        contact_email_placeholder: "البريد الإلكتروني",
        contact_message_placeholder: "الرسالة",
        about_explore: "استكشاف",
        nav_about: "من نحن",
        nav_services: "الخدمات",
        nav_resources: "الموارد",
        nav_contact: "اتصل بنا",
        hero_title: "حلول أذكى لمستقبل أفضل",
        hero_subtitle: "حلول تكنولوجيا المعلومات | تطوير الويب | الذكاء الاصطناعي | حل SaaS",
        hero_description: "نمكّن الشركات بحلول تقنية ذكية تدفع الابتكار وتعزز الكفاءة وتخلق قيمة مستدامة للمشهد الرقمي للغد.",
        hero_cta: "ابدأ الآن",
        about_title: "من نحن",
        about_description: "Navabharath Technologies هي مزود رائد لحلول تكنولوجيا المعلومات مكرس لتقديم منتجات رقمية مبتكرة وقوية. مع فريق من المطورين والمصممين الخبراء، نحول الأفكار إلى واقع. مهمتنا هي تمكين الشركات بتكنولوجيا قابلة للتطوير وفعالة.",
        about_feature1: "حلول مبتكرة",
        about_feature2: "نهج يركز على العملاء",
        about_feature3: "فريق خبراء",
        services_title: "خدماتنا",
        services_subtitle: "حلول شاملة لاحتياجات عملك",
        service1_title: "تطوير الويب",
        service1_description: "مواقع ويب مخصصة مبنية بتقنيات حديثة لضمان الأداء وقابلية التوسع.",
        service2_title: "تطوير تطبيقات الجوال",
        service2_description: "تطبيقات جوال أصلية ومتعددة المنصات مصممة لتجارب مستخدم سلسة.",
        service3_title: "حلول السحابة",
        service3_description: "إعداد وإدارة البنية التحتية السحابية الآمنة والقابلة للتطوير.",
        service4_title: "تصميم واجهة المستخدم/تجربة المستخدم",
        service4_description: "تصميم يركز على المستخدم يخلق منتجات رقمية جذابة وبديهية.",
        contact_title: "اتصل بنا",
        contact_subtitle: "هل أنت مستعد لبدء مشروعك؟ تواصل معنا اليوم.",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_message: "الرسالة",
        form_submit: "إرسال الرسالة",
        footer_tagline: "تمكين مستقبلك الرقمي",
        footer_links_title: "الشركة",
        footer_support: "الدعم",
        footer_about: "من نحن",
        footer_services: "الخدمات",
        footer_contact: "اتصل بنا",
        footer_social_title: "تابعنا",
        footer_copyright: "© 2025 Navabharath Technologies. جميع الحقوق محفوظة."
    },
    kn: {
        nav_home: "ಮುಖಪುಟ",
        search_placeholder: "ಹುಡುಕಿ...",
        contact_name_placeholder: "ಹೆಸರು",
        contact_email_placeholder: "ಇಮೇಲ್",
        contact_message_placeholder: "ಸಂದೇಶ",
        about_explore: "ಅನ್ವೇಷಿಸಿ",
        nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
        nav_services: "ಸೇವೆಗಳು",
        nav_resources: "ಸಂಪನ್ಮೂಲಗಳು",
        nav_contact: "ಸಂಪರ್ಕಿಸಿ",
        hero_title: "ಉತ್ತಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಸ್ಮಾರ್ಟ್ ಪರಿಹಾರಗಳು",
        hero_subtitle: "ಐಟಿ ಪರಿಹಾರಗಳು | ವೆಬ್ ಅಭಿವೃದ್ಧಿ | ಎಐ | ಸಾಸ್ ಪರಿಹಾರ",
        hero_description: "ಡಿಜಿಟಲ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಷನ್ ಸೇವೆಗಳು, ಎಂಡ್-ಟು-ಎಂಡ್ ಐಟಿ ಬೆಂಬಲ, ಮತ್ತು ಸುರಕ್ಷಿತ ಡೇಟಾ ಆಧುನೀಕರಣ ಪರಿಹಾರಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಪೂರೈಕೆದಾರರಾದ ಅಸೆಂಟ್ ಬಿಸಿನೆಸ್ ಸೊಲ್ಯೂಷನ್ಸ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಪರಿವರ್ತಿಸಿ. ಕಾರ್ಯಾಚರಣೆಯ ದಕ್ಷತೆಯನ್ನು ಸುಧಾರಿಸಲು, ಐಟಿ ಮೂಲಸೌಕರ್ಯವನ್ನು ಬಲಪಡಿಸಲು, ಡೇಟಾ ಸುರಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ, ಭವಿಷ್ಯದ-ಸಿದ್ಧ ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳೊಂದಿಗೆ ವೇಗವಾಗಿ ಬೆಳೆಯಲು ನಾವು ವ್ಯವಹಾರಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        hero_cta: "ಪ್ರಾರಂಭಿಸಿ",
        about_title: "ನಮ್ಮ ಬಗ್ಗೆ",
        about_description: "ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ ಒಂದು ಪ್ರಮುಖ ಐಟಿ ಪರಿಹಾರ ಒದಗಿಸುವ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ನವೀನ ಮತ್ತು ದೃಢವಾದ ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ತಲುಪಿಸಲು ಮೀಸಲಾಗಿರುತ್ತದೆ. ಪರಿಣತ ಡೆವಲಪರ್‌ಗಳು ಮತ್ತು ವಿನ್ಯಾಸಕರ ತಂಡದೊಂದಿಗೆ, ನಾವು ಆಲೋಚನೆಗಳನ್ನು ವಾಸ್ತವಕ್ಕೆ ಪರಿವರ್ತಿಸುತ್ತೇವೆ. ವ್ಯವಹಾರಗಳನ್ನು ಸ್ಕೇಲಬಲ್ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಸಶಕ್ತಗೊಳಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.",
        about_feature1: "ನವೀನ ಪರಿಹಾರಗಳು",
        about_feature2: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್",
        about_feature3: "ಗ್ರಾಹಕ ಸ್ನೇಹಿ ವಿಧಾನ",
        about_feature4: "ತಜ್ಞರ ತಂಡ",
        services_title: "ನಮ್ಮ ಸೇವೆಗಳು",
        services_subtitle: "ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಮಗ್ರ ಪರಿಹಾರಗಳು",
        service1_title: "ವೆಬ್ ಅಭಿವೃದ್ಧಿ",
        service1_description: "ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಸ್ಕೇಲೆಬಿಲಿಟಿಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನಗಳೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾದ ಕಸ್ಟಮ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು.",
        service2_title: "ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಅಭಿವೃದ್ಧಿ",
        service2_description: "ತಡೆರಹಿತ ಬಳಕೆದಾರ ಅನುಭವಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸ್ಥಳೀಯ ಮತ್ತು ಅಡ್ಡ-ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು.",
        service3_title: "ಕ್ಲೌಡ್ ಪರಿಹಾರಗಳು",
        service3_description: "ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ಕೇಲಬಲ್ ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯ ಸೆಟಪ್ ಮತ್ತು ನಿರ್ವಹಣಾ ಸೇವೆಗಳು.",
        service4_title: "UI/UX ವಿನ್ಯಾಸ",
        service4_description: "ಆಕರ್ಷಕ ಮತ್ತು ಅರ್ಥಗರ್ಭಿತ ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ರಚಿಸುವ ಬಳಕೆದಾರ ಕೇಂದ್ರಿತ ವಿನ್ಯಾಸ.",
        service5_title: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್",
        service5_description: "ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಉಪಸ್ಥಿತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಬುದ್ಧಿವಂತ ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರಗಳನ್ನು ಅಳವಡಿಸುವುದು.",
        service6_title: "ಐವಿಆರ್ ಪರಿಹಾರಗಳು",
        service6_description: "ಗ್ರಾಹಕರ ಸಂವಹನಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಲು ಮತ್ತು ಬುದ್ಧಿವಂತ ಧ್ವನಿ ಮೆನುಗಳೊಂದಿಗೆ ಕರೆ ನಿರ್ವಹಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸಲು ಸುಧಾರಿತ ಇಂಟರ್ಯಾಕ್ಟಿವ್ ವಾಯ್ಸ್ ರೆಸ್ಪಾನ್ಸ್ ಸಿಸ್ಟಮ್‌ಗಳು.",
        service7_title: "ಎಐ ಪರಿಹಾರಗಳು",
        service7_description: "ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಲು, ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಡೇಟಾ-ಚಾಲಿತ ಒಳನೋಟಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಲು ಅತ್ಯಾಧುನಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಯಂತ್ರ ಕಲಿಕೆ ಪರಿಹಾರಗಳು.",

        // Why Choose Us Section
        why_choose_title: "ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ ಅನ್ನು ಏಕೆ ಆರಿಸಿ?",
        why_feature1_title: "ಭವಿಷ್ಯದ-ಸಿದ್ಧ ಪರಿಹಾರಗಳು",
        why_feature1_desc: "ಶಾಶ್ವತ ಡಿಜಿಟಲ್ ಅಡಿಪಾಯಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.",
        why_feature2_title: "ಉನ್ನತ ಭದ್ರತಾ ಮಾನದಂಡಗಳು",
        why_feature2_desc: "ಸುರಕ್ಷಿತ ಮತ್ತು ಸಂರಕ್ಷಿತ ಡೇಟಾವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದು.",
        why_feature3_title: "ಎಂಡ್-ಟು-ಎಂಡ್ ಅಭಿವೃದ್ಧಿ",
        why_feature3_desc: "ಸಂಶೋಧನೆಯಿಂದ ನಿಯೋಜನೆ ಮತ್ತು ಬೆಂಬಲದವರೆಗೆ.",
        why_feature4_title: "ಫಲಿತಾಂಶ-ಆಧಾರಿತ ವಿಧಾನ",
        why_feature4_desc: "ನಾವು ಕಾರ್ಯಕ್ಷಮತೆ, ವೇಗ ಮತ್ತು ಉಪಯುಕ್ತತೆಯ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತೇವೆ.",
        why_feature5_title: "ಗ್ರಾಹಕ-ಕೇಂದ್ರಿತ ತಂಡ",
        why_feature5_desc: "ಸಮರ್ಪಿತ ಬೆಂಬಲ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಂವಹನ.",
        why_feature6_title: "ಡೆವೊಬ್ಸ್ ಸೇವೆಗಳು",
        why_feature6_desc: "ಸುರಕ್ಷಿತ, ಸ್ಕೇಲಬಲ್ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲಸೌಕರ್ಯ.",
        contact_title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        contact_subtitle: "ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        form_name: "ಹೆಸರು",
        form_email: "ಇಮೇಲ್",
        form_message: "ಸಂದೇಶ",
        form_submit: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
        footer_tagline: "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಭವಿಷ್ಯವನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು",
        footer_links_title: "ಕಂಪನಿ",
        footer_support: "ಬೆಂಬಲ",
        footer_about: "ನಮ್ಮ ಬಗ್ಗೆ",
        footer_services: "ಸೇವೆಗಳು",
        footer_contact: "ಸಂಪರ್ಕಿಸಿ",
        footer_social_title: "ನಮ್ಮನ್ನು ಹಿಂಬಾಲಿಸಿ",
        footer_copyright: "© 2025 ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        footer_links_title: "ಕಂಪನಿ",
        footer_support: "ಬೆಂಬಲ",
        footer_terms: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
        footer_privacy: "ಗೌಪ್ಯತೆ",
        footer_about: "ನಮ್ಮ ಬಗ್ಗೆ",

        // Resources Page
        resources_intro_title: "ಜ್ಞಾನ ಕೇಂದ್ರ",
        resources_intro_desc: "ಡಿಜಿಟಲ್ ಜಗತ್ತಿನಲ್ಲಿ ಮುಂದೆ ಸಾಗಲು ನಮ್ಮ ಸಂಪನ್ಮೂಲಗಳು, ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ಒಳನೋಟಗಳ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ. ತಾಂತ್ರಿಕ ದಾಖಲಾತಿಯಿಂದ ಉದ್ಯಮದ ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳವರೆಗೆ, ನಿಮ್ಮ ವ್ಯಾಪಾರ ಪ್ರಯಾಣವನ್ನು ಬೆಂಬಲಿಸಲು ನಾವು ಅಮೂಲ್ಯವಾದ ವಿಷಯವನ್ನು ಸಂಗ್ರಹಿಸಿದ್ದೇವೆ.",
        resource_card1_title: "ದಾಖಲಾತಿ",
        resource_card1_desc: "ನಮ್ಮ ಸೇವೆಗಳು ಮತ್ತು ಪರಿಹಾರಗಳಿಗಾಗಿ ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ತಾಂತ್ರಿಕ ದಾಖಲಾತಿ. ನಮ್ಮ ತಂತ್ರಜ್ಞಾನದ ಮೌಲ್ಯವನ್ನು ಹೇಗೆ ಸಂಯೋಜಿಸುವುದು ಮತ್ತು ಹೆಚ್ಚಿಸುವುದು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
        resource_view_btn: "ದಾಖಲಾತಿಯನ್ನು ವೀಕ್ಷಿಸಿ",
        resource_card2_title: "ಬ್ಲಾಗ್ ಮತ್ತು ಒಳನೋಟಗಳು",
        resource_card2_desc: "ನಮ್ಮ ತಜ್ಞರ ತಂಡದಿಂದ ಇತ್ತೀಚಿನ ಪ್ರವೃತ್ತಿಗಳು, ಸಲಹೆಗಳು ಮತ್ತು ಒಳನೋಟಗಳೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ. ಉದ್ಯಮದ ಸುದ್ದಿಗಳು ಮತ್ತು ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
        resource_read_btn: "ಬ್ಲಾಗ್ ಓದಿ",
        resource_card3_title: "ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್ಸ್",
        resource_card3_desc: "ಅಭಿವೃದ್ಧಿಯಿಂದ ನಿಯೋಜನೆ ಮತ್ತು ಆಪ್ಟಿಮೈಸೇಶನ್‌ವರೆಗೆ ವಿವಿಧ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡ ಹಂತ-ಹಂತದ ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು ಮತ್ತು ವೆಬ್‌ನಾರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
        resource_watch_btn: "ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        resource_card4_title: "ಡೌನ್‌ಲೋಡ್‌ಗಳು",
        resource_card4_desc: "ನಿಮ್ಮ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಲು ಶ್ವೇತಪತ್ರಗಳು, ಕೇಸ್ ಸ್ಟಡೀಸ್ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದಾದ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
        resource_download_btn: "ಡೌನ್‌ಲೋಡ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ",
        resource_card5_title: "FAQ",
        resource_card5_desc: "ನಮ್ಮ ಸೇವೆಗಳು, ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳ ಬಗ್ಗೆ ಆಗಾಗ್ಗೆ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ.",
        resource_faq_btn: "FAQ ವೀಕ್ಷಿಸಿ",
        resource_card6_title: "ಡೆವಲಪರ್ ಪರಿಕರಗಳು",
        resource_card6_desc: "ನಮ್ಮ ಪರಿಹಾರಗಳನ್ನು ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಮನಬಂದಂತೆ ಸಂಯೋಜಿಸಲು APIಗಳು, SDKಗಳು ಮತ್ತು ಡೆವಲಪರ್ ಪರಿಕರಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
        resource_tools_btn: "ಪರಿಕರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",

        // Privacy Policy Page
        privacy_sec1_title: "1. ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ",
        privacy_sec1_strong1: "ಬಳಕೆದಾರರಿಂದ ನೇರವಾಗಿ:",
        privacy_sec1_p1: "ಹೆಸರು, ಇಮೇಲ್, ಫೋನ್ ಸಂಖ್ಯೆ, ಕಂಪನಿಯ ಹೆಸರು ಮತ್ತು 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' ಫಾರ್ಮ್ ಮೂಲಕ ಸಲ್ಲಿಸಿದ ಸಂದೇಶ ವಿಷಯ.",
        privacy_sec1_strong2: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ:",
        privacy_sec1_p2: "IP ವಿಳಾಸ, ಬ್ರೌಸರ್ ಪ್ರಕಾರ, ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್, ಭೇಟಿ ನೀಡಿದ ಪುಟಗಳು ಮತ್ತು ಸೈಟ್‌ನಲ್ಲಿ ಕಳೆದ ಸಮಯ (ಕುಕೀಗಳು/ಅನಾಲಿಟಿಕ್ಸ್ ಮೂಲಕ).",
        privacy_sec2_title: "2. ನಾವು ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ",
        privacy_sec2_li1: "ವಿಚಾರಣೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲು (ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಡೇಟಾದ ಪ್ರಾಥಮಿಕ ಬಳಕೆ).",
        privacy_sec2_li2: "ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಪ್ರಯತ್ನಗಳನ್ನು ಸುಧಾರಿಸಲು.",
        privacy_sec2_li3: "ಒದಗಿಸಿದ ಸೇವೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಆಂತರಿಕ ದಾಖಲೆ ಮತ್ತು ಬಿಲ್ಲಿಂಗ್‌ಗಾಗಿ.",
        privacy_sec3_title: "3. ಡೇಟಾ ಹಂಚಿಕೆ ಮತ್ತು ಬಹಿರಂಗಪಡಿಸುವಿಕೆ",
        privacy_sec3_strong1: "ಸೇವೆ ಪೂರೈಕೆದಾರರು:",
        privacy_sec3_p1: "ನಮ್ಮ ಪರವಾಗಿ ಡೇಟಾವನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಮಾರಾಟಗಾರರೊಂದಿಗೆ (ಉದಾ., ಹೋಸ್ಟಿಂಗ್ ಪೂರೈಕೆದಾರರು, CRM ಸಾಫ್ಟ್‌ವೇರ್, Google Analytics) ನಾವು ಡೇಟಾವನ್ನು ಹಂಚಿಕೊಳ್ಳಬಹುದು.",
        privacy_sec3_strong2: "ಕಾನೂನು ಅನುಸರಣೆ:",
        privacy_sec3_p2: "ಕಾನೂನು, ನ್ಯಾಯಾಲಯದ ಆದೇಶ ಅಥವಾ ಸರ್ಕಾರಿ ವಿನಂತಿಯ ಮೂಲಕ ಅಗತ್ಯವಿದ್ದರೆ ನಾವು ಮಾಹಿತಿಯನ್ನು ಬಹಿರಂಗಪಡಿಸಬಹುದು.",
        privacy_sec4_title: "4. ಡೇಟಾ ಧಾರಣ",
        privacy_sec4_p1: "ನಾವು ಸಂಪರ್ಕ ವಿಚಾರಣೆಗಳನ್ನು ನಿರ್ದಿಷ್ಟ ಅವಧಿಗೆ (ಉದಾ., 2 ವರ್ಷಗಳು) ಮತ್ತು ಕಾನೂನು ಮತ್ತು ತೆರಿಗೆ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಒಪ್ಪಂದದ ಅವಧಿ ಮತ್ತು ಪ್ರಮಾಣಿತ ಧಾರಣ ಅವಧಿಗೆ (ಉದಾ., 5 ವರ್ಷಗಳು) ಕ್ಲೈಂಟ್ ಡೇಟಾವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತೇವೆ.",
        privacy_sec5_title: "5. ಕುಕೀಗಳು ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್",
        privacy_sec5_p1: "ನಿಮ್ಮ ಅನುಭವವನ್ನು ಹೆಚ್ಚಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು (ಉದಾ., ಕ್ರಿಯಾತ್ಮಕ, ವಿಶ್ಲೇಷಣಾತ್ಮಕ) ಬಳಸುತ್ತೇವೆ. ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಬ್ರೌಸರ್ ಆಯ್ಕೆಗಳ ಮೂಲಕ ಕುಕೀಗಳನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ನೀವು ಆಯ್ಕೆ ಮಾಡಬಹುದು.",

        // Terms Page
        terms_sec1_title: "1. ನಿಯಮಗಳ ಅಂಗೀಕಾರ",
        terms_sec1_p1: "ವೆಬ್‌ಸೈಟ್ ಪ್ರವೇಶಿಸುವ ಮೂಲಕ ಅಥವಾ ನಮ್ಮ ಸೇವೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವ ಮೂಲಕ, ನೀವು ಈ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಒಪ್ಪುತ್ತೀರಿ. ನೀವು ಒಪ್ಪದಿದ್ದರೆ, ದಯವಿಟ್ಟು ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಬಳಸಬೇಡಿ.",
        terms_sec2_title: "2. ಸೇವೆಗಳ ವ್ಯಾಪ್ತಿ",
        terms_sec2_p1: "ನಾವು ವೆಬ್ ಅಭಿವೃದ್ಧಿ, ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಅಭಿವೃದ್ಧಿ, UI/UX ವಿನ್ಯಾಸ ಮತ್ತು ಸಂಬಂಧಿತ ಐಟಿ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ವ್ಯಾಪ್ತಿ, ಬಜೆಟ್ ಮತ್ತು ಸಮಯಾವಧಿ ಸೇರಿದಂತೆ ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ಪ್ರತ್ಯೇಕ ಕೆಲಸದ ಹೇಳಿಕೆ (SOW) ಅಥವಾ ಸೇವಾ ಒಪ್ಪಂದದ ಮೂಲಕ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.",
        terms_sec3_title: "3. ಬೌದ್ಧಿಕ ಆಸ್ತಿ (IP) ಮಾಲೀಕತ್ವ",
        terms_sec3_strong1: "ಕ್ಲೈಂಟ್ IP:",
        terms_sec3_p1: "ಎಲ್ಲಾ ಅಂತಿಮ ವಿತರಣಾ ವಸ್ತುಗಳು (ಕೋಡ್, ವಿನ್ಯಾಸ ಫೈಲ್‌ಗಳು, ವಿಷಯ) ಅಂತಿಮ ಪಾವತಿಯ ನಂತರ ಕ್ಲೈಂಟ್ ಒಡೆತನದಲ್ಲಿರುತ್ತವೆ.",
        terms_sec3_strong2: "ಏಜೆನ್ಸಿ IP:",
        terms_sec3_p2: "ವಿತರಣಾ ವಸ್ತುಗಳನ್ನು ರಚಿಸಲು ಬಳಸುವ ಯಾವುದೇ ಪೂರ್ವ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಉಪಕರಣಗಳು, ಸ್ವಾಮ್ಯದ ಕೋಡ್ ಲೈಬ್ರರಿಗಳು ಅಥವಾ ಸಾಮಾನ್ಯ ಸಾಫ್ಟ್‌ವೇರ್/ವಿಧಾನಗಳ ಮಾಲೀಕತ್ವವನ್ನು ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ.",
        terms_sec4_title: "4. ಕ್ಲೈಂಟ್ ಜವಾಬ್ದಾರಿಗಳು",
        terms_sec4_p1: "ಕ್ಲೈಂಟ್ ಸಕಾಲಿಕ ವಿಷಯ, ಸಿಸ್ಟಮ್‌ಗಳಿಗೆ ಅಗತ್ಯ ಪ್ರವೇಶ ಮತ್ತು ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಒದಗಿಸಬೇಕು. ಕ್ಲೈಂಟ್‌ನಿಂದ ಉಂಟಾಗುವ ಯೋಜನೆಯ ವಿಳಂಬಗಳು ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ವೆಚ್ಚ ಹೊಂದಾಣಿಕೆಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು.",
        terms_sec5_title: "5. ಪಾವತಿ ನಿಯಮಗಳು",
        terms_sec5_li1: "ಇನ್‌ವಾಯ್ಸಿಂಗ್: ನಿರ್ದಿಷ್ಟ ಠೇವಣಿ ಅವಶ್ಯಕತೆಗಳು (ಉದಾ., 50% ಮುಂಗಡ) ಮತ್ತು ಪಾವತಿ ಮೈಲಿಗಲ್ಲುಗಳನ್ನು SOW ನಲ್ಲಿ ವಿವರಿಸಲಾಗುತ್ತದೆ.",
        terms_sec5_li2: "ವಿಳಂಬ ಶುಲ್ಕಗಳು: ತಡವಾದ ಪಾವತಿಗಳ ಮೇಲೆ ಬಡ್ಡಿ ವಿಧಿಸುವ ಹಕ್ಕನ್ನು ನಾವು ಕಾಯ್ದಿರಿಸಿದ್ದೇವೆ.",
        terms_sec5_li3: "ಮರುಪಾವತಿ/ರದ್ದತಿ: ಒಪ್ಪಂದದಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸದಿದ್ದರೆ ಠೇವಣಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಮರುಪಾವತಿಸಲಾಗುವುದಿಲ್ಲ.",

        // Privacy Policy Page - Additional Keys (Kannada)
        privacy_sec6_title: "6. ಬಳಕೆದಾರ ಹಕ್ಕುಗಳು",
        privacy_sec6_p1: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಅವಲಂಬಿಸಿ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಪ್ರವೇಶಿಸುವ, ಸರಿಪಡಿಸುವ ಅಥವಾ ಅಳಿಸುವ ಹಕ್ಕಿನಂತಹ ಹಕ್ಕುಗಳನ್ನು ನೀವು ಹೊಂದಿರಬಹುದು. ಈ ಹಕ್ಕುಗಳನ್ನು ಚಲಾಯಿಸಲು ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        privacy_sec7_title: "7. ಭದ್ರತೆ",
        privacy_sec7_p1: "ಅನಧಿಕೃತ ಪ್ರವೇಶ, ಬದಲಾವಣೆ ಅಥವಾ ಬಹಿರಂಗಪಡಿಸುವಿಕೆಯಿಂದ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ರಕ್ಷಿಸಲು ಸುರಕ್ಷಿತ ಸರ್ವರ್‌ಗಳು ಮತ್ತು ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಸೇರಿದಂತೆ ಸಾಮಾನ್ಯ ಭದ್ರತಾ ಕ್ರಮಗಳನ್ನು ನಾವು ಜಾರಿಗೊಳಿಸುತ್ತೇವೆ.",
        privacy_sec8_title: "8. ಅಂತರರಾಷ್ಟ್ರೀಯ ವರ್ಗಾವಣೆಗಳು",
        privacy_sec8_p1: "ನೀವು ಭಾರತದ ಹೊರಗಿನಿಂದ ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸುತ್ತಿದ್ದರೆ, ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಮ್ಮ ಸರ್ವರ್‌ಗಳು ಇರುವ ಭಾರತದಲ್ಲಿ ವರ್ಗಾಯಿಸಬಹುದು, ಸಂಗ್ರಹಿಸಬಹುದು ಮತ್ತು ಸಂಸ್ಕರಿಸಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ತಿಳಿದಿರಲಿ.",
        privacy_sec9_title: "9. ಸಂಪರ್ಕ ಮಾಹಿತಿ",
        privacy_sec9_p1: "ಈ ಗೌಪ್ಯತೆ ನೀತಿಯ ಬಗ್ಗೆ ನೀವು ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಹೊಂದಿದ್ದರೆ, ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ:",

        // Terms Page - Additional Keys (Kannada)
        terms_sec6_title: "6. ಖಾತರಿಗಳು ಮತ್ತು ನಿರ್ವಹಣೆ",
        terms_sec6_strong1: "ದೋಷ ಪರಿಹಾರ ಅವಧಿ:",
        terms_sec6_p1: " ನಾವು ಸೀಮಿತ ಖಾತರಿ ಅವಧಿಯನ್ನು (ಉದಾ., ಪ್ರಾರಂಭದ ನಂತರ 30 ಅಥವಾ 60 ದಿನಗಳು) ಒದಗಿಸುತ್ತೇವೆ, ಈ ಸಮಯದಲ್ಲಿ ನಾವು ವಿತರಿಸಿದ ಕೋಡ್‌ನಲ್ಲಿನ ದೋಷಗಳನ್ನು ಉಚಿತವಾಗಿ ಸರಿಪಡಿಸುತ್ತೇವೆ.",
        terms_sec6_strong2: "ಹೊರಗಿಡುವಿಕೆಗಳು:",
        terms_sec6_p2: " ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಮಾರ್ಪಾಡುಗಳು, ಕ್ಲೈಂಟ್ ವಿಷಯ ಬದಲಾವಣೆಗಳು ಅಥವಾ ನಮ್ಮ ನಿಯಂತ್ರಣದ ಹೊರಗಿನ ಸಾಫ್ಟ್‌ವೇರ್ ನವೀಕರಣಗಳಿಂದ ಉಂಟಾಗುವ ಸಮಸ್ಯೆಗಳನ್ನು ಖಾತರಿ ಒಳಗೊಂಡಿರುವುದಿಲ್ಲ.",
        terms_sec7_title: "7. ಹೊಣೆಗಾರಿಕೆಯ ಮಿತಿ",
        terms_sec7_p1: "ನಮ್ಮ ಹೊಣೆಗಾರಿಕೆ ನಿರ್ದಿಷ್ಟ ಸೇವೆಗಾಗಿ ಕ್ಲೈಂಟ್ ಪಾವತಿಸಿದ ಮೊತ್ತಕ್ಕೆ ಸೀಮಿತವಾಗಿದೆ. ದೋಷ ಅಥವಾ ಸೇವಾ ವೈಫಲ್ಯದಿಂದ ಉಂಟಾಗುವ ಪರಿಣಾಮಕಾರಿ ವ್ಯಾಪಾರ ನಷ್ಟಗಳಿಗೆ (ಉದಾ., ಆದಾಯ ನಷ್ಟ) ನಾವು ಜವಾಬ್ದಾರರಲ್ಲ.",
        terms_sec8_title: "8. ಮುಕ್ತಾಯ",
        terms_sec8_p1: "ಸೇವಾ ಒಪ್ಪಂದದಲ್ಲಿ ವಿವರಿಸಿದಂತೆ, ಒಪ್ಪಂದದ ವಸ್ತು ಉಲ್ಲಂಘನೆ, ಪಾವತಿ ಮಾಡದಿರುವಿಕೆ ಅಥವಾ ದಿವಾಳಿತನದಂತಹ ನಿರ್ದಿಷ್ಟ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಯಾವುದೇ ಪಕ್ಷವು ಯೋಜನೆ ಅಥವಾ ಒಪ್ಪಂದವನ್ನು ರದ್ದುಗೊಳಿಸಬಹುದು.",
        terms_sec9_title: "9. ನಷ್ಟ ಪರಿಹಾರ",
        terms_sec9_p1: "ಯೋಜನೆಗಾಗಿ ಕ್ಲೈಂಟ್ ಒದಗಿಸಿದ ವಿಷಯ ಅಥವಾ ವಸ್ತುಗಳಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ಹಕ್ಕುಗಳು ಅಥವಾ ಮೊಕದ್ದಮೆಗಳಿಂದ (ಉದಾ., ಹಕ್ಕುಸ್ವಾಮ್ಯ ಉಲ್ಲಂಘನೆ) ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ ಅನ್ನು ಹಾನಿಯಾಗದಂತೆ ನೋಡಿಕೊಳ್ಳಲು ಕ್ಲೈಂಟ್ ಒಪ್ಪುತ್ತಾರೆ.",
        terms_sec10_title: "10. ಆಡಳಿತ ಕಾನೂನು",
        terms_sec10_p1: "ಈ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಕರ್ನಾಟಕ, ಭಾರತದ ಕಾನೂನುಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಮತ್ತು ನಿರ್ಣಯಿಸಲಾಗುತ್ತದೆ.",
        terms_sec11_title: "11. ನಿಯಮಗಳಿಗೆ ಬದಲಾವಣೆಗಳು",
        terms_sec11_p1: "ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಈ ನಿಯಮಗಳನ್ನು ನವೀಕರಿಸುವ ಹಕ್ಕನ್ನು ನಾವು ಕಾಯ್ದಿರಿಸಿದ್ದೇವೆ. ಇತ್ತೀಚಿನ ಪರಿಷ್ಕರಣೆ ದಿನಾಂಕವನ್ನು ಈ ಪುಟದಲ್ಲಿ ಸೂಚಿಸಲಾಗುತ್ತದೆ.",

        // Explore Page
        explore_banner_title: "ಅನ್ವೇಷಿಸಿ",
        explore_banner_desc: "ನಮ್ಮ ಪ್ರಯಾಣ, ಧ್ಯೇಯ ಮತ್ತು ದೃಷ್ಟಿಕೋನವನ್ನು ಅನ್ವೇಷಿಸಿ",
        explore_intro_title: "ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ — ಸ್ಮಾರ್ಟ್ ಐಟಿ ಪರಿಹಾರಗಳ ಮೂಲಕ ಬೆಳವಣಿಗೆಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು",
        explore_intro_desc: "ನವಭಾರತ್ ಟೆಕ್ನಾಲಜೀಸ್ ಒಂದು ಮುಂದಾಲೋಚನೆಯ ಐಟಿ ಪರಿಹಾರ ಕಂಪನಿಯಾಗಿದ್ದು, ಸ್ಮಾರ್ಟ್, ಸ್ಕೇಲಬಲ್ ಮತ್ತು ಫಲಿತಾಂಶ-ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತದೆ. ನಾವೀನ್ಯತೆ ಮತ್ತು ಗ್ರಾಹಕ ಸರಳ ವಿನ್ಯಾಸದ ಮೇಲೆ ಬಲವಾದ ಗಮನವನ್ನು ಕೇಂದ್ರೀಕರಿಸಿ, ಇಂದಿನ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಡಿಜಿಟಲ್ ಜಗತ್ತಿನಲ್ಲಿ ವ್ಯವಹಾರಗಳನ್ನು ಪರಿವರ್ತಿಸಲು, ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಲು ಮತ್ತು ಬೆಳೆಯಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಅನುಭವಿ ತಂಡ ಮತ್ತು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನಗಳ ಬೆಂಬಲದೊಂದಿಗೆ, ನಾವು ತಡೆರಹಿತ ಮರಣದಂಡನೆ, ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಕೆಲಸದ ಹರಿವುಗಳು ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ವಿತರಣೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತೇವೆ. ಶ್ರೇಷ್ಠತೆ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಗೆ ನಮ್ಮ ಬದ್ಧತೆಯು ಎಲ್ಲಾ ಗಾತ್ರದ ವ್ಯವಹಾರಗಳಿಗೆ ನಮ್ಮನ್ನು ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರರನ್ನಾಗಿ ಮಾಡುತ್ತದೆ.",
        explore_what_do_title: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
        explore_what_do_1: "ದೀರ್ಘಕಾಲೀನ ಕಾರ್ಯಕ್ಷಮತೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಕಸ್ಟಮ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು, ಅಪ್ಲಿಕೇಶನ್‌ಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.",
        explore_what_do_2: "ನಿಮ್ಮ ಗುರಿಗಳು ಮತ್ತು ಕೆಲಸದ ಹರಿವಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಸ್ಮಾರ್ಟ್ ತಂತ್ರಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳು.",
        explore_what_do_3: "ಗರಿಷ್ಠ ದಕ್ಷತೆಗಾಗಿ ದೃಢವಾದ, ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಡಿಜಿಟಲ್ ವ್ಯವಸ್ಥೆಗಳು.",
        explore_what_do_4: "ಬಳಕೆ, ಅನುಭವ ಮತ್ತು ವ್ಯಾಪಾರ ಪ್ರಭಾವವನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ರಚಿಸಲಾದ ಪರಿಹಾರಗಳು.",
        explore_mission_title: "ನಮ್ಮ ಮಿಷನ್",
        explore_mission_p1: "ನಮ್ಮ ಮಿಷನ್ ಸುಧಾರಿತ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳೊಂದಿಗೆ ವ್ಯವಹಾರಗಳನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು, ಅದು ಬೆಳವಣಿಗೆಯನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಅವರ ಸ್ಪರ್ಧಾತ್ಮಕ ಅಂಚನ್ನು ಬಲಪಡಿಸುತ್ತದೆ. ಸ್ಮಾರ್ಟ್, ಸ್ವಯಂಚಾಲಿತ ಮತ್ತು ಸ್ಕೇಲಬಲ್ ತಂತ್ರಜ್ಞಾನಗಳ ಮೂಲಕ ಕಾರ್ಯಾಚರಣೆಯ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸುವುದರ ಮೇಲೆ ನಾವು ಗಮನಹರಿಸುತ್ತೇವೆ, ಅದು ಪ್ರತಿ ಕೆಲಸದ ಹರಿವನ್ನು ಸುಗಮಗೊಳಿಸುತ್ತದೆ. ಉನ್ನತ ಮಟ್ಟದ ಡಿಜಿಟಲ್ ಅನುಭವಗಳನ್ನು ನೀಡುವ ಮೂಲಕ, ನಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ದೀರ್ಘಕಾಲೀನ ಯಶಸ್ಸು ಮತ್ತು ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿಯನ್ನು ನಾವು ಖಚಿತಪಡಿಸುತ್ತೇವೆ. ಆಧುನಿಕ, ಭವಿಷ್ಯದ-ಸಿದ್ಧ ಪರಿಹಾರಗಳನ್ನು ನೀಡಲು ನಾವು ನಿರಂತರವಾಗಿ ಆವಿಷ್ಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಹೊಂದುತ್ತಿರುವ ಉದ್ಯಮದ ಅಗತ್ಯಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತೇವೆ. ಶ್ರೇಷ್ಠತೆಗೆ ನಮ್ಮ ಬದ್ಧತೆಯ ಮೂಲಕ, ನಾವು ಅರ್ಥಪೂರ್ಣ ಮೌಲ್ಯವನ್ನು ಸೃಷ್ಟಿಸಲು ಮತ್ತು ವ್ಯವಹಾರಗಳು ಚುರುಕಾಗಿ, ವೇಗವಾಗಿ ಮತ್ತು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡಲು ಶ್ರಮಿಸುತ್ತೇವೆ.",
        explore_vision_title: "ನಮ್ಮ ದೃಷ್ಟಿಕೋನ",
        explore_vision_p1: "ನಮ್ಮ ದೃಷ್ಟಿಕೋನವು ಡಿಜಿಟಲ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಷನ್‌ನಲ್ಲಿ ಜಾಗತಿಕ ನಾಯಕರಾಗುವುದು, ಸಂಕೀರ್ಣ ಸವಾಲುಗಳನ್ನು ಸರಳ, ಪರಿಣಾಮಕಾರಿ ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳಾಗಿ ಪರಿವರ್ತಿಸುವ ನಮ್ಮ ಸಾಮರ್ಥ್ಯಕ್ಕಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ. ಪ್ರತಿಯೊಂದು ವ್ಯವಹಾರವು, ಗಾತ್ರವನ್ನು ಲೆಕ್ಕಿಸದೆ, ಡಿಜಿಟಲ್-ಮೊದಲ ಆರ್ಥಿಕತೆಯಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಹೊಂದಲು ಅಗತ್ಯವಿರುವ ಸಾಧನಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಹೊಂದಿರುವ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಲು ನಾವು ಬಯಸುತ್ತೇವೆ. ಸೃಜನಶೀಲತೆ, ಸಮಗ್ರತೆ ಮತ್ತು ಸಹಯೋಗದ ಸಂಸ್ಕೃತಿಯನ್ನು ಬೆಳೆಸುವ ಮೂಲಕ, ಐಟಿ ಉದ್ಯಮದಲ್ಲಿ ಹೊಸ ಮಾನದಂಡಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ನಾವು ಗುರಿ ಹೊಂದಿದ್ದೇವೆ. ನಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಮಾತ್ರವಲ್ಲದೆ ಹೆಚ್ಚು ಸಂಪರ್ಕಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಜಗತ್ತಿಗೆ ಕೊಡುಗೆ ನೀಡುವ ಪ್ರಗತಿ ಮತ್ತು ಆವಿಷ್ಕಾರವನ್ನು ನಡೆಸುವ ಬದಲಾವಣೆಯ ವೇಗವರ್ಧಕಗಳಾಗಿ ನಾವು ನಮ್ಮನ್ನು ನೋಡುತ್ತೇವೆ.",
        explore_values_title: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
        explore_what_we_do_p1: "ಆಧುನಿಕ ಉದ್ಯಮಗಳ ವೈವಿಧ್ಯಮಯ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಐಟಿ ಸೇವೆಗಳಲ್ಲಿ ನಾವು ಪರಿಣತಿ ಹೊಂದಿದ್ದೇವೆ. ಕಸ್ಟಮ್ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ರಚನೆಯಿಂದ ಕ್ಲೌಡ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಮತ್ತು ಡೇಟಾ ಅನಾಲಿಟಿಕ್ಸ್ ವರೆಗೆ, ಫಲಿತಾಂಶಗಳನ್ನು ನೀಡುವ ಎಂಡ್-ಟು-ಎಂಡ್ ಪರಿಹಾರಗಳನ್ನು ನಾವು ನೀಡುತ್ತೇವೆ. ನಮ್ಮ ತಜ್ಞರ ತಂಡವು ಗ್ರಾಹಕರೊಂದಿಗೆ ನಿಕಟವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಅವರ ಅನನ್ಯ ಸವಾಲುಗಳು ಮತ್ತು ಗುರಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತದೆ, ROI ಅನ್ನು ಗರಿಷ್ಠಗೊಳಿಸುವ ಅನುಗುಣವಾದ ತಂತ್ರಗಳನ್ನು ನೀಡುತ್ತದೆ. ನೀವು ಹಳೆಯ ಸಿಸ್ಟಮ್‌ಗಳನ್ನು ಆಧುನೀಕರಿಸಬೇಕೇ, ಮೊದಲಿನಿಂದ ಹೊಸ ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನವನ್ನು ನಿರ್ಮಿಸಬೇಕೇ ಅಥವಾ ನಿಮ್ಮ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಮೂಲಸೌಕರ್ಯವನ್ನು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಬೇಕೇ, ನಿಮಗೆ ಯಶಸ್ವಿಯಾಗಲು ಸಹಾಯ ಮಾಡುವ ಪರಿಣತಿ ಮತ್ತು ಅನುಭವವನ್ನು ನಾವು ಹೊಂದಿದ್ದೇವೆ.",
        explore_trust_title: "ವ್ಯವಹಾರಗಳು ನಮ್ಮನ್ನು ಏಕೆ ನಂಬುತ್ತವೆ",
        explore_trust_1_title: "1. ನವೀನ-ಚಾಲಿತ ವಿಧಾನ",
        explore_trust_1_desc: "ಭವಿಷ್ಯದ-ಸಿದ್ಧ ಪರಿಹಾರಗಳನ್ನು ನೀಡಲು ನಾವು ಆಧುನಿಕ ಉಪಕರಣಗಳು ಮತ್ತು ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳನ್ನು ಬಳಸುತ್ತೇವೆ.",
        explore_trust_2_title: "2. ಗ್ರಾಹಕ-ಕೇಂದ್ರಿತ ಮರಣದಂಡನೆ",
        explore_trust_2_desc: "ಪ್ರತಿಯೊಂದು ಯೋಜನೆಯು ನಿಮ್ಮ ವ್ಯಾಪಾರ ಗುರಿಗಳು ಮತ್ತು ಕೆಲಸದ ಹರಿವುಗಳಿಗೆ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ.",
        explore_trust_3_title: "3. ಪರಿಣತ ವೃತ್ತಿಪರರು",
        explore_trust_3_desc: "ಸೃಜನಶೀಲತೆ, ಪರಿಣತಿ ಮತ್ತು ಉದ್ಯಮದ ಜ್ಞಾನವನ್ನು ಸಂಯೋಜಿಸುವ ತಂಡ.",
        explore_trust_4_title: "4. ಗುಣಮಟ್ಟ ಮತ್ತು ಪಾರದರ್ಶಕತೆ",
        explore_trust_4_desc: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಸ್ಪಷ್ಟ ಸಂವಹನ, ವಿಶ್ವಾಸಾರ್ಹ ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಸಕಾಲಿಕ ವಿತರಣೆ.",
    }
};

// Language codes mapping
const langCodes = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    de: 'DE',
    it: 'IT',
    pt: 'PT',
    ar: 'AR',
    kn: 'KN'
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Navabharath Technologies website loaded');

    // Language Dropdown Functionality
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.getElementById('currentLang');

    // Accessibility attributes for language dropdown
    if (langBtn) {
        langBtn.setAttribute('aria-haspopup', 'true');
        langBtn.setAttribute('aria-expanded', 'false');
    }
    if (langDropdown) {
        langDropdown.setAttribute('role', 'menu');
    }

    // Load saved language or default to English
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(currentLang);

    // Toggle dropdown (with ARIA)
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle('active');
        langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            updateLanguage(selectedLang);
            localStorage.setItem('selectedLanguage', selectedLang);
            langDropdown.classList.remove('active');
        });
    });

    // Update language function
    function updateLanguage(lang) {
        currentLang = lang;
        currentLangSpan.textContent = langCodes[lang];

        // Update active state in dropdown
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Translate all elements with data-translate attribute
        // Translate all elements with data-translate attribute
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
    }

    // Custom Notification Function
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('customNotification');
        notification.textContent = message;
        notification.className = `custom-notification ${type} show`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }

    // Form submission handler
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = form.querySelector('button[type="submit"]');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Basic Validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            // Email Validation Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Disable button and show loading state
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                console.log('Sending email...');

                const response = await fetch('https://company-website-backend-91ia.onrender.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });

                console.log('Response received:', response.status, response.ok);

                let data;
                try {
                    data = await response.json();
                    console.log('Response data:', data);
                } catch (jsonError) {
                    console.error('JSON parse error:', jsonError);
                    throw new Error('Invalid server response');
                }

                if (response.ok) {
                    // Success!
                    console.log('Email sent successfully!');
                    showNotification(' Your message has been sent successfully. We will be in touch soon!', 'success');
                    form.reset();
                } else {
                    // Server returned an error
                    console.error('Server error:', data);
                    throw new Error(data.message || 'Server error occurred');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                showNotification(' Message failed to send. Please try again later or contact us directly.', 'error');
            } finally {
                // Always restore button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                console.log('Form submission complete');
            }
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn');

    // Search function with page navigation
    function performSearch(query) {
        const searchTerm = query.toLowerCase().trim();

        // Always keep all service cards visible
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.display = 'block';
        });

        // If no search term, do nothing
        if (!searchTerm) {
            return;
        }

        // Define known pages and their corresponding section IDs
        const pageMapping = {
            'home': '#home',
            'about': '#about',
            'about us': '#about',
            'services': '#services',
            'service': '#services',
            'contact': '#contact',
            'contact us': '#contact'
        };

        // Check if search term matches any known page
        let matchFound = false;
        for (const [pageName, sectionId] of Object.entries(pageMapping)) {
            if (searchTerm === pageName || searchTerm.includes(pageName)) {
                // Navigate to the matching page section
                const targetSection = document.querySelector(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    matchFound = true;

                    // Update URL hash without triggering page reload
                    if (window.history.pushState) {
                        window.history.pushState(null, null, sectionId);
                    } else {
                        window.location.hash = sectionId;
                    }
                    break;
                }
            }
        }

        // If no match found, show message
        if (!matchFound) {
            alert('No matching page found. Please try searching for: Home, About, Services, or Contact.');
        }

        // Clear search input after search
        if (searchInput) {
            searchInput.value = '';
        }
    }

    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
    }

    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }

    // Voice Search Functionality
    if (voiceSearchBtn) {
        // Check if browser supports speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = currentLang === 'en' ? 'en-US' :
                currentLang === 'es' ? 'es-ES' :
                    currentLang === 'fr' ? 'fr-FR' :
                        currentLang === 'de' ? 'de-DE' :
                            currentLang === 'it' ? 'it-IT' :
                                currentLang === 'pt' ? 'pt-PT' :
                                    currentLang === 'ar' ? 'ar-SA' : 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            voiceSearchBtn.addEventListener('click', () => {
                voiceSearchBtn.classList.add('listening');
                recognition.start();
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;
                performSearch(transcript);
                voiceSearchBtn.classList.remove('listening');
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                voiceSearchBtn.classList.remove('listening');
                if (event.error === 'no-speech') {
                    alert('No speech detected. Please try again.');
                } else if (event.error === 'not-allowed') {
                    alert('Microphone access denied. Please enable microphone permissions.');
                }
            };

            recognition.onend = () => {
                voiceSearchBtn.classList.remove('listening');
            };
        } else {
            // Hide voice search button if not supported
            voiceSearchBtn.style.display = 'none';
            console.warn('Speech recognition not supported in this browser');
        }
    }


    // Hero Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    if (carouselSlides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000; // 4 seconds

        function nextSlide() {
            carouselSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % carouselSlides.length;
            carouselSlides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu nav a');

    if (hamburger && navMenu) {
        // Accessibility attributes for mobile menu
        hamburger.setAttribute('aria-controls', 'navMenu');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle icon between bars and times (close)
            const icon = hamburger.querySelector('i');
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburger.setAttribute('aria-expanded', 'true');
                navMenu.setAttribute('aria-hidden', 'false');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Keyboard: close menus on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // close nav menu
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    hamburger.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                }

                // close language dropdown
                if (langDropdown.classList.contains('active')) {
                    langDropdown.classList.remove('active');
                    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
                }
            }

            // Pointer / Focus zoom for hero images with class `movable-image`.
            // - pointerenter / pointerleave for mouse & stylus
            // - pointerdown / pointerup for touch interactions
            // - focus / blur for keyboard accessibility
            const movableImages = document.querySelectorAll('.movable-image');
            function addZoomHandlers(img) {
                if (!img) return;

                // Make focusable for keyboard users if not already
                if (!img.hasAttribute('tabindex')) {
                    img.setAttribute('tabindex', '0');
                }

                const zoomIn = () => img.classList.add('is-zoomed');
                const zoomOut = () => img.classList.remove('is-zoomed');

                img.addEventListener('pointerenter', zoomIn);
                img.addEventListener('pointerleave', zoomOut);
                img.addEventListener('pointerdown', zoomIn);
                img.addEventListener('pointerup', zoomOut);
                img.addEventListener('pointercancel', zoomOut);

                img.addEventListener('focus', zoomIn);
                img.addEventListener('blur', zoomOut);
            }

            movableImages.forEach(addZoomHandlers);
        });

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedHeaders = document.querySelectorAll('.about-content h2, .section-header h2, .contact-info h2');
        animatedHeaders.forEach(header => {
            observer.observe(header);
        });
    }





    // 3D Service Carousel Logic (Linear Infinite Scroll)
    const carouselScene = document.querySelector('.services-scene');
    const carousel = document.getElementById('servicesCarousel');

    if (carouselScene && carousel) {
        const cells = carousel.querySelectorAll('.service-card');
        const cellCount = cells.length;
        const cellWidth = 340; // Card width (280) + gap (60)
        const totalWidth = cellCount * cellWidth;

        let currentScroll = 0;
        let scrollSpeed = 1.5; // Decreased speed (half of previous 3, closer to original)
        let animationId;
        let isPaused = false;

        // Hover State
        // Hover State
        let hoveredCell = null;
        cells.forEach(cell => {
            // Initialize tilt properties
            cell.tiltX = 0;
            cell.tiltY = 0;

            cell.addEventListener('mouseenter', () => hoveredCell = cell);
            cell.addEventListener('mouseleave', () => {
                hoveredCell = null;
                // Reset tilt on leave
                cell.tiltX = 0;
                cell.tiltY = 0;
            });
            cell.addEventListener('mousemove', (e) => {
                const rect = cell.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Tilt calculation (Max 15 degrees)
                cell.tiltX = ((y - centerY) / centerY) * -15;
                cell.tiltY = ((x - centerX) / centerX) * 15;
            });
        });

        function animateCarousel() {
            if (!isPaused) {
                currentScroll -= scrollSpeed;
            }

            // Normalize scroll
            if (Math.abs(currentScroll) >= totalWidth) {
                currentScroll %= totalWidth;
            }

            cells.forEach((cell, i) => {
                const initialPos = i * cellWidth;
                let pos = (initialPos + currentScroll) % totalWidth;

                // Wrap logic to keep items in [-totalWidth/2, totalWidth/2]
                if (pos < -totalWidth / 2) pos += totalWidth;
                if (pos > totalWidth / 2) pos -= totalWidth;
                // Extra check for edge cases
                if (pos < -totalWidth / 2) pos += totalWidth;

                const dist = pos;
                const absDist = Math.abs(dist);

                const isHovered = (cell === hoveredCell);

                let scale = 1;
                let translateX = dist;
                let translateZ = 0;
                let opacity = 1;
                let blur = 0;
                let zIndex = 1;

                if (isHovered) {
                    scale = 1.05; // Reverted to previous state
                    translateX = dist;
                    translateZ = 120;
                    opacity = 1;
                    blur = 0;
                    zIndex = 1000;
                    cell.style.cursor = 'pointer';
                } else {
                    if (absDist < cellWidth / 2) {
                        // Center
                        scale = 1.0;
                        translateX = dist;
                        translateZ = 0;
                        opacity = 1;
                        blur = 0;
                        zIndex = 100;
                    } else {
                        // Sides
                        const dir = dist > 0 ? 1 : -1;
                        // Adjusted offset for wider cards
                        const offset = (cellWidth * 0.55) + ((absDist - cellWidth / 2) * 0.45);

                        translateX = dir * offset;
                        translateZ = -absDist * 0.6;

                        const distRatio = absDist / cellWidth;

                        // Fading
                        opacity = 1 - Math.max(0, (distRatio - 1.2) * 0.5);
                        if (opacity < 0) opacity = 0;

                        // Reduced Blur: Removed completely as requested
                        blur = 0;
                        zIndex = 100 - Math.floor(absDist);
                        // Reverted side scaling
                        scale = 0.85 - (Math.min(1, distRatio) * 0.15);
                    }
                }

                // Ensure integer pixels for sharper rendering
                const tx = Math.round(translateX);
                const tz = Math.round(translateZ);

                // Get tilt values if hovered, else 0
                const rx = isHovered ? (cell.tiltX || 0) : 0;
                const ry = isHovered ? (cell.tiltY || 0) : 0;

                cell.style.filter = `blur(${blur}px)`;
                cell.style.opacity = opacity;
                cell.style.zIndex = zIndex;
                cell.style.transform = `translateX(${tx}px) translateZ(${tz}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg)`;

                if (blur === 0 && !isHovered) {
                    cell.classList.add('active-card');
                    cell.classList.remove('blur-card');
                } else if (isHovered) {
                    cell.classList.add('active-card');
                    cell.classList.remove('blur-card');
                } else {
                    cell.classList.remove('active-card');
                    cell.classList.add('blur-card');
                }
            });

            animationId = requestAnimationFrame(animateCarousel);
        }

        animateCarousel();

        // Pause interactions
        // Mouse Wheel Scroll
        carouselScene.addEventListener('wheel', (e) => {
            e.preventDefault();
            // Scroll faster with wheel: e.deltaY * 2.5
            currentScroll -= e.deltaY * 2.5;
        }, { passive: false });

        carouselScene.addEventListener('mouseenter', () => isPaused = true);
        carouselScene.addEventListener('mouseleave', () => isPaused = false);
        carouselScene.addEventListener('touchstart', () => isPaused = true, { passive: true });
        carouselScene.addEventListener('touchend', () => isPaused = false);
    }

    // 3D Tilt Animation for Resource Cards
    const cards = document.querySelectorAll('.resource-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});

// Unique 3D Holographic Card Animation for Blog Page
const blogCards = document.querySelectorAll('.blog-card');

// Add glare element to each card
blogCards.forEach(card => {
    const glare = document.createElement('div');
    glare.classList.add('card-glare');
    card.appendChild(glare);

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor position
        // Max rotation 10deg
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Apply transform to card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;

        // Dynamic Glare Effect
        // Calculate angle for gradient based on mouse position
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
        const glareEl = card.querySelector('.card-glare');
        if (glareEl) {
            // Move opacity center with mouse
            glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`;
            glareEl.style.opacity = '0.6';
            // Also can translate it slightly
        }
    });

    // Reset on leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        const glareEl = card.querySelector('.card-glare');
        if (glareEl) {
            glareEl.style.opacity = '0';
        }
    });
});

