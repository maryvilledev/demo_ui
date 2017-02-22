<template>
  <div id="app" class="container-fluid tall">
    <div class="row tall">
      <div class="col-sm-2">
        <filter-box :filters="filters" @toggle="toggleFilter"></filter-box>
      </div>
      <div class="col-sm-6 tall">
        <code-area></code-area>
      </div>
      <div class="col-sm-4">
        <desc-area :title="title" :description="description" :syntax="syntax"></desc-area>
      </div>
    </div>
  </div>
</template>

<script>
import CodeArea from './components/CodeArea'
import FilterBox from './components/FilterBox'
import DescArea from './components/DescArea'

const title = `For loop in Java`

const description = `
The for loop is a control structure that executes a block of code a specified number of times.
`
const syntax = `
for(initialization; booleanExpression; update) {
    //statements
} //end for loop
`

const filters = [
  {text: "for", value: true},
  {text: "while", value: false}
]
export default {
  name: 'app',
  data() {
    return{
      filters: filters,
      title: title,
      description: description,
      syntax: syntax
    }
  },
  methods: {
    toggleFilter: function (key) {
      if(this.filters[key].value) {
        this.filters[key].value = false;
      } else {
        this.filters[key].value = true;
      }
    }
  },
  components: {
    CodeArea, FilterBox, DescArea
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  height: 100%;
}
.tall {
  height: 100%;
}
</style>
