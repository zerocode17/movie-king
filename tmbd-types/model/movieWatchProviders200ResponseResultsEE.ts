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
import { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './movieWatchProviders200ResponseResultsAUFlatrateInner';
import { MovieWatchProviders200ResponseResultsCLBuyInner } from './movieWatchProviders200ResponseResultsCLBuyInner';
import { MovieWatchProviders200ResponseResultsCZBuyInner } from './movieWatchProviders200ResponseResultsCZBuyInner';

export class MovieWatchProviders200ResponseResultsEE {
    'link'?: string;
    'buy'?: Array<MovieWatchProviders200ResponseResultsCZBuyInner>;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
    'rent'?: Array<MovieWatchProviders200ResponseResultsCLBuyInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsCZBuyInner>"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsCLBuyInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsEE.attributeTypeMap;
    }
}

