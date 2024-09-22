/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MovieChanges200ResponseChangesInnerItemsInner } from './movieChanges200ResponseChangesInnerItemsInner';

export class MovieChanges200ResponseChangesInner {
    'key'?: string;
    'items'?: Array<MovieChanges200ResponseChangesInnerItemsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<MovieChanges200ResponseChangesInnerItemsInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieChanges200ResponseChangesInner.attributeTypeMap;
    }
}

