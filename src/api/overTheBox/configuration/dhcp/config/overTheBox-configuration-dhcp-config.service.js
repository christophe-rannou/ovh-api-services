angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDhcpConfig', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationDhcpConfig');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationDhcpConfigV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
