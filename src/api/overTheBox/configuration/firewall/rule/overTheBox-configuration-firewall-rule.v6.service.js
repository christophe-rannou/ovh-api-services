angular.module('ovh-api-services').service('OvhApiOverTheBoxConfigurationFirewallRuleV6', ($resource, OvhApiOverTheBoxConfigurationFirewallRule) => {
  const interceptor = {
    response(response) {
      OvhApiOverTheBoxConfigurationFirewallRule.resetCache();
      return response.resource;
    },
  };

  const overTheBoxConfigurationFirewallRule = $resource('/overTheBox/:serviceName/configuration/firewall/rule', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiOverTheBoxConfigurationFirewallRule.cache,
    },
    get: {
      method: 'GET',
      cache: OvhApiOverTheBoxConfigurationFirewallRule.cache,
    },
    createRule: {
      method: 'POST',
      interceptor,
    },
    showAllRule: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/firewall/rule/showAll',
      interceptor,
    },
    getRule: {
      method: 'GET',
      url: '/overTheBox/:serviceName/configuration/firewall/rule/:id',
      interceptor,
    },
    removeRule: {
      method: 'DELETE',
      url: '/overTheBox/:serviceName/configuration/firewall/rule/:id',
    },
  });

  return overTheBoxConfigurationFirewallRule;
});
