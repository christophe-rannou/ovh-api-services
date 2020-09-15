angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationFirewall', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationFirewall');

  return {
    Redirect() {
      return $injector.get('OvhApiOverTheBoxConfigurationFirewallRedirect');
    },
    Rule() {
      return $injector.get('OvhApiOverTheBoxConfigurationFirewallRule');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
