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
import { MovieWatchProviders200ResponseResultsBEFlatrateInner } from './movieWatchProviders200ResponseResultsBEFlatrateInner';
import { MovieWatchProviders200ResponseResultsBERentInner } from './movieWatchProviders200ResponseResultsBERentInner';

export class MovieWatchProviders200ResponseResultsNO {
    'link'?: string;
    'rent'?: Array<MovieWatchProviders200ResponseResultsBERentInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsBERentInner>;
    'flatrate'?: Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsBERentInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsBERentInner>"
        },
        {
            "name": "flatrate",
            "baseName": "flatrate",
            "type": "Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsNO.attributeTypeMap;
    }
}

