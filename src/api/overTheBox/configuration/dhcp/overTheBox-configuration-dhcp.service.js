angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDhcp', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDhcp');

  return {
    Config() {
      return $injector.get('OvhApiOverTheBoxConfigurationDhcpConfig');
    },
    StaticLease() {
      return $injector.get('OvhApiOverTheBoxConfigurationDhcpStaticLease');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
