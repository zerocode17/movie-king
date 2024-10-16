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
import { MovieWatchProviders200ResponseResultsDKRentInner } from './movieWatchProviders200ResponseResultsDKRentInner';
import { MovieWatchProviders200ResponseResultsJPFlatrateInner } from './movieWatchProviders200ResponseResultsJPFlatrateInner';
import { MovieWatchProviders200ResponseResultsJPRentInner } from './movieWatchProviders200ResponseResultsJPRentInner';

export class MovieWatchProviders200ResponseResultsJP {
    'link'?: string;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsJPFlatrateInner>;
    'rent'?: Array<MovieWatchProviders200ResponseResultsJPRentInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsDKRentInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsJPFlatrateInner>"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsJPRentInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsDKRentInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsJP.attributeTypeMap;
    }
}

