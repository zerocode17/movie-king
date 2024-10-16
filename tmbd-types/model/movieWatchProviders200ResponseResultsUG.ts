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
import { MovieWatchProviders200ResponseResultsMZRentInner } from './movieWatchProviders200ResponseResultsMZRentInner';

export class MovieWatchProviders200ResponseResultsUG {
    'link'?: string;
    'rent'?: Array<MovieWatchProviders200ResponseResultsMZRentInner>;
    'buy'?: Array<MovieWatchProviders200ResponseResultsMZRentInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsMZRentInner>"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Array<MovieWatchProviders200ResponseResultsMZRentInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsUG.attributeTypeMap;
    }
}

