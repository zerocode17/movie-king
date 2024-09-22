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
import { MovieWatchProviders200ResponseResultsATFlatrateInner } from './movieWatchProviders200ResponseResultsATFlatrateInner';
import { MovieWatchProviders200ResponseResultsDEBuyInner } from './movieWatchProviders200ResponseResultsDEBuyInner';

export class MovieWatchProviders200ResponseResultsDE {
    'link'?: string;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsATFlatrateInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsDEBuyInner>;
    'rent'?: Array<MovieWatchProviders200ResponseResultsDEBuyInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsATFlatrateInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsDEBuyInner>"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsDEBuyInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsDE.attributeTypeMap;
    }
}

