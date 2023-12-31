export type Project = {
  title: string
  description: string
  url: string
  type: 'video' | 'blog' | string
  tags: string[]
  links: { title: string; url: string }[]
}