export type Language = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      cta: "Get Started"
    },
    hero: {
      tag: "Growth Engine // Ver 2.4",
      title: "We build websites that bring clients to your business",
      subtitle: "High-conversion digital systems for local specialists. We handle the technology, you handle the growth.",
      ctaPrimary: "Get your website",
      ctaSecondary: "Presentation"
    },
    graphic: {
      tracker: "Performance Tracker",
      status: "Active Lead Gen",
      conversion: "Conversion",
      speed: "Load Speed",
      seo: "SEO Score",
      goal: "Monthly Lead Goal",
      calibrated: "System_Calibrated_Success"
    },
    problem: {
      tag: "The Bottleneck",
      title: "Word of mouth isn't enough anymore.",
      desc: "Most local businesses suffer from \"invisible\" online presence. Outdated sites and silent social feeds are costing you high-value clients every single day.",
      solution1Tag: "Solution / 01",
      solution1Desc: "Automated lead generation through precision-engineered landing pages.",
      solution2Tag: "Solution / 02",
      solution2Desc: "Conversion-focused Google Ads that target ready-to-buy customers."
    },
    logic: {
      tag: "The Problem",
      title: "Traffic without conversion is",
      titleSpan: "wasted money",
      weakDest: "Weak Destination",
      weakDesc: "Confusing site, slow loading, no clear offer.",
      lostOpp: "Lost Opportunity",
      lostConv: "0% Conversion"
    },
    services: {
      tag: "Core Capabilities",
      items: [
        { title: 'Web Systems', desc: 'Custom-built responsive environments optimized for local SEO and lead capture.' },
        { title: 'Social Flow', desc: 'Premium Instagram and Facebook presence that mirrors your brand\'s quality.' },
        { title: 'Search Ads', desc: 'Google Ads campaigns precisely targeted to your geographic area.' },
        { title: 'Full Support', desc: '24/7 monitoring, security updates, and monthly performance reporting.' }
      ],
      hero: {
        label: "Services",
        title: "All services built for one goal — getting you clients.",
        subtitle: "Start with a complete system or choose individual services to seamlessly upgrade your setup."
      },
      packages: {
        tier1: {
          label: "STARTER",
          title: "Starter",
          desc: "A clean landing page for a fast and simple launch.",
          features: ["Custom Landing Page", "Mobile-First Design", "Basic SEO Structure", "1 Round of Revisions"],
          cta: "Select Starter"
        },
        tier2: {
          label: "CLIENT SYSTEM",
          badge: "Recommended",
          title: "Client System",
          desc: "A conversion-focused system to turn visitors into clients.",
          features: ["Premium Website Build", "WhatsApp / Contact Flow Setup", "Automated Lead Funnel", "2 Rounds of Revisions"],
          cta: "Book Consultation"
        },
        tier3: {
          label: "GROWTH",
          title: "Growth System",
          desc: "An advanced setup to scale and streamline acquisition.",
          features: ["Multi-page Authority Site", "Omni-channel Campaign Structure", "Custom CRM Integration", "Priority Support"],
          cta: "Apply Now"
        },
        scope: "Additional revisions or requests outside the agreed scope are billed separately."
      },
      additional: {
        label: "Other Services",
        title: "Add extra capabilities to your setup",
        subtitle: "Specialized services to enhance your system and support your growth.",
        link: "Ask about this →",
        waMessage: "Hi, I’m interested in your {service} service. I’d like to get more details.",
        items: {
          image: { title: "Image Creation", desc: "AI-generated visuals tailored to your brand identity and campaigns." },
          social: { title: "Social Media Visual Content", desc: "High-quality visuals for consistent and engaging social media presence." },
          marketing: { title: "Marketing Images", desc: "Product and campaign visuals designed for ads, websites, and promotions." },
          brand: { title: "AI Brand Identity Visuals", desc: "A cohesive visual style system built using AI tools and brand direction." },
          security: { title: "Website Security Check", desc: "Basic audit to ensure your site and customer data are protected." }
        }
      },
      cta: {
        label: "Expert Advice",
        title: "Not sure what you need?",
        subtitle: "We'll analyze your current setup and recommend the best system to reach your growth targets.",
        primary: "Free consultation",
        secondary: "WhatsApp"
      }
    },
    contact: {
        hero: {
          title: "Contact",
          subtitle: "Start a conversation",
          description: "We usually respond within 2 hours. Choose the fastest way to get in touch below."
        },
        actions: {
          whatsapp: "Chat on WhatsApp",
          email: "Email Us",
          fastest: "Fastest response: WhatsApp (usually under 30 min)"
        },
        cards: {
          messaging: { label: "Priority", title: "Instant messaging", button: "Open WhatsApp" },
          email: { label: "Direct", title: "Detailed inquiries", button: "Send email" },
          work: { label: "Social", title: "See our work", button: "View profile" },
          location: { label: "HQ", title: "Berlin Office", button: "Get directions" }
        },
        nextSteps: {
          tag: "Next Steps",
          title: "Ready to grow your business?",
          subtitle: "Get your high-performance business system live in just 7 days.",
          primary: "Start on WhatsApp",
          secondary: "Book Free Call"
        }
      },
    growthSystem: {
      tag: "GROWTH SYSTEM",
      title: "We don’t just build websites — we bring clients to them.",
      subtitle: "High-conversion websites combined with targeted traffic systems designed to generate real leads — not just views.",
      items: [
        { title: 'Short-form Traffic', desc: 'Capture hyper-local attention on TikTok & Reels, instantly transforming viral views into predictable inbound inquiries.' },
        { title: 'Paid Acquisition', desc: 'Stop paying for empty clicks. We deploy precision ads that put your offer directly in front of customers ready to buy today.' },
        { title: 'Conversion Flow', desc: 'We engineer a frictionless path from first click to WhatsApp message, ensuring every visitor becomes a tangible lead.' }
      ]
    },
    process: {
      tag: "The Protocol",
      title: "How we deliver.",
      steps: [
        { step: '01', title: 'Consultation', desc: 'We audit your current presence and identify the fastest path to new clients.' },
        { step: '02', title: 'Strategic Build', desc: 'Our team deploys your site and ad campaigns within a 7-day sprint window.' },
        { step: '03', title: 'Launch & Scale', desc: 'Real-time tracking of leads and continuous optimization for maximum ROI.' }
      ],
      chartLabel: "Lead Velocity Chart",
      growthLabel: "Avg. Client Growth"
    },
    whatYouGet: {
      title: "What you get.",
      subtitle: "A complete toolkit for digital growth, packaged into a single seamless experience.",
      items: [
        { title: 'Modern Landing Page', desc: 'Lightning fast, secure, single-page architecture.' },
        { title: 'WhatsApp Integration', desc: 'Direct chat initiation with pre-filled message templates.' },
        { title: 'Premium Design', desc: 'High-end aesthetics that communicate instant luxury and trust.' },
        { title: 'Clear Contact Structure', desc: 'Strategic placement of \'Call to Actions\' throughout.' },
        { title: 'Mobile-First Layout', desc: 'Flawless experience on phones where 80% of traffic originates.' },
        { title: 'Optional Ads Support', desc: 'Meta/Google campaigns to drive targeted traffic.' }
      ]
    },
    cases: {
      title: "Selected Cases",
      tag: "Viewing: 03 Projects",
      projects: [
        { title: 'RentCarBerlin', stats: '+24 leads/month', img: '/cases/rentcarberlin.jpg', link: 'https://www.rentcar-berlin.de/' },
        { title: 'GEKO BOAT SPA', stats: '+32 leads/month', img: '/cases/geko-boat-spa.jpg', link: 'https://www.gekomiami.com/' },
      ]
    },
    pricing: {
      title: "Simple service packages.",
      packages: [
        {
          tag: "Essential",
          title: "Landing Page",
          price: "500 €",
          period: "one-time",
          features: ['Custom Landing Page', 'Copywriting included', 'Mobile responsive', 'Basic SEO'],
          cta: "Get Started"
        },
        {
          tag: "Strategic",
          title: "Growth Pro",
          price: "800 €",
          period: "one-time",
          features: ['Everything in Essential', 'WhatsApp CRM Integration', 'Automated Lead Flow', '30 Days Post-Launch Support'],
          cta: "Select Pro",
          popular: "Most Popular"
        },
        {
          tag: "Full Management",
          title: "Market Elite",
          price: "1.200 €",
          period: "+ ad spend",
          features: ['Everything in Pro', 'Ad Campaign Setup', '2 Social Platforms', 'Bi-weekly Reports'],
          cta: "Choose Elite"
        }
      ]
    },
    cta: {
      tag: "Ready for takeoff",
      title: "Get your website in 7 days.",
      subtitle: "Limited capacity available for Q4. Book your diagnostic call now.",
      primary: "Start Calibration",
      secondary: "WhatsApp"
    },
    footer: {
      desc: "High-performance digital engines for local business growth.",
      nav: "Navigation",
      social: "Social",
      contact: "Contact",
      rights: "© 2024 STRUKTUR DESIGN AG. ALL RIGHTS RESERVED.",
      status: "System Status: Optimal"
    },
    presentation: {
      notes: "Speaker Notes",
      slide: "Slide",
      slides: {
        s1: {
          title: "We build websites that bring clients",
          subtitle: "Premium landing pages and simple digital systems for local businesses.",
          notes: "Welcome everyone. Thanks for taking the time. Today, I want to keep things very simple. We are here to talk about one thing: getting your local business more clients online, without the technical headaches. Let's look at how we build premium digital systems that actually work."
        },
        s2: {
          title: "Most local businesses are invisible online",
          subtitle: "The reality of relying purely on outdated methods.",
          items: [
            { title: "No modern landing page", desc: "Websites built 5 years ago that don't load well on mobile and confuse visitors." },
            { title: "No clear digital presence", desc: "Hard to find on Google, disjointed social media, no cohesive brand image." },
            { title: "No direct conversion flow", desc: "Making it difficult for a prospect to actually book a service or contact you." },
            { title: "Losing potential clients daily", desc: "Every confused visitor is a client going to your competitor." }
          ],
          notes: "You might have social media or rely on word of mouth, but when someone searches for exactly what you do right now, do they find a clear, trustworthy page that makes them want to click 'contact'? For most local businesses, the answer is no. You're losing potential clients daily because your online presence doesn't match the quality of your actual service."
        },
        s3: {
          title: "Traffic without conversion is wasted money",
          subtitle: "Sending attention to a broken system yields zero results.",
          items: ["Instagram Profile", "Paid Ads", "Referrals"],
          dest: "Confusing Website or Linktree",
          destDesc: "Friction, distraction, loss of trust.",
          result: "0 Leads",
          resultDesc: "Wasted effort",
          notes: "A lot of people spend money on ads or hours on Instagram. But if you send that attention to a confusing website—or worse, just a Linktree—you lose them. It's like inviting people to your store but locking the front door. Traffic without a clear conversion flow is just wasted money."
        },
        s4: {
          title: "We build simple client acquisition systems",
          subtitle: "A streamlined path from stranger to paying client.",
          steps: [
            { title: "Landing Page", desc: "A highly focused, beautifully designed single page that clearly explains your value and builds immediate trust with visitors." },
            { title: "WhatsApp Path", desc: "A frictionless conversion mechanism. Prospects click one button and are instantly chatting with you on WhatsApp, ready to book." },
            { title: "Ads Support", desc: "Targeted local advertising campaigns designed specifically to drive high-intent traffic directly into your new conversion system.", optional: "(Optional)" }
          ],
          notes: "We don't build complicated 50-page websites that no one reads. We build streamlined client acquisition systems. It's a three-part structure: A focused landing page that acts as your premium digital storefront, a direct path to your WhatsApp to close the deal fast, and if you need it, the ads to drive targeted local people there."
        },
        s5: {
          title: "Not just a website",
          subtitle: "We sell clarity, trust, and a simple path for new clients to contact your business.",
          items: [
            { title: "Professional Online Presence", desc: "Look as expensive and reliable online as the service you provide in person." },
            { title: "Clear Offer Presentation", desc: "Instantly communicate what you do, who it's for, and why they should choose you." },
            { title: "Fast Contact Through WhatsApp", desc: "Remove contact forms. Get leads directly to your pocket, where you close deals fastest." },
            { title: "Better Conversion from Traffic", desc: "Make the money you spend on marketing actually turn into measurable inquiries." }
          ],
          notes: "Anyone can build a cheap website. What we actually provide is a professional image that builds instant trust. We create a clear presentation of your offer, and a frictionless way for a new client to reach you. Ultimately, we are selling you a higher conversion rate for your business."
        },
        s6: {
          title: "Fast, simple, structured",
          subtitle: "A process designed to respect your time.",
          steps: [
            { title: "We learn", desc: "A quick deep dive into your offer and audience." },
            { title: "We build", desc: "We handle all design, copy, and technical setup." },
            { title: "You receive leads", desc: "System goes live, leads hit your WhatsApp." },
            { title: "We optimize", desc: "Optional ongoing ads and performance tuning." }
          ],
          notes: "We know you're busy running your business. Our process respects that. We do a quick deep dive into your business, we take over and build the page, and you start getting messages. No endless revisions, no technical jargon. Fast, simple, and structured."
        },
        s7: {
          title: "What the client gets",
          subtitle: "Everything you need, nothing you don't.",
          items: [
            { title: "Modern Landing Page", desc: "High-speed, single-page architecture." },
            { title: "Premium Design", desc: "Luxury aesthetic to build immediate trust." },
            { title: "Mobile-Friendly Layout", desc: "Optimized for where 80% of traffic is." },
            { title: "WhatsApp Integration", desc: "Seamless click-to-chat setup." },
            { title: "Contact Structure", desc: "Clear pathways for the user to reach out." },
            { title: "Clear Call-to-Action", desc: "Strategic button placement for high conversion." }
          ],
          footer: "+ Optional Instagram & Ads Support Packages",
          notes: "When you work with us, everything is handled. You get a premium, mobile-first design, seamless WhatsApp integration so leads go straight to your phone, clear calls to action, and optional ad setup. It's a complete, done-for-you package designed to look expensive and convert highly."
        },
        s8: {
          title: "Clear pages convert better",
          subtitle: "Why we don't build traditional 10-page websites.",
          trad: "Traditional Website",
          tradNav: ["Home", "About", "Services", "Blog", "Contact"],
          tradDesc: "Too many options. User gets distracted and leaves.",
          our: "Our Landing Page",
          ourTitle: "One Clear Offer",
          ourDesc: "Faster understanding. Less distraction. Direct path to value.",
          ourCTA: "Contact via WhatsApp",
          ourFeatures: ["Single focus", "Fast action"],
          notes: "Why a landing page and not a traditional website? Focus. A standard website has 'About Us', 'Blog', 'History'—people get lost. A landing page has one goal: convince them you are the right choice and get them to contact you immediately. Clear pages convert better. It's that simple."
        },
        s9: {
          title: "Built for local businesses",
          subtitle: "Perfect for services that rely on trust, booking, and local presence.",
          items: ["Clinics & Medical", "Beauty Specialists", "Service Providers", "Consultants", "Local Shops", "Small Brands"],
          notes: "This system is specifically designed for businesses where trust and local presence matter. Whether you run a dental clinic, a high-end beauty salon, or a consulting firm, if you need leads to contact you directly to book a service, this architecture is built exactly for you."
        },
        s10: {
          title: "Why us",
          subtitle: "We operate like growth partners, not order-takers.",
          items: [
            { title: "Fast execution.", desc: "No months of waiting. We build quickly and launch systems that start generating momentum immediately." },
            { title: "Clear systems.", desc: "We keep things simple for you and frictionless for your customers." },
            { title: "Premium feel.", desc: "Your brand is evaluated in milliseconds. We ensure your presentation instantly communicates luxury and high trust." }
          ],
          notes: "Why choose our agency? Because we don't act like typical web developers who take months and disappear. We act like growth partners. We build fast, we design for luxury and trust, and we obsess over how many leads you actually get. We keep things simple for you."
        },
        s11: {
          title: "Simple service packages",
          subtitle: "Transparent options designed for your stage of growth.",
          packages: [
            { title: "Foundation", desc: "Essential presence for established businesses.", main: "Landing Page", features: ["Premium Design", "Mobile Optimization", "Basic Contact Setup"] },
            { title: "Conversion", desc: "The complete client acquisition funnel.", main: "Page + WhatsApp", features: ["Everything in Foundation", "Direct WhatsApp Flow", "Conversion Copywriting", "Analytics Setup"], badge: "RECOMMENDED" },
            { title: "Scale", desc: "For businesses ready to buy market share.", main: "Premium + Ads", features: ["Everything in Conversion", "Meta Ads Setup", "Campaign Management", "Monthly Optimization"] }
          ],
          notes: "We keep our pricing as simple as our websites. We have transparent packages depending on where you are at. Just need the foundation? We have that. Need the whole conversion system built? That's our core offer. Ready to scale with ads? We handle that too."
        },
        s12: {
          title: "Ready to bring your business online properly?",
          subtitle: "Get a premium landing page built to convert.",
          ctas: ["WhatsApp Us", "Email Us", "Instagram"],
          notes: "That's the overview. The next step is simple. Let's have a brief chat about your specific business and see which approach makes sense. You can reach us right now on WhatsApp to get started."
        }
      },
    }
  },
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      contact: "Kontakt",
      cta: "Jetzt anfragen"
    },
    hero: {
      tag: "Wachstums-System // Ver 2.4",
      title: "Wir bauen Webseiten, die neue Kunden für Sie gewinnen",
      subtitle: "Hochkonvertierende digitale Systeme für lokale Experten. Wir übernehmen die Technik, Sie das Wachstum.",
      ctaPrimary: "Webseite anfragen",
      ctaSecondary: "Präsentation"
    },
    graphic: {
      tracker: "Performance Tracker",
      status: "Aktive Lead-Gen",
      conversion: "Konversion",
      speed: "Ladezeit",
      seo: "SEO Score",
      goal: "Lead-Ziel / Monat",
      calibrated: "System_Erfolgreich_Kalibriert"
    },
    problem: {
      tag: "Der Engpass",
      title: "Mundpropaganda allein reicht nicht mehr.",
      desc: "Die meisten lokalen Unternehmen leiden unter einer unsichtbaren Online-Präsenz. Veraltete Seiten und inaktive Kanäle kosten Sie täglich wertvolle Kunden.",
      solution1Tag: "Lösung / 01",
      solution1Desc: "Automatisierte Kundengewinnung durch präzise entwickelte Landingpages.",
      solution2Tag: "Lösung / 02",
      solution2Desc: "Konversionsstarke Google Ads, die kaufbereite Kunden direkt ansprechen."
    },
    logic: {
      tag: "Das Problem",
      title: "Traffic ohne Konversion ist",
      titleSpan: "verschwendetes Geld",
      weakDest: "Schwaches Ziel",
      weakDesc: "Verwirrende Seite, langsame Ladezeit, kein klares Angebot.",
      lostOpp: "Verlorene Chance",
      lostConv: "0% Konversion"
    },
    services: {
      tag: "Kernkompetenzen",
      items: [
        { title: 'Web-Systeme', desc: 'Maßgeschneiderte, responsive Umgebungen, optimiert für lokales SEO und Lead-Erfassung.' },
        { title: 'Social Flow', desc: 'Premium-Präsenz auf Instagram und Facebook, die die Qualität Ihrer Marke widerspiegelt.' },
        { title: 'Suchanzeigen', desc: 'Präzise Google Ads Kampagnen, die exakt auf Ihr regionales Einzugsgebiet zielen.' },
        { title: 'Full Support', desc: '24/7 Monitoring, Sicherheits-Updates und monatliche Performance-Berichte.' }
      ],
      hero: {
        label: "Leistungen",
        title: "Alle Leistungen mit einem Ziel — mehr Kunden für Ihr Business.",
        subtitle: "Starten Sie mit einem kompletten System oder wählen Sie einzelne Leistungen, um Ihr Setup gezielt zu erweitern."
      },
      packages: {
        tier1: {
          label: "STARTER",
          title: "Starter",
          desc: "Eine klare Landingpage für einen schnellen und einfachen Start.",
          features: ["Individuelle Landingpage", "Mobile-First Design", "Grundlegende SEO-Struktur", "1 Korrekturrunde"],
          cta: "Starter wählen"
        },
        tier2: {
          label: "CLIENT SYSTEM",
          badge: "EMPFOHLEN",
          title: "Client System",
          desc: "Ein fokussiertes System, das Besucher in Anfragen verwandelt.",
          features: ["Premium Website", "WhatsApp- / Kontakt-Setup", "Automatisierter Lead-Flow", "2 Korrekturrunden"],
          cta: "Beratung buchen"
        },
        tier3: {
          label: "GROWTH",
          title: "Growth System",
          desc: "Ein erweitertes Setup für Wachstum und strukturierte Kundengewinnung.",
          features: ["Autoritäts-Website mit mehreren Seiten", "Omnichannel-Kampagnenstruktur", "CRM-Integration", "Priorisierter Support"],
          cta: "Jetzt anfragen"
        },
        scope: "Zusätzliche Korrekturen oder Leistungen außerhalb des vereinbarten Umfangs werden separat berechnet."
      },
      additional: {
        label: "Weitere Leistungen",
        title: "Erweitern Sie Ihr Setup mit zusätzlichen Leistungen",
        subtitle: "Spezialisierte Leistungen zur Ergänzung Ihres Systems und zur Unterstützung Ihres Wachstums.",
        link: "Mehr dazu →",
        waMessage: "Hallo, ich interessiere mich für Ihre Leistung {service}. Ich hätte gerne mehr Details.",
        items: {
          image: { title: "Image Creation", desc: "KI-generierte Visuals, abgestimmt auf Ihre Marke und Kampagnen." },
          social: { title: "Social Media Visual Content", desc: "Hochwertige Visuals für einen starken und konsistenten Social-Media-Auftritt." },
          marketing: { title: "Marketing Images", desc: "Produkt- und Kampagnenvisuals für Ads, Websites and Promotions." },
          brand: { title: "AI Brand Identity Visuals", desc: "Ein konsistentes visuelles Markensystem mit Unterstützung durch KI-Tools." },
          security: { title: "Website Security Check", desc: "Basisprüfung zum Schutz Ihrer Website und Kundendaten." }
        }
      },
      cta: {
        label: "EXPERTENBERATUNG",
        title: "Nicht sicher, was Sie brauchen?",
        subtitle: "Wir analysieren Ihr aktuelles Setup und empfehlen das passende System für Ihr Wachstum.",
        primary: "Kostenlose Beratung",
        secondary: "WhatsApp"
      }
    },
    contact: {
        hero: {
          title: "Kontakt",
          subtitle: "Starten Sie ein Gespräch",
          description: "Wir antworten in der Regel innerhalb von 2 Stunden. Wählen Sie unten den schnellsten Weg, um mit uns in Kontakt zu treten."
        },
        actions: {
          whatsapp: "Chat über WhatsApp",
          email: "E-Mail senden",
          fastest: "Schnellste Antwort: WhatsApp (meist unter 30 Minuten)"
        },
        cards: {
          messaging: { label: "Priorität", title: "Schnelle Kontaktaufnahme", button: "WhatsApp öffnen" },
          email: { label: "Direkt", title: "Detaillierte Anfragen", button: "E-Mail senden" },
          work: { label: "Social", title: "Unsere Arbeiten ansehen", button: "Profil ansehen" },
          location: { label: "HQ", title: "Büro Berlin", button: "Route anzeigen" }
        },
        nextSteps: {
          tag: "Nächste Schritte",
          title: "Bereit für Wachstum?",
          subtitle: "Bringen Sie Ihr Business-System in nur 7 Tagen live.",
          primary: "Über WhatsApp starten",
          secondary: "Erstgespräch buchen"
        }
      },
    growthSystem: {
      tag: "GROWTH SYSTEM",
      title: "Wir bauen nicht nur Webseiten — wir bringen Ihnen Kunden.",
      subtitle: "Hochkonvertierende Webseiten kombiniert mit gezielten Traffic-Systemen, entwickelt um echte Leads zu generieren — nicht nur Klicks.",
      items: [
        { title: 'Short-form Traffic', desc: 'Fesseln Sie hyper-lokale Aufmerksamkeit auf TikTok & Reels und verwandeln Sie Views sofort in warme, planbare Anfragen.' },
        { title: 'Paid Acquisition', desc: 'Bezahlen Sie nicht für Klicks. Wir schalten präzise Werbeanzeigen für genau die Kunden, die heute kaufbereit sind.' },
        { title: 'Conversion Flow', desc: 'Wir bauen einen reibungslosen Weg vom ersten Klick bis zur WhatsApp-Nachricht. Damit aus jedem Besucher ein echter Lead wird.' }
      ]
    },
    process: {
      tag: "Das Protokoll",
      title: "Unser Weg zum Erfolg.",
      steps: [
        { step: '01', title: 'Beratung', desc: 'Wir prüfen Ihre aktuelle Präsenz und finden den schnellsten Weg zu neuen Kunden.' },
        { step: '02', title: 'Strategischer Bau', desc: 'Unser Team liefert Ihre Seite und Kampagnen innerhalb eines 7-Tage-Sprints.' },
        { step: '03', title: 'Launch & Skalierung', desc: 'Echtzeit-Tracking der Leads und kontinuierliche Optimierung für maximalen ROI.' }
      ],
      chartLabel: "Lead-Wachstums-Chart",
      growthLabel: "Durchschn. Kundenwachstum"
    },
    whatYouGet: {
      title: "Das Ergebnis.",
      subtitle: "Ein komplettes Toolkit für digitales Wachstum, verpackt in einem nahtlosen Erlebnis.",
      items: [
        { title: 'Moderne Landingpage', desc: 'Blitzschnelle, sichere Single-Page-Architektur.' },
        { title: 'WhatsApp Integration', desc: 'Direkter Chat-Start mit vorgefertigten Nachrichten-Vorlagen.' },
        { title: 'Premium Design', desc: 'High-End Ästhetik, die sofortiges Vertrauen und Exklusivität vermittelt.' },
        { title: 'Klare Kontaktstruktur', desc: 'Strategische Platzierung von Handlungsaufforderungen (CTAs).' },
        { title: 'Mobile-First Layout', desc: 'Perfektes Erlebnis auf dem Smartphone, wo 80% des Traffics entstehen.' },
        { title: 'Optionaler Ads-Support', desc: 'Meta/Google Kampagnen für gezielten, kaufbereiten Traffic.' }
      ]
    },
    cases: {
      title: "Ausgewählte Projekte",
      tag: "Anzeige: 03 Projekte",
      projects: [
        { title: 'RentCarBerlin', stats: '+24 Leads/Monat', img: '/cases/rentcarberlin.jpg', link: 'https://www.rentcar-berlin.de/' },
        { title: 'GEKO BOAT SPA', stats: '+32 Leads/Monat', img: '/cases/geko-boat-spa.jpg', link: 'https://www.gekomiami.com/' },
      ]
    },
    pricing: {
      title: "Einfache Leistungspakete.",
      packages: [
        {
          tag: "Basis",
          title: "Landingpage",
          price: "500 €",
          period: "einmalig",
          features: ['Individuelle Landingpage', 'Inklusive Copywriting', 'Mobile Responsive', 'Basis SEO'],
          cta: "Jetzt starten"
        },
        {
          tag: "Strategisch",
          title: "Growth Pro",
          price: "800 €",
          period: "einmalig",
          features: ['Alles aus Basis', 'WhatsApp CRM Integration', 'Automatisierter Lead-Flow', '30 Tage Support nach Launch'],
          cta: "Pro wählen",
          popular: "Am beliebtesten"
        },
        {
          tag: "Full Management",
          title: "Market Elite",
          price: "1.200 €",
          period: "+ Werbebudget",
          features: ['Alles aus Pro', 'Ad-Kampagnen Setup', '2 Social Plattformen', 'Zweiwöchentliche Berichte'],
          cta: "Elite wählen"
        }
      ]
    },
    cta: {
      tag: "Bereit für den Start",
      title: "Ihre Webseite in 7 Tagen.",
      subtitle: "Begrenzte Kapazitäten für das Q4. Buchen Sie jetzt Ihren Strategie-Call.",
      primary: "Projekt starten",
      secondary: "WhatsApp"
    },
    footer: {
      desc: "Hochleistungs-Systeme für das Wachstum lokaler Unternehmen.",
      nav: "Navigation",
      social: "Social",
      contact: "Kontakt",
      rights: "© 2024 STRUKTUR DESIGN AG. ALLE RECHTE VORBEHALTEN.",
      status: "System-Status: Optimal"
    },
    presentation: {
      notes: "Sprechernotizen",
      slide: "Folie",
      slides: {
        s1: {
          title: "Wir bauen Webseiten, die Kunden gewinnen",
          subtitle: "Premium Landingpages und einfache digitale Systeme für lokale Unternehmen.",
          notes: "Willkommen zusammen. Vielen Dank für Ihre Zeit. Heute möchte ich es sehr einfach halten. Wir sind hier, um über eine Sache zu sprechen: Wie Ihr lokales Unternehmen online mehr Kunden gewinnt, ohne technischen Stress. Schauen wir uns an, wie wir erstklassige digitale Systeme bauen, die wirklich funktionieren."
        },
        s2: {
          title: "Die meisten lokalen Firmen sind online unsichtbar",
          subtitle: "Die Realität, wenn man sich rein auf veraltete Methoden verlässt.",
          items: [
            { title: "Keine moderne Landingpage", desc: "Webseiten von vor 5 Jahren, die mobil schlecht laden und Besucher verwirren." },
            { title: "Keine klare digitale Präsenz", desc: "Schwer auf Google zu finden, unstrukturierte Social Media Kanäle, kein Markenimage." },
            { title: "Kein direkter Konversions-Pfad", desc: "Es ist schwer für Interessenten, Sie zu kontaktieren oder direkt zu buchen." },
            { title: "Täglicher Verlust von Kunden", desc: "Jeder verwirrte Besucher ist ein Kunde, der zur Konkurrenz geht." }
          ],
          notes: "Vielleicht nutzen Sie bereits Social Media oder verlassen sich auf Mundpropaganda. Aber wenn jemand genau jetzt nach Ihrer Dienstleistung sucht, findet er dann eine klare, vertrauenswürdige Seite, die ihn zum Klicken auf 'Kontakt' einlädt? Für die meisten lokalen Unternehmen ist die Antwort: Nein. Sie verlieren täglich potenzielle Kunden, weil Ihr Online-Auftritt nicht der Qualität Ihrer eigentlichen Arbeit entspricht."
        },
        s3: {
          title: "Traffic ohne Konversion ist verschwendetes Geld",
          subtitle: "Besucher auf ein defektes System zu schicken, bringt null Ergebnisse.",
          items: ["Instagram Profil", "Bezahlte Werbung", "Empfehlungen"],
          dest: "Verwirrende Webseite oder Linktree",
          destDesc: "Reibung, Ablenkung, Vertrauensverlust.",
          result: "0 Anfragen",
          resultDesc: "Verlorene Mühe",
          notes: "Viele investieren Geld in Anzeigen oder Stunden in Instagram. Aber wenn Sie diese Aufmerksamkeit auf eine verwirrende Webseite schicken – oder schlimmer noch, nur auf einen Linktree – verlieren Sie sie. Es ist, als würden Sie Leute in Ihr Geschäft einladen, aber die Vordertür abgeschlossen halten. Traffic ohne klaren Konversions-Pfad ist einfach verschwendetes Geld."
        },
        s4: {
          title: "Wir bauen einfache Systeme zur Kundengewinnung",
          subtitle: "Ein direkter Weg vom Unbekannten zum zahlenden Kunden.",
          steps: [
            { title: "Landingpage", desc: "Eine fokussierte, ästhetische Seite, die Ihren Wert klar erklärt und sofort Vertrauen aufbaut." },
            { title: "WhatsApp-Pfad", desc: "Ein reibungsloser Mechanismus. Interessenten klicken einen Button und chatten sofort mit Ihnen." },
            { title: "Ads Support", desc: "Gezielte lokale Werbekampagnen, um kaufbereite Besucher direkt in Ihr System zu leiten.", optional: "(Optional)" }
          ],
          notes: "Wir bauen keine komplizierten 50-seitigen Webseiten, die niemand liest. Wir bauen schlanke Systeme zur Kundengewinnung. Es ist eine dreiteilige Struktur: Eine fokussierte Landingpage als Ihr digitales Aushängeschild, ein direkter Weg zu Ihrem WhatsApp, um Deals schnell abzuschließen, und bei Bedarf die Anzeigen, um gezielt lokale Kunden dorthin zu leiten."
        },
        s5: {
          title: "Nicht nur eine Webseite",
          subtitle: "Wir verkaufen Klarheit, Vertrauen und einen einfachen Kontaktweg für Ihre Kunden.",
          items: [
            { title: "Professionelle Online-Präsenz", desc: "Wirken Sie online so hochwertig und zuverlässig, wie Ihre Dienstleistung vor Ort ist." },
            { title: "Klare Angebots-Präsentation", desc: "Kommunizieren Sie sofort, was Sie tun, für wen es ist und warum man Sie wählen sollte." },
            { title: "Schneller Kontakt via WhatsApp", desc: "Keine Kontaktformulare. Leads landen direkt in Ihrer Tasche, wo Sie am schnellsten abschließen." },
            { title: "Bessere Konversion", desc: "Verwandeln Sie Ihr Marketingbudget endlich in messbare Anfragen." }
          ],
          notes: "Jeder kann eine billige Webseite bauen. Was wir wirklich bieten, ist ein professionelles Image, das sofortiges Vertrauen schafft. Wir erstellen eine klare Präsentation Ihres Angebots und einen reibungslosen Weg für Neukunden, Sie zu erreichen. Letztendlich verkaufen wir Ihnen eine höhere Konversionsrate für Ihr Unternehmen."
        },
        s6: {
          title: "Schnell, einfach, strukturiert",
          subtitle: "Ein Prozess, der Ihre Zeit respektiert.",
          steps: [
            { title: "Wir lernen", desc: "Ein kurzer Deep-Dive in Ihr Angebot und Ihre Zielgruppe." },
            { title: "Wir bauen", desc: "Wir übernehmen Design, Texte und das technische Setup." },
            { title: "Sie erhalten Leads", desc: "Das System geht live, Anfragen landen direkt bei WhatsApp." },
            { title: "Wir optimieren", desc: "Optionaler Ads-Support und laufende Performance-Optimierung." }
          ],
          notes: "Wir wissen, dass Sie mit Ihrem Tagesgeschäft beschäftigt sind. Unser Prozess respektiert das. Wir führen eine schnelle Analyse Ihres Unternehmens durch, übernehmen den Aufbau der Seite und Sie erhalten die ersten Anfragen. Keine endlosen Korrekturschleifen, kein technisches Kauderwelsch. Schnell, einfach und strukturiert."
        },
        s7: {
          title: "Was der Kunde erhält",
          subtitle: "Alles was Sie brauchen, nichts was Sie ablenkt.",
          items: [
            { title: "Moderne Landingpage", desc: "Blitzschnelle Single-Page Architektur." },
            { title: "Premium Design", desc: "Luxuriöse Ästhetik für sofortiges Vertrauen." },
            { title: "Mobile-First Layout", desc: "Optimiert für 80% Ihres Traffics." },
            { title: "WhatsApp Integration", desc: "Nahtloses Click-to-Chat Setup." },
            { title: "Kontakt-Struktur", desc: "Klare Wege für die Kontaktaufnahme." },
            { title: "Klare Call-to-Actions", desc: "Strategische Platzierung für hohe Konversion." }
          ],
          footer: "+ Optionale Instagram & Ads Support Pakete",
          notes: "Wenn Sie mit uns arbeiten, wird alles erledigt. Sie erhalten ein erstklassiges, mobil-optimiertes Design, eine nahtlose WhatsApp-Integration, damit Leads direkt auf Ihrem Handy landen, klare Handlungsaufforderungen und optionales Anzeigen-Setup. Es ist ein komplettes Rundum-Sorglos-Paket, das hochwertig aussieht und stark konvertiert."
        },
        s8: {
          title: "Klare Seiten konvertieren besser",
          subtitle: "Warum wir keine klassischen 10-Seiten Webseiten bauen.",
          trad: "Klassische Webseite",
          tradNav: ["Home", "Über uns", "Leistungen", "Blog", "Kontakt"],
          tradDesc: "Zu viele Optionen. Der Nutzer ist abgelenkt und geht.",
          our: "Unsere Landingpage",
          ourTitle: "Ein klares Angebot",
          ourDesc: "Schnelleres Verständnis. Weniger Ablenkung. Direkter Weg zum Ziel.",
          ourCTA: "Kontakt via WhatsApp",
          ourFeatures: ["Fokus auf ein Ziel", "Schnelle Handlung"],
          notes: "Warum eine Landingpage und keine traditionelle Webseite? Fokus. Eine Standard-Webseite hat 'Über uns', 'Blog', 'Historie' – die Leute verlieren sich. Eine Landingpage hat ein Ziel: Sie davon zu überzeugen, dass Sie die richtige Wahl sind, und sie zur sofortigen Kontaktaufnahme zu bewegen. Klare Seiten konvertieren besser. So einfach ist das."
        },
        s9: {
          title: "Gebaut für lokale Unternehmen",
          subtitle: "Perfekt für Dienstleistungen, die auf Vertrauen und lokaler Präsenz basieren.",
          items: ["Kliniken & Ärzte", "Beauty-Spezialisten", "Dienstleister", "Berater", "Lokale Shops", "Kleine Marken"],
          notes: "Dieses System ist speziell für Unternehmen konzipiert, bei denen Vertrauen und lokale Präsenz zählen. Egal, ob Sie eine Zahnklinik, ein exklusives Kosmetikstudio oder eine Beratungsfirma führen: Wenn Sie Leads benötigen, die Sie direkt kontaktieren, um eine Dienstleistung zu buchen, ist diese Architektur genau für Sie gebaut."
        },
        s10: {
          title: "Warum wir",
          subtitle: "Wir agieren als Wachstumspartner, nicht als reine Auftragsnehmer.",
          items: [
            { title: "Schnelle Umsetzung.", desc: "Keine monatelange Wartezeit. Wir bauen schnell und launchen Systeme, die sofort wirken." },
            { title: "Einfache Systeme.", desc: "Wir halten es einfach für Sie und reibungslos für Ihre Kunden." },
            { title: "Premium Gefühl.", desc: "Ihre Marke wird in Millisekunden bewertet. Wir sorgen für sofortiges Vertrauen." }
          ],
          notes: "Warum sollten Sie sich für unsere Agentur entscheiden? Weil wir uns nicht wie typische Webentwickler verhalten, die Monate brauchen und dann verschwinden. Wir agieren als Wachstumspartner. Wir bauen schnell, wir designen für Luxus und Vertrauen, und wir konzentrieren uns darauf, wie viele Leads Sie tatsächlich erhalten. Wir halten es für Sie einfach."
        },
        s11: {
          title: "Einfache Leistungspakete",
          subtitle: "Transparente Optionen für jede Wachstumsphase.",
          packages: [
            { title: "Basis", desc: "Essenzielle Präsenz für etablierte Firmen.", main: "Landingpage", features: ["Premium Design", "Mobile Optimierung", "Basis Kontakt-Setup"] },
            { title: "Konversion", desc: "Der komplette Funnel zur Kundengewinnung.", main: "Seite + WhatsApp", features: ["Alles aus Basis", "Direkter WhatsApp Flow", "Conversion Copywriting", "Analytics Setup"], badge: "EMPFEHLUNG" },
            { title: "Skalierung", desc: "Für Firmen, die Marktanteile kaufen wollen.", main: "Premium + Ads", features: ["Alles aus Konversion", "Meta Ads Setup", "Kampagnen Management", "Monatliche Optimierung"] }
          ],
          notes: "Wir halten unsere Preise so einfach wie unsere Webseiten. Wir haben transparente Pakete, je nachdem, wo Sie gerade stehen. Sie brauchen nur das Fundament? Das haben wir. Benötigen Sie das komplette Konversions-System? Das ist unser Kernangebot. Bereit, mit Anzeigen zu skalieren? Auch das übernehmen wir."
        },
        s12: {
          title: "Bereit für eine professionelle Online-Präsenz?",
          subtitle: "Sichern Sie sich eine Landingpage, die wirklich verkauft.",
          ctas: ["WhatsApp", "E-Mail", "Instagram"],
          notes: "Das ist der Überblick. Der nächste Schritt ist einfach. Lassen Sie uns kurz über Ihr spezifisches Unternehmen sprechen und sehen, welcher Ansatz Sinn macht. Sie können uns jetzt direkt auf WhatsApp erreichen, um zu starten."
        }
      },
    }
  }
};
