<script>
import CloseIcon from "@/components/icons/CloseIcon.vue";
import { useThemeStore } from "@/stores/theme.js";

export default {
  components: {
    'ui-close-icon': CloseIcon
  },
  setup() {
    const theme = useThemeStore();

    return { theme }
  }
}
</script>

<template>
  <button @click="theme.closeDrawer()" class="btn -mr-1 size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <ui-close-icon />
  </button>
</template>
