<script>
import Drawer from "@/components/drawer/Drawer.vue";
import Header from "@/components/header/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { useThemeStore } from "@/components/theme.js";
export default {
  name: "Application",
  components: {
    'ui-sidebar': Sidebar,
    'ui-header': Header,
    'ui-drawer': Drawer
  },
  setup() {
    const theme = useThemeStore()
    return { theme }
  }
}
</script>

<template>
  <ui-sidebar />
  <ui-header />
  <ui-drawer />
  <main :class="theme.getMainClass">
    <router-view />
  </main>
</template>