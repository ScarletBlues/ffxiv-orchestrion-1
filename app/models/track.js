import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  source: DS.attr(),
  iscollected: DS.attr('boolean', { defaultValue: false })

});
