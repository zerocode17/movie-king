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

export class TvSeriesWatchProviders200ResponseResultsFRFlatrateInner {
    'logo_path'?: string;
    'provider_id'?: number = 0;
    'provider_name'?: string;
    'display_priority'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logo_path",
            "baseName": "logo_path",
            "type": "string"
        },
        {
            "name": "provider_id",
            "baseName": "provider_id",
            "type": "number"
        },
        {
            "name": "provider_name",
            "baseName": "provider_name",
            "type": "string"
        },
        {
            "name": "display_priority",
            "baseName": "display_priority",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesWatchProviders200ResponseResultsFRFlatrateInner.attributeTypeMap;
    }
}

