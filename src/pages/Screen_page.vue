<template lang="jade">
	.container
		.box
			span.title screen: {{isNaN(screen) ? 1 : screen}}
		.container_button
			.columns
				.column
					button(@click="start_timer").button start/restart
				.column
					button(@click="switch_turn").button switch
</template>

<script>

export default{
	data(){
		return{
			screen: parseInt(this.$route.path.slice(-1), 10)
		}
	},
	watch:{
			'$route': function(){
			this.screen = parseInt(this.$route.path.slice(-1), 10);
		}
	},
	methods:{
		start_timer(){
			this.$emit('start_timer', isNaN(this.screen) ? this.screen = 1 : this.screen);
		},
		switch_turn(){
			this.$emit('switch_turn', isNaN(this.screen) ? this.screen = 1 : this.screen);
		}
	}
};

</script>

<style lang="sass" scoped>
	.box
		margin: 20px auto
		width: 100%
		max-width: 500px
	.container_button
		width: 100%
		max-width: 500px
		margin: 0 auto
		.columns
			.column
				text-align: center
				button
					font-size: 28px
</style>