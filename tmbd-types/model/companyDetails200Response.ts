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

export class CompanyDetails200Response {
    'description'?: string;
    'headquarters'?: string;
    'homepage'?: string;
    'id'?: number = 0;
    'logo_path'?: string;
    'name'?: string;
    'origin_country'?: string;
    'parent_company'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "headquarters",
            "baseName": "headquarters",
            "type": "string"
        },
        {
            "name": "homepage",
            "baseName": "homepage",
            "type": "string"
        },
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
        },
        {
            "name": "parent_company",
            "baseName": "parent_company",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return CompanyDetails200Response.attributeTypeMap;
    }
}

