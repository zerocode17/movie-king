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
import { TvSeasonAggregateCredits200ResponseCastInner } from './tvSeasonAggregateCredits200ResponseCastInner';
import { TvSeasonAggregateCredits200ResponseCrewInner } from './tvSeasonAggregateCredits200ResponseCrewInner';

export class TvSeasonAggregateCredits200Response {
    'cast'?: Array<TvSeasonAggregateCredits200ResponseCastInner>;
    'crew'?: Array<TvSeasonAggregateCredits200ResponseCrewInner>;
    'id'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cast",
            "baseName": "cast",
            "type": "Array<TvSeasonAggregateCredits200ResponseCastInner>"
        },
        {
            "name": "crew",
            "baseName": "crew",
            "type": "Array<TvSeasonAggregateCredits200ResponseCrewInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeasonAggregateCredits200Response.attributeTypeMap;
    }
}

