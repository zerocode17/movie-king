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
import { TvSeriesTopRatedList200ResponseResultsInner } from './tvSeriesTopRatedList200ResponseResultsInner';

export class TvSeriesTopRatedList200Response {
    'page'?: number = 0;
    'results'?: Array<TvSeriesTopRatedList200ResponseResultsInner>;
    'total_pages'?: number = 0;
    'total_results'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TvSeriesTopRatedList200ResponseResultsInner>"
        },
        {
            "name": "total_pages",
            "baseName": "total_pages",
            "type": "number"
        },
        {
            "name": "total_results",
            "baseName": "total_results",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesTopRatedList200Response.attributeTypeMap;
    }
}

