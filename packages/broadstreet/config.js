class BroadstreetConfiguration {
  constructor(networkId) {
    if (!networkId) throw new Error('Unable to configure Broadstreet: no network ID was provided.');
    this.networkId = networkId;
  }
}

module.exports = BroadstreetConfiguration;
