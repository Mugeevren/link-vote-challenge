<!-- eslint-disable -->
<i18n>
	{
		"en":  {
		}
	}
</i18n>
<template>
	<div class="link-list-item">
		<div class="point-counter"><div class="point-number">{{link.points}}</div>points</div>
		<div class="link-info">
			<div class="link-title">{{link.title}}</div>
			<div class="link-url">({{link.url}})</div>
			<div class="link-voter">
				<div class="up-voter" v-on:click="upVote">
					<v-icon>mdi-arrow-up</v-icon><span class="vote-text">up vote</span>
					</div>
				<div class="down-voter" v-on:click="downVote">
					<v-icon>mdi-arrow-down</v-icon><span class="vote-text">down vote</span>
				</div>
			</div>
		</div>
		<div 
			id="remove-link-icon" 
			class="delete-icon"
			v-on:click="deleteLinkItem"><v-icon>mdi-delete</v-icon></div>
		<remove-link-dialog :link="link" :show="showRemoveDialog" @close="hideRemoveDialog"></remove-link-dialog>
	</div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
import RemoveLinkDialog from './RemoveLinkDialog'

export default {
	name: 'LinkListItem',
	components: {
		RemoveLinkDialog
	},
	data() {
		return {
			showRemoveDialog: false,
		}
	},
	props: {
		link: {
			required: true
		}
	},
	computed: {
	},
	methods: {
		upVote() {
			this.updatePoints({linkId: this.link.id, points: this.link.points+1});
		},
		downVote() {
			this.updatePoints({linkId: this.link.id, points: this.link.points-1});
		},
		deleteLinkItem(event) {
			if (event && event.target && 
				(event.target.id === "remove-link-icon" || 
					(event.target.parentElement && event.target.parentElement.id === "remove-link-icon" ))) {
				this.showRemoveDialog = true;
			}
		},
		hideRemoveDialog() {
			this.showRemoveDialog = false;
		},
		...mapActions(['deleteLink', 'updatePoints']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */
@import "../../assets/styles/settings/variables";

.link-list-item {
	margin: 20px 0px;
    display: flex;
    padding: 5px;
    width: 400px;

	&:hover {
		background-color: $color-primary-background;
    	color: $color-primary;
		border: 1px solid $color-border-gray;
		border-radius: 10px;
		cursor: pointer;
		padding: 5px 10px;
		.delete-icon {
			display: block;
		}
	}

	.point-counter {
		background-color: $color-secondary-background;
		border: 1px solid $color-border-gray;
		border-radius: 10px;
		margin-right: 15px;
		padding: 10px 20px;
		.point-number {
			font-size: 30px;
    		font-weight: 600;
		}
	}
	.link-info {
		text-align: left;
		width: 275px;

		.link-title {
			font-weight: 600;
    		font-size: 20px;
			overflow: hidden;
    		text-overflow: ellipsis;
		}
		.link-url {
			overflow: hidden;
    		text-overflow: ellipsis;
		}
		.link-voter {
			display: flex;
			margin-top: 10px;

			.up-voter {
			}
			.down-voter {
				flex: 1;
    			text-align: right;
			}
			div {
				&:hover {
					cursor: pointer;
					.vote-text {
						text-decoration: underline;
					}
				}
			}
		}
	}

	.delete-icon {
		margin-top: -20px;
		float: right;
		margin-right: -20px;
		display: none;
		background-color: $color-red;
		border-radius: 20px;
    	width: 30px;
    	height: 30px;
		.v-icon {
			color: #fff;
			padding-top: 5px;
    		font-size: 20px;
		}
	}
}

</style>