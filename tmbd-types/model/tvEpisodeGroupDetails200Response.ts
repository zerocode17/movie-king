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
import { TvEpisodeGroupDetails200ResponseGroupsInner } from './tvEpisodeGroupDetails200ResponseGroupsInner';
import { TvEpisodeGroupDetails200ResponseNetwork } from './tvEpisodeGroupDetails200ResponseNetwork';

export class TvEpisodeGroupDetails200Response {
    'description'?: string;
    'episode_count'?: number = 0;
    'group_count'?: number = 0;
    'groups'?: Array<TvEpisodeGroupDetails200ResponseGroupsInner>;
    'id'?: string;
    'name'?: string;
    'network'?: TvEpisodeGroupDetails200ResponseNetwork;
    'type'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "episode_count",
            "baseName": "episode_count",
            "type": "number"
        },
        {
            "name": "group_count",
            "baseName": "group_count",
            "type": "number"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<TvEpisodeGroupDetails200ResponseGroupsInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "TvEpisodeGroupDetails200ResponseNetwork"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvEpisodeGroupDetails200Response.attributeTypeMap;
    }
}

