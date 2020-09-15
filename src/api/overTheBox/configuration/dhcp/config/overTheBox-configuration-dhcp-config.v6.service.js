angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDhcpConfigV6', ($resource, OvhApiOverTheBoxConfigurationDhcpConfig) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationDhcpConfig.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationDhcpConfig = $resource('/overTheBox/:serviceName/configuration/dhcp/config', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationDhcpConfig.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationDhcpConfig.cache,
    },
    createConfig: {
      method: 'POST',
      interceptor,
    },
    showAllConfig: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dhcp/config/showAll',
      interceptor,
    },
    getConfig: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dhcp/config/:id',
      interceptor,
    },
    removeConfig: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/dhcp/config/:id',
    },
  });

  return overTheBoxConfigurationDhcpConfig;
});
