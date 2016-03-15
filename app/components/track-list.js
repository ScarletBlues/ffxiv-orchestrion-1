import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',

    trackSorted: Ember.computed.sort('tracks', '_trackSort'),
    _trackSort: ['isCollected:asc','numericId:asc']

});
