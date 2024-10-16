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
import { MovieDetails200ResponseSpokenLanguagesInner } from './movieDetails200ResponseSpokenLanguagesInner';
import { TvSeriesDetails200ResponseCreatedByInner } from './tvSeriesDetails200ResponseCreatedByInner';
import { TvSeriesDetails200ResponseGenresInner } from './tvSeriesDetails200ResponseGenresInner';
import { TvSeriesDetails200ResponseLastEpisodeToAir } from './tvSeriesDetails200ResponseLastEpisodeToAir';
import { TvSeriesDetails200ResponseNetworksInner } from './tvSeriesDetails200ResponseNetworksInner';
import { TvSeriesDetails200ResponseProductionCompaniesInner } from './tvSeriesDetails200ResponseProductionCompaniesInner';
import { TvSeriesDetails200ResponseProductionCountriesInner } from './tvSeriesDetails200ResponseProductionCountriesInner';
import { TvSeriesDetails200ResponseSeasonsInner } from './tvSeriesDetails200ResponseSeasonsInner';

export class TvSeriesDetails200Response {
    'adult'?: boolean = true;
    'backdrop_path'?: string;
    'created_by'?: Array<TvSeriesDetails200ResponseCreatedByInner>;
    'episode_run_time'?: Array<number>;
    'first_air_date'?: string;
    'genres'?: Array<TvSeriesDetails200ResponseGenresInner>;
    'homepage'?: string;
    'id'?: number = 0;
    'in_production'?: boolean = true;
    'languages'?: Array<string>;
    'last_air_date'?: string;
    'last_episode_to_air'?: TvSeriesDetails200ResponseLastEpisodeToAir;
    'name'?: string;
    'next_episode_to_air'?: any | null;
    'networks'?: Array<TvSeriesDetails200ResponseNetworksInner>;
    'number_of_episodes'?: number = 0;
    'number_of_seasons'?: number = 0;
    'origin_country'?: Array<string>;
    'original_language'?: string;
    'original_name'?: string;
    'overview'?: string;
    'popularity'?: number = 0;
    'poster_path'?: string;
    'production_companies'?: Array<TvSeriesDetails200ResponseProductionCompaniesInner>;
    'production_countries'?: Array<TvSeriesDetails200ResponseProductionCountriesInner>;
    'seasons'?: Array<TvSeriesDetails200ResponseSeasonsInner>;
    'spoken_languages'?: Array<MovieDetails200ResponseSpokenLanguagesInner>;
    'status'?: string;
    'tagline'?: string;
    'type'?: string;
    'vote_average'?: number = 0;
    'vote_count'?: number = 0;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "boolean"
        },
        {
            "name": "backdrop_path",
            "baseName": "backdrop_path",
            "type": "string"
        },
        {
            "name": "created_by",
            "baseName": "created_by",
            "type": "Array<TvSeriesDetails200ResponseCreatedByInner>"
        },
        {
            "name": "episode_run_time",
            "baseName": "episode_run_time",
            "type": "Array<number>"
        },
        {
            "name": "first_air_date",
            "baseName": "first_air_date",
            "type": "string"
        },
        {
            "name": "genres",
            "baseName": "genres",
            "type": "Array<TvSeriesDetails200ResponseGenresInner>"
        },
        {
            "name": "homepage",
            "baseName": "homepage",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "in_production",
            "baseName": "in_production",
            "type": "boolean"
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<string>"
        },
        {
            "name": "last_air_date",
            "baseName": "last_air_date",
            "type": "string"
        },
        {
            "name": "last_episode_to_air",
            "baseName": "last_episode_to_air",
            "type": "TvSeriesDetails200ResponseLastEpisodeToAir"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "next_episode_to_air",
            "baseName": "next_episode_to_air",
            "type": "any"
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "Array<TvSeriesDetails200ResponseNetworksInner>"
        },
        {
            "name": "number_of_episodes",
            "baseName": "number_of_episodes",
            "type": "number"
        },
        {
            "name": "number_of_seasons",
            "baseName": "number_of_seasons",
            "type": "number"
        },
        {
            "name": "origin_country",
            "baseName": "origin_country",
            "type": "Array<string>"
        },
        {
            "name": "original_language",
            "baseName": "original_language",
            "type": "string"
        },
        {
            "name": "original_name",
            "baseName": "original_name",
            "type": "string"
        },
        {
            "name": "overview",
            "baseName": "overview",
            "type": "string"
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number"
        },
        {
            "name": "poster_path",
            "baseName": "poster_path",
            "type": "string"
        },
        {
            "name": "production_companies",
            "baseName": "production_companies",
            "type": "Array<TvSeriesDetails200ResponseProductionCompaniesInner>"
        },
        {
            "name": "production_countries",
            "baseName": "production_countries",
            "type": "Array<TvSeriesDetails200ResponseProductionCountriesInner>"
        },
        {
            "name": "seasons",
            "baseName": "seasons",
            "type": "Array<TvSeriesDetails200ResponseSeasonsInner>"
        },
        {
            "name": "spoken_languages",
            "baseName": "spoken_languages",
            "type": "Array<MovieDetails200ResponseSpokenLanguagesInner>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "tagline",
            "baseName": "tagline",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "vote_average",
            "baseName": "vote_average",
            "type": "number"
        },
        {
            "name": "vote_count",
            "baseName": "vote_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TvSeriesDetails200Response.attributeTypeMap;
    }
}

