/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
const fetch = require('node-fetch');
const qs = require('querystring');
const APIError = require('./util/error');
const { version } = require('../package.json');

/**
 * Represents BrawlStars API
 * @param {ClientOption} option - API Options
 * @example
 * const { Client } = require('brawlperk.js');
 * const client = new Client({ token: '', timeout: 5000 });
 */
class Client {
  constructor(option) {
    this.token = option.token;
    this.timeout = option.timeout;
    this.uri = option.uri || 'https://api.brawlstars.com';
    this.version = option.version || '1';
  }

  async _fetch(path) {
    const uri = `${this.uri}/v${this.version}/${path}`;

    const res = await fetch(uri, {
      method: 'GET',
      timeout: this.timeout,
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${this.token}`,
        'User-Agent': `brawlperk.js v${version}`,
      },
    }).catch(() => null);

    if (!res) throw new APIError(504);
    if (!res.ok) throw new APIError(res.status);
    const data = await res.json().catch(() => null);
    if (!data) throw new APIError(500);
    return data;
  }

  _tag(tag) {
    const hastag = /^\#/.test(tag) ? tag : `#${tag}`;
    return encodeURIComponent(hastag.toUpperCase());
  }

  /**
	 * Get player specific information
	 * @param {string} playerTag - Get player by tag.
	 * @example
	 * client.player('#RL8PR9PU');
	 * @returns {Promise<Object>}
	 */
  async player(playerTag) {
    return this._fetch(`players/${this._tag(playerTag)}`);
  }

  /**
	 * Get log of recent battles for a player.
	 * @param {string} playerTag - Tag of the player.
	 * @example
	 * client.battlelog('#RL8PR9PU');
	 * @returns {Promise<Object>}
	 */
  async battlelog(playerTag) {
    return this._fetch(`players/${(playerTag)}/battlelog`);
  }

  /**
	 * Get club information.
	 * @param {string} clubTag - Tag of the club.
	 * @example
	 * client.club('#2089L0PG2');
	 * @returns {Promise<Object>}
	 */
  async club(clubTag) {
    return this._fetch(`clubs/${this._tag(clubTag)}`);
  }

  /**
	 * List club members
	 * @param {string} clubTag - Tag of the club.
	 * @example
	 * client.members('#2089L0PG2');
	 * @returns {Promise<Object>}
	 */
  async members(clubTag) {
    return this._fetch(`clubs/${this._tag(clubTag)}/members`);
  }

  /**
	 * Get club rankings for a specific location
	 * @param {string} countryCode - Identifier of the location to retrieve.
	 * @param {SearchOption} option - Optional options
	 * @example
	 * client.clubRanks('32000107', { limit: 10 });
	 * @returns {Promise<Object>}
	 */
  async clubRanks(countryCode, option) {
    const query = qs.stringify(option);
    return this._fetch(`rankings/${countryCode}/clubs?${query}`);
  }

  /**
	 * Get player rankings for a specific location
	 * @param {string} countryCode - Identifier of the location to retrieve.
	 * @param {SearchOption} option - Optional options
	 * @example
	 * client.playerRanks('32000107', { limit: 10 });
	 * @returns {Promise<Object>}
	 */
  async playerRanks(countryCode, option) {
    const query = qs.stringify(option);
    return this._fetch(`rankings/${countryCode}/players?${query}`);
  }

  /**
	 * Get brawler rankings for a country or global rankings.
	 * Brawler identifiers can be found by using the /v1/brawlers API endpoint.
	 * @param {string} countryCode
	 * @param {number} brawlerId - Identifier of the location to retrieve.
	 * @param {SearchOption} option - Optional options
	 * @example
	 * client.brawlerRanks('32000107', { limit: 10 });
	 * @returns {Promise<Object>}
	 */
  async brawlerRanks(countryCode, brawlerId, option) {
    const query = qs.stringify(option);
    return this._fetch(`rankings/${countryCode}/brawlers/${brawlerId}?${query}`);
  }

  /**
	 * Get list of available brawlers.
	 * @example
	 * client.brawlers();
	 * @returns {Promise<Object>}
	 */
  async brawlers(option) {
    const query = qs.stringify(option);
    return this._fetch(`brawlers?${query}`);
  }

  /**
	 *  Get Brawler Data based on ID
	 *  @param {SearchOption} brawlerId - Brawler ID
	 * @example
	 * client.brawlerId();
	 * @returns {Promise<Object>}
	 */
  async brawlerId(brawlerId) {
    return this._fetch(`brawlers/${brawlerId}`);
  }
}

module.exports = Client;

/**
 * @typedef {Object} ClientOption
 * @param {string} token - BrawlStars API Token
 * @param {number} timeout - Request timeout in millisecond
 */

/**
 * @typedef {Object} ClanSearchOption
 * @param {string} playerTag - Filter by player tag
 * @param {string} clubTag -  Filter by Club tag
 * @param {number} countryCode - Filter by clan location identifier.
 * @param {number} brawlerId - Filter by Brawler ID For list of available Brawler ID, refer to brawlerId operation
 * @param {number} limit - Limit the number of items returned in the response.
 * @param {string} after - Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
 * @param {string} before - Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
 */

/**
 * @typedef {Object} SearchOption
 * @param {number} limit - Limit the number of items returned in the response.
 * @param {string} after - Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
 * @param {string} before - Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
 */
