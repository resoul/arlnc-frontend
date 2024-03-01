<script>
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import { useThemeStore } from "@/stores/theme.js";
export default {
  components: {
    'ui-arrow-icon': ArrowLeftIcon
  },
  setup() {
    const theme = useThemeStore()

    return { theme }
  }
}
</script>

<template>
  <button @click="theme.sidebarClose()" class="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
    <ui-arrow-icon class="size-6" />
  </button>
</template>