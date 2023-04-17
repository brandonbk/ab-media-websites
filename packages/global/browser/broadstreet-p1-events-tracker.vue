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
    trackedImpressions: {},
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
                links.forEach((link) => {
                  this.addClickListener(link);
                  this.trackImpression(link);
                });
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
    addClickListener(link) {
      const { id } = link;
      if (this.listeners[id]) return;
      this.listeners[id] = true;
      link.addEventListener('click', () => {
        const entity = this.parseAdEntityFromUrl(link, 'href');
        this.track({ action: 'Click', entity });
      });
    },

    /**
     * @typedef P1EventsEntity
     * @prop {string} id The entity ID.
     * @prop {string} ns The entity namespace.
     *
     * @param {HTMLElement} element
     * @param {string} key The dataset (data attribute) key to get the URL from.
     * @returns {P1EventsEntity}
     */
    parseAdEntityFromUrl(element, key) {
      const url = new URL(element.dataset[key]);
      const [, advertisementId, campaignId] = url.pathname.split('/').filter((v) => v);
      return {
        id: `${advertisementId}_${campaignId.replace(/[a-z]/g, '')}`,
        ns: `broadstreet.${this.networkId}.advertisement-campaign`,
      };
    },

    /**
     *
     * @param {object} params
     * @param {string} params.action The P1Events action, e.g. `Click` or `Impression`
     * @param {P1EventsEntity} params.entity The Broadstreet ad entity id and namespace
     */
    track({ action, entity }) {
      window.p1events('track', { action, category: 'Banner Ad', entity });
    },

    /**
     *
     * @param {HTMLElement} element
     */
    trackImpression(element) {
      const { id } = element;
      if (this.trackedImpressions[id]) return;
      this.trackedImpressions[id] = true;
      const entity = this.parseAdEntityFromUrl(element, 'view');
      this.track({ action: 'Impression', entity });
    },
  },
};
</script>
