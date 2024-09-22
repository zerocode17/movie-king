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

export class AlternativeNamesCopy200ResponseLogosInner {
    'aspect_ratio'?: number = 0;
    'file_path'?: string;
    'height'?: number = 0;
    'id'?: string;
    'file_type'?: string;
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
            "name": "file_path",
            "baseName": "file_path",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "file_type",
            "baseName": "file_type",
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
        return AlternativeNamesCopy200ResponseLogosInner.attributeTypeMap;
    }
}

