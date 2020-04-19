<!-- eslint-disable -->
<template>
	<div class="base-pagination">
		<v-btn
			class="navigator-btn prev"
			:disabled="isPreviousButtonDisabled"
			@click.native="previousPage">
				<v-icon>mdi-chevron-left</v-icon>
		</v-btn>
		<pager-number-item
			v-for="paginationTrigger in paginationTriggers"
			:class="{ 'active-page':paginationTrigger === currentPage }"
			:key="paginationTrigger"
			:pageNumber="paginationTrigger"
			class="page-number-item"
			@loadPage="onLoadPage"></pager-number-item>
		<v-btn
			class="navigator-btn next"
			:disabled="isNextButtonDisabled"
			@click.native="nextPage">
				<v-icon>mdi-chevron-right</v-icon>
		</v-btn>
	</div>
</template>
<script>
/* eslint-disable */
import PagerNumberItem from './PagerNumberItem'
export default {
	name: "Pager",
  	components: {
		PagerNumberItem
	},
	props: {
		currentPage: {
			type: Number,
			required: true
		},
		pageCount: {
			type: Number,
			required: true
		},
		visiblePagesCount: {
			type: Number,
			default: 5
		}
	},
	computed: {
		isPreviousButtonDisabled() {
			return this.currentPage === 1;
		},
		isNextButtonDisabled() {
			return this.currentPage === this.pageCount;
		},
		paginationTriggers() {
			const currentPage = this.currentPage;
			const pageCount = this.pageCount;
			const visiblePagesCount = pageCount < this.visiblePagesCount ? pageCount : this.visiblePagesCount;
			const pagintationTriggersArray = Array(visiblePagesCount).fill(0);

			if (currentPage <= visiblePagesCount) {
				pagintationTriggersArray[0] = 1;
				const pagintationTriggers = pagintationTriggersArray.map(
					(paginationTrigger, index) => {
						return pagintationTriggersArray[0] + index;
					}
				);
				return pagintationTriggers;
			}
			else {
				pagintationTriggersArray[0] = currentPage - visiblePagesCount + 1;
				const pagintationTriggers = pagintationTriggersArray.map(
					(paginationTrigger, index) => {
						return pagintationTriggersArray[0] + index;
					}
				);
				return pagintationTriggers;
			}

		}
	},
	methods: {
		nextPage() {
			this.$emit('nextPage');
		},
		previousPage() {
			this.$emit('previousPage');
		},
		onLoadPage(value) {
			this.$emit("loadPage", value);
		}
	}
}
</script>
<style lang="scss" scoped>
/* eslint-disable */
@import "../../assets/styles/settings/variables";

.base-pagination {
    display: flex;
    justify-content: center;
    align-items: center;

}
.navigator-btn.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat),
.navigator-btn.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat),
.navigator-btn.v-btn--active:before, .v-btn:focus:before, .v-btn:hover:before {
    background-color: transparent !important;
	box-shadow: none !important;
}

.navigator-btn {

	min-width: 20px;
    width: 20px;

    &:hover {
		.v-icon {
			font-size: 40px;
		}
	}

	.v-icon {
		font-size: 30px;
	}
}

.page-number-item {
	cursor: pointer;
    font-size: 16px;
    padding: 5px;
    width: 40px;
    height: 40px;
    line-height: 28px;

	&:hover {
		font-size: 25px;
	}
	&.active-page {
		background-color: #f5f5f5;
		border-radius: 20px;
		cursor: default;
		font-size: 16px;
	}
}



</style>