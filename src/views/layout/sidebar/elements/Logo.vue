<script>
export default {
  name: "Logo"
}
</script>

<template>
  <div>
    <router-link to="/">
      <img src="/images/app-logo.svg" alt="logo" class="size-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
    </router-link>
  </div>
</template>