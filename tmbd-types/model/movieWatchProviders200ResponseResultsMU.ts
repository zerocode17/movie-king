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
import { MovieWatchProviders200ResponseResultsMUBuyInner } from './movieWatchProviders200ResponseResultsMUBuyInner';

export class MovieWatchProviders200ResponseResultsMU {
    'link'?: string;
    'buy'?: Array<MovieWatchProviders200ResponseResultsMUBuyInner>;
    'rent'?: Array<MovieWatchProviders200ResponseResultsMUBuyInner>;

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
            "type": "Array<MovieWatchProviders200ResponseResultsMUBuyInner>"
        },
        {
            "name": "rent",
            "baseName": "rent",
            "type": "Array<MovieWatchProviders200ResponseResultsMUBuyInner>"
        }    ];

    static getAttributeTypeMap() {
        return MovieWatchProviders200ResponseResultsMU.attributeTypeMap;
    }
}

