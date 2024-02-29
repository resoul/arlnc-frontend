<script>
import GridIcon from "@/components/icons/GridIcon.vue";
import { useThemeStore } from "@/stores/theme.js";
export default {
  name: "DrawerOpenButton",
  components: {
    'ui-grid-icon': GridIcon
  },
  setup() {
    const theme = useThemeStore();

    return { theme }
  }
}
</script>

<template>
  <button @click="theme.openDrawer()" class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <ui-grid-icon />
  </button>
</template>
