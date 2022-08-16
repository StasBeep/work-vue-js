// Тестирование калькулятора
import { mount } from '@vue/test-utils'
import Calc from '../components/Calc.vue'

describe('Calculator input test', () => {
    it('Test operand1 input value', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        
        operand1.setValue('1')

        // Строку "operand1.setValue('1')" можно заменить на
        // operand1.element.value('1')
        // operand1.trigger('input') (равносильные строки)

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        
        operand2.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })

    it('Test method add', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="+"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method substract', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="-"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(0)
    })
})