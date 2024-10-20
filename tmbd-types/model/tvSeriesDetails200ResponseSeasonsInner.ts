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

export class TvSeriesDetails200ResponseSeasonsInner {
    'air_date'?: string;
    'episode_count'?: number = 0;
    'id'?: number = 0;
    'name'?: string;
    'overview'?: string;
    'poster_path'?: string;
    'season_number'?: number = 0;
    'vote_average'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "air_date",
            "baseName": "air_date",
            "type": "string"
        },
        {
            "name": "episode_count",
            "baseName": "episode_count",
            "type": "number"
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
            "name": "season_number",
            "baseName": "season_number",
            "type": "number"
        },
        {
            "name": "vote_average",
            "baseName": "vote_average",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesDetails200ResponseSeasonsInner.attributeTypeMap;
    }
}

