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
import { TvEpisodeGroupDetails200ResponseGroupsInnerEpisodesInner } from './tvEpisodeGroupDetails200ResponseGroupsInnerEpisodesInner';

export class TvEpisodeGroupDetails200ResponseGroupsInner {
    'id'?: string;
    'name'?: string;
    'order'?: number = 0;
    'episodes'?: Array<TvEpisodeGroupDetails200ResponseGroupsInnerEpisodesInner>;
    'locked'?: boolean = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "episodes",
            "baseName": "episodes",
            "type": "Array<TvEpisodeGroupDetails200ResponseGroupsInnerEpisodesInner>"
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TvEpisodeGroupDetails200ResponseGroupsInner.attributeTypeMap;
    }
}

