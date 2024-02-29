<script>
export default {
  directives: {
    'font-size': {
      beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + "px";
      },
      updated: (el, binding) => {
        el.style.fontSize = binding.value + "px";
      }
    }
  }
}
</script>
