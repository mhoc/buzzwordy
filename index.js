var ADJECTIVES = require('./lib/adjectives')
var ADVERBS = require('./lib/adverbs')
var NOUNS_PLURAL = require('./lib/nouns_plural')
var NOUNS_SINGULAR = require('./lib/nouns_singular')
var SENTENCES = require('./lib/sentences')
var VERBS = require('./lib/verbs')

const randomItem = function(items) {
  return items[Math.floor(Math.random()*items.length)]
}

module.exports = {
  
  generate: function() {
    var base = randomItem(SENTENCES)
    base = base.replace(/%aj/g, randomItem(ADJECTIVES))
    base = base.replace(/%av/g, randomItem(ADVERBS))
    base = base.replace(/%np/g, randomItem(NOUNS_PLURAL))
    base = base.replace(/%ns/g, randomItem(NOUNS_SINGULAR))
    base = base.replace(/%v/g, randomItem(VERBS))
    return base
  },

}