angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkRoute6V6', ($resource, OvhApiOverTheBoxConfigurationNetworkRoute6) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationNetworkRoute6.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationNetworkRoute6 = $resource('/overTheBox/:serviceName/configuration/network/route6', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationNetworkRoute6.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationNetworkRoute6.cache,
      isArray: true,
    },
    createRoute6: {
      method: 'POST',
      interceptor,
    },
    showAllRoute6: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/route6/showAll',
      isArray: true,
      interceptor,
    },
    getRoute6: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/route6/:id',
      interceptor,
    },
    removeRoute6: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/network/route6/:id',
    },
  });

  return overTheBoxConfigurationNetworkRoute6;
});
