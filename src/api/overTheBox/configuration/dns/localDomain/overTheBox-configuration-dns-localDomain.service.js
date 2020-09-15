angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDnsLocalDomain', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDnsLocalDomain');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationDnsLocalDomainV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
