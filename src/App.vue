<!-- eslint-disable -->
<template>
  <div id="app">
    
    <v-toolbar class="header-toolbar" fixed >
        <router-link to="/" class="toolbar-icon">
					<img src="./assets/icon.png">
				</router-link>
				<v-toolbar-title class="toolbar-title">
					<h1><b>Link</b>VOTE Challange</h1>
				</v-toolbar-title>
		</v-toolbar>
    <notifications position="top center" classes="oa-notification" :duration="5000"/>

		<!-- Router -->
		<router-view></router-view>
  </div>
</template>

<script>

/* eslint-disable */
import './assets/styles/main.scss';

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
/* eslint-disable */
@import "./assets/styles/settings/variables";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary;
  margin-top: 30px;

  .container-flex {
    display: flex;
    flex-direction: row;
    .flex-aligner {
      flex: 1;
    }
  }

  /deep/ .header-toolbar .v-toolbar__content {
    display: flex;
    border-bottom: 1px solid $color-primary;
    height: 100% !important;
    
    .toolbar-title {
      padding-top: 18px;

      h1 {
        font-size: 30px;
      }
    }
    .toolbar-icon {
      flex: 1;
      float: left;
      text-align: left;
    }
  }

  .container-flex {
      margin-top: 150px;
  }

  .primary-button {
      background-color: black;
      color: #fff;
      font-weight: 600;
      font-size: 25px;
      border-radius: 30px;
      min-width: 140px;
      padding: 5px 10px;
      min-height: 50px;
  }

  // Overwrite defaults
  .vue-notification-group {
    top: 80px !important;
    width: 500px !important;
    left: calc(50% - 250px) !important;
  }
  
  .oa-notification {
    margin: 10px;
    padding: 0.9em 1.2em;
    cursor: pointer;
    border: 1px solid;
    border-radius: 10px;

    .notification-content {
      font-size: 20px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.success {
      background-color: $color-success-background !important;
      color: $color-success !important;
      border-color: $color-success;
    }

    &.error {
      background-color: $color-error-background !important;
      color: $color-error !important;
      border-color: $color-error;
    }
  }
}

h1, h2 {
  font-weight: normal;
}


</style>
