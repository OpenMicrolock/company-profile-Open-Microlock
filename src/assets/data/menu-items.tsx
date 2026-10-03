import { MenuItemType } from "@/types/menu";




export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'Demos',
    children: [
      {
        key: 'Home',
        label: 'Classic Default',
        url: '/home',
        parentKey: 'demos',
      },
      {
        key: 'software-company',
        label: 'Software Company',
        url: '/software-company',
        parentKey: 'demos',
      },
      {
        key: 'finance-consulting',
        label: 'Finance Consulting',
        url: '/finance-consulting',
        parentKey: 'demos',
      },
      {
        key: 'ai-agency',
        label: 'AI Agency',
        url: '/ai-agency',
        parentKey: 'demos',
      },
      {
        key: 'product-landing',
        label: 'Product Landing',
        url: '/product-landing',
        parentKey: 'demos',
      },
      {
        key: 'saas',
        label: 'SaaS',
        url: '/saas',
        parentKey: 'demos',
      },
      {
        key: 'ai-chatbot',
        label: 'SaaS AI Chatbot',
        url: '/ai-chatbot',
        parentKey: 'demos',
      },
      {
        key: 'application-showcase',
        label: 'Application Showcase',
        url: '/application-showcase',
        parentKey: 'demos',
      },
      {
        key: 'personal-portfolio',
        label: 'Personal Portfolio',
        url: '/personal-portfolio',
        parentKey: 'demos',
      },
      {
        key: 'blog-home',
        label: 'Blog home',
        url: '/blog-home',
        parentKey: 'demos',
      },

    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    children: [
      {
        key: 'about',
        label: 'About',
        parentKey: 'pages',
        children: [
          {
            key: 'about-v1',
            label: 'About v.1',
            url: '/about/about-v1',
            parentKey: 'about',
          },
          {
            key: 'about-v2',
            label: 'About v.2',
            url: '/about/about-v2',
            parentKey: 'about',
          },
          {
            key: 'services-grid',
            label: 'Services Grid',
            url: '/about/services-grid',
            parentKey: 'about',
          },
          {
            key: 'services-list',
            label: 'Services List',
            url: '/about/services-list',
            parentKey: 'about',
          },
          {
            key: 'services-single',
            label: 'Service Single',
            url: '/about/services-single',
            parentKey: 'about',
          },
          {
            key: 'team',
            label: 'Team',
            url: '/about/team',
            parentKey: 'about',
          },
          {
            key: 'career',
            label: 'Career',
            url: '/about/career',
            badge: {
              text: '2 Job',
              variant: 'success',
            },
            parentKey: 'about',
          },
          {
            key: 'career-single',
            label: 'Career Single',
            url: '/about/career-single',
            parentKey: 'about',
          },
        ],
      },
      {
        key: 'contact-1',
        label: 'Contact Us v1',
        url: '/contact-1',
        parentKey: 'pages',
      },
      {
        key: 'contact-2',
        label: 'Contact Us v2',
        url: '/contact-2',
        parentKey: 'pages',
      },
      {
        key: 'pricing-1',
        label: 'Pricing v1',
        url: '/pricing-1',
        parentKey: 'pages',
      },
      {
        key: 'pricing-2',
        label: 'Pricing v2',
        url: '/pricing-2',
        parentKey: 'pages',
      },
      {
        key: 'saass',
        label: 'SaaS Pages',
        parentKey: 'pages',
        children: [
          {
            key: 'features',
            label: 'Feature Single',
            url: '/saas/features-single',
            parentKey: 'saass',
          },
          {
            key: 'integrations',
            label: 'Integrations',
            url: '/saas/integrations',
            parentKey: 'saass',
          },
          {
            key: 'integrations-single',
            label: 'Integration Single',
            url: '/saas/integrations-single',
            parentKey: 'saass',
          },
        ],
      },
      {
        key: 'portfolio',
        label: 'Portfolio',
        parentKey: 'pages',
        children: [
          {
            key: 'portfolio-grid',
            label: 'Portfolio Grid',
            url: '/portfolio/portfolio-grid',
            parentKey: 'portfolio',
          },
          {
            key: 'portfolio-list',
            label: 'Portfolio List',
            url: '/portfolio/list',
            parentKey: 'portfolio',
          },
          {
            key: 'portfolio-modern',
            label: 'Portfolio Modern',
            url: '/portfolio/modern',
            parentKey: 'portfolio',
          },
          {
            key: 'portfolio-case-study-v1',
            label: 'Portfolio Case Study v.1',
            url: '/portfolio/study1',
            parentKey: 'portfolio',
          },
          {
            key: 'portfolio-case-study-v2',
            label: 'Portfolio Case Study v.2',
            url: '/portfolio/study2',
            parentKey: 'portfolio',
          },
        ],
      },
      {
        key: 'blog',
        label: 'Blog',
        parentKey: 'pages',
        children: [
          {
            key: 'blog-minimal',
            label: 'Blog Minimal',
            url: '/blog/blog-minimal',
            parentKey: 'blog',
          },
          {
            key: 'blog-single',
            label: 'Blog Single',
            url: '/blog/blog-single',
            parentKey: 'blog',
          },
        ],
      },
      {
        key: 'error404',
        label: 'Error 404',
        url: '/error404',
      },
      {
        key: 'coming-soon',
        label: 'Coming soon',
        url: '/coming-soon',
      },
      {
        key: 'pages-auth',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-sign-in',
            label: 'Sign In',
            url: '/auth/sign-in',
            // target: '_blank',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth',
            label: 'Sign Up',
            url: '/auth/sign-up',
            // target: '_blank',
            parentKey: 'pages-auth',
          },
          {
            key: 'autforgot-pass',
            label: 'Forgot Password',
            url: '/auth/forgot-password',
            // target: '_blank',
            parentKey: 'pages-auth',
          },
        ],
      },
    ],
  },
]
