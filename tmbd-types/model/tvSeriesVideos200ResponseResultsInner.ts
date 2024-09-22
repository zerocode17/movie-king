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

export class TvSeriesVideos200ResponseResultsInner {
    'iso_639_1'?: string;
    'iso_3166_1'?: string;
    'name'?: string;
    'key'?: string;
    'site'?: string;
    'size'?: number = 0;
    'type'?: string;
    'official'?: boolean = true;
    'published_at'?: string;
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "iso_639_1",
            "baseName": "iso_639_1",
            "type": "string"
        },
        {
            "name": "iso_3166_1",
            "baseName": "iso_3166_1",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "site",
            "baseName": "site",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "official",
            "baseName": "official",
            "type": "boolean"
        },
        {
            "name": "published_at",
            "baseName": "published_at",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesVideos200ResponseResultsInner.attributeTypeMap;
    }
}

