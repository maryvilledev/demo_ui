<template>
  <div>
    <ul class="filter-list">
      <li v-for="(filter, key) in filters">
        <input type="checkbox" @change="onChange(key)" :checked="filter.value"/>
        {{filter.text}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'filter-box',
  props: {
    filters: Array
  },
  methods: {
    onChange: function(key) {
      this.$emit("toggle", key)
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
