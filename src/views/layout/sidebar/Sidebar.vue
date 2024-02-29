<script>
import Logo from "@/views/layout/sidebar/elements/Logo.vue";
import NavLink from "@/views/layout/sidebar/elements/NavLink.vue";
import SettingsIcon from "@/components/icons/sidebar/SettingsIcon.vue";
import Profile from "@/views/layout/sidebar/elements/Profile.vue";
import SidebarPanel from "@/views/layout/sidebar/SidebarPanel.vue";
export default {
  name: "Sidebar",
  components: {
    'ui-logo': Logo,
    'ui-profile': Profile,
    'ui-sidebar-panel': SidebarPanel,
    'ui-settings-icon': SettingsIcon,
    'ui-nav-link': NavLink
  }
}
</script>

<template>
  <div class="sidebar print:hidden">
    <div class="main-sidebar">
      <div class="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
        <ui-logo class="flex pt-4" />
        <ui-nav-link />
        <div class="flex flex-col items-center space-y-3 py-3">
          <router-link to="/forms/layout" class="flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <ui-settings-icon />
          </router-link>
          <ui-profile />
        </div>
      </div>
    </div>
    <ui-sidebar-panel class="sidebar-panel" />
  </div>
</template>
