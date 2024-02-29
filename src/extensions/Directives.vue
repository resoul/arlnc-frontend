<script>
import Popper from "@/extensions/popper.js";
import tippy, { roundArrow } from "tippy.js";
export default {
  directives: {
    popper: {
      mounted: (el, binding) => {
        var ref = '.popper-ref',
            root = '.popper-root',
            event = 'click',
            config = {
              placement: "bottom-end",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 4],
                  },
                },
              ],
            },
            onToggle = () => {}

        if (binding.value && binding.value.ref) {
          ref = binding.value.ref;
        }
        if (binding.value && binding.value.root) {
          root = binding.value.root;
        }
        if (binding.value && binding.value.placement) {
          config.placement = binding.value.placement;
        }
        if (binding.value && binding.value.offset) {
          config.modifiers[0].options.offset = binding.value.offset;
        }
        if (binding.value && binding.value.event) {
          event = binding.value.event;
        }

        if (binding.value && binding.value.onToggle) {
          new Popper(el, el.querySelector(ref), el.querySelector(root), config, event, binding.value.onToggle);
        } else {
          new Popper(el, el.querySelector(ref), el.querySelector(root), config, event, onToggle);
        }
      }
    },
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
