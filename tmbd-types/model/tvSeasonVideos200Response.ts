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
import { TvSeasonVideos200ResponseResultsInner } from './tvSeasonVideos200ResponseResultsInner';

export class TvSeasonVideos200Response {
    'id'?: number = 0;
    'results'?: Array<TvSeasonVideos200ResponseResultsInner>;

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
            "type": "Array<TvSeasonVideos200ResponseResultsInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonVideos200Response.attributeTypeMap;
    }
}

