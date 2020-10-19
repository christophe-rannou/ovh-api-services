angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkRoute4V6', ($resource, OvhApiOverTheBoxConfigurationNetworkRoute4) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationNetworkRoute4.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationNetworkRoute4 = $resource('/overTheBox/:serviceName/configuration/network/route4', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationNetworkRoute4.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationNetworkRoute4.cache,
      isArray: true,
    },
    createRoute4: {
      method: 'POST',
      interceptor,
    },
    showAllRoute4: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/route4/showAll',
      isArray: true,
      interceptor,
    },
    getRoute4: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/route4/:id',
      interceptor,
    },
    removeRoute4: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/network/route4/:id',
    },
  });

  return overTheBoxConfigurationNetworkRoute4;
});
