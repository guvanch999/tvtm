<template>
  <div style="width: 100%;min-height: 100vh;position: relative">
    <div style="position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%);width: 30%">
      <login-form/>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  components: {LoginForm},
  layout: 'login'
}
</script>
