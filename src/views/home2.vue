<template>
  <div>
    <HelloWorld>
      <template v-slot:default="slotProps">
        <h3>{{ slotProps.user }}</h3>
      </template>
    </HelloWorld>
    <span style="color: red">{{ someFiled }}</span>
    <component-a></component-a>
    <component-b></component-b>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { myMod } from '@/store/modules/mymodule'

const ComponentB = {
	name: 'component-b',
	template: '<h2>我是局部组件</h2>'
}

@Component({
	components: {
		ComponentB,
		HelloWorld,
	},
})
export default class Home extends Vue {
  someFiled  = myMod.someField
  mounted(){
  	console.log(this, '子组件')
  	console.log(this.$slots, 'cc')
  	console.log(myMod.someField)
  }
}
</script>
