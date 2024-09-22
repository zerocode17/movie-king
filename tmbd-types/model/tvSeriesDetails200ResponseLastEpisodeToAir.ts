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

export class TvSeriesDetails200ResponseLastEpisodeToAir {
    'id'?: number = 0;
    'name'?: string;
    'overview'?: string;
    'vote_average'?: number = 0;
    'vote_count'?: number = 0;
    'air_date'?: string;
    'episode_number'?: number = 0;
    'production_code'?: string;
    'runtime'?: number = 0;
    'season_number'?: number = 0;
    'show_id'?: number = 0;
    'still_path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "vote_average",
            "baseName": "vote_average",
            "type": "number"
        },
        {
            "name": "vote_count",
            "baseName": "vote_count",
            "type": "number"
        },
        {
            "name": "air_date",
            "baseName": "air_date",
            "type": "string"
        },
        {
            "name": "episode_number",
            "baseName": "episode_number",
            "type": "number"
        },
        {
            "name": "production_code",
            "baseName": "production_code",
            "type": "string"
        },
        {
            "name": "runtime",
            "baseName": "runtime",
            "type": "number"
        },
        {
            "name": "season_number",
            "baseName": "season_number",
            "type": "number"
        },
        {
            "name": "show_id",
            "baseName": "show_id",
            "type": "number"
        },
        {
            "name": "still_path",
            "baseName": "still_path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesDetails200ResponseLastEpisodeToAir.attributeTypeMap;
    }
}

