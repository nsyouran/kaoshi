<template>
  <div id="app">
    <nav class="nav">
      <!-- <el-button @click="reset">重置题库</el-button> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/exe">刷题</router-link>
      <!-- | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/answer">答案</router-link> -->
    </nav>
    <router-view class='view' />
  </div>
</template>

<script>
export default {
  methods: {
    reset() {
      window.localStorage.setItem('bank', '')
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav {
    // border: 1px solid blue;
    flex-shrink: 0;
    padding: 10px;
  }

  .view {
    // border: 1px solid red;
    flex-grow: 1;
  }
}


.big_title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.bank {
  // border: 1px solid red;
  margin-bottom: 10px;

  .option {
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
  }

  .state {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-top: 10px;
    font-weight: bold;
    width: 1em;
    flex-shrink: 0;

    .success {
      color: green;
    }

    .error {
      color: red
    }
  }


  .el-radio,
  .el-checkbox {
    // border: 1px solid yellow;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex !important;
  }

  .el-radio__input,
  .el-checkbox__input {
    // border: 1px solid blue;
    display: inline-block;
    height: 100%;
  }

  .el-checkbox__input {
    padding-top: 2px;
  }

  .el-radio__label,
  .el-checkbox__label {
    // border: 1px solid red;
    white-space: normal;
    word-break: break-all;
    display: inline-block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
