import Route from '@ember/routing/route';
import app_state from '../utils/app_state';
import profiles from '../utils/profiles';
import i18n from '../utils/i18n';
import CoughDrop from '../app';

export default Route.extend({
  title: "Communicator Profile",
  model: function(params) {
    // look up profile by id, get user as well
    return CoughDrop.store.findRecord('user', params.user_id).then(function(user) {
      return {
        user: user,
        profile: profiles.template()
      }
    });
    params.user_id
    params.profile_id
    return {};
  },
  setupController: function(controller, model) {
    controller.set('user', model.user);
    controller.set('profile', model.profile);
  }
});
