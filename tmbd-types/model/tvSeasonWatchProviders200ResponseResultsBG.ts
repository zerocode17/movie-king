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
import { TvSeriesWatchProviders200ResponseResultsBGFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsBGFlatrateInner';

export class TvSeasonWatchProviders200ResponseResultsBG {
    'link'?: string;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsBGFlatrateInner>;

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
            "type": "Array<TvSeriesWatchProviders200ResponseResultsBGFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonWatchProviders200ResponseResultsBG.attributeTypeMap;
    }
}

