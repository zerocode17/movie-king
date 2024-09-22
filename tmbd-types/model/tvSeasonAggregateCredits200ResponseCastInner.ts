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
import { TvSeasonAggregateCredits200ResponseCastInnerRolesInner } from './tvSeasonAggregateCredits200ResponseCastInnerRolesInner';

export class TvSeasonAggregateCredits200ResponseCastInner {
    'adult'?: boolean = true;
    'gender'?: number = 0;
    'id'?: number = 0;
    'known_for_department'?: string;
    'name'?: string;
    'original_name'?: string;
    'popularity'?: number = 0;
    'profile_path'?: string;
    'roles'?: Array<TvSeasonAggregateCredits200ResponseCastInnerRolesInner>;
    'total_episode_count'?: number = 0;
    'order'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "boolean"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "known_for_department",
            "baseName": "known_for_department",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "original_name",
            "baseName": "original_name",
            "type": "string"
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "profile_path",
            "baseName": "profile_path",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<TvSeasonAggregateCredits200ResponseCastInnerRolesInner>"
        },
        {
            "name": "total_episode_count",
            "baseName": "total_episode_count",
            "type": "number"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonAggregateCredits200ResponseCastInner.attributeTypeMap;
    }
}

