import { Service, Product, Project, Industry, Article, TeamMember, CareerOpening, SiteSettings } from '@/types';

export const siteSettings: SiteSettings = {
  company_name: 'Sardauna Tech Lab Ltd',
  company_email: 'contact@sardaunatechlabs.com.ng',
  support_email: 'contact@sardaunatechlabs.com.ng',
  phone_primary: '+234 701 967 2820',
  phone_secondary: '+234 906 027 6333',
  address: 'Dutse, Jigawa State, Nigeria',
  rc_number: '9161899',
  linkedin: 'https://linkedin.com/company/sardaunatechlab',
  x_twitter: 'https://twitter.com/sardaunatechlab',
  github: 'https://github.com/sardaunatechlab',
  default_seo_title: 'Sardauna Tech Lab Ltd | Digital Products, Enterprise Systems & Technology Solutions',
  default_seo_description: 'Sardauna Tech Lab Ltd designs, engineers, and delivers digital products, custom software systems, and technology solutions for businesses, institutions, and startups.'
};

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development & Engineering',
    slug: 'web-development-engineering',
    short_description: 'High-performance corporate websites, customer portals, web applications, and resilient digital platforms built with modern web architectures.',
    full_description: 'We design and develop professional websites, web platforms, and web-based applications engineered for speed, usability, security, and scalability. From enterprise corporate platforms to API-integrated portals, we deliver robust solutions that drive business operations.',
    icon: 'Globe',
    hero_title: 'Engineering Web Platforms That Perform and Scale',
    hero_description: 'From high-availability corporate portals to complex web applications, we combine modern frontend engineering with resilient backend architecture.',
    status: 'active',
    sort_order: 1,
    featured: true,
    challenges_solved: [
      'Slow, outdated, and unmaintainable legacy websites',
      'Poor user experience leading to customer drop-off',
      'Lack of responsive support across mobile and tablet devices',
      'Weak search engine visibility and performance metrics',
      'Inability to integrate third-party APIs and payment gateways'
    ],
    deliverables: [
      'Corporate Websites',
      'Business Web Platforms',
      'Customer Portals',
      'Administrative Dashboards',
      'Web Applications',
      'E-commerce Platforms',
      'API-integrated Applications'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'REST APIs', 'MySQL'],
    process_steps: [
      { step: '01', title: 'Architecture & UX Wireframing', description: 'Mapping information hierarchy, user flows, and technical stack requirements.' },
      { step: '02', title: 'Frontend & Backend Engineering', description: 'Developing responsive UI components and integrating high-performance APIs.' },
      { step: '03', title: 'Testing & Production Deployment', description: 'Cross-browser, security, and performance verification before production launch.' }
    ]
  },
  {
    id: 2,
    title: 'Mobile Application Development',
    slug: 'mobile-application-development',
    short_description: 'Intuitive, high-performance mobile applications designed for seamless user experiences across iOS and Android ecosystems.',
    full_description: 'We design and develop mobile applications that provide reliable, fast, and intuitive experiences. Focused on real user workflows and lightweight offline capabilities, we build applications that engage users and streamline operations.',
    icon: 'Smartphone',
    hero_title: 'Native-Quality Mobile Solutions Built for Real Users',
    hero_description: 'We develop intuitive mobile applications that connect businesses with their customers and empower on-field personnel.',
    status: 'active',
    sort_order: 2,
    featured: true,
    challenges_solved: [
      'Complex multi-platform development and maintenance overhead',
      'Unresponsive UI and slow network load times on mobile devices',
      'Poor offline functionality in intermittent connectivity zones',
      'Fragmented user onboarding and retention pipelines'
    ],
    deliverables: [
      'Business Mobile Applications',
      'Service Platforms',
      'Customer-facing Applications',
      'Internal Operational Applications',
      'Mobile-first Platforms',
      'API-connected Applications'
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'REST APIs', 'Firebase', 'Secure Storage'],
    process_steps: [
      { step: '01', title: 'User Journey Design', description: 'Designing intuitive screen flows, touch gestures, and accessibility states.' },
      { step: '02', title: 'Mobile Engineering & API Integration', description: 'Building resilient offline-ready interfaces with secure data caching.' },
      { step: '03', title: 'Device Testing & App Store Delivery', description: 'Comprehensive device matrix testing and release management.' }
    ]
  },
  {
    id: 3,
    title: 'Custom Software Systems',
    slug: 'custom-software-systems',
    short_description: 'Tailored enterprise management systems, ERPs, inventory platforms, POS, and workflow platforms engineered around your exact operations.',
    full_description: 'Where off-the-shelf software fails to address unique business processes, Sardauna Tech Lab engineers bespoke software systems tailored to your specific organizational workflows. We build systems that adapt to you, not the other way around.',
    icon: 'Cpu',
    hero_title: 'Bespoke Software Built Around Your Operational Reality',
    hero_description: 'Eliminate operational bottlenecks with custom enterprise software, automated inventory tracking, and specialized business platforms.',
    status: 'active',
    sort_order: 3,
    featured: true,
    challenges_solved: [
      'Rigid off-the-shelf software that forces unnatural business workarounds',
      'Fragmented spreadsheets and disconnected data silos',
      'Inefficient manual reconciliations and inventory leakage',
      'Lack of real-time multi-branch visibility for decision makers'
    ],
    deliverables: [
      'Enterprise Management Systems',
      'Inventory & Stock Tracking Systems',
      'Point of Sale (POS) Systems',
      'Reporting & Analytical Platforms',
      'Staff & Attendance Management',
      'Business Workflow Systems',
      'Operational Dashboards'
    ],
    technologies: ['Laravel', 'PHP 8.3', 'MySQL', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Docker'],
    process_steps: [
      { step: '01', title: 'Operational Audit', description: 'Deep-dive review of existing business workflows, pain points, and data flows.' },
      { step: '02', title: 'Database & System Architecture', description: 'Designing normalized relational databases and secure role-based access control.' },
      { step: '03', title: 'Iterative Development & Deployment', description: 'Continuous module delivery with end-user training and operational validation.' }
    ]
  },
  {
    id: 4,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    short_description: 'User-centered digital product design, interactive wireframing, design systems, and functional interfaces that balance business goals with usability.',
    full_description: 'We design digital experiences that are functional, intuitive, and visually distinguished. Our design methodology bridges user research, information architecture, interface prototyping, and rigorous design tokens to ensure high conversion and user satisfaction.',
    icon: 'Layers',
    hero_title: 'Disciplined Product Design for Complex Systems',
    hero_description: 'Transform complex user requirements into clear, elegant, and effortless user interfaces built on standardized design systems.',
    status: 'active',
    sort_order: 4,
    featured: true,
    challenges_solved: [
      'Cluttered, confusing interfaces that drive users away',
      'Inconsistent design language across web and mobile products',
      'Low task completion rates and steep employee learning curves',
      'Lack of scalable component libraries for engineering teams'
    ],
    deliverables: [
      'Product Research & User Journey Maps',
      'Information Architecture & Wireframes',
      'High-Fidelity Interface Design',
      'Interactive Prototypes',
      'Comprehensive Design Systems & Tokens',
      'Responsive Web & Mobile Layouts'
    ],
    technologies: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion', 'Accessibility Standards'],
    process_steps: [
      { step: '01', title: 'Research & User Analysis', description: 'Understanding real user motivations, mental models, and usage constraints.' },
      { step: '02', title: 'Wireframing & Prototyping', description: 'Iterative low-to-high fidelity prototyping tested against core user journeys.' },
      { step: '03', title: 'Design System Delivery', description: 'Production-ready component libraries, tokens, and developer handoff documentation.' }
    ]
  },
  {
    id: 5,
    title: 'Artificial Intelligence & Automation',
    slug: 'artificial-intelligence-automation',
    short_description: 'Practical process automation, intelligent workflows, and data processing tools that eliminate repetitive tasks and increase business productivity.',
    full_description: 'We help organizations eliminate manual overhead and errors by introducing pragmatic automation into existing business processes. We focus strictly on solutions that deliver measurable efficiency gains rather than artificial hype.',
    icon: 'Bot',
    hero_title: 'Practical Automation for Real Business Efficiency',
    hero_description: 'Automate repetitive workflows, structure unstructured documents, and integrate intelligent processing into your day-to-day operations.',
    status: 'active',
    sort_order: 5,
    featured: true,
    challenges_solved: [
      'Hours lost to manual repetitive data entry and document reconciliation',
      'Human error in standardized operational handoffs',
      'Slow response times to routine customer inquiries',
      'Difficulty extracting insights from unstructured internal documents'
    ],
    deliverables: [
      'Workflow & Business Process Automation',
      'Repetitive Task Automation Scripts',
      'Intelligent Internal Tools',
      'Data Processing Pipelines',
      'Document Parsing & Extraction',
      'System Integrations & Webhooks'
    ],
    technologies: ['Python', 'Node.js', 'REST APIs', 'LLM Integration', 'Automation Workflows', 'PostgreSQL'],
    process_steps: [
      { step: '01', title: 'Process Identification', description: 'Pinpointing high-frequency, repetitive bottlenecks with clear ROI.' },
      { step: '02', title: 'Pipeline Architecture', description: 'Developing secure automated workflows with fallback validation.' },
      { step: '03', title: 'Integration & Monitoring', description: 'Connecting into existing tools with error alerting and telemetry.' }
    ]
  },
  {
    id: 6,
    title: 'Project Management',
    slug: 'project-management',
    short_description: 'Structured technology project governance from requirements gathering to milestone tracking, risk mitigation, and production delivery.',
    full_description: 'Technology projects require more than good code—they demand disciplined execution. Sardauna Tech Lab provides structured technology project management to guide projects from initial conception to successful, on-schedule production deployment.',
    icon: 'CheckSquare',
    hero_title: 'Structured Governance for Complex Tech Initiatives',
    hero_description: 'Ensure your software projects stay aligned with strategic objectives, budget constraints, and strict quality milestones.',
    status: 'active',
    sort_order: 6,
    featured: false,
    challenges_solved: [
      'Uncontrolled scope creep and drifting project deadlines',
      'Miscommunication between technical teams and executive stakeholders',
      'Unidentified risks leading to catastrophic launch failures',
      'Lack of documentation and post-launch maintenance planning'
    ],
    deliverables: [
      'Requirements Gathering & Scope Specifications',
      'Milestone Planning & Resource Scheduling',
      'Technical Documentation & Architecture Specs',
      'Stakeholder Communication & Progress Reports',
      'Risk Management & Mitigation Frameworks',
      'Quality Assurance & Delivery Management'
    ],
    technologies: ['Agile / Scrum', 'Linear', 'Jira', 'Notion', 'Git Workflow', 'CI/CD Pipelines'],
    process_steps: [
      { step: '01', title: 'Scoping & Baseline Planning', description: 'Defining project boundaries, deliverables, and critical path milestones.' },
      { step: '02', title: 'Sprint Management & Quality Audits', description: 'Bi-weekly sprint tracking, code reviews, and continuous QA testing.' },
      { step: '03', title: 'Launch Coordination & Handover', description: 'Staging signoff, production cutover, and comprehensive knowledge transfer.' }
    ]
  },
  {
    id: 7,
    title: 'IT Consultancy',
    slug: 'it-consultancy',
    short_description: 'Strategic advisory on software architecture, technology stack selection, digital transformation, and infrastructure evaluation.',
    full_description: 'We provide professional technology advisory services to organizations planning new systems, modernizing legacy infrastructure, or undertaking digital transformation initiatives. We help leadership make sound technical decisions before committing capital.',
    icon: 'Compass',
    hero_title: 'Strategic Advisory for Confident Technology Decisions',
    hero_description: 'Evaluate technical options, optimize system architectures, and plan digital transformation with seasoned engineering leaders.',
    status: 'active',
    sort_order: 7,
    featured: false,
    challenges_solved: [
      'Expensive technology investments that fail to solve business goals',
      'Unclear technical debt hindering organizational agility',
      'Confusion regarding cloud vs on-premise hosting tradeoffs',
      'Difficulty selecting the right technology vendor or stack'
    ],
    deliverables: [
      'Technology Strategy & Modernization Roadmaps',
      'Software Architecture Blueprints',
      'Digital Transformation Planning',
      'Technical Requirements Analysis',
      'Technology Stack Selection & Due Diligence',
      'System Security & Performance Evaluation'
    ],
    technologies: ['Enterprise Architecture', 'Cloud Infrastructure', 'API Strategy', 'Security Protocols'],
    process_steps: [
      { step: '01', title: 'Technical Assessment', description: 'In-depth review of existing infrastructure, vendor contracts, and pain points.' },
      { step: '02', title: 'Strategy & Roadmap Formulation', description: 'Formulating clear recommendations, risk assessments, and implementation roadmaps.' },
      { step: '03', title: 'Implementation Advisory', description: 'Guiding internal teams and vendor partners through execution.' }
    ]
  },
  {
    id: 8,
    title: 'Backend, Database & Cloud Solutions',
    slug: 'backend-database-cloud-solutions',
    short_description: 'Robust REST APIs, relational database design, cloud deployment, and secure backend infrastructure engineered for high uptime and security.',
    full_description: 'Reliable digital platforms require solid backend foundations. We design and build secure REST APIs, optimized database schemas, authentication systems, and cloud infrastructure that maintain data integrity and withstand traffic demands.',
    icon: 'Database',
    hero_title: 'Secure, Resilient Backend & Database Architecture',
    hero_description: 'Power your applications with high-performance APIs, normalized database designs, and automated cloud deployments.',
    status: 'active',
    sort_order: 8,
    featured: true,
    challenges_solved: [
      'Unoptimized database queries causing server slowdowns and crashes',
      'Vulnerabilities in user authentication and data access controls',
      'Difficulties scaling backend capacity during peak traffic',
      'Inadequate backup and disaster recovery mechanisms'
    ],
    deliverables: [
      'REST API Design & Development',
      'Relational Database Architecture & Indexing',
      'Authentication & Role-Based Access Control',
      'Server & DirectAdmin Deployment Setup',
      'Data Migration & Integrity Verification',
      'Security Hardening & Rate Limiting'
    ],
    technologies: ['Laravel', 'PHP 8.3', 'MySQL', 'PostgreSQL', 'Redis', 'DirectAdmin', 'Docker', 'Linux'],
    process_steps: [
      { step: '01', title: 'Data Modeling & Schema Design', description: 'Normalizing entity relationships, indexing foreign keys, and planning transactions.' },
      { step: '02', title: 'API Implementation & Security Hardening', description: 'Writing protected RESTful endpoints with input validation and authentication.' },
      { step: '03', title: 'Deployment & Monitoring Setup', description: 'Server configuration, SSL installation, database backup automation, and log tracking.' }
    ]
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'EventPass',
    slug: 'eventpass',
    tagline: 'Event Registration, Digital Ticketing & QR Check-in Platform',
    short_description: 'A modern event management and ticketing platform designed to simplify event creation, attendee registration, digital ticket distribution, and high-speed QR check-ins.',
    description: 'EventPass is an end-to-end event ticketing platform engineered to serve event organizers, corporate conferences, concerts, and festivals. It provides instant ticketing, verifiable QR codes, organizer analytics, and fast on-site verification.',
    status: 'in_development',
    featured: true,
    sort_order: 1,
    problem: 'Event organizers often face chaotic gate management, fraudulent ticket duplicates, manual attendee verification delays, and delayed revenue payouts.',
    solution: 'EventPass delivers encrypted single-use QR ticketing, multi-gate mobile scanner validation, real-time attendance dashboards, and seamless payment collection.',
    target_audience: [
      'Conference & Summit Organizers',
      'Entertainment & Concert Producers',
      'Educational Institutions & Workshops',
      'Corporate & Institutional Events'
    ],
    features: [
      { id: 1, product_id: 1, title: 'Instant Event Creation', description: 'Set up multi-tier ticket types, early bird pricing, and registration questionnaires in minutes.', sort_order: 1 },
      { id: 2, product_id: 1, title: 'Encrypted QR Ticketing', description: 'Deliver automated PDF tickets with anti-counterfeit QR codes sent directly via email and SMS.', sort_order: 2 },
      { id: 3, product_id: 1, title: 'High-Speed Gate Check-in', description: 'Scan and validate tickets in under 500ms using camera-based mobile check-in apps with offline support.', sort_order: 3 },
      { id: 4, product_id: 1, title: 'Organizer Intelligence', description: 'Track sales velocity, attendee demographic breakdowns, and check-in percentages live.', sort_order: 4 }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel API', 'MySQL', 'QR Code Encryption', 'Payment Gateway Integration']
  },
  {
    id: 2,
    name: 'TraderERP',
    slug: 'tradererp',
    tagline: 'Business Operations, Inventory & SME Management Suite',
    short_description: 'An integrated business management and ERP platform designed specifically for retailers, wholesalers, and growing SMEs to manage sales, stock, and credit.',
    description: 'TraderERP solves the real-world operational challenges of SMEs. By combining Point of Sale (POS), multi-branch inventory tracking, expense management, credit/debt ledgering, and financial reporting into one intuitive platform, TraderERP brings clarity to daily commerce.',
    status: 'in_development',
    featured: true,
    sort_order: 2,
    problem: 'Small and growing businesses struggle with stock shrinkage, unrecorded credit sales, manual ledger reconciliation, and zero visibility across multiple shop locations.',
    solution: 'TraderERP centralizes point-of-sale checkout, automated inventory deductions, customer credit tracking with reminder triggers, and profit/loss reporting.',
    target_audience: [
      'Retail & Wholesale Merchants',
      'Supermarkets & Pharmacy Outlets',
      'Distributors & Supply Chain Agents',
      'Multi-branch Commercial Enterprises'
    ],
    features: [
      { id: 5, product_id: 2, title: 'Point of Sale (POS)', description: 'Fast barcode scanning, instant receipt generation, and flexible cash/card/transfer payment methods.', sort_order: 1 },
      { id: 6, product_id: 2, title: 'Multi-Branch Inventory Control', description: 'Real-time stock level monitoring with low-stock alerts and inter-branch transfer logging.', sort_order: 2 },
      { id: 7, product_id: 2, title: 'Credit & Customer Debt Tracking', description: 'Log customer credit terms, record installment repayments, and maintain clear ledger histories.', sort_order: 3 },
      { id: 8, product_id: 2, title: 'Profit & Loss Reporting', description: 'Instant calculation of daily revenue, product margins, operating expenses, and net profit.', sort_order: 4 }
    ],
    technologies: ['Laravel 11', 'MySQL', 'Next.js Frontend', 'Tailwind CSS', 'Receipt Printer Integration', 'Role Permissions']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'EventPass - Digital Ticketing Infrastructure',
    slug: 'eventpass-ticketing-platform',
    client_name: 'Sardauna Tech Lab Product Division',
    industry: 'Events & Entertainment',
    service_category: 'Digital Product Engineering',
    short_description: 'A high-throughput event management and ticketing platform featuring secure QR verification and real-time organizer telemetry.',
    overview: 'EventPass was conceived to resolve the widespread logistical friction of physical ticketing, fraudulent ticket duplication, and delayed gate admission at events across Nigerian urban centers.',
    challenge: 'High attendance events routinely suffer from slow gate lines due to slow mobile verification and cellular network congestion at venue perimeters.',
    requirements: [
      'Sub-second QR scanning speed even during network degradation',
      'Prevention of double-spend / duplicated ticket fraud',
      'Instant mobile-optimized checkout without mandatory app downloads'
    ],
    solution: 'Built a Next.js progressive web application paired with a high-concurrency Laravel REST API. Implemented offline-cached ticket validation hashes on gate devices with background reconciliation.',
    outcome: 'Successfully validated in prototype field trials, achieving 0.4s average scan speed and zero ticket duplication errors.',
    featured_image: '/projects/eventpass.svg',
    year: '2025',
    status: 'ongoing',
    featured: true,
    sort_order: 1,
    technologies: ['Next.js', 'Laravel', 'MySQL', 'QR Scanner Engine', 'Tailwind CSS'],
    system_capabilities: [
      'Multi-tier ticket inventory management',
      'Automated email ticket delivery with PDF generation',
      'Real-time gate check-in scanner application',
      'Live attendee density and revenue dashboard'
    ]
  },
  {
    id: 2,
    title: 'TraderERP - Retail & Inventory Management Platform',
    slug: 'tradererp-business-suite',
    client_name: 'Commercial SME Pilot Group',
    industry: 'Retail & Commerce',
    service_category: 'Custom Software Systems',
    short_description: 'A multi-branch business operating system unifying point-of-sale, stock tracking, customer credit ledgers, and profit reporting.',
    overview: 'Engineered for retail and distribution businesses operating in dynamic commercial environments, TraderERP replaces fragmented paperwork with unified digital workflows.',
    challenge: 'Business owners lacked consolidated daily insights across scattered retail branches and lost revenue to untracked customer credit balances and inventory discrepancies.',
    requirements: [
      'Lightning-fast POS terminal with thermal receipt support',
      'Granular role-based permissions preventing unauthorized discounts',
      'Multi-currency and local payment channel reconciliation'
    ],
    solution: 'Engineered a modular ERP system with optimized database indexing for high-volume transactions, multi-store stock movement validation, and automated debt tracking.',
    outcome: 'Eliminated manual daily reconciliation overhead for pilot merchants, providing instant profit margins per SKU.',
    featured_image: '/projects/tradererp.svg',
    year: '2025',
    status: 'ongoing',
    featured: true,
    sort_order: 2,
    technologies: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Next.js', 'REST APIs'],
    system_capabilities: [
      'Fast barcode & search POS checkout interface',
      'Multi-warehouse stock transfers and batch tracking',
      'Customer credit terms, aging ledgers, and payment history',
      'Exportable financial statements and tax summaries'
    ]
  },
  {
    id: 3,
    title: 'Restaurant Management & Online Ordering System',
    slug: 'restaurant-management-ordering-system',
    client_name: "Queen's Palace Eatery & Lounge",
    industry: 'Hospitality & Food Service',
    service_category: 'Web & Custom Software Systems',
    short_description: 'An integrated food service platform unifying customer online menu ordering, table reservations, POS billing, and real-time kitchen dispatch (KDS).',
    overview: "Engineered for modern eateries and quick-service restaurants, this end-to-end platform bridges digital customer ordering with kitchen fulfillment, inventory tracking, and daily revenue reconciliation.",
    challenge: 'Manual pen-and-paper order taking led to kitchen fulfillment errors, slow dining table turnaround, untracked ingredient waste, and inability to capture online delivery and takeaway orders.',
    requirements: [
      'Mobile-responsive customer ordering portal with visual menus and instant checkout',
      'Real-time Kitchen Order Display (KDS) with automated kitchen buzzer alerts',
      'Ingredient-level inventory deduction per sold recipe',
      'Table QR-code dine-in ordering and payment confirmation'
    ],
    solution: "Engineered a dual-facing hospitality platform: a lightweight, mobile-first ordering interface for customers (inspired by leading dining experiences like Queen's Palace Eatery) combined with a robust restaurant operating dashboard for floor staff and kitchen managers.",
    outcome: 'Reduced customer order-to-kitchen transmission time to sub-second speed, increased off-premise takeaway volume by 45%, and eliminated menu reconciliation errors.',
    featured_image: '/projects/restaurant-ordering.svg',
    year: '2025',
    status: 'completed',
    featured: true,
    sort_order: 3,
    technologies: ['Next.js', 'Laravel 11', 'MySQL', 'WebSockets', 'Tailwind CSS', 'POS Integration'],
    system_capabilities: [
      'Interactive visual menu with dietary filters, add-ons, and instant cart checkout',
      'Real-time Kitchen Order Display (KDS) with audio/visual status tracking',
      'Dine-in table QR ordering and WhatsApp order notifications',
      'Automated recipe ingredient depletion and low-stock reorder triggers',
      'Thermal receipt printing and split-bill payment management',
      'Daily shift revenue summaries, cashier reconciliation, and sales telemetry'
    ]
  }
];

export const industries: Industry[] = [
  {
    id: 1,
    name: 'Small and Medium Enterprises (SMEs)',
    slug: 'smes',
    description: 'Digitizing daily business operations, sales channels, customer tracking, and automated workflows to unlock sustainable business growth.',
    challenges: ['Manual record-keeping', 'Stock inaccuracies', 'Untracked customer debt', 'Limited operational visibility'],
    opportunities: ['Centralized POS & ERP systems', 'Automated customer messaging', 'Digital bookkeeping and invoicing'],
    relevant_services: ['Custom Software Systems', 'Web Development & Engineering', 'UI/UX Design'],
    icon: 'Store'
  },
  {
    id: 2,
    name: 'Retail & Commerce',
    slug: 'retail',
    description: 'Developing high-speed point-of-sale platforms, multi-branch inventory tracking, supplier management, and e-commerce portals.',
    challenges: ['Stock shrinkage', 'Multi-location synchronization', 'Slow checkout speeds', 'Fragmented supplier tracking'],
    opportunities: ['Cloud POS systems', 'Real-time multi-branch stock transfers', 'Integrated e-commerce storefronts'],
    relevant_services: ['Custom Software Systems', 'Web Development & Engineering', 'Backend & Cloud Solutions'],
    icon: 'ShoppingBag'
  },
  {
    id: 3,
    name: 'Hospitality',
    slug: 'hospitality',
    description: 'Building custom ordering solutions, table reservation platforms, kitchen management workflows, and customer engagement tools.',
    challenges: ['Order miscommunication', 'Table turnover delays', 'Peak hour billing bottlenecks'],
    opportunities: ['Digital QR menu ordering', 'Kitchen display systems', 'Loyalty and CRM tracking'],
    relevant_services: ['Custom Software Systems', 'Mobile Application Development', 'UI/UX Design'],
    icon: 'Coffee'
  },
  {
    id: 4,
    name: 'Events & Entertainment',
    slug: 'events',
    description: 'Engineering ticketing platforms, attendee registration flows, access control scanners, and organizer analytical telemetry.',
    challenges: ['Ticket fraud & duplication', 'Long gate queues', 'Lack of real-time crowd analytics'],
    opportunities: ['Encrypted QR code ticketing', 'Offline-first gate check-in scanners', 'Live revenue monitoring'],
    relevant_services: ['Web Development & Engineering', 'Mobile Application Development', 'Custom Software Systems'],
    icon: 'Ticket'
  },
  {
    id: 5,
    name: 'Education & Training',
    slug: 'education',
    description: 'Supporting educational institutions, academies, and training programs with student portals, grading platforms, and learning portals.',
    challenges: ['Paper-heavy student grading', 'Delayed fee reconciliations', 'Disorganized curriculum distribution'],
    opportunities: ['Student information systems', 'Fee payment integrations', 'Digital assessment portals'],
    relevant_services: ['Web Development & Engineering', 'Custom Software Systems', 'IT Consultancy'],
    icon: 'GraduationCap'
  },
  {
    id: 6,
    name: 'Government & Public Institutions',
    slug: 'government-public-institutions',
    description: 'Designing structured digital systems capable of supporting administrative workflows, records management, and public service delivery.',
    challenges: ['Paper file degradation', 'Slow inter-departmental routing', 'Lack of audit verification'],
    opportunities: ['Secure document registries', 'Public citizen service portals', 'Data-driven administrative dashboards'],
    relevant_services: ['Custom Software Systems', 'Backend & Cloud Solutions', 'Project Management', 'IT Consultancy'],
    icon: 'Landmark'
  },
  {
    id: 7,
    name: 'Non-Governmental Organizations (NGOs)',
    slug: 'ngos',
    description: 'Delivering data collection tools, field reporting systems, beneficiary management platforms, and program monitoring dashboards.',
    challenges: ['Data collection in remote areas', 'Complex donor reporting demands', 'Dispersed field team coordination'],
    opportunities: ['Offline mobile data collection', 'Automated KPI aggregation', 'Transparent project monitoring dashboards'],
    relevant_services: ['Mobile Application Development', 'Custom Software Systems', 'Project Management'],
    icon: 'HeartHandshake'
  },
  {
    id: 8,
    name: 'Startups & Digital Founders',
    slug: 'startups',
    description: 'Guiding founders from validated concept to production-ready MVP through agile product design, full-stack engineering, and technical strategy.',
    challenges: ['High cost of hiring dedicated teams', 'Technical debt from poorly architected prototypes', 'Slow time-to-market'],
    opportunities: ['Rapid MVP engineering', 'Scalable cloud infrastructure', 'Fractional CTO advisory'],
    relevant_services: ['Web Development & Engineering', 'Mobile Application Development', 'UI/UX Design', 'IT Consultancy'],
    icon: 'Rocket'
  },
  {
    id: 9,
    name: 'Professional Services',
    slug: 'professional-services',
    description: 'Creating authoritative corporate portals, client document exchanges, consultation booking systems, and practice management tools.',
    challenges: ['Generic online presence that fails to convey credibility', 'Manual appointment scheduling', 'Insecure client file sharing'],
    opportunities: ['Bespoke corporate platforms', 'Integrated client onboarding pipelines', 'Secure document sharing vaults'],
    relevant_services: ['Web Development & Engineering', 'UI/UX Design', 'Custom Software Systems'],
    icon: 'Briefcase'
  }
];

export const leadershipTeam: TeamMember[] = [
  {
    id: 1,
    name: 'Muhammad Auwal Abubakar',
    role: 'Founder & Chief Executive Officer',
    short_bio: 'Leads Sardauna Tech Lab Ltd with extensive expertise across software engineering, technology project management, product development, and digital innovation.',
    full_bio: 'Muhammad Auwal Abubakar leads Sardauna Tech Lab Ltd with experience spanning software engineering, technology project management, product development, and digital innovation. His work focuses on designing technology products, managing software projects, and developing systems that solve practical business and organizational problems across Nigeria and broader African markets.',
    linkedin_url: 'https://linkedin.com/in/muhammadauwalabubakar',
    sort_order: 1,
    visible: true
  },
  {
    id: 2,
    name: 'Maryam Abubakar',
    role: 'Co-Founder',
    short_bio: 'Part of the founding leadership of Sardauna Tech Lab Ltd, contributing to the company’s growth, strategic direction, and operational execution.',
    full_bio: 'Maryam Abubakar is part of the founding leadership of Sardauna Tech Lab Ltd and actively contributes to the company’s organizational growth, partnership development, and strategic direction, ensuring Sardauna Tech Lab remains committed to high-standard execution and real-world value creation.',
    sort_order: 2,
    visible: true
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'Why Real-World Utility Must Supersede Technology Hype in African Markets',
    slug: 'why-real-world-utility-must-supersede-technology-hype',
    excerpt: 'Building technology in emerging markets requires a disciplined focus on concrete operational bottlenecks rather than chasing speculative architectural trends.',
    content: `
## Grounded Technology for Actual Problems

In the contemporary software ecosystem, there is an omnipresent temptation to adopt technology for its own sake. From over-engineered microservice architectures to superfluous artificial intelligence integrations, organizations frequently invest significant capital into systems that complicate rather than simplify their operations.

At Sardauna Tech Lab, our foundational engineering philosophy is simple: **technology should exist because it creates measurable value, solves a real problem, and makes something better.**

### The Reality of Operational Friction

When analyzing the workflow of small and medium enterprises, government institutions, and service businesses across Nigeria, the most pressing challenges are rarely theoretical. They are immediate and practical:

1. **Inventory and Revenue Leakage:** Inability to track multi-branch inventory movements in real time.
2. **Data Fragmentation:** Critical business records trapped in disparate physical ledgers or corrupted spreadsheets.
3. **Network Constraints:** Platforms that completely break when cellular data connectivity drops or experiences high latency.
4. **Usability Barriers:** Software interfaces designed with high cognitive loads that require extensive employee retraining.

### Engineering for Resilience

Designing for real-world conditions means choosing mature, reliable technologies that perform consistently under variable network conditions. It means architecting offline-first mobile synchronization, optimizing relational database queries to execute in milliseconds, and building user interfaces that prioritize clarity and speed over decorative visual excess.

When software genuinely improves a business process, user adoption follows naturally.
    `,
    category: 'Engineering & Strategy',
    author: {
      name: 'Muhammad Auwal Abubakar',
      role: 'Founder & CEO'
    },
    status: 'published',
    featured: true,
    published_at: '2025-02-15',
    read_time: '5 min read'
  },
  {
    id: 2,
    title: 'Designing Resilient ERP Architecture for Growing Retail Businesses',
    slug: 'designing-resilient-erp-architecture-for-retail',
    excerpt: 'How modern relational database design and normalized inventory ledgers prevent stock shrinkage and enable multi-branch expansion.',
    content: `
## The Anatomy of a High-Availability Retail ERP

For retailers and commercial wholesalers, the ERP system is the operational central nervous system. When a point-of-sale terminal experiences latency or fails to accurately decrement inventory levels across branches, the financial ramifications are immediate.

### Key Architectural Pillars

Building systems like TraderERP requires strict adherence to core engineering disciplines:

* **Transactional Consistency (ACID):** Ensuring that inventory decrement, payment logging, and credit updates happen atomically within database transactions.
* **Normalized Data Schemas:** Designing clean relational structures in MySQL/PostgreSQL that support high-speed reporting without table-locking bottlenecks.
* **Granular Role-Based Permissions:** Restricting managerial overrides, discounts, and audit modifications through server-validated policies.

By decoupling the high-speed frontend POS interface from asynchronous background reporting tasks, commercial systems maintain sub-second checkout speeds even during peak trading periods.
    `,
    category: 'Architecture & Systems',
    author: {
      name: 'Sardauna Tech Lab Engineering',
      role: 'Core Team'
    },
    status: 'published',
    featured: true,
    published_at: '2025-01-28',
    read_time: '4 min read'
  },
  {
    id: 3,
    title: 'The Blueprint for Rapid, Secure Gate Access Control at Large-Scale Events',
    slug: 'blueprint-rapid-secure-gate-access-control',
    excerpt: 'Examining the cryptographic and client-side architecture required to achieve sub-second ticket validation in congested physical venues.',
    content: `
## Solving the Gate Admission Bottleneck

Large-scale events represent one of the most demanding stress tests for digital platforms. When hundreds or thousands of attendees arrive at a venue simultaneously, cellular network base stations frequently become overloaded.

### The Offline Cryptographic Verification Pattern

To ensure seamless admission regardless of network state, the EventPass platform utilizes an asymmetric signing architecture:

1. **Pre-signed QR Payloads:** Each digital ticket contains an encrypted verification token embedding the attendee ID, ticket class, and cryptographic signature.
2. **Local Scanner Cache:** Gate scanning devices synchronize valid ticket checksums prior to the event opening.
3. **Zero-Roundtrip Verification:** The mobile scanner verifies the signature locally in under 400 milliseconds, giving immediate visual and audible confirmation.
4. **Reconciliation Queue:** Scanned states are logged locally and synced in the background as soon as network connectivity is intermittent or restored.

This architecture completely eliminates admission queues caused by spinning loading indicators at venue turnstiles.
    `,
    category: 'Product Engineering',
    author: {
      name: 'Sardauna Tech Lab Engineering',
      role: 'Core Team'
    },
    status: 'published',
    featured: true,
    published_at: '2025-01-10',
    read_time: '6 min read'
  }
];

export const careerOpenings: CareerOpening[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer (Next.js & Laravel)',
    slug: 'senior-full-stack-engineer',
    department: 'Engineering',
    location: 'Dutse, Jigawa State / Hybrid',
    employment_type: 'Full-time',
    description: 'We are seeking an experienced Full-Stack Software Engineer proficient in Next.js, TypeScript, and Laravel to architect and build digital products and enterprise software systems.',
    responsibilities: [
      'Design, engineer, and maintain scalable web applications and RESTful APIs.',
      'Write clean, typed, and well-documented TypeScript and PHP code.',
      'Collaborate with UI/UX designers to implement pixel-perfect, accessible interfaces.',
      'Optimize database queries, schema designs, and application performance.',
      'Participate in code reviews and mentor junior engineering talent.'
    ],
    requirements: [
      '3+ years of professional full-stack development experience.',
      'Deep knowledge of Next.js (App Router), React, and modern TypeScript.',
      'Strong proficiency with Laravel 10/11, PHP 8+, and MySQL.',
      'Familiarity with Tailwind CSS, Git workflows, and REST API standards.',
      'Strong problem-solving ability and engineering discipline.'
    ],
    preferred_skills: [
      'Experience with Docker, Linux server administration, and DirectAdmin hosting.',
      'Understanding of relational database optimization and indexing.',
      'Familiarity with Framer Motion and mobile application development.'
    ],
    status: 'open',
    deadline: '2025-06-30'
  },
  {
    id: 2,
    title: 'UI/UX & Product Designer',
    slug: 'ui-ux-product-designer',
    department: 'Product Design',
    location: 'Dutse, Jigawa State / Hybrid',
    employment_type: 'Full-time',
    description: 'We are looking for a UI/UX Designer who understands how to translate complex business workflows into clean, intuitive, and visually disciplined digital products.',
    responsibilities: [
      'Conduct user research and translate business requirements into user flows and wireframes.',
      'Design high-fidelity interfaces and interactive prototypes in Figma.',
      'Maintain and expand our standardized design systems and component libraries.',
      'Collaborate closely with engineers during handoff to ensure fidelity and usability.',
      'Test interfaces for responsiveness, contrast, and accessibility compliance.'
    ],
    requirements: [
      '2+ years of experience designing web and mobile applications.',
      'Strong portfolio demonstrating disciplined layout, typography, and UX logic.',
      'Expert proficiency in Figma, auto-layout, components, and variables.',
      'Clear communication skills and user-centric problem-solving ability.'
    ],
    preferred_skills: [
      'Understanding of HTML, CSS, and Tailwind CSS design tokens.',
      'Experience designing dashboard, SaaS, and enterprise interfaces.'
    ],
    status: 'open',
    deadline: '2025-06-30'
  },
  {
    id: 3,
    title: 'Software Engineering Intern',
    slug: 'software-engineering-intern',
    department: 'Engineering',
    location: 'Dutse, Jigawa State',
    employment_type: 'Internship',
    description: 'An intensive internship program for emerging technology talent looking to develop hands-on experience building production software systems alongside experienced engineers.',
    responsibilities: [
      'Assist with frontend component development and bug fixes.',
      'Learn modern software engineering best practices, version control, and API integration.',
      'Participate in team standups and technical workshops.'
    ],
    requirements: [
      'Basic knowledge of JavaScript/TypeScript or PHP.',
      'Strong willingness to learn and commitment to technical excellence.',
      'Resident or student in Jigawa State / Northern Nigeria.'
    ],
    preferred_skills: [
      'Familiarity with Git and React or Laravel fundamentals.'
    ],
    status: 'open',
    deadline: '2025-07-31'
  }
];

export const techStackData = [
  {
    category: 'Frontend Engineering',
    description: 'Modern, accessible, and high-performance client architectures.',
    technologies: [
      { name: 'Next.js', tag: 'App Router & SSR/SSG' },
      { name: 'React', tag: 'UI Library' },
      { name: 'TypeScript', tag: 'Strict Typing' },
      { name: 'Tailwind CSS', tag: 'Design System Tokens' },
      { name: 'Framer Motion', tag: 'Animation Engine' }
    ]
  },
  {
    category: 'Backend & Systems',
    description: 'Resilient application logic, secure authentication, and REST APIs.',
    technologies: [
      { name: 'Laravel 11', tag: 'Backend Framework' },
      { name: 'PHP 8.3', tag: 'Runtime' },
      { name: 'REST APIs', tag: 'v1 Endpoints' },
      { name: 'Sanctum', tag: 'Secure Auth' },
      { name: 'Node.js', tag: 'Auxiliary Services' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'High-integrity relational data models, indexing, and storage.',
    technologies: [
      { name: 'MySQL', tag: 'Primary Relational DB' },
      { name: 'PostgreSQL', tag: 'Advanced Datastores' },
      { name: 'Redis', tag: 'Caching & Queues' },
      { name: 'Secure Storage', tag: 'DirectAdmin Local / S3' }
    ]
  },
  {
    category: 'Infrastructure & DevOps',
    description: 'Production hosting, continuous deployment, and security.',
    technologies: [
      { name: 'DirectAdmin', tag: '8GB Production Host' },
      { name: 'Vercel', tag: 'Frontend Edge Runtime' },
      { name: 'Linux / Nginx', tag: 'Web Server' },
      { name: 'Git / GitHub', tag: 'Version Control' },
      { name: 'SSL / TLS', tag: 'Encrypted Transport' }
    ]
  },
  {
    category: 'Product Design',
    description: 'Disciplined research, user journey modeling, and tokens.',
    technologies: [
      { name: 'Figma', tag: 'Product Architecture' },
      { name: 'Design Tokens', tag: 'Standardized Variables' },
      { name: 'WCAG 2.1 AA', tag: 'Accessibility Standard' }
    ]
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand the core reality',
    description: 'We begin by conducting stakeholder interviews, workflow audits, user requirement analysis, and technical feasibility reviews to define the exact problem.'
  },
  {
    step: '02',
    title: 'Define',
    tagline: 'Establish architecture & scope',
    description: 'We translate requirements into technical architecture blueprints, database schema specifications, clear project milestones, and measurable success criteria.'
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'User experience & systems',
    description: 'We craft intuitive user journeys, wireframes, high-fidelity responsive interfaces, and consistent design systems that balance business goals with usability.'
  },
  {
    step: '04',
    title: 'Build',
    tagline: 'Production-grade engineering',
    description: 'Our engineering team develops the frontend and backend systems using proven technologies, writing clean, typed, secure, and well-tested code.'
  },
  {
    step: '05',
    title: 'Test',
    tagline: 'Rigorous quality assurance',
    description: 'Systems undergo end-to-end functional testing, cross-browser compatibility verification, mobile responsiveness audits, and security vulnerability scans.'
  },
  {
    step: '06',
    title: 'Deploy',
    tagline: 'Production release & cutover',
    description: 'We manage hosting setup, domain routing, SSL certification, database migrations, email configuration, and monitoring telemetry for launch.'
  },
  {
    step: '07',
    title: 'Support & Improve',
    tagline: 'Long-term partnership',
    description: 'Technology continues to evolve after launch. We provide ongoing infrastructure support, performance tuning, security updates, and feature enhancements.'
  }
];

// Export aliases for consistent naming across application routes
export const fallbackServices = services;
export const fallbackProducts = products;
export const fallbackProjects = projects;
export const fallbackIndustries = industries;
export const fallbackArticles = articles;
export const fallbackCareers = careerOpenings;
export const fallbackTeam = leadershipTeam;
export const fallbackSettings = siteSettings;


