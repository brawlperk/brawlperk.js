<div  align="center">



<h1>Powerful JavaScript library for interacting with the BrawlStars API</h1>



<p>



<a  href="https://www.npmjs.com/package/brawlperk.js/">



<img  src="https://nodei.co/npm/brawlperk.js.png"  alt="NPM Info" />



</a>



</p>



</div>





## Client



Represents BrawlStars API





-  [Client](#client)



-  [new Client(option)](#new-clientoption)



-  client.player(playerTag) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.battlelog(playerTag) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.club(clubTag) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.members(clubTag) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.clubRanks(countryCode, option) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.playerRanks(countryCode, option) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.brawlerRanks(countryCode, brawlerId, option) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.brawlers(option) ⇒ <code>Promise.&lt;Object&gt;</code>



-  client.brawlerId(brawlerId) ⇒ <code>Promise.&lt;Object&gt;</code>



-  ClientOption : <code>Object</code>



-  ClubSearchOption : <code>Object</code>


-  SearchOption : <code>Object</code>





<a  name="new_Client_new"></a>





### new Client(option)





| Param | Type | Description |



| --- | --- | --- |



| option | [<code>ClientOption</code>](#ClientOption) | API Options |





**Example**



```js



const { Client } =  require('brawlperk.js');



const  client  =  new  Client({ token: '', timeout: 5000 });



```



<a  name="Client+player"></a>





### client.player(playerTag) ⇒ <code>Promise.&lt;Object&gt;</code>



Search players





| Param | Type | Description |



| --- | --- | --- |



| playerTag | <code>string</code> | Search player by playerTag. |



**Example**



```js



client.player('#2QCCLG', { limit: 10 });



```



<a  name="Client+battlelog"></a>





### client.battlelog(playerTag) ⇒ <code>Promise.&lt;Object&gt;</code>



Get player battlelog information





| Param | Type | Description |



| --- | --- | --- |



| playerTag | <code>string</code> | Tag of player. |





**Example**



```js



client.battlelog('#8QU8J9LP');



```



<a  name="Client+clanMembers"></a>





### client.club(clubTag) ⇒ <code>Promise.&lt;Object&gt;</code>



Get club information.




| Param | Type | Description |



| --- | --- | --- |



| clubTag | <code>string</code> | Tag of the club. |





**Example**



```js



client.club('#8QU8J9LP');



```



<a  name="Client+clanWarlog"></a>





### client.members(clubTag, option) ⇒ <code>Promise.&lt;Object&gt;</code>



Retrieve clubs members





| Param | Type | Description |



| --- | --- | --- |



| clubTag | <code>string</code> | Tag of the club. |



| option | [<code>SearchOption</code>](#SearchOption) | Optional options |





**Example**



```js



client.members('#8QU8J9LP', { limit: 10 });



```



<a  name="Client+currentWar"></a>





### client.clubRanks(countryCode, option) ⇒ <code>Promise.&lt;Object&gt;</code>



Get club rankings for a specific location





| Param | Type | Description |



| --- | --- | --- |



| countryCode | <code>string</code> | Country Code |



| option | [<code>SearchOption</code>](#SearchOption) | Optional options |





**Example**



```js



client.clubRanks('global');



```



<a  name="Client+playerRanks"></a>





### client.playerRanks(countryCode, option) ⇒ <code>Promise.&lt;Object&gt;</code>



Get player rankings for a specific location





| Param | Type | Description |



| --- | --- | --- |



| countryCode | <code>string</code> | Country Code |

| option | [<code>SearchOption</code>](#SearchOption) | Optional options |





**Example**



```js



client.playerRanks('global');



```



<a  name="Client+clanWarLeagueWarTags"></a>





### client.brawlerRanks(countryCode, brawlerId, option) ⇒ <code>Promise.&lt;Object&gt;</code>



Brawler rankings for a country or global rankings.





| Param | Type | Description |



| --- | --- | --- |



| countryCode | <code>string</code> | Country Code |

| brawlerId | <code>number</code> | Brawler ID |

| option | [<code>SearchOption</code>](#SearchOption) | Optional options |





**Example**



```js



client.brawlerRanks('global', 16000000);



```



<a  name="Client+brawlers"></a>





### client.brawlers(option) ⇒ <code>Promise.&lt;Object&gt;</code>



Get list of available brawlers.





| Param | Type | Description |



| --- | --- | --- |



| option | [<code>SearchOption</code>](#SearchOption) | Optional options |





**Example**



```js



client.brawlers();



```



<a  name="Client+brawlerId"></a>





### client.brawlerId(brawlerId) ⇒ <code>Promise.&lt;Object&gt;</code>



Get Brawler Data based on ID




| Param | Type | Description |



| --- | --- | --- |



| brawlerId | <code>number</code> | Brawler ID |





**Example**



```js



client.brawlerId(16000000);



```



<hr>





<a  name="ClientOption"></a>





## ClientOption : <code>Object</code>





| Param | Type | Description |



| --- | --- | --- |



| token | <code>string</code> | BrawlStars API Token |



| timeout | <code>number</code> | Request timeout in millisecond |






<a  name="SearchOption"></a>





## SearchOption : <code>Object</code>





| Param | Type | Description |



| --- | --- | --- |



| limit | <code>number</code> | Limit the number of items returned in the response. |



| after | <code>string</code> | Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. |



| before | <code>string</code> | Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. |