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
import { TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValuePoster } from './tvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValuePoster';

export class TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue {
    'poster'?: TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValuePoster;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "poster",
            "baseName": "poster",
            "type": "TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValuePoster"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesChanges200ResponseChangesInnerItemsInnerOriginalValue.attributeTypeMap;
    }
}

