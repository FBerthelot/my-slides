import { shallowMount } from '@vue/test-utils'
import CardVideo from './video.vue'

describe('Card Video', () => {
  it('should display the video', () => {
    const component = shallowMount(CardVideo, {
      propsData: {
        video: 'toto.fr',
      },
    })

    expect(component.html()).toContain('toto.fr')
  })
})
