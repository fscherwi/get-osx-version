import {expectType} from 'tsd';
import macOSVersion from './index.js';

expectType<string | undefined>(macOSVersion());
