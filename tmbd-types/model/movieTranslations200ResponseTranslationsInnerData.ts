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

export class MovieTranslations200ResponseTranslationsInnerData {
    'homepage'?: string;
    'overview'?: string;
    'runtime'?: number = 0;
    'tagline'?: string;
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "homepage",
            "baseName": "homepage",
            "type": "string"
        },
        {
            "name": "overview",
            "baseName": "overview",
            "type": "string"
        },
        {
            "name": "runtime",
            "baseName": "runtime",
            "type": "number"
        },
        {
            "name": "tagline",
            "baseName": "tagline",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MovieTranslations200ResponseTranslationsInnerData.attributeTypeMap;
    }
}

