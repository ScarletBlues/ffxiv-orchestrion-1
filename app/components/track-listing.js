import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    classNameBindings: ['collected'],
    isPlaying: false,
    isPlayingChanged: Ember.observer('isPlaying', function(event) {

        this.sendAction('action', this);


        $(event.element).parent().find("audio").each(function(idx, track){
            $(track)[0].pause();
            $(track)[0].currentTime = 0;
        });
        $(event.element).find("audio")[0].play();
    }),

    actions: {
        setIsCollected(event){
            var id = this.track.id;
            var checked = event.target.checked;
            this.set("collected", checked);
            localStorage.setItem("track-"+id,checked);
        },

        previewTrack(event){
            this.sendAction('action', this);
        }
    }
});
