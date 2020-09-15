angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationFirewallRule', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationFirewallRule');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationFirewallRuleV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
