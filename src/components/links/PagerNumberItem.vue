<!-- eslint-disable -->
<template>
	<div @click="onClick">
		{{ pageNumber }}
	</div>
</template>
<script>
/* eslint-disable */
export default {
	name: "PagerNumberItem",
	props: {
		pageNumber: {
			type: Number,
			required: true
		}
	},
	methods: {
		onClick() {
			this.$emit("loadPage", this.pageNumber);
		}
	}
}
</script>