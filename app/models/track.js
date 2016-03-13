import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  source: DS.attr(),
  type:DS.attr(),
  iscollected: DS.attr('boolean', { defaultValue: false })

});
