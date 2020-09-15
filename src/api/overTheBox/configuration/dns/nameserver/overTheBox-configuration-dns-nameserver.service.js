angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDnsNameserver', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDnsNameserver');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationDnsNameserverV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
