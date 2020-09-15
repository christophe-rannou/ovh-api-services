angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDhcpStaticLease', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDhcpStaticLease');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationDhcpStaticLeaseV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
