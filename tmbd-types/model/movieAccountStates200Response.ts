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
import { MovieAccountStates200ResponseRated } from './movieAccountStates200ResponseRated';

export class MovieAccountStates200Response {
    'id'?: number = 0;
    'favorite'?: boolean = true;
    'rated'?: MovieAccountStates200ResponseRated;
    'watchlist'?: boolean = true;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "favorite",
            "baseName": "favorite",
            "type": "boolean"
        },
        {
            "name": "rated",
            "baseName": "rated",
            "type": "MovieAccountStates200ResponseRated"
        },
        {
            "name": "watchlist",
            "baseName": "watchlist",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return MovieAccountStates200Response.attributeTypeMap;
    }
}

