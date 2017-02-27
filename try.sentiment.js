var request = require('request');
var _ = require('lodash');

var _sentimentCollectionOn = false;
var _sentimentMinWords = 3;
var _sentimentUrl = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
var _sentimentId = 'morshe-bot';
var _sentimentKey = '';

var text = 'OMG this is amazing';
