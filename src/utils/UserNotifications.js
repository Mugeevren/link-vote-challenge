/* eslint-disable */
import Vue from 'vue'

export function showErrorNotification(errorMessage) {
	Vue.notify({
		text: errorMessage ? errorMessage : `Something went wrong.`,
		type: 'error',
	})
}

export function showSuccessNotification(successMessage) {
	Vue.notify({
		text: successMessage,
		type: 'success',
	})
}

