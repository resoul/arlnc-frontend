<script>
import { useThemeStore } from "@/stores/theme.js";
export default {
  setup() {
    const theme = useThemeStore()

    return { theme }
  }
}
</script>

<template>
  <button @click="theme.sidebarToggle()" class="sidebar-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>
