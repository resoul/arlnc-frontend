<script>
import BoardIcon from "@/components/icons/BoardIcon.vue";
import GraphIcon from "@/components/icons/GraphIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import CryptoIcon from "@/components/icons/CryptoIcon.vue";
import BankingIcon from "@/components/icons/BankingIcon.vue";
import ToDoIcon from "@/components/icons/ToDoIcon.vue";
import BasketIcon from "@/components/icons/BasketIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import GridStatsIcon from "@/components/icons/GridStatsIcon.vue";

export default {
  props: {
    title: String,
    helpLinks: Array,
    recentLinks: Array
  },
  components: {
    'ui-board-icon': BoardIcon,
    'ui-graph-icon': GraphIcon,
    'ui-message-icon': MessageIcon,
    'ui-cloud-icon': CloudIcon,
    'ui-crypto-icon': CryptoIcon,
    'ui-banking-icon': BankingIcon,
    'ui-todo-icon': ToDoIcon,
    'ui-basket-icon': BasketIcon,
    'ui-mail-icon': EmailIcon,
    'ui-grid-stats-icon': GridStatsIcon
  }
}
</script>

<template>
  <div class="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2">
    <div class="is-scrollbar-hidden mt-3 flex space-x-4 overflow-x-auto px-3">
      <router-link :to="link.route" v-for="link in helpLinks" :key="link.name" class="w-14 text-center">
        <div class="avatar size-12">
          <div class="is-initial rounded-full text-white" :class="link.iconColor">
            <component :is="link.icon" class="size-5" />
          </div>
        </div>
        <p class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100" v-text="link.name"></p>
      </router-link>
    </div>
    <div class="mt-3 flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800">
      <p class="text-xs uppercase" v-text="title"></p>
      <router-link to="/" class="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View All</router-link>
    </div>
    <div class="mt-1 font-inter font-medium">
      <router-link :to="link.route" v-for="link in recentLinks" :key="link.name" class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
        <component :is="link.icon" class="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" />
        <span v-text="link.name"></span>
      </router-link>
    </div>
  </div>
</template>
