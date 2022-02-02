import { build } from 'electron-builder';

build({
  config: {
    appId: 'com.example.app',
    mac: {
      category: 'public.app-category.developer-tools',
    },
  },
})
  .then(() => console.log('Completed.'))
  .catch((err) => console.log(err));
