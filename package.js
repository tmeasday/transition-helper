Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.use('templating', 'client')
  
  api.add_files([
    'transition-helper.html',
    'transition-helper.js'
  ], 'client');
});
