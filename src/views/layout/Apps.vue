<script>
import SidebarPanel from "@/views/layout/apps/SidebarPanel.vue";
import SidebarMiniPanel from "@/views/layout/apps/SidebarMiniPanel.vue";
export default {
  components: {
    'ui-sidebar-panel': SidebarPanel,
    'ui-sidebar-mini-panel': SidebarMiniPanel
  },
  mounted() {
    document.body.classList.add('has-min-sidebar')
  },
  unmounted() {
    document.body.classList.remove('has-min-sidebar')
  }
}
</script>

<template>
  <router-view />
  <teleport to=".sidebar-panel">
    <ui-sidebar-panel />
  </teleport>
  <teleport to=".sidebar-panel-min">
    <ui-sidebar-mini-panel />
  </teleport>
</template>