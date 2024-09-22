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

export class MovieCredits200ResponseCrewInner {
    'adult'?: boolean = true;
    'gender'?: number = 0;
    'id'?: number = 0;
    'known_for_department'?: string;
    'name'?: string;
    'original_name'?: string;
    'popularity'?: number = 0;
    'profile_path'?: string;
    'credit_id'?: string;
    'department'?: string;
    'job'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "boolean"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "known_for_department",
            "baseName": "known_for_department",
            "type": "string"
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
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "profile_path",
            "baseName": "profile_path",
            "type": "string"
        },
        {
            "name": "credit_id",
            "baseName": "credit_id",
            "type": "string"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "string"
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MovieCredits200ResponseCrewInner.attributeTypeMap;
    }
}

