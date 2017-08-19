<template lang="jade">
  .container
    time_component(:time1 = "time1", :time2 = "time2")
    .container
      router-view(@start_timer="start_timer", @switch_turn="switch_turn")
</template>

<script>

import time_component from './components/time.vue';

export default {
  name: 'app',
  data () {
    return {
      time1: null,
      time2: null,
      s1: null,
      s2: null,
      current_time1: new Date,
      current_time2: new Date,
      n1: null,
      n2: null,
      start: false
    }
  },
  methods:{
    get_timer(screen){
      if (screen === 1){
        this.current_time1 = new Date(this.current_time1.getTime() - ((new Date).getTime() - this.s1.getTime()));
        this.s1 = new Date;
        this.time1 = `${this.current_time1.getMinutes()}:${this.current_time1.getSeconds()}:${this.current_time1.getMilliseconds()}`;
        this.n1 = setTimeout(() => this.get_timer(1), 10);
      }
      if (screen === 2){
        this.current_time2 = new Date(this.current_time2.getTime() - ((new Date).getTime() - this.s2.getTime()));
        this.s2 = new Date;
        this.time2 = `${this.current_time2.getMinutes()}:${this.current_time2.getSeconds()}:${this.current_time2.getMilliseconds()}`;
        this.n2 = setTimeout(() => this.get_timer(2), 10);
      }
    },
    start_timer(screen){
      this.current_time1.setMinutes( 0, 120, 0);
      this.current_time2.setMinutes( 0, 120, 0);
      clearTimeout(this.n1);
      clearTimeout(this.n2);
      if (this.start){
        this.time1 = null;
        this.time2 = null;
        this.start = false;
      } else{
        this.start = true;
        if (screen === 1){
          this.s1 = new Date;
          this.get_timer(1);
        }
        if (screen === 2){
          this.s2 = new Date;
          this.get_timer(2);
        }
      }
    },
    switch_turn(screen){
      if (screen === 1){
        if (this.s1){
          this.$router.push("/screen2");
          clearTimeout(this.n1);
          this.s1 = null;
          
          this.s2 = new Date;
          this.get_timer(2);
        }
      }
      if (screen === 2){
        if (this.s2){
          this.$router.push("/screen1");
          clearTimeout(this.n2);
          this.s2 = null;

          this.s1 = new Date;
          this.get_timer(1);
        }
      }
    },

  },
  components: {
    time_component
  }
}
</script>

<style lang="sass">
  @import "../node_modules/bulma/bulma.sass"
  
</style>