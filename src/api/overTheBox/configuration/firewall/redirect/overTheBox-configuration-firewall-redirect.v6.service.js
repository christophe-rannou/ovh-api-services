angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationFirewallRedirectV6', ($resource, OvhApiOverTheBoxConfigurationFirewallRedirect) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationFirewallRedirect.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationFirewallRedirect = $resource('/overTheBox/:serviceName/configuration/firewall/redirect', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationFirewallRedirect.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationFirewallRedirect.cache,
    },
    createRedirect: {
      method: 'POST',
      interceptor,
    },
    showAllRedirect: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/firewall/redirect/showAll',
      interceptor,
    },
    getRedirect: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/firewall/redirect/:id',
      interceptor,
    },
    removeRedirect: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/firewall/redirect/:id',
    },
  });

  return overTheBoxConfigurationFirewallRedirect;
});
