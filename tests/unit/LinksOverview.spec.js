/* eslint-disable */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import LinksOverview from '@/components/links/LinksOverview.vue'
import { merge } from 'lodash'

describe('LinksOverview.vue', () => {

	const getters = {
		links: () => [{
        id: "1",
        title: "Hacker News",
        url: "https://news.ycombinator.com/",
        points: 6
    },
    {
        id: "2",
        title: "Product Hunt",
        url: "https://producthunt.com/",
        points: 4
    }].sort((a, b) => b.id - a.id)
	};
  
  let mockRouterPush;
	let wrapper = null;

	afterEach(() => {
		if (wrapper) {
			wrapper.destroy();
			wrapper = null;
		}
  })
  
  beforeEach(()=> {
    mockRouterPush = jest.fn()
  })

	const createWrapper = (overrides = {}) => {
		let localVue = createLocalVue();
    localVue.use(Vuex);

		const store = new Vuex.Store({ getters });

		const defaultConfig = {
			localVue,
      store,
      mocks: {
				$router: {
					push: mockRouterPush,
				},
				$route: {
					path: '/',
				},
			},
		};
		return mount(LinksOverview, merge(defaultConfig, overrides));
	}

  it('should create wrapper properly', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[data-label="linksOverview"]').exists()).toBe(true);
  })

  it('should display submit new link button', () => {
    const wrapper = createWrapper();
    let submitButton = wrapper.find('[data-label="link-create-button"]');
    expect(submitButton.exists()).toBe(true);
  })

  it('should redirect to submit link page when button clicked', () => {
    const wrapper = createWrapper();
    let submitButton = wrapper.find('[data-label="link-create-button"]');
    submitButton.trigger('click');
    expect(mockRouterPush).toHaveBeenCalledTimes(1)
    expect(mockRouterPush).toHaveBeenCalledWith('/createlink')
  })

  it('should display all links as a link', async () => {
    const wrapper = createWrapper();
    expect(wrapper.findAll('.link-list-item').length).toBe(2);
  })

  it('should display the links as sorted like last created links at top', async () => {
    const wrapper = createWrapper();
    let firstLinkTitle = wrapper.findAll('.link-title').at(0);
    expect(firstLinkTitle.text()).toContain('Product Hunt');
  })

})
