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

export class SearchCompany200ResponseResultsInner {
    'id'?: number = 0;
    'logo_path'?: string;
    'name'?: string;
    'origin_country'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "logo_path",
            "baseName": "logo_path",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "origin_country",
            "baseName": "origin_country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SearchCompany200ResponseResultsInner.attributeTypeMap;
    }
}

