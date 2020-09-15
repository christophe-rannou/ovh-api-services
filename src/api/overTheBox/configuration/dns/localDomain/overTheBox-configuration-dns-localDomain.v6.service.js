angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationDnsLocalDomainV6', ($resource, OvhApiOverTheBoxConfigurationDnsLocalDomain) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationDnsLocalDomain.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationDnsLocalDomain = $resource('/overTheBox/:serviceName/configuration/dns/localDomain', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationDnsLocalDomain.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationDnsLocalDomain.cache,
    },
    createLocalDomain: {
      method: 'POST',
      interceptor,
    },
    showAllLocalDomain: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dns/localDomain/showAll',
      interceptor,
    },
    getLocalDomain: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/dns/localDomain/:id',
      interceptor,
    },
    removeLocalDomain: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/dns/localDomain/:id',
    },
  });

  return overTheBoxConfigurationDnsLocalDomain;
});
