import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'
// import sinon from 'sinon'
import util from 'util'


describe('Counter.vue', () => {
    it.only('increments count when button is clicked', async () => {
        const wrapper = mount(Counter)

        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.count).to.equal(1)

        // console.log('--------------------button---------------------')
        // console.log(util.inspect(wrapper), { showHidden: true, depth: null });
        // console.log('--------------------button---------------------')

        // expect(wrapper.vm.count).to.equal(0)
        // const button = wrapper.find('button')
        // button.trigger('click')
        // expect(wrapper.vm.count).to.equal(1)

        // expect(wrapper.contains('button')).to.equal(true)

        // console.log(util.inspect(button, { showHidden: true, depth: null }));
        // console.log(util.inspect(button.html(), { showHidden: true, depth: null }));

        // console.log(util.inspect(button, { showHidden: true, depth: null }));
        // wrapper.find('button').trigger('click')       
        // expect(wrapper.find('div').text()).contains('1')
    })

    it('does a thing', () => {
        console.log('-----------------------------------------')
        console.log(util.inspect(Counter, { showHidden: true, depth: null }));
        console.log('-----------------------------------------')

        expect(true).to.equal(true)
    })
})
