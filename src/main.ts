import './style.css'

import { setupCounter } from './counter.ts'

import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';
import { Command } from '@pipedrive/app-extensions-sdk';

// SDK detects identifier from URL and uses default custom UI size
const sdk = await new AppExtensionsSDK().initialize();

await sdk.execute(Command.SHOW_SNACKBAR, {
  message: 'Action completed',
  link: {
    url: 'https://app.pipedrive.com',
    label: 'View',
  },
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button>Test</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
