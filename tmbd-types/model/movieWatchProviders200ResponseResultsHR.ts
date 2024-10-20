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
import { MovieWatchProviders200ResponseResultsCOBuyInner } from './movieWatchProviders200ResponseResultsCOBuyInner';
import { MovieWatchProviders200ResponseResultsHRAdsInner } from './movieWatchProviders200ResponseResultsHRAdsInner';

export class MovieWatchProviders200ResponseResultsHR {
    'link'?: string;
    'buy'?: Array<MovieWatchProviders200ResponseResultsCOBuyInner>;
    'ads'?: Array<MovieWatchProviders200ResponseResultsHRAdsInner>;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsCOBuyInner>"
        },
        {
            "name": "ads",
            "baseName": "ads",
            "type": "Array<MovieWatchProviders200ResponseResultsHRAdsInner>"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsHR.attributeTypeMap;
    }
}

