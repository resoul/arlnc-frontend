<script>
import Content from "@/views/layout/header/searchbar/Content.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import SearchSmallIcon from "@/components/icons/SearchSmallIcon.vue";
import Popper from "@/extensions/popper.js";
import Tab from "@/extensions/tab.js";
export default {
  name: "Searchbar",
  components: {
    'ui-content': Content,
    'ui-search-icon': SearchIcon,
    'ui-search-small-icon': SearchSmallIcon,
    'ui-arrow-icon': ArrowLeftIcon
  },
  data() {
    return {
      isFocusInput: false,
      isShowMobile: false,
      helpLinks: [
        {
          route: '/app/kanban',
          name: 'Kanban',
          icon: 'ui-board-icon',
          iconColor: 'bg-success',
        },
        {
          route: '/dashboards/crm-analytics',
          name: 'Analytics',
          icon: 'ui-graph-icon',
          iconColor: 'bg-secondary',
        },
        {
          route: '/app/chat',
          name: 'Chat',
          icon: 'ui-message-icon',
          iconColor: 'bg-info',
        },
        {
          route: '/app/file-manager',
          name: 'Files',
          icon: 'ui-cloud-icon',
          iconColor: 'bg-error',
        },
        {
          route: '/dashboards/crypto',
          name: 'Crypto',
          icon: 'ui-crypto-icon',
          iconColor: 'bg-secondary',
        },
        {
          route: '/dashboards/banking',
          name: 'Banking',
          icon: 'ui-banking-icon',
          iconColor: 'bg-primary',
        },
        {
          route: '/app/todo',
          name: 'Todo',
          icon: 'ui-todo-icon',
          iconColor: 'bg-info',
        },
        {
          route: '/dashboards/orders',
          name: 'Orders',
          icon: 'ui-basket-icon',
          iconColor: 'bg-secondary',
        }
      ],
      recentLinks: [
        {
          route: '/app/chat',
          name: 'Chat App',
          icon: 'ui-message-icon'
        },
        {
          route: '/app/file-manager',
          name: 'File Manager App',
          icon: 'ui-cloud-icon'
        },
        {
          route: '/app/mail',
          name: 'Email App',
          icon: 'ui-mail-icon'
        },
        {
          route: '/app/kanban',
          name: 'Kanban Board',
          icon: 'ui-board-icon'
        },
        {
          route: '/app/todo',
          name: 'Todo App',
          icon: 'ui-todo-icon'
        },
        {
          route: '/dashboards/crypto',
          name: 'Crypto Dashboard',
          icon: 'ui-crypto-icon'
        },
        {
          route: '/dashboards/banking',
          name: 'Banking Dashboard',
          icon: 'ui-banking-icon'
        },
        {
          route: '/dashboards/crm-analytics',
          name: 'Analytics Dashboard',
          icon: 'ui-graph-icon'
        },
        {
          route: '/dashboards/influencer',
          name: 'Influencer Dashboard',
          icon: 'ui-grid-stats-icon'
        }
      ]
    }
  },
  mounted() {
    new Popper(
        '#searchbar-wrapper',
        '#searchbar-ref',
        '#searchbar-box',
        {
          placement: "bottom-end",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 12],
              },
            },
          ],
        },
        "focus",
        (isActive) => { this.isFocusInput = isActive }
    )
    new Tab(".mobile-search-tab-wrapper");
  }
}
</script>

<template>
  <button @click="isShowMobile = true" class="mobile-searchbar-show btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
    <ui-search-icon />
  </button>
  <div id="searchbar-wrapper" class="hidden sm:flex">
    <div class="relative mr-4 flex h-8">
      <input id="searchbar-ref" :class="isFocusInput ? 'w-80' : 'w-60'" placeholder="Search here..." class="form-input peer h-full w-60 rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900" type="text" />
      <div class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
        <ui-search-small-icon class="size-4.5 transition-colors duration-200" />
      </div>
    </div>
    <div id="searchbar-box" data-active-tab="#search-all" class="popper-root search-tab-wrapper">
      <div class="popper-box flex max-h-[calc(100vh-6rem)] w-80 flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark">
        <div class="is-scrollbar-hidden flex shrink-0 overflow-x-auto rounded-t-lg bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-all"> All </button>
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-files"> Files </button>
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-chats"> Chats </button>
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-emails"> Emails </button>
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-projects"> Projects </button>
          <button class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#search-tasks"> Tasks </button>
        </div>
        <ui-content title="Recent" :help-links="helpLinks" :recent-links="recentLinks" class="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2" />
      </div>
    </div>
  </div>
  <teleport to="body">
    <div :class="isShowMobile ? 'flex' : 'hidden'" class="mobile-searchbar fixed inset-0 z-[100] flex-col bg-white dark:bg-navy-700">
      <div class="flex items-center space-x-2 bg-slate-100 px-3 pt-2 dark:bg-navy-800">
        <button @click="isShowMobile = false" class="mobile-searchbar-hide btn -ml-1.5 size-7 shrink-0 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
          <ui-arrow-icon class="size-5" />
        </button>
        <input class="mobile-searchbar-input form-input h-8 w-full bg-transparent placeholder-slate-400 dark:placeholder-navy-300" type="text" placeholder="Search here..." />
      </div>
      <div data-active-tab="#mobile-search-all" class="mobile-search-tab-wrapper is-scrollbar-hidden flex shrink-0 overflow-x-auto bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
        <button data-target="#mobile-search-all" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> All </button>
        <button data-target="#mobile-search-files" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> Files </button>
        <button data-target="#mobile-search-chats" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> Chats </button>
        <button data-target="#mobile-search-emails" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> Emails </button>
        <button data-target="#mobile-search-projects" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> Projects </button>
        <button data-target="#mobile-search-tasks" data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light" data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100" class="tab btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"> Tasks </button>
      </div>
      <ui-content title="Recent" :help-links="helpLinks" :recent-links="recentLinks" class="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2" />
    </div>
  </teleport>
</template>
