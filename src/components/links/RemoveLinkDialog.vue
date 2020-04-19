<!-- eslint-disable -->
<template>
	<modal
		v-show="showDialog"
		@close="hideDialog"			
		title="Remove Link">
			<div class="remove-text">
				Do you want to remove:
				<div class="link-title">{{link.title}}</div>
			</div>
		
			<div class="buttons-container">
				<v-btn
					color="primary-button"
					text
					@click="confirmRemove">
						OK
				</v-btn>
		
				<v-btn
					color="primary-button"
					text
					@click="hideDialog">
						CANCEL
				</v-btn>
			</div>
	</modal>
</template>
<script>
/* eslint-disable */
import { mapActions } from 'vuex'
import Modal from './Modal.vue';

export default {
	name: 'RemoveLinkDialog',
	components: { 
		Modal
	},
	props: {
		link: {
			required: true,
		},
		show: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
		}
	},
	computed: {
		showDialog() {
			console.log(this.show);
			return this.show;
		}
	},
	methods: {
		confirmRemove() {
			this.deleteLink(this.link.id);
			//TODO: notification here
			this.$emit('close');
		},
		hideDialog() {
			this.$emit('close');
		},
		...mapActions(['deleteLink']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */
.remove-text {
	margin: 20px 10px;
	font-size: 25px;
	.link-title {
		font-size: 35px;
		font-weight: 600;
		overflow: hidden;
    	text-overflow: ellipsis
	}
}

</style>


