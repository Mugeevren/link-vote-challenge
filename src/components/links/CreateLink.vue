<!-- eslint-disable -->
<i18n>
	{
		"en": {
		}
	}
</i18n>

<template>
	<v-flex class="container-flex">
		<v-flex class="flex-aligner"></v-flex>
		<v-flex class="flex-aligner" data-label="create-link-container">
			<v-flex xs12 class="text-xs-left">
				<button
					data-label="link-create-button"
					class="create-button"
					type="button"
					@click="$router.push('/')">
					<v-icon>mdi-arrow-left</v-icon>
					Return to list</button>
					
			</v-flex>
			<v-flex xs12>
				<div class="create-link-form">
					<v-flex xs12>
						<h1>Add New Link</h1>
					</v-flex>
					<v-flex xs12>
						<h4>Link Name:</h4>
						<v-text-field
							single-line
							v-model="linkData.title"
							placeholder="e.g. Alphabet"
                            :rules="requiredValidation"
						/>
					</v-flex>
					<v-flex xs12>
						<h4>Link URL:</h4>
						<v-text-field
							single-line
							v-model="linkData.url"
							placeholder="e.g. http://abc.com"
                            :rules="urlValidations"
						/>
					</v-flex>
					<v-btn
						color="primary-button"
						text
						@click="addNewLink">
							ADD
					</v-btn>
				</div>
			</v-flex>
		</v-flex>
		<v-flex  class="flex-aligner"></v-flex>
	</v-flex>
</template>
<script>
/* eslint-disable */
import { mapActions } from 'vuex'
import { showErrorNotification } from '../../utils/UserNotifications'
import { isValidUrl } from '../../utils/validators'

export default {
	name: 'CreateLink',
	components: {
	},
	data() {
		return {
			linkData: {},
			urlValidations: [
				(data) => (data && data.length > 0) || 'This field is required!', 
				(data) => isValidUrl(data) || 'Please enter a valid url!'
			],
			requiredValidation: [
				(data) => (data && data.length > 0) || 'This field is required!'
			]
		}
	},
	beforeMount: function() {
	},
	computed: {
	},
	methods: {
		addNewLink() {
			if(this.linkData && this.linkData.title && this.linkData.title.length > 0 
				&& this.linkData.url && this.linkData.url.length > 0) {
				if(isValidUrl(this.linkData.url)) {
					this.createLink(this.linkData);
				}
				else {
					showErrorNotification("Please enter a valid url!");
				}
			}
			else {
				showErrorNotification("You must fill required fields!");
			}
		},
		...mapActions(['createLink']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */
.create-button {
	margin-bottom: 30px;
	font-size: 17px;
	font-weight: 600;
}
.create-link-form {
	h1 {
		font-weight: 600;
	}
	h4, h1 {
		text-align: left;
	}
	.flex {
		margin-bottom: 20px;
		.v-text-field {
			padding-top: 0px;
		}
	}
	.primary-button {
		float: right;
	}
}

</style>
