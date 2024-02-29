<script>
import Notification from "@/views/layout/header/notification/Notification.vue";
import Searchbar from "@/views/layout/header/searchbar/Searchbar.vue";
import DrawerOpenButton from "@/views/layout/drawer/DrawerOpenButton.vue";
import DarkModeButton from "@/views/layout/header/elements/DarkModeButton.vue";
import MonochromeModeButton from "@/views/layout/header/elements/MonochromeModeButton.vue";
import SidebarButton from "@/views/layout/header/elements/SidebarButton.vue";
export default {
  name: "Header",
  components: {
    'ui-notification': Notification,
    'ui-searchbar': Searchbar,
    'ui-dark-mode-btn': DarkModeButton,
    'ui-monochrome-btn': MonochromeModeButton,
    'ui-sidebar-btn': SidebarButton,
    'ui-drawer-open-btn': DrawerOpenButton
  }
}
</script>

<template>
  <nav class="header print:hidden">
    <div class="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
      <div class="flex w-full items-center justify-between">
        <div class="size-7">
          <ui-sidebar-btn />
        </div>
        <div class="-mr-1.5 flex items-center space-x-2">
          <ui-searchbar />
          <ui-dark-mode-btn />
          <ui-monochrome-btn />
          <ui-notification />
          <ui-drawer-open-btn />
        </div>
      </div>
    </div>
  </nav>
</template>
