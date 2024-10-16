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
import { ConfigurationDetails200ResponseImages } from './configurationDetails200ResponseImages';

export class ConfigurationDetails200Response {
    'images'?: ConfigurationDetails200ResponseImages;
    'change_keys'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "images",
            "baseName": "images",
            "type": "ConfigurationDetails200ResponseImages"
        },
        {
            "name": "change_keys",
            "baseName": "change_keys",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ConfigurationDetails200Response.attributeTypeMap;
    }
}

