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
import { MovieWatchProviders200ResponseResultsAERentInner } from './movieWatchProviders200ResponseResultsAERentInner';
import { MovieWatchProviders200ResponseResultsSAFlatrateInner } from './movieWatchProviders200ResponseResultsSAFlatrateInner';

export class MovieWatchProviders200ResponseResultsSA {
    'link'?: string;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsSAFlatrateInner>;
    'rent'?: Array<MovieWatchProviders200ResponseResultsAERentInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsAERentInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsSAFlatrateInner>"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsAERentInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsAERentInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsSA.attributeTypeMap;
    }
}

