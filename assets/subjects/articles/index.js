import helloWorldArticle from './hello-world.md'

export default [
  {
    name: 'I start a blog',
    slug: 'hello-world',
    content: helloWorldArticle,
    date: new Date('2020-05-04'),
    description: `soon articles will come`,
  },
].map((s) => ({ ...s, type: 'article' }))
