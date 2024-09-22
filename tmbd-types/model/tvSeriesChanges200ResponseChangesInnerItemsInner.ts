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
import { TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue } from './tvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue';
import { TvSeriesChanges200ResponseChangesInnerItemsInnerValue } from './tvSeriesChanges200ResponseChangesInnerItemsInnerValue';

export class TvSeriesChanges200ResponseChangesInnerItemsInner {
    'id'?: string;
    'action'?: string;
    'time'?: string;
    'iso_639_1'?: string;
    'iso_3166_1'?: string;
    'value'?: TvSeriesChanges200ResponseChangesInnerItemsInnerValue;
    'original_value'?: TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "string"
        },
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
            "name": "value",
            "baseName": "value",
            "type": "TvSeriesChanges200ResponseChangesInnerItemsInnerValue"
        },
        {
            "name": "original_value",
            "baseName": "original_value",
            "type": "TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesChanges200ResponseChangesInnerItemsInner.attributeTypeMap;
    }
}

