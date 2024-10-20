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

export class MovieDetails200ResponseSpokenLanguagesInner {
    'english_name'?: string;
    'iso_639_1'?: string;
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "english_name",
            "baseName": "english_name",
            "type": "string"
        },
        {
            "name": "iso_639_1",
            "baseName": "iso_639_1",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MovieDetails200ResponseSpokenLanguagesInner.attributeTypeMap;
    }
}

