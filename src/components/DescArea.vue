<template>
  <div>
    <h3 v-text="title"></h3>
    <p v-text="description"></p>
    <pre v-text="syntax"></pre>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    description: String,
    syntax: String
  }
}
</script>
