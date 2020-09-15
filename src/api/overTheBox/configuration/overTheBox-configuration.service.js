angular.module('ovh-api-services').service('OvhApiOverTheBoxConfiguration', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfiguration');

  return {
    Dhcp() {
      return $injector.get('OvhApiOverTheBoxConfigurationDhcp');
    },
    Dns() {
      return $injector.get('OvhApiOverTheBoxConfigurationDns');
    },
    Firewall() {
      return $injector.get('OvhApiOverTheBoxConfigurationFirewall');
    },
    Network() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetwork');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
