<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <filter-box :filters="filters"></filter-box>
      </div>
      <div class="col-sm-8">
        <code-area></code-area>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

<script>
import CodeArea from './components/CodeArea'
import FilterBox from './components/FilterBox'

export default {
  name: 'app',
  data() {
    return{
      filters: [{text: 'for-in', value: false}, {text: 'for-each', value: true}]
    }
  },
  components: {
    CodeArea, FilterBox
  }
}
</script>
