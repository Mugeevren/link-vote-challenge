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
		<v-flex class="flex-aligner links-container" data-label="linksOverview">
			<v-flex xs12 class="create-btn-container">
				<button
					data-label="link-create-button"
					class="create-button"
					type="button"
					@click="navigateToCreate">
					<v-icon>mdi-plus</v-icon>
					<span class="link-btn-text">SUBMIT A LINK</span>
				</button>
			</v-flex>
			<hr>
			<v-flex xs12 v-if="displayedLinkList.length > 0">
				<v-flex xs6 class="sort-container">
					<v-select 
							class="sort-select" 
							:items="sortOptions"
							v-model="selectedSortOption" 
							append-icon="mdi-chevron-down"
							dense 
							label="Order by"></v-select>
				</v-flex>
				<div class="list-container">
					<link-list-item v-for="link in displayedLinkList" :link="link" :key="link.id"></link-list-item>
				</div>
				<div class="pagination-container">
					<pager :current-page="page"
						:page-count="numberOfPages"
						class="link-list_pager"
						@nextPage="handlePageChange('next')"
						@previousPage="handlePageChange('previous')"
						@loadPage="handlePageChange"></pager>
				</div>
			</v-flex>
			<v-flex xs12 v-if="displayedLinkList.length === 0">
				<div class="no-link-message">Currently there is no link.</div>
			</v-flex>
		</v-flex>
		<v-flex  class="flex-aligner"></v-flex>
	</v-flex>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex';
import LinkListItem from './LinkListItem'
import Pager from './Pager'

export default {
	name: 'LinksOverview',
	components: {
		LinkListItem,
		Pager
	},
	data() {
		return {
			itemsPerPage: 3,
			page: 1,
			selectedSortOption: {},
			sortOptions: [
				{
                    text: "Most Voted",
                    value: 1
                },
				{
                    text: "Less Voted",
                    value: 2
				}
			],
		}
	},
	beforeMount: function() {
	},
	computed: {
		numberOfPages () {
			if(this.links && this.links.length > 0) {
				return Math.ceil(this.links.length / this.itemsPerPage);
			}
			return 0;
		},
		displayedLinkList () {
			if(this.links){
				let fetchedLinks = [...this.links];
				let maxItemCount = this.page*this.itemsPerPage;
				if(this.selectedSortOption === 1) {
					let sortedArray = fetchedLinks.sort((a, b) => b.points - a.points || b.id - a.id);
					return sortedArray.slice(maxItemCount-this.itemsPerPage, maxItemCount);
				}
				if(this.selectedSortOption === 2) {
					let sortedArray = fetchedLinks.sort((a, b) => a.points - b.points || b.id - a.id);
					return sortedArray.slice(maxItemCount-this.itemsPerPage, maxItemCount);
				}
				return fetchedLinks.slice(maxItemCount-this.itemsPerPage, maxItemCount);
			}
			return [];
		},
		...mapGetters(['links']),
	},
	methods: {
		handlePageChange(value) {
			switch (value) {
				case 'next':
					this.page += 1;
					break;
				case 'previous':
					this.page -= 1;
					break;
				default:
					this.page = value;
			}
		},
		navigateToCreate() {
			this.$router.push('/createlink');
		},
		...mapActions(['createLink']),
	},
}
</script>
<style lang="scss" scoped>
/* eslint-disable */
@import "../../assets/styles/settings/variables";

.no-link-message {
	margin: 30px 10px;
	font-size: 20px;
	font-weight: 600;
}
.links-container {
	max-width: 400px;
}

.create-btn-container {
    text-align: -webkit-center;
}
hr {
	margin: 20px 0px;
}
.create-button {
    height: 100px;
    background-color: $color-primary-background;
    color: $color-primary;
    font-size: 30px;
    font-weight: 600;
    border: 1px solid #a9a9a9;
    border-radius: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
	min-width: 340px;
	max-width: 400px;

	.v-icon {
		background-color: $color-secondary-background;
    	color: $color-primary;
		width:80px;
		height:80px;
		border: 1px solid $color-border-gray;
		border-radius: 10px;
		margin-right: 20px;
	}
	.link-btn-text {
		justify-content: center;
	}
}

.sort-container {
	/deep/ .v-select .v-input__control .v-input__slot {
		display: block !important;
		.v-menu .v-menu__content {
			top: 0 !important;
			left: 0 !important;
		}
	}
}



</style>
