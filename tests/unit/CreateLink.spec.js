/* eslint-disable */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import CreateLink from '@/components/links/CreateLink.vue'
import { merge } from 'lodash'

describe('CreateLink.vue', () => {

	const actions = {
		createLink: jest.fn()
	};

	let wrapper = null;

	afterEach(() => {
		if (wrapper) {
			wrapper.destroy();
			wrapper = null;
		}
	})

	const createWrapper = (overrides = {}) => {
		let localVue = createLocalVue();
    	localVue.use(Vuex);

		const store = new Vuex.Store({ actions });

		const defaultConfig = {
			localVue,
      store
		};
		return shallowMount(CreateLink, merge(defaultConfig, overrides));
	}

  it('should create wrapper properly', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[data-label="create-link-container"]').exists()).toBe(true);
  })

})
