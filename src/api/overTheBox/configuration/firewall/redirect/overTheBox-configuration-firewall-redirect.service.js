angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationFirewallRedirect', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationFirewallRedirect');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationFirewallRedirectV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
