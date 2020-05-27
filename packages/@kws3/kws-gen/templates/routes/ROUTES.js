routeMap['<%= section_url %>s'] = [
  { 'pattern': '/', 'view': '<%= section_name %>s' },
  { 'pattern': '/(\\d+)/?([^/]*)?/?([^/]*)?/?$$', 'view': '<%= section_name %>s', 'type': 'regex' },
  { 'pattern': '/view/(\\d+)$$', 'view': 'View<%= section_name %>', 'type': 'regex' },
  { 'pattern': '/add', 'view': 'Add<%= section_name %>' }
];

