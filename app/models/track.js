import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  source: DS.attr(),
  type:DS.attr(),
  isCollected: DS.attr('boolean', { defaultValue: false }),
  numericId: function(){
    var id=this.get('id');
    if(id){ return +id; }
  }.property('id'),

});
