import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    classNameBindings: ['collected'],

    numericId: Ember.computed('id', function(){
       return Number(this.track.id);
    }),

    actions: {
        setIsCollected(event){
            var id = this.track.id;
            var checked = event.target.checked;
            this.set("collected", checked);
            localStorage.setItem("track-"+id,checked);
        }
    }
});
