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
import { MovieWatchProviders200ResponseResultsBHBuyInner } from './movieWatchProviders200ResponseResultsBHBuyInner';

export class MovieWatchProviders200ResponseResultsLB {
    'link'?: string;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsBHBuyInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsBHBuyInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsLB.attributeTypeMap;
    }
}

