<template>
  <div id="home">
    {{ n1 }}{{ s1 }}
  </div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onBeforeUnmount,
	ref,
	reactive,
	toRefs,
	watch,
	watchEffect,
	onMounted,
	readonly
} from '@vue/composition-api'

type cc = {
  name: string;
}

type dd = {
  sex: boolean;
}

export default defineComponent({
	setup(){
		const n1 = reactive({ name: 'cc'})
		const s1 = ref<string>()
		if(s1.value){
			console.log('true')
		}else {
			console.log('false')
		}
		function f1(): cc&{sex: boolean}{
			return { name:'cc', sex:false }
		}
		f1()
		return {
			n1,
			s1,
		}
	}
})

</script>
