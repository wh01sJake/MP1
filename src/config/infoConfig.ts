export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Jake Fang'
export const headline = 'CS student at Nation College of Ireland.'
export const introduction =
    "Hi! I'm Jake Fang, a dedicated computer science student passionate about Java backend development. Currently building robust systems with Spring Boot while exploring enterprise-level solutions."
export const email = 'intelijake@gmail.com'
export const githubUsername = 'wh01sJake'

// about page
export const aboutMeHeadline = 'My Path in Java Development'
export const aboutParagraphs = [
  "First-year student specializing in enterprise Java development at NCI. Focused on mastering Spring ecosystem, RESTful APIs, and database optimization techniques.",
  "Active contributor to open-source Java projects and maintainer of a student-led tech blog about backend development patterns. Recently built a high-concurrency ticket system using Spring Cloud.",
  "Currently deepening my understanding of distributed systems and microservices architecture through hands-on projects and AWS certifications."
]

// blog
export const blogHeadLine = "Backend Development Journey"
export const blogIntro =
  "Documenting my learning process in Java backend development - from core concepts to enterprise solutions."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'gitHub',
    href: 'https://github.com/wh01sJake',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/likun-fang-333969182/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
