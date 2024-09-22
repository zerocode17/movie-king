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
import { TvSeriesAggregateCredits200ResponseCastInner } from './tvSeriesAggregateCredits200ResponseCastInner';
import { TvSeriesAggregateCredits200ResponseCrewInner } from './tvSeriesAggregateCredits200ResponseCrewInner';

export class TvSeriesAggregateCredits200Response {
    'cast'?: Array<TvSeriesAggregateCredits200ResponseCastInner>;
    'crew'?: Array<TvSeriesAggregateCredits200ResponseCrewInner>;
    'id'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cast",
            "baseName": "cast",
            "type": "Array<TvSeriesAggregateCredits200ResponseCastInner>"
        },
        {
            "name": "crew",
            "baseName": "crew",
            "type": "Array<TvSeriesAggregateCredits200ResponseCrewInner>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesAggregateCredits200Response.attributeTypeMap;
    }
}

