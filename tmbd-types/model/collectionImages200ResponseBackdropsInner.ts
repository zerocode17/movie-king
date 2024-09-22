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

export class CollectionImages200ResponseBackdropsInner {
    'aspect_ratio'?: number = 0;
    'height'?: number = 0;
    'iso_639_1'?: any | null;
    'file_path'?: string;
    'vote_average'?: number = 0;
    'vote_count'?: number = 0;
    'width'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aspect_ratio",
            "baseName": "aspect_ratio",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "iso_639_1",
            "baseName": "iso_639_1",
            "type": "any"
        },
        {
            "name": "file_path",
            "baseName": "file_path",
            "type": "string"
        },
        {
            "name": "vote_average",
            "baseName": "vote_average",
            "type": "number"
        },
        {
            "name": "vote_count",
            "baseName": "vote_count",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CollectionImages200ResponseBackdropsInner.attributeTypeMap;
    }
}

