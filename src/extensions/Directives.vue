<script>
import tippy, { roundArrow } from "tippy.js";
export default {
  directives: {
    tooltip: {
      mounted: (el, binding) => {
        const tippyPlugins = { roundArrow };
        var config = {
          animation: 'shift-away',
          zIndex: 10003,
          arrow: tippyPlugins.roundArrow,
          content: '',
          placement: 'right',
          plugins: [],
        }

        if (binding.value && binding.value.placement) {
          config.placement = binding.value.placement;
        }

        if (binding.value && binding.value.content) {
          config.content = binding.value.content;
        }

        tippy(el, config);
      }
    }
  }
}
</script>
