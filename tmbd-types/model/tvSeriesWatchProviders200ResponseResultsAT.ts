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
import { MovieWatchProviders200ResponseResultsATBuyInner } from './movieWatchProviders200ResponseResultsATBuyInner';
import { TvSeriesWatchProviders200ResponseResultsATFlatrateInner } from './tvSeriesWatchProviders200ResponseResultsATFlatrateInner';

export class TvSeriesWatchProviders200ResponseResultsAT {
    'link'?: string;
    'buy'?: Array<MovieWatchProviders200ResponseResultsATBuyInner>;
    'flatrate'?: Array<TvSeriesWatchProviders200ResponseResultsATFlatrateInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsATBuyInner>"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<TvSeriesWatchProviders200ResponseResultsATFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesWatchProviders200ResponseResultsAT.attributeTypeMap;
    }
}

