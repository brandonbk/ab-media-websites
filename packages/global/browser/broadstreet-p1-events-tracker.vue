<template>
  <div class="global-broadstreet-p1-events-tracker" style="display: none;" />
</template>

<script>
export default {
  props: {
    networkId: {
      type: [String, Number],
      required: true,
    },
  },

  data: () => ({
    /**
     * @type {MutationObserver[]}
     */
    observers: [],
    listeners: {},
  }),

  created() {
    if (!window.p1events) return;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'childList') return;
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName !== 'BROADSTREET-ZONE') return;
          // watch each zone for changes
          const childObserver = new MutationObserver((childList) => {
            childList.forEach((childMutation) => {
              if (childMutation.type !== 'childList') return;
              childMutation.addedNodes.forEach((child) => {
                if (child.nodeType !== Node.ELEMENT_NODE) return;
                /** @type {NodeList} */
                const links = child.querySelectorAll('a');
                if (!links.length) return;
                links.forEach((link) => this.addListener(link));
              });
            });
          });
          childObserver.observe(node, { childList: true, subtree: true });
          this.observers.push(childObserver);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    this.observers.push(observer);
  },

  beforeDestroy() {
    this.observers.forEach((observer) => observer.disconnect());
  },

  methods: {
    /**
     *
     * @param {HTMLAnchorElement} link
     */
    addListener(link) {
      const { id } = link;
      if (!this.listeners[id]) {
        this.listeners[id] = true;
        link.addEventListener('click', () => {
          const url = new URL(link.dataset.href);
          const [, advertisementId, campaignId, zoneId] = url.pathname.split('/').filter((v) => v);
          const props = {
            advertisementId,
            campaignId: campaignId.replace(/[a-z]/g, ''),
            zoneId: zoneId.replace(/[a-z]/g, ''),
          };
          window.p1events('track', {
            action: 'Click',
            category: 'Banner Ad',
            entity: {
              id: `${props.advertisementId}_${props.campaignId}`,
              ns: `broadstreet.${this.networkId}.advertisement-campaign`,
            },
          });
        });
      }
    },
  },
};
</script>
