import store from '@/store'
import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators'


@Module({ name: 'MyModule', dynamic: true, store,  namespaced: true })
class MyModule extends VuexModule {
    someField = 10
    get someFieldAvg(){
        return this.someField/2
    }
    @Mutation
    private add(n: number){
        this.someField = this.someField + n
    }

    @Action
    getSomeFiled(n: number){
        this.add(n)
    }
}

export const myMod = getModule(MyModule)
