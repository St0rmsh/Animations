export const projects = [
  {
    "id": "1",
    "slug": "zentro-backend",
    "number": "01",
    "title": "Zentro",
    "subtitle": "Scalable Backend Infrastructure for Modern Apps",
    "category": "Backend Development",
    "year": "2025",
    "role": "Backend Engineer",
    "description": "A production-ready Node.js/Express backend with JWT auth, OTP email verification, and modular three-layer architecture built for scale.",
    "longDescription": "Zentro is a full-featured backend system engineered for modern SaaS applications. It implements a clean three-layer architecture — controllers, services, and models — keeping business logic decoupled and testable. The auth system supports JWT-based sessions alongside OTP email verification powered by Nodemailer and Gmail SMTP, with MongoDB TTL indexes handling automatic OTP expiry. Dark-themed, table-based transactional email templates ensure visual consistency across all email clients. The API is fully typed with TypeScript and structured for horizontal scaling.",
    "coverImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
    ],
    "tags": ["Node.js", "TypeScript", "MongoDB", "Express", "Nodemailer"]
  },
  {
    "id": "2",
    "slug": "obsidian-ide",
    "number": "02",
    "title": "Obsidian IDE",
    "subtitle": "Cloud-Based IDE with AI Coding Assistant",
    "category": "Full Stack Development",
    "year": "2025",
    "role": "Full Stack Engineer",
    "description": "A VSCode-inspired cloud IDE running on Kubernetes with an AI agent powered by LangChain and Mistral, real-time SSE streaming, and subdomain-based sandbox routing.",
    "longDescription": "Obsidian IDE is a microservices-based cloud development environment designed to run isolated coding sandboxes per user. Each sandbox is a Kubernetes pod with a Redis TTL-based lifecycle, auto-destroyed when idle. The AI coding assistant is built on LangChain with Mistral as the LLM, streaming responses to the client via Server-Sent Events. Google OAuth handles authentication with JWT session management. RabbitMQ drives async notifications via Nodemailer, and nginx ingress routes sandbox previews through dynamic subdomains (*.preview.localhost). Skaffold enables hot-rebuild during development.",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&q=80"
    ],
    "tags": ["Kubernetes", "LangChain", "Mistral AI", "React", "RabbitMQ"]
  },
  {
    "id": "3",
    "slug": "portfolio-v2",
    "number": "03",
    "title": "Portfolio V2",
    "subtitle": "Immersive Developer Portfolio with Motion Design",
    "category": "Frontend Development",
    "year": "2026",
    "role": "Frontend Engineer & Designer",
    "description": "A Next.js portfolio with Lenis smooth scrolling, GSAP ScrollTrigger animations, and a custom design system built for maximum visual impact.",
    "longDescription": "Portfolio V2 is a complete redesign focused on motion-first storytelling. Built with Next.js 14 App Router, it uses Lenis for buttery smooth scrolling wired into GSAP's ticker to eliminate ScrollTrigger conflicts. Every section has a purpose-built scroll animation — parallax heroes, pinned panels, staggered reveals, and horizontal scrolling project showcases. The design system is built entirely with CSS custom properties, with a dark base palette and carefully tuned typographic scale using variable fonts. Performance is a first-class concern with lazy-loaded assets and optimized LCP.",
    "coverImage": "https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
    ],
    "tags": ["Next.js", "GSAP", "Lenis", "Framer Motion", "Tailwind CSS"]
  },
  {
    "id": "4",
    "slug": "shopstream",
    "number": "04",
    "title": "ShopStream",
    "subtitle": "Real-Time E-Commerce Platform with Live Inventory",
    "category": "Full Stack Development",
    "year": "2024",
    "role": "Full Stack Developer",
    "description": "A performant e-commerce platform with real-time inventory updates via WebSockets, Stripe payments, and a Next.js storefront optimized for Core Web Vitals.",
    "longDescription": "ShopStream is a full-stack e-commerce solution engineered for high-traffic product launches. The storefront is built in Next.js with ISR for product pages, ensuring fast loads without stale data. Inventory levels update in real time via WebSocket connections, preventing overselling during flash sales. Stripe handles the full checkout lifecycle including webhooks for order fulfillment. The admin dashboard provides live sales analytics with Chart.js visualizations. A custom Axios instance handles all API communication with request/response interceptors for auth token refresh. The backend follows RESTful conventions with rate limiting and input validation via Zod.",
    "coverImage": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    "tags": ["Next.js", "WebSockets", "Stripe", "PostgreSQL", "Zod"]
  },
  {
    "id": "5",
    "slug": "devpulse",
    "number": "05",
    "title": "DevPulse",
    "subtitle": "Developer Activity Dashboard with GitHub & CI Insights",
    "category": "Frontend Development",
    "year": "2024",
    "role": "Frontend Engineer",
    "description": "A developer productivity dashboard aggregating GitHub activity, CI/CD pipeline status, and PR review metrics into a single real-time view.",
    "longDescription": "DevPulse solves the context-switching problem for developers juggling multiple repositories. It pulls data from the GitHub REST and GraphQL APIs to surface commit activity, open PRs, review turnaround times, and CI pipeline health in a unified dashboard. Charts are built with Recharts and update on a polling interval with optimistic UI updates. The frontend uses Redux Toolkit for state management with async thunks handling all API side effects. Custom React hooks abstract the data-fetching logic, keeping components lean. The app is fully responsive and supports dark mode via a CSS custom properties token system.",
    "coverImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "heroImage": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1400&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    ],
    "tags": ["React", "Redux Toolkit", "GitHub API", "Recharts", "TypeScript"]
  }
]