const { Client } = require('../src/index');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRiN2Y4MDhkLTdiY2EtNDAwNS04Yjg0LTY2Mzk3MTQxYzNmMiIsImlhdCI6MTU4NjgyMTI2OCwic3ViIjoiZGV2ZWxvcGVyLzUwNzE2OGUzLTczNWQtOGZmYS1hNGQ5LTEzZWVkZWM4Y2VhYiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNzQuOTAuMzQuMjM4Il0sInR5cGUiOiJjbGllbnQifV19.k35jiLtt7zsl-NuHj2wPnH14_0gA0iZ0jPy8p3PrjIOVZcBY97Y_gbVpFh3elmAyyG67ltA9deOfh3cvgJ1z8g';

const brawl = new Client({
  token: token,
  timeout: 2000,
  cache: true, // default is true
  cacheOptions: undefined
});

brawl.brawlerRanks('global', 16000000).then((data) => {
  console.log(data)
})
