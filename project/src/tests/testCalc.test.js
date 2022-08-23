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

    it('Test method add (default)', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name=""]')
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

    it('Test method multiply', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="*"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(10)
    })

    it('Test method div', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="/"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2.5)
    })

    it('Test method div (На 0 делить нельзя)', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('0')

        const methodSum = wrapper.find('button[name="/"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(NaN)
    })

    it('Test method degree', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="^"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(25)
    })

    it('Test method whole', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="[ ]"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method pushEl (добавление в operand1)', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('52')

        const numberEl = wrapper.find('input[name="2"]')
        
        wrapper.vm.pushEl(numberEl, operand1)
        
        expect(operand1).toBe('522')
    })

    it('Test method pushEl (добавление в operand2)', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('52')

        const numberEl = wrapper.find('input[name="2"]')
        
        wrapper.vm.pushEl(numberEl, false)
        
        expect(operand2).toBe('522')
    })

    it('Test method pushEl (удаление в operand1)', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('52')
        
        wrapper.vm.pushEl("<", true)
        
        expect(operand1).toBe('5')
    })

    it('Test method pushEl (удаление в operand2)', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('52')
        
        wrapper.vm.pushEl("<", false)

        expect(operand2).toBe('5')
    })
})