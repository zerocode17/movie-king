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
import { AccountDetails200ResponseAvatarGravatar } from './accountDetails200ResponseAvatarGravatar';
import { AccountDetails200ResponseAvatarTmdb } from './accountDetails200ResponseAvatarTmdb';

export class AccountDetails200ResponseAvatar {
    'gravatar'?: AccountDetails200ResponseAvatarGravatar;
    'tmdb'?: AccountDetails200ResponseAvatarTmdb;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gravatar",
            "baseName": "gravatar",
            "type": "AccountDetails200ResponseAvatarGravatar"
        },
        {
            "name": "tmdb",
            "baseName": "tmdb",
            "type": "AccountDetails200ResponseAvatarTmdb"
        }    ];

    static getAttributeTypeMap() {
        return AccountDetails200ResponseAvatar.attributeTypeMap;
    }
}

