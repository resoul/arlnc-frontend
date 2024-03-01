<script>
import HomeIcon from "@/components/icons/sidebar/HomeIcon.vue";
import ApplicationIcon from "@/components/icons/sidebar/ApplicationIcon.vue";
import PagesLayoutIcon from "@/components/icons/sidebar/PagesLayoutIcon.vue";
import FormsIcon from "@/components/icons/sidebar/FormsIcon.vue";
import ComponentsIcon from "@/components/icons/sidebar/ComponentsIcon.vue";
import ElementsIcon from "@/components/icons/sidebar/ElementsIcon.vue";
import Directives from "@/extensions/Directives.vue";
export default {
  name: "NavLink",
  extends: Directives,
  components: {
    'ui-home-icon': HomeIcon,
    'ui-component-icon': ComponentsIcon,
    'ui-pages-icon': PagesLayoutIcon,
    'ui-forms-icon': FormsIcon,
    'ui-element-icon': ElementsIcon,
    'ui-app-icon': ApplicationIcon
  },
  data() {
    return {
      items: [
        {
          name: 'Dashboards',
          icon: 'ui-home-icon',
          route: '/pages/crm-analytics'
        },
        {
          name: 'Applications',
          icon: 'ui-app-icon',
          route: '/apps/list'
        },
        {
          name: 'Pages & Layouts',
          icon: 'ui-pages-icon',
          route: '/pages/card-user'
        },
        {
          name: 'Forms',
          icon: 'ui-forms-icon',
          route: '/pages/input-text'
        },
        {
          name: 'Components',
          icon: 'ui-component-icon',
          route: '/pages/accordion'
        },
        {
          name: 'Elements',
          icon: 'ui-element-icon',
          route: '/pages/avatar'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
    <router-link v-tooltip="{ content: item.name }" v-for="item in items" :to="item.route" class="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
      <component :is="item.icon" class="size-7" />
    </router-link>
  </div>
</template>