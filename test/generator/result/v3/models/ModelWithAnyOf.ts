/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithArray } from './ModelWithArray';
import { ModelWithDictionary } from './ModelWithDictionary';
import { ModelWithEnum } from './ModelWithEnum';
import { ModelWithString } from './ModelWithString';

/**
 * This is a model with one property with a 'any of' relationship
 */
export interface ModelWithAnyOf {
    propA?:  |  |  | ;
}
