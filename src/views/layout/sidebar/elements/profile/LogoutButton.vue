<script>
import LogoutIcon from "@/components/icons/LogoutIcon.vue";
export default {
  components: {
    'ui-logout-icon': LogoutIcon
  }
}
</script>

<template>
<button class="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
  <ui-logout-icon class="size-5" />
  <span>Logout</span>
</button>
</template>