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
import { TvSeriesWatchProviders200ResponseResultsPEFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsPEFlatrateInner';

export class TvSeasonWatchProviders200ResponseResultsPE {
    'link'?: string;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsPEFlatrateInner>;

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
            "type": "Array<TvSeriesWatchProviders200ResponseResultsPEFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonWatchProviders200ResponseResultsPE.attributeTypeMap;
    }
}

