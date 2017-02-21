<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <codeArea></codeArea>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeArea from './components/CodeArea'

export default {
  name: 'app',
  components: {
    CodeArea
  }
}
</script>
