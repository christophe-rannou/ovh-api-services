angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDhcpStaticLeaseV6', ($resource, OvhApiOverTheBoxConfigurationDhcpStaticLease) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationDhcpStaticLease.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationDhcpStaticLease = $resource('/overTheBox/:serviceName/configuration/dhcp/staticLease', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationDhcpStaticLease.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationDhcpStaticLease.cache,
    },
    createStaticLease: {
      method: 'POST',
      isArray: true,
      interceptor,
    },
    showAllStaticLease: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dhcp/staticLease/showAll',
      isArray: true,
      interceptor,
    },
    getStaticLease: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dhcp/staticLease/:id',
      interceptor,
    },
    removeStaticLease: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/dhcp/staticLease/:id',
    },
  });

  return overTheBoxConfigurationDhcpStaticLease;
});
