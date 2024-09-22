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
import { TvSeriesAlternativeTitles200ResponseResultsInner } from './tvSeriesAlternativeTitles200ResponseResultsInner';

export class TvSeriesAlternativeTitles200Response {
    'id'?: number = 0;
    'results'?: Array<TvSeriesAlternativeTitles200ResponseResultsInner>;

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
            "type": "Array<TvSeriesAlternativeTitles200ResponseResultsInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesAlternativeTitles200Response.attributeTypeMap;
    }
}

