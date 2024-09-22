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

export class SearchPerson200ResponseResultsInnerKnownForInner {
    'adult'?: boolean = true;
    'backdrop_path'?: string;
    'id'?: number = 0;
    'title'?: string;
    'original_language'?: string;
    'original_title'?: string;
    'overview'?: string;
    'poster_path'?: string;
    'media_type'?: string;
    'genre_ids'?: Array<number>;
    'popularity'?: number = 0;
    'release_date'?: string;
    'video'?: boolean = true;
    'vote_average'?: number = 0;
    'vote_count'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "boolean"
        },
        {
            "name": "backdrop_path",
            "baseName": "backdrop_path",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "original_language",
            "baseName": "original_language",
            "type": "string"
        },
        {
            "name": "original_title",
            "baseName": "original_title",
            "type": "string"
        },
        {
            "name": "overview",
            "baseName": "overview",
            "type": "string"
        },
        {
            "name": "poster_path",
            "baseName": "poster_path",
            "type": "string"
        },
        {
            "name": "media_type",
            "baseName": "media_type",
            "type": "string"
        },
        {
            "name": "genre_ids",
            "baseName": "genre_ids",
            "type": "Array<number>"
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "release_date",
            "baseName": "release_date",
            "type": "string"
        },
        {
            "name": "video",
            "baseName": "video",
            "type": "boolean"
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
        }    ];

    static getAttributeTypeMap() {
        return SearchPerson200ResponseResultsInnerKnownForInner.attributeTypeMap;
    }
}

