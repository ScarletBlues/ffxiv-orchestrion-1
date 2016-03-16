import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',

    changePlayingTrack: Ember.inject.service(),


    playingTrack: null,
    playingTrackChanged: Ember.observer('playingTrack', function(event) {
        //fix this later
        this.get('playingTrack').set('isPlaying',true);

    }),

    trackSorted: Ember.computed.sort('tracks', '_trackSort'),
    _trackSort: ['isCollected:asc','numericId:asc'],
    actions: {
        changePlayingTrack(item) { this.set('playingTrack', item); }
    }

});
