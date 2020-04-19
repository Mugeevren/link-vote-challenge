/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import { showErrorNotification, showSuccessNotification } from '../utils/UserNotifications'

const state = {
	links: [],
};

const mutations = {
    updateLinkPoints(state, [linkId, points]) {
        state.links.forEach(link => {
            if(link.id === linkId) {
                link.points = points;
            }
        });
    },
    submitNewLink(state, linkData) {
        linkData.id = state.links.length + 1;
        linkData.points = 0;
        state.links.push(linkData);
        showSuccessNotification(linkData.title.toUpperCase() + " added.");
    },
    deleteLink(state, linkId) {
        let linkIndex = state.links.findIndex(link => {
            return link.id === linkId
        });
        let linkTitle = (' ' + state.links[linkIndex].title).slice(1);
        Vue.delete(state.links, linkIndex);
        showSuccessNotification(linkTitle.toUpperCase() + " deleted.");
    },
    updateStore(state) {
        localStorage.setItem('store', JSON.stringify(state));
    },
	initialiseStore(state) {
		if(localStorage.getItem('store')) {
			this.replaceState(
				Object.assign(state, JSON.parse(localStorage.getItem('store')))
			);
		}
	}
};

const getters = {
	links: state => state.links.sort((a, b) => b.id - a.id)
};

const actions = {
    updatePoints({ commit, state }, { linkId, points }) {
        commit('updateLinkPoints', [linkId, points]);
        commit('updateStore');
    },
    createLink({ commit, state }, linkData) {
        commit('submitNewLink', linkData);
        commit('updateStore');
        commit('initialiseStore');
	},
	deleteLink({ commit, state }, linkId) {
        commit('deleteLink', linkId);
        commit('updateStore');
	},
};


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
	state,
	mutations,
    getters,
    actions
});

// store.subscribe((mutation, state) => {
// 	// Store the state object as a JSON string
// 	localStorage.setItem('store', JSON.stringify(state));
// });

export default store;
