<template lang="jade">
	.container.box
		.columns
			.column
				span.subtitle.is-5 {{time1 || "02:00:000"}}
			.column
				span.subtitle.is-5 {{time2 || "02:00:000"}}
</template>

<script>

export default{
	name: "time_component",
	data(){
		return{

		}
	},
	props: [
		"time1", 
		"time2"
	]
};

</script>

<style lang="sass" scoped>
	.container
		margin: 20px auto
		width: 100%
		max-width: 500px
</style>