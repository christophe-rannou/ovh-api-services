angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkRoute4', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationNetworkRoute4');

  return {
    v6() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkRoute4V6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
