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

export class CertificationMovieList200ResponseCertificationsAUInner {
    'certification'?: string;
    'meaning'?: string;
    'order'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certification",
            "baseName": "certification",
            "type": "string"
        },
        {
            "name": "meaning",
            "baseName": "meaning",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CertificationMovieList200ResponseCertificationsAUInner.attributeTypeMap;
    }
}

