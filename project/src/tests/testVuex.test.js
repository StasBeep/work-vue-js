import { shallowMount, createLocalVue } from '@vue/test-utils'
import TestVuexComponent from './TestVuexComponent.vue'
import Vuex from 'vuex'

// createLocalVue - возвращает класс Vue, чтобы вы могли добавлять компоненты,
// примеси и устанавливать плагины без загрязнения глобалдьного класса Vue

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions from testComponent', () => {
    let actions
    let store

    beforeEach(() => {
        // mock-функция
        actions = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    }) 

    it('run action win onSave', () => {
        const wrapper = shallowMount(TestVuexComponent, { store, localVue })

        const testInput = wrapper.find('input')

        testInput.element.value = 'My test Action'

        testInput.setValue('123')

        const btn = wrapper.find('button')
        btn.trigger('click')

        expect(actions.addData).toHaveBeenCalled()
    })
})