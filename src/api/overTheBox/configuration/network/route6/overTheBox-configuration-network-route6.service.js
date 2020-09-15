angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkRoute6', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationNetworkRoute6');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkRoute6V6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
