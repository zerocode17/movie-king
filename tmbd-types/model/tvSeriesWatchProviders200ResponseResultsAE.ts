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
import { TvSeriesWatchProviders200ResponseResultsAEFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsAEFlatrateInner';

export class TvSeriesWatchProviders200ResponseResultsAE {
    'link'?: string;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsAEFlatrateInner>;

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
            "type": "Array<TvSeriesWatchProviders200ResponseResultsAEFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesWatchProviders200ResponseResultsAE.attributeTypeMap;
    }
}

