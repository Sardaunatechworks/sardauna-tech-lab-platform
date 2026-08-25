<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Service;
use App\Models\Product;
use App\Models\Project;
use App\Models\Industry;
use App\Models\Article;
use App\Models\CareerOpening;
use App\Models\TeamMember;
use App\Models\SiteSetting;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin User
        User::firstOrCreate(
            ['email' => 'admin@sardaunatechlabs.com.ng'],
            [
                'name' => 'Muhammad Auwal Abubakar',
                'password' => Hash::make(env('SUPERADMIN_DEFAULT_PASSWORD', 'Sardauna2026!Secure')),
                'role' => 'super_admin',
                'is_active' => true,
            ]
        );

        // 2. Site Settings & Corporate Profile
        $settings = [
            'company_name' => 'Sardauna Tech Lab Ltd',
            'company_email' => 'contact@sardaunatechlabs.com.ng',
            'support_email' => 'contact@sardaunatechlabs.com.ng',
            'phone_primary' => '+234 701 967 2820',
            'phone_secondary' => '+234 906 027 6333',
            'address' => 'Dutse, Jigawa State, Nigeria',
            'rc_number' => '9161899',
            'established_year' => '2023',
            'mission' => 'To design and deliver practical, scalable digital solutions that solve real business problems. We are committed to helping small and medium enterprises transition from manual, fragmented operations to structured, automated systems through web development, intelligent tools, and innovative technology products.',
            'vision' => 'To be a premier African technology and software engineering institution recognized for building dependable software systems, disciplined delivery, and empowering enterprises to operate efficiently, reach more customers, and scale sustainably.',
            'default_seo_title' => 'Sardauna Tech Lab Ltd | Enterprise Software, Digital Products & Systems',
            'default_seo_description' => 'Sardauna Tech Lab Ltd is a registered Nigerian technology and software engineering company designing, building, and delivering digital products, enterprise systems, and custom software solutions.'
        ];

        foreach ($settings as $key => $val) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $val]);
        }

        // 3. Complete 8-Member Team Architecture
        $teamMembers = [
            [
                'name' => 'Muhammad Auwal Abubakar',
                'role' => 'Founder & Chief Executive Officer',
                'short_bio' => 'Leads engineering strategy, system architecture, and overall technical execution across all proprietary platforms and client projects.',
                'full_bio' => 'Muhammad Auwal Abubakar founded Sardauna Tech Lab, guiding its growth from an independent freelance initiative to a structured, registered technology corporation. His focus is on high-availability software engineering, systems design, and digital innovation for emerging African enterprises.',
                'photo' => '/team/muhammad-auwal.png',
                'linkedin_url' => 'https://linkedin.com/in/muhammadauwalabubakar',
                'sort_order' => 1,
                'visible' => true,
            ],
            [
                'name' => 'Maryam Abubakar',
                'role' => 'Co-Founder',
                'short_bio' => 'Directs operations, strategic partnerships, and organizational growth, ensuring seamless delivery across multi-disciplinary teams.',
                'full_bio' => 'Maryam Abubakar is co-founder of Sardauna Tech Lab Ltd, overseeing operational governance, institutional alignments, commercial accounts, and team growth.',
                'sort_order' => 2,
                'visible' => true,
            ],
            [
                'name' => 'Ibrahim Sani',
                'role' => 'Lead Full-Stack Engineer',
                'short_bio' => 'Next.js, Laravel, and REST API specialist leading core web architecture and system integrations.',
                'full_bio' => 'Ibrahim leads frontend and backend development squads, driving high-performance API structures and modern UI implementations.',
                'sort_order' => 3,
                'visible' => true,
            ],
            [
                'name' => 'Amina Bello',
                'role' => 'Lead UI/UX Product Designer',
                'short_bio' => 'Design systems, user research, and interactive prototyping specialist creating seamless product interfaces.',
                'full_bio' => 'Amina architects our digital design systems and conducts ethnographic user research to craft intuitive web and mobile experiences.',
                'sort_order' => 4,
                'visible' => true,
            ],
            [
                'name' => 'Farouk Usman',
                'role' => 'Senior Backend & Cloud Architect',
                'short_bio' => 'PostgreSQL, Linux server administration, Docker containerization, and high-concurrency database indexing.',
                'full_bio' => 'Farouk designs backend infrastructure, automated continuous deployment pipelines, and high-availability database clusters.',
                'sort_order' => 5,
                'visible' => true,
            ],
            [
                'name' => 'Fatima Dahiru',
                'role' => 'Frontend & Mobile Developer',
                'short_bio' => 'React Native, TypeScript, and modern frontend frameworks creating responsive mobile and web interfaces.',
                'full_bio' => 'Fatima builds performant cross-platform mobile apps and responsive web dashboards for our proprietary platforms.',
                'sort_order' => 6,
                'visible' => true,
            ],
            [
                'name' => 'Usman Garba',
                'role' => 'QA & DevOps Engineer',
                'short_bio' => 'CI/CD automation, security penetration auditing, regression testing, and production load simulation.',
                'full_bio' => 'Usman guarantees software reliability through automated test coverage, load testing, and deployment verification.',
                'sort_order' => 7,
                'visible' => true,
            ],
            [
                'name' => 'Zainab Aliyu',
                'role' => 'Technical Product Manager',
                'short_bio' => 'Agile governance, sprint delivery, stakeholder management, and product lifecycle strategy.',
                'full_bio' => 'Zainab ensures project milestones are delivered with predictability, precision, and alignment with client business objectives.',
                'sort_order' => 8,
                'visible' => true,
            ]
        ];

        foreach ($teamMembers as $member) {
            TeamMember::updateOrCreate(['name' => $member['name']], $member);
        }

        // 4. Services (8 Core Offerings)
        $services = [
            [
                'title' => 'Web Development & Engineering',
                'slug' => 'web-development-engineering',
                'short_description' => 'High-performance corporate websites, customer portals, web applications, and resilient digital platforms built with modern web architectures.',
                'full_description' => 'We design and develop professional websites, web platforms, and web-based applications engineered for speed, usability, security, and scalability.',
                'icon' => 'Globe',
                'hero_title' => 'Engineering Web Platforms That Perform and Scale',
                'hero_description' => 'From high-availability corporate portals to complex web applications, we combine modern frontend engineering with resilient backend architecture.',
                'status' => 'active',
                'sort_order' => 1,
                'featured' => true,
                'challenges_solved' => [
                    'Slow, outdated, and unmaintainable legacy websites',
                    'Poor user experience leading to customer drop-off',
                    'Lack of responsive support across mobile and tablet devices',
                    'Weak search engine visibility and performance metrics'
                ],
                'deliverables' => [
                    'Corporate Websites',
                    'Business Web Platforms',
                    'Customer Portals',
                    'Administrative Dashboards',
                    'Web Applications'
                ],
                'technologies' => ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'REST APIs', 'MySQL']
            ],
            [
                'title' => 'Mobile Application Development',
                'slug' => 'mobile-application-development',
                'short_description' => 'Intuitive, high-performance mobile applications designed for seamless user experiences across iOS and Android ecosystems.',
                'full_description' => 'We design and develop mobile applications that provide reliable, fast, and intuitive experiences for consumers and field operations.',
                'icon' => 'Smartphone',
                'hero_title' => 'Native-Quality Mobile Solutions Built for Real Users',
                'hero_description' => 'We develop intuitive mobile applications that connect businesses with their customers and empower field agents.',
                'status' => 'active',
                'sort_order' => 2,
                'featured' => true,
                'challenges_solved' => [
                    'Complex multi-platform development overhead',
                    'Slow network load times on mobile devices',
                    'Poor offline functionality'
                ],
                'deliverables' => [
                    'Cross-Platform Mobile Apps',
                    'Field Agent Mobile Portals',
                    'Customer Mobile Checkout',
                    'Push Notification Pipelines'
                ],
                'technologies' => ['React Native', 'Flutter', 'TypeScript', 'REST APIs', 'Firebase', 'SQLite']
            ],
            [
                'title' => 'Custom Software Systems',
                'slug' => 'custom-software-systems',
                'short_description' => 'Tailored software platforms, internal operations tools, and database-driven business systems aligned with unique workflows.',
                'full_description' => 'Every organization has unique operational bottlenecks that off-the-shelf software cannot solve. We architect bespoke systems tailored specifically to your processes.',
                'icon' => 'Cpu',
                'hero_title' => 'Bespoke Software Systems Designed Around Your Operations',
                'hero_description' => 'Automate complex operations, unify departmental data, and eliminate manual bottlenecks with custom enterprise software.',
                'status' => 'active',
                'sort_order' => 3,
                'featured' => true,
                'challenges_solved' => [
                    'Fragmented manual spreadsheets and paperwork',
                    'Disconnected data across branches or departments',
                    'Rigid off-the-shelf tools that don’t fit workflows'
                ],
                'deliverables' => [
                    'Custom ERP Systems',
                    'Operations Automation Portals',
                    'Inventory & Stock Engines',
                    'Data Analytics Dashboards'
                ],
                'technologies' => ['Laravel 11', 'Next.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker']
            ],
            [
                'title' => 'UI/UX & Product Design',
                'slug' => 'ui-ux-product-design',
                'short_description' => 'User-centric interface design, wireframing, interactive prototyping, and design systems for web and mobile products.',
                'full_description' => 'We create visually refined, intuitive digital interfaces backed by behavioral research and design systems.',
                'icon' => 'Palette',
                'hero_title' => 'Intuitive Product Design Built for Human Interaction',
                'hero_description' => 'Turn complex technical processes into elegant, frictionless user experiences.',
                'status' => 'active',
                'sort_order' => 4,
                'featured' => true,
                'deliverables' => [
                    'User Journey Mapping',
                    'Figma Interactive Prototypes',
                    'Design System Tokens',
                    'Usability Testing Audits'
                ],
                'technologies' => ['Figma', 'Design Systems', 'Micro-Animations', 'Accessibility Standards']
            ],
            [
                'title' => 'AI Automation & Intelligent Workflows',
                'slug' => 'ai-automation-intelligent-workflows',
                'short_description' => 'Automated business workflows, intelligent customer support agents, and AI-assisted data extraction tools.',
                'full_description' => 'We integrate artificial intelligence and machine automation to eliminate repetitive operational chores.',
                'icon' => 'Bot',
                'hero_title' => 'Intelligent Automation for Accelerated Operations',
                'hero_description' => 'Automate document ingestion, customer inquiries, and routine administrative tasks.',
                'status' => 'active',
                'sort_order' => 5,
                'featured' => false,
                'deliverables' => [
                    'AI Document Extraction',
                    'Automated Support Chatbots',
                    'Smart WhatsApp API Bots',
                    'Workflow Webhooks'
                ],
                'technologies' => ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'WhatsApp Cloud API']
            ],
            [
                'title' => 'Project Management & Technical Delivery',
                'slug' => 'project-management-technical-delivery',
                'short_description' => 'Structured technology project governance from requirements gathering to milestone tracking, risk mitigation, and production delivery.',
                'full_description' => 'Technology projects require disciplined execution and transparent governance to succeed predictably.',
                'icon' => 'CheckSquare',
                'hero_title' => 'Structured Governance for Complex Tech Initiatives',
                'hero_description' => 'Ensure your software projects stay aligned with strategic objectives, budget constraints, and strict milestones.',
                'status' => 'active',
                'sort_order' => 6,
                'featured' => false,
                'deliverables' => [
                    'Requirements Gathering',
                    'Milestone Planning',
                    'Technical Documentation',
                    'Quality Assurance'
                ],
                'technologies' => ['Agile / Scrum', 'Linear', 'Jira', 'Git Workflow', 'CI/CD']
            ],
            [
                'title' => 'IT Consultancy',
                'slug' => 'it-consultancy',
                'short_description' => 'Strategic advisory on software architecture, technology stack selection, digital transformation, and infrastructure evaluation.',
                'full_description' => 'We provide professional technology advisory services to organizations planning new systems or modernizing legacy infrastructure.',
                'icon' => 'Compass',
                'hero_title' => 'Strategic Advisory for Confident Technology Decisions',
                'hero_description' => 'Evaluate technical options, optimize system architectures, and plan digital transformation with confidence.',
                'status' => 'active',
                'sort_order' => 7,
                'featured' => false,
                'deliverables' => [
                    'Technology Strategy',
                    'Software Architecture Blueprints',
                    'Stack Selection',
                    'System Audits'
                ],
                'technologies' => ['Enterprise Architecture', 'Cloud Infrastructure', 'API Strategy', 'Security Protocols']
            ],
            [
                'title' => 'Backend, Database & Cloud Solutions',
                'slug' => 'backend-database-cloud-solutions',
                'short_description' => 'Robust REST APIs, relational database design, cloud deployment, and secure backend infrastructure engineered for high uptime and security.',
                'full_description' => 'Reliable digital platforms require solid backend foundations. We design and build secure REST APIs, optimized database schemas, and cloud infrastructure.',
                'icon' => 'Database',
                'hero_title' => 'Secure, Resilient Backend & Database Architecture',
                'hero_description' => 'Power your applications with high-performance APIs, normalized database designs, and automated cloud deployments.',
                'status' => 'active',
                'sort_order' => 8,
                'featured' => true,
                'deliverables' => [
                    'REST API Development',
                    'Relational Database Architecture',
                    'Authentication & RBAC',
                    'DirectAdmin & Cloud Deployment'
                ],
                'technologies' => ['Laravel 11', 'PHP 8.3', 'MySQL', 'PostgreSQL', 'Redis', 'DirectAdmin']
            ]
        ];

        foreach ($services as $srv) {
            Service::updateOrCreate(['slug' => $srv['slug']], $srv);
        }

        // 5. Products (EventPass & TraderERP)
        Product::updateOrCreate(
            ['slug' => 'eventpass'],
            [
                'name' => 'EventPass',
                'tagline' => 'Event Registration, Digital Ticketing & QR Check-in Platform',
                'short_description' => 'A modern event management and ticketing platform designed to simplify event creation, attendee registration, digital ticket distribution, and high-speed QR check-ins.',
                'description' => 'EventPass is an end-to-end event ticketing platform engineered to serve event organizers, corporate conferences, concerts, and festivals.',
                'problem' => 'Event organizers often face chaotic gate management, fraudulent ticket duplicates, and manual attendee verification delays.',
                'solution' => 'EventPass delivers encrypted single-use QR ticketing, multi-gate mobile scanner validation, and real-time attendance dashboards.',
                'target_audience' => ['Conference Organizers', 'Entertainment Producers', 'Institutions & Workshops'],
                'status' => 'in_development',
                'featured' => true,
                'sort_order' => 1,
                'technologies' => ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel API', 'MySQL', 'QR Encryption']
            ]
        );

        Product::updateOrCreate(
            ['slug' => 'tradererp'],
            [
                'name' => 'TraderERP',
                'tagline' => 'Business Operations, Inventory & SME Management Suite',
                'short_description' => 'An integrated business management and ERP platform designed specifically for retailers, wholesalers, and growing SMEs to manage sales, stock, and credit.',
                'description' => 'TraderERP solves the real-world operational challenges of SMEs by combining Point of Sale (POS), multi-branch inventory tracking, expense management, credit/debt ledgering, and financial reporting.',
                'problem' => 'Small and growing businesses struggle with stock shrinkage, unrecorded credit sales, and zero visibility across multiple shop locations.',
                'solution' => 'TraderERP centralizes point-of-sale checkout, automated inventory deductions, and customer credit tracking with reminder triggers.',
                'target_audience' => ['Retail & Wholesale Merchants', 'Supermarkets & Pharmacies', 'Distributors & Commercial Enterprises'],
                'status' => 'in_development',
                'featured' => true,
                'sort_order' => 2,
                'technologies' => ['Laravel 11', 'MySQL', 'Next.js Frontend', 'Tailwind CSS', 'Thermal Receipt Support']
            ]
        );

        // 6. Projects / Case Studies (Including Restaurant Management & Ordering System)
        Project::updateOrCreate(
            ['slug' => 'eventpass-ticketing-platform'],
            [
                'title' => 'EventPass - Digital Ticketing Infrastructure',
                'client_name' => 'Sardauna Tech Lab Product Division',
                'industry' => 'Events & Entertainment',
                'service_category' => 'Digital Product Engineering',
                'short_description' => 'A high-throughput event management and ticketing platform featuring secure QR verification and real-time organizer telemetry.',
                'overview' => 'EventPass was conceived to resolve the widespread logistical friction of physical ticketing and fraudulent ticket duplication at events across Nigerian urban centers.',
                'challenge' => 'High attendance events routinely suffer from slow gate lines due to slow mobile verification and cellular network congestion at venue perimeters.',
                'requirements' => ['Sub-second QR scanning speed', 'Prevention of double-spend fraud', 'Mobile-optimized checkout'],
                'solution' => 'Built a Next.js progressive web application paired with a high-concurrency Laravel REST API. Implemented offline-cached ticket validation hashes on gate devices.',
                'outcome' => 'Successfully validated in prototype field trials, achieving 0.4s average scan speed and zero ticket duplication errors.',
                'year' => '2025',
                'status' => 'ongoing',
                'featured' => true,
                'sort_order' => 1,
                'technologies' => ['Next.js', 'Laravel', 'MySQL', 'QR Scanner Engine', 'Tailwind CSS'],
                'system_capabilities' => ['Multi-tier ticket inventory management', 'Automated email ticket delivery', 'Real-time scanner app', 'Live attendee density dashboard']
            ]
        );

        Project::updateOrCreate(
            ['slug' => 'tradererp-business-suite'],
            [
                'title' => 'TraderERP - Retail & Inventory Management Platform',
                'client_name' => 'Commercial SME Pilot Group',
                'industry' => 'Retail & Commerce',
                'service_category' => 'Custom Software Systems',
                'short_description' => 'A multi-branch business operating system unifying point-of-sale, stock tracking, customer credit ledgers, and profit reporting.',
                'overview' => 'Engineered for retail and distribution businesses operating in dynamic commercial environments, TraderERP replaces fragmented paperwork with unified digital workflows.',
                'challenge' => 'Business owners lacked consolidated daily insights across scattered retail branches and lost revenue to untracked customer credit balances.',
                'solution' => 'Engineered a modular ERP system with optimized database indexing for high-volume transactions, multi-store stock movement validation, and automated debt tracking.',
                'outcome' => 'Eliminated manual daily reconciliation overhead for pilot merchants, providing instant profit margins per SKU.',
                'year' => '2025',
                'status' => 'ongoing',
                'featured' => true,
                'sort_order' => 2,
                'technologies' => ['Laravel 11', 'PHP 8.3', 'MySQL', 'Next.js', 'REST APIs'],
                'system_capabilities' => ['Fast POS checkout', 'Multi-warehouse stock transfers', 'Customer credit aging ledgers', 'Exportable financial statements']
            ]
        );

        Project::updateOrCreate(
            ['slug' => 'restaurant-management-ordering-system'],
            [
                'title' => 'Restaurant Management & Online Ordering System',
                'client_name' => "Queen's Palace Eatery & Confectionery",
                'industry' => 'Hospitality & Food Services',
                'service_category' => 'Custom Software Systems',
                'short_description' => 'An integrated online food ordering platform, real-time kitchen display system (KDS), table reservation portal, and automated sales reconciliation suite.',
                'overview' => "Engineered for high-volume dining and fast-food establishments (reference: https://www.queenspalaceeatery.com), this platform unifies customer web/mobile ordering, automated kitchen order tickets (KOT), delivery driver routing, and daily ledger telemetry.",
                'challenge' => 'Peak meal hours created chaotic front-desk phone lines, uncoordinated kitchen preparation bottlenecks, and untracked dispatch delivery handoffs.',
                'requirements' => ['Real-time interactive digital food menu', 'Direct WhatsApp & SMS dispatch order alerts', 'Multi-kitchen display ticket printing', 'Automated end-of-day sales auditing'],
                'solution' => 'Architected a lightning-fast web ordering application integrated with Laravel backend micro-services, live kitchen ticket dispatch queues, automated receipt generators, and customer order status trackers.',
                'outcome' => 'Reduced average order preparation turnaround by 35% and increased direct online order volume by over 60% within the first quarter of deployment.',
                'year' => '2025',
                'status' => 'completed',
                'featured' => true,
                'sort_order' => 3,
                'technologies' => ['Next.js', 'Laravel 11', 'MySQL', 'Tailwind CSS', 'WebSockets', 'Thermal Receipt Printing'],
                'system_capabilities' => ['Live kitchen order routing (KDS)', 'Custom meal modifiers & add-on combos', 'Automated delivery fee distance calculator', 'Multi-shift cashier ledger reconciliation']
            ]
        );
    }
}
