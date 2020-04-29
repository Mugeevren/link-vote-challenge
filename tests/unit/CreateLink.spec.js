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
	let mockRouterPush;

	beforeEach(() => {
		mockRouterPush = jest.fn()
	})

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
			store,
			mocks: {
				$router: {
					push: mockRouterPush,
				},
				$route: {
					path: '/createlink',
				},
			},
		};
		return shallowMount(CreateLink, merge(defaultConfig, overrides));
	}

  it('should create wrapper properly', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[data-label="create-link-container"]').exists()).toBe(true);
  })

  it('should redirect to link list page when return to list button clicked', () => {
	const wrapper = createWrapper();
	let returnButton = wrapper.find('[data-label="link-create-button"]');
	returnButton.trigger('click');
	expect(mockRouterPush).toHaveBeenCalledTimes(1)
	expect(mockRouterPush).toHaveBeenCalledWith('/')
  })

})
