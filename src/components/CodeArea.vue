<template>
  <div class="code-area tall">
     <textarea v-model="code" class="form-control code-form"></textarea>
     <button @click="passCode" class="btn btn-primary">Splain my Code!</button>
  </div>
</template>

<script>
export default {
  name: 'codeArea',
  data() {
    return {
      code: ''
    }
  },
  methods: {
    passCode: function(event) {
      this.$emit("submit", this.code)
    }
  },
}
</script>

<style scoped>
  .code-form {
    font-family: monospace;
    resize: vertical;
    height: 80%;
  }
  .code-area{
    text-align: center;
  }
</style>
