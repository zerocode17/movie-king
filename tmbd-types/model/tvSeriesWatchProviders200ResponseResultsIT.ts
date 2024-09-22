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
import { TvSeriesWatchProviders200ResponseResultsIEFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsIEFlatrateInner';
import { TvSeriesWatchProviders200ResponseResultsITBuyInner } from './tvSeriesWatchProviders200ResponseResultsITBuyInner';

export class TvSeriesWatchProviders200ResponseResultsIT {
    'link'?: string;
    'buy'?: Array<TvSeriesWatchProviders200ResponseResultsITBuyInner>;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsIEFlatrateInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<TvSeriesWatchProviders200ResponseResultsITBuyInner>"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<TvSeriesWatchProviders200ResponseResultsIEFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesWatchProviders200ResponseResultsIT.attributeTypeMap;
    }
}

