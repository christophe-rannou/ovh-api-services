angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationNetworkInterfaceV6', ($resource, OvhApiOverTheBoxConfigurationNetworkInterface) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationNetworkInterface.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationNetworkInterface = $resource('/overTheBox/:serviceName/configuration/network/interface', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationNetworkInterface.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationNetworkInterface.cache,
      isArray: true,
    },
    createInterface: {
      method: 'POST',
      interceptor,
    },
    showAllInterface: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/interface/showAll',
      isArray: true,
      interceptor,
    },
    getInterface: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/network/interface/:id',
      interceptor,
    },
    removeInterface: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/firewall/rule/:id',
    },
  });

  return overTheBoxConfigurationNetworkInterface;
});
