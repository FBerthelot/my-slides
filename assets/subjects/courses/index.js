import angularCourse from './angular'
import javaScript from './javaScript'
import esModules from './esmodules'
import redux from './redux'
import tddComponents from './testerComposants'

export default [
  javaScript,
  esModules,
  angularCourse,
  tddComponents,
  redux,
].map((s) => ({ ...s, type: 'course' }))
