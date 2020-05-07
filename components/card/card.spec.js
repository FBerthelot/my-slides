import { shallowMount } from '@vue/test-utils'
import Card from './card.vue'

describe('Card', () => {
  it('should display slots for links', () => {
    const component = shallowMount(Card, {
      propsData: {
        link: 'toto',
      },
      slots: { default: 'hello world' },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should display slots for non-link', () => {
    const component = shallowMount(Card, {
      slots: { default: 'hello world' },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should not have a tag for non-link', () => {
    const component = shallowMount(Card, {
      slots: { default: 'hello world' },
    })
    expect(component.find('a').exists()).toBe(false)
  })

  it('should have a tag for link', () => {
    const component = shallowMount(Card, {
      propsData: {
        link: 'toto',
      },
      slots: { default: 'hello world' },
    })
    expect(component.find('a').exists()).toBe(true)
  })
})
