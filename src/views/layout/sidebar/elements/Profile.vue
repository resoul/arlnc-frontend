<script>
import { useUserStore } from "@/stores/user.js";
import Directives from "@/extensions/Directives.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import UserGroupIcon from "@/components/icons/UserGroupIcon.vue";
import FileStatIcon from "@/components/icons/FileStatIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import LogoutButton from "@/views/layout/sidebar/elements/profile/LogoutButton.vue";
export default {
  extends: Directives,
  components: {
    'ui-logout-btn': LogoutButton,
    'ui-user-icon': UserIcon,
    'ui-user-group-icon': UserGroupIcon,
    'ui-file-stat-icon': FileStatIcon,
    'ui-settings-icon': SettingsIcon,
    'ui-message-icon': MessageIcon
  },
  setup() {
    const user = useUserStore()

    return { user }
  }
}
</script>

<template>
  <div v-popper="{ ref: '#profile-ref' }" class="flex">
    <button id="profile-ref" class="avatar size-12">
      <img class="rounded-full" :src="user.getProfileAvatar" :alt="user.getProfileName" />
      <span v-if="user.isOnline" class="absolute right-0 size-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
    </button>
    <div id="profile-box" class="popper-root fixed">
      <div class="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
        <div class="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
          <div class="avatar size-14">
            <img class="rounded-full" :src="user.getProfileAvatar" :alt="user.getProfileName" />
          </div>
          <div>
            <router-link :to="user.getProfileUrl" v-text="user.getProfileName" class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"></router-link>
            <p v-text="user.getProfilePosition" class="text-xs text-slate-400 dark:text-navy-300"></p>
          </div>
        </div>
        <div class="flex flex-col pt-2 pb-5">
          <router-link :to="link.route" v-for="link in user.getProfileLinks" class="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
            <div :class="link.iconClass" class="flex size-8 items-center justify-center rounded-lg text-white">
              <component :is="link.icon" class="size-4.5" />
            </div>
            <div>
              <h2 v-text="link.name" class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"></h2>
              <div v-text="link.desc" class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"></div>
            </div>
          </router-link>
          <div class="mt-3 px-4">
            <ui-logout-btn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>