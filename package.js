Package.describe({
  name: 'constellation:position',
  version: '0.4.12',
  summary: 'Positioning plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-position.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom(['1.8.2', '2.3']);

  api.use(['templating@1.3.2', 'blaze@2.3.4', 'tracker', 'underscore', 'reactive-dict'], 'client');
  api.use('constellation:console@1.4.11', 'client');

  api.addFiles('position-client.css','client');
  api.addFiles('position-client.html','client');
  api.addFiles('position-client.js','client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
