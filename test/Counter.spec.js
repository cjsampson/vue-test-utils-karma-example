// import 'babel-polyfill'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'
import sinon from 'sinon'
const util = require('util');


describe('Counter.vue', () => {
    it.only('increments count when button is clicked', async () => {
        const wrapper = mount(Counter)

        const button = wrapper.find('.button-thing')

        console.log('-----------------------------------------')
        console.log('this is a thing')
        
        console.log(util.inspect(button, { showHidden: true, depth: null }));

        console.log('this is a thing')
        console.log('-----------------------------------------')
        
        // expect(wrapper.find('div').text()).contains('1')
    })

    it('does a thing', () => {
        console.log('-----------------------------------------')
        console.log(util.inspect(Counter, { showHidden: true, depth: null }));
        console.log('-----------------------------------------')

        // const wrapper = mount(Counter)
        
        // const stubby = sinon.stub
        // stubby.returns(2)

        expect(true).to.equal(true)
    })
})
