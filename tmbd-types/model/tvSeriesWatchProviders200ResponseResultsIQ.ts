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
import { TvSeriesWatchProviders200ResponseResultsIQFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsIQFlatrateInner';

export class TvSeriesWatchProviders200ResponseResultsIQ {
    'link'?: string;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesWatchProviders200ResponseResultsIQ.attributeTypeMap;
    }
}

