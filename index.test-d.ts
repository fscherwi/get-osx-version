import {expectType} from 'tsd';
import macOSVersion = require('.');

expectType<string | undefined>(macOSVersion());
