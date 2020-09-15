angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkInterface', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationNetworkInterface');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkInterfaceV6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
