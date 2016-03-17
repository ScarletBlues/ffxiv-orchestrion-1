import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',

    classNameBindings: ['collected'],

    init(){
      this._super();
      this.get('previews').addTrack(this);
    },

    previews: Ember.inject.service('music'),



    isPlaying: false,

    actions: {
        setIsCollected(event){
            var id = this.track.id;
            var checked = event.target.checked;
            this.set("collected", checked);
            localStorage.setItem("track-"+id,checked);
        },

        previewTrack(track){
            this.get('previews').play(track);
            this.set('isPlaying', true);
        },

        stopTrack(track){
            this.get('previews').stop(track);
            this.set('isPlaying', false);
        }
    }
});
