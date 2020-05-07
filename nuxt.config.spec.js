import config from './nuxt.config'
import { articles } from './assets/subjects'

describe('nuxt.config', () => {
  const routesToGenerate = config.generate.routes

  articles.forEach((article) => {
    it(`should generate dynamic routes for "${article.name}"`, () => {
      expect(routesToGenerate).toContain(`/subjects/articles/${article.slug}`)
    })
  })
})
