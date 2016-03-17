import Ember from 'ember';

export default Ember.Service.extend({
  tracks: null,

  init() {
    this._super(...arguments);
    this.set('tracks', []);
  },

  addTracks(tracks){
      this.set('tracks', tracks);
  },

  addTrack(track){
      this.get('tracks').push(track);
  },

  play(track) {
    var self = this;
    this.get('tracks').map(function(t){
        self.stop(t);
    });
    track.element.getElementsByTagName("audio")[0].play();
  },

  stop(track) {
    track.element.getElementsByTagName("audio")[0].pause();
    track.element.getElementsByTagName("audio")[0].currentTime = 0;
      track.set('isPlaying',false);
  }
});
