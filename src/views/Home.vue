<template>
  <div id="home">
    <HelloWorld :message = 'message'></HelloWorld>
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

  message = ''

  created(){
  	this.message = 'ddd'
  }
}
</script>
