<template>
  <div>
    <ul class="filter-list">
      <li v-for="filter in filters">
        <input type="checkbox" @change="onChange($event, filter.text)" :checked="filter.value"/>
        {{filter.text}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'filter-box',
  props: {
    filters: []
  },
  methods: {
    onChange: function(ev, text) {
      this.$emit("toggleFilter", text)
    }
  }
}
</script>

<style scoped>
  .filter-list {
    list-style-type: none;
    overflow: scroll;
    font: 12pt;
  }
</style>
