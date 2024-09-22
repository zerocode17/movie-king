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

export class TvSeriesContentRatings200ResponseResultsInner {
    'descriptors'?: Array<string>;
    'iso_3166_1'?: string;
    'rating'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "descriptors",
            "baseName": "descriptors",
            "type": "Array<string>"
        },
        {
            "name": "iso_3166_1",
            "baseName": "iso_3166_1",
            "type": "string"
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesContentRatings200ResponseResultsInner.attributeTypeMap;
    }
}

