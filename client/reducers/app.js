import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';
import immutable from "object-path-immutable";

const initialState = {
  ready: false,
  small: false,
  fullscreen: '',
  tablet: false, 
  page: '', 
  rooms: [],

  products: {1:"product",2:"wow"},
  orders: [],

  newEvent: {
      privacyDefault: 'private',  
  },          
  dictionary:
  {    
       pages:['landing','home','conference','enter','guest','profile','signup-user','signup-interpreter','loading','reset','view404','test'],

       backgrounds: ["background/background_01.jpg","background/background_02.jpg","background/background_03.jpg"],

       privacyTypes : [
            { type: "public", name: 'Public', comment: 'Type of privacy'}, 
            { type: "private", name: 'Private', comment: 'Type of privacy'},
        ],

        permissionActions: [
            {status: "granted", name: 'Granted', comment: 'Type of permission status'},
            {status: "declined", name: 'Declined', comment: 'Type of permission status'},
            // {status: "requested", name: 'Requested', comment: 'Type of permission status'},
            {status: "remove", name: 'Remove', comment: 'Type of permission status'}
        ],

      resolveUrlPath:{        
            'room-full': '../talkpal/talkpal-home/room-full.html',
            'landing': '../talkpal/talkpal-landing/talkpal-landing.html',
            'home': '../talkpal/talkpal-home/talkpal-home.html',
            'guest': '../talkpal/talkpal-landing/talkpal-guest-to-meeting.html',
            'enter': '../talkpal/enter-meeting/enter-meeting.html',
            'conference': '../talkpal/talkpal-room/talkpal-room.html',
            'profile': '../talkpal/talkpal-profile/profile-page.html',
            'new-event':'../talkpal/talkpal-home/new-event-dialog.html',
            'signup-user': '../talkpal/talkpal-account/talkpal-signup-user.html',
            'signup-interpreter': '../talkpal/talkpal-account/talkpal-signup-interpreter.html',
            'reset': '../talkpal/talkpal-account/talkpal-password-reset.html',
            'loading':'../talkpal/talkpal-loading/talkpal-loading.html',
            'test':'../talkpal/talkpal-test/talkpal-test.html',
            'view404':'my-view404.html'              
      },                
      privatePages: {
              // 'indexhtml':'/home/',                             
            'home': {
                redirect: '/landing/'
            },
            'conference': {
                redirect: '/enter/'
            },
            'test': {
                redirect: '/landing/'
            },
            'translation': {
                redirect: '/landing/'
            }
      },
    
      profile: {
        pagesPath: '/talkpal/talkpal-profile/pages/',
        tabs:[
            { name:"details", title: 'Profile details', short: "Details", comment: "Profile details tab"}, 
            { name:"availability", title: 'Availability', comment: "Availability details tab"}, 
            { name:"contacts", title: 'Contacts', comment: "Contact details tab"}, 
            { name:"rates", title: 'Service rates', short: "Rates", comment: "Rates details tab"}, 
            { name:"specialty", title: 'Specialty', comment: "Specialty details tab", more: 1}, 
            { name:"experience", title: 'Working experience', short: "Experience", comment: "Experience details tab", more: 1}, 
            { name:"about", title: 'About me', comment: "About me details tab", more: 1}
        ],        
        more:[
            { name:"Edit", action: '/edit/', comment: "Edit profile more action", editAllowed: 1},
            { name:"Upload avatar", action: '/change-avatar/', comment: "Upload avatar more action", editAllowed: 1},
            { name:"Specialty", action: '/speciality/' , comment: "Specialty  more action"}, 
            { name:"Experience", action: '/experience/', comment: "Experience  more action" }, 
            { name:"About me",  action: '/about/', comment: "About me more action"}
        ],     
        pages:['profile-details.html','profile-availability.html','profile-contacts.html','profile-rates.html']
    }
  }
};

export function app(state = initialState, action) {
  
    switch(action.type){
   
        case 'SET_FULLSCREEN':
        {
            return immutable.set(state, 'fullscreen', action.value);
        }
         
        case 'SET_RESPONSIVE': 
          return Object.assign({}, state, { small: action.small, tablet: action.tablet });
        
        case STOP_SUBSCRIPTION:        
          return action.payload === ROOMS_SUB
                ? initialState
                : state;                    
        default:
          return state;
      }   
}

