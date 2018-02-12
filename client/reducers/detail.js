import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';
import immutable from "object-path-immutable";

const initialState = {
  ready: false,
  disconnected: true,
  requestCount: 0,
  api: {
    entityId: '',
    entity: '', 
    participantId: '',
    participants: {},
    permissionId: '',
    permissions: {},
  },

  page: 'room-page',
  pageDefault: 'room-page',

  dictionary:
  {   
      pages:['room-page','settings-page','invitation-page','manage-page'],
      pagesPath:{
        'settings-page': '/talkpal/talkpal-home/',
        'default': '/talkpal/talkpal-room/pages/'
      },
     locations: [
       {number: "1", name: 'Private', comment: "Private location comment"},
       {number: "2", name: 'Location #1', comment: 'Location #1 comment' },
       {number: "3", name: 'Location #2', comment: 'Location #2 comment' }],

      tabs:[
          { name:"participants", icon: "social:group", title: 'Participants', comment: "Participants tab text"}, 
          { name:"chat", icon: "communication:forum", title: 'Chat', comment: "Chat tab text"}, 
        ],
        moreActions:[
          { name:"add", action: "invitation-page", icon: "social:person-add", title: 'Add', comment: "Add participants menu button"}, 
          { name:"manage", action: "manage-page",  icon: "social:group", title: 'Manage', comment: "Manage participants menu button"}, 
          { name:"settings", action: "settings-page", icon: "icons:settings", title: 'Settings', comment: "Settings menu button"}, 
          { name:"location", fire: "toggle-location", icon: "maps:edit-location", title: 'Location', comment: "Location menu button"}, 
          // { name:"add", icon: "icons:record-voice-over", title: 'Settings', short: "Add", comment: "Add participants menu button"}, 

        ],
      responsivePage: function( page, phone , tablet )
      {
         if(phone && this.responsive[page])
            page = this.responsive[page].phone || page;
         
         if(tablet && this.responsive[page])
            page = this.responsive[page].tablet || page;
         var path = this.pagesPath[page] || this.pagesPath['default'];
         return path + this.resolveUrlPath[page];
      },
      responsive: {
          'room-page': {
              'phone': "room-phone"
            },
          'manage-page': {
              'phone': "manage-phone-page"
            }
      },
      resolveUrlPath:{        
            'room-page': 'room-tablet.html', 
            'room-phone': 'room-phone.html',
            'settings-page': 'edit-room-page.html',
            'invitation-page': 'room-invite-participant.html',
            'manage-page': 'manage-participants.html', 
            'manage-phone-page': 'manage-participants-phone.html', 
            'participants-list' : 'invite-participants.html',
            'invitation-card' : 'invitation-card.html',
            'participant-card' : 'participant-card.html',
      }              
  }
};

export function detail(state = initialState, action) {
  
     return state;
}

