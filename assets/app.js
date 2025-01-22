import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

import * as bootstrap from 'bootstrap';

if (bootstrap) {
    console.log('Bootstrap is loaded successfully:', bootstrap);
} else {
    console.log('Bootstrap is NOT loaded.');
}

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
import { startStimulusApp } from '@symfony/stimulus-bridge';
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers/app',
    true,
    /\.(j|t)sx?$/
));
