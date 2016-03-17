import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',

    previews: Ember.inject.service('music'),

    trackSorted: Ember.computed.sort('tracks', '_trackSort'),
    _trackSort: ['isCollected:asc','numericId:asc']



});
