angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetwork', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiOverTheBoxConfigurationNetwork');

  return {
    Interface() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkInterface');
    },
    Route4() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkRoute4');
    },
    Route6() {
      return $injector.get('OvhApiOverTheBoxConfigurationNetworkRoute6');
    },
    resetCache: cache.removeAll,
    cache,
  };
});
