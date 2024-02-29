<script>
import Drawer from "@/views/layout/drawer/Drawer.vue";
import Header from "@/views/layout/header/Header.vue";
import Sidebar from "@/views/layout/sidebar/Sidebar.vue";
import { useThemeStore } from "@/stores/theme.js";
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
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const theme = useThemeStore()
      theme.isMonochromeMode && theme.addMonochromeMode()
      theme.isDarkMode ? theme.setDarkMode() : theme.setLightMode()
    }
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
