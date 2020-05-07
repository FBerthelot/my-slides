import allTalks from './talks'
import allCourses from './courses'
import allArticles from './articles'
import allProjects from './projects.js'
import allOthers from './other.js'

export const talks = allTalks
export const courses = allCourses
export const articles = allArticles
export const projects = allProjects
export const others = allOthers

export const subjects = [
  ...talks,
  ...courses,
  ...others,
  ...articles,
  ...projects,
]
