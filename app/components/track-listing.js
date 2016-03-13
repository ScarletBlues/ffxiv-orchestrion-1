import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',

    actions: {
        setIsCollected(event){
            var id = this.track.id;
            var checked = event.target.checked;
            localStorage.setItem("track-"+id,checked);
        }
    }
});
