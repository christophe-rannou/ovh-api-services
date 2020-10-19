angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDnsNameserverV6', ($resource, OvhApiOverTheBoxConfigurationDnsNameserver) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationDnsNameserver.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationDnsNameserver = $resource('/overTheBox/:serviceName/configuration/dns/nameserver', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationDnsNameserver.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationDnsNameserver.cache,
      isArray: true,
    },
    createNameserver: {
      method: 'POST',
      isArray: false,
      interceptor,
    },
    showAllNameserver: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dns/nameserver/showAll',
      isArray: true,
      interceptor,
    },
    getNameserver: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dns/nameserver/:id',
      interceptor,
    },
    removeNameserver: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/dns/nameserver/:id',
    },
  });

  return overTheBoxConfigurationDnsNameserver;
});
