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
import { TvSeasonWatchProviders200ResponseResults } from './tvSeasonWatchProviders200ResponseResults';

export class TvSeasonWatchProviders200Response {
    'id'?: number = 0;
    'results'?: TvSeasonWatchProviders200ResponseResults;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "TvSeasonWatchProviders200ResponseResults"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonWatchProviders200Response.attributeTypeMap;
    }
}

