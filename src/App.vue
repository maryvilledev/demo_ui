<template>
  <div id="app" class="container-fluid tall">
    <div class="row tall">
      <div class="col-sm-2">
        <filter-box :filters="filters" @toggle="toggleFilter"></filter-box>
      </div>
      <div class="col-sm-8 tall">
        <code-area></code-area>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

<script>
import CodeArea from './components/CodeArea'
import FilterBox from './components/FilterBox'
import DescArea from './components/DescArea'

export default {
  name: 'app',
  data() {
    return{
      filters: [{text: 'for-in', value: false}, {text: 'for-each', value: true}]
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
