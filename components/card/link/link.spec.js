import { mount } from '@vue/test-utils'
import CardLink from './link.vue'

describe('Card Link', () => {
  it('should be a tag by default', () => {
    const component = mount(CardLink)
    expect(component.contains('a')).toBeTruthy()
  })

  it('should use button when overidding component', () => {
    const component = mount(CardLink, {
      propsData: {
        component: 'button',
      },
    })
    expect(component.contains('button')).toBeTruthy()
  })

  it('should display slots', () => {
    const component = mount(CardLink, {
      slots: { default: 'hello world' },
    })
    expect(component.html()).toContain('hello world')
  })
})
