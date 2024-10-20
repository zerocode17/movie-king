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

export class CreditDetails200ResponsePerson {
    'adult'?: boolean = true;
    'id'?: number = 0;
    'name'?: string;
    'original_name'?: string;
    'media_type'?: string;
    'popularity'?: number = 0;
    'gender'?: number = 0;
    'known_for_department'?: string;
    'profile_path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "original_name",
            "baseName": "original_name",
            "type": "string"
        },
        {
            "name": "media_type",
            "baseName": "media_type",
            "type": "string"
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "number"
        },
        {
            "name": "known_for_department",
            "baseName": "known_for_department",
            "type": "string"
        },
        {
            "name": "profile_path",
            "baseName": "profile_path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreditDetails200ResponsePerson.attributeTypeMap;
    }
}

