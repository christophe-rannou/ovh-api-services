angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDns', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDns');

  return {
    LocalDomain() {
      return $injector.get('OvhApiOverTheBoxConfigurationDnsLocalDomain');
    },
    Nameserver() {
      return $injector.get('OvhApiOverTheBoxConfigurationDnsNameserver');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
