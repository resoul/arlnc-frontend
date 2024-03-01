<script>
import SidebarPanel from "@/views/layout/pages/SidebarPanel.vue";
export default {
  components: {
    'ui-sidebar-panel': SidebarPanel
  }
}
</script>

<template>
<router-view />
  <teleport to=".sidebar-panel">
    <ui-sidebar-panel />
  </teleport>
</template>