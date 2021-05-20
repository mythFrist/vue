<template>
  <div id="home">
    <h1 ref="df">{{ message }}</h1>
    <HelloWorld :message = 'message'></HelloWorld>
    <h2></h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { myMod } from '@/store/modules/mymodule'

@Component({
	name: 'Home',
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {
  @Provide('provideMsg')
  provideMsg = 'h'

  message = 'ccc'

  created(){
  	this.message = 'ddd'
  	console.log('created')
  }

  mounted(){
  	console.log(this.$el)
  	this.message = 'eee';
  	(this.$refs.df as HTMLElement).style.color = 'red'
  	console.log('mounted')
  	myMod.getSomeFiled(10)
  	console.log(myMod.someField)
  	console.log(myMod.someFieldAvg)
  }

  destroyed(){
  	console.log('destroyed')
  }
}
</script>
