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
import { TvSeasonChangesById200ResponseChangesInner } from './tvSeasonChangesById200ResponseChangesInner';

export class TvSeasonChangesById200Response {
    'changes'?: Array<TvSeasonChangesById200ResponseChangesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "changes",
            "baseName": "changes",
            "type": "Array<TvSeasonChangesById200ResponseChangesInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonChangesById200Response.attributeTypeMap;
    }
}

