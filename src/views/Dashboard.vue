<template>
  <h1>Dashboard</h1>
</template>
<script>
  export default {
    beforeCreate() {
      if(!localStorage.getItem('user')) {
        this.$router.push('/login')
      }
    }
  }
</script>
