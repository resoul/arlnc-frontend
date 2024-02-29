<script>
import MoonIcon from "@/components/icons/MoonIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import { useThemeStore } from "@/stores/theme.js";
export default {
  components: {
    'ui-moon-icon': MoonIcon,
    'ui-sun-icon': SunIcon
  },
  setup() {
    const theme = useThemeStore()

    return { theme }
  }
}
</script>

<template>
  <button @click="theme.toggleThemeMode()" class="darkmode-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <ui-moon-icon class="size-6 text-amber-400" v-if="theme.isDarkMode" />
    <ui-sun-icon class="size-6 text-amber-400" v-else />
  </button>
</template>
