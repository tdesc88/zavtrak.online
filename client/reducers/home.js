import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';
import immutable from "object-path-immutable";

const initialState = {
  ready: false,
  page: 'home-page',
  pageDefault: 'home-page',
  full: {
    page: "room-full-page",
    pageDefault: "room-full-page",
  },

  dictionary:
  {   
      pages:['home-page','new-room-page','edit-room-page','room-details-page'],

      pagesPath: '/talkpal/talkpal-home/', 
      tabs:[{ title: 'Recent', comment: "Today tab text", type:'today'}, { title: 'Archive', comment: "Archive tab text", type:'all'}],              
    // pages:['room-grid-card.html','room-card.html','room-full.html','new-event-dialog.html']
      cardsVisible: ['new-room-page','edit-room-page','room-details-page'],
      fullscreen: ['room-details-page','new-room-page','edit-room-page'],
      full: {
        pages:[]//['participants-list','participant-card','invitation-card'],
      },
      responsivePage: function( page, phone , tablet )
      {
         if(phone && this.responsive[page])
            page = this.responsive[page].phone || page;
         
         if(tablet && this.responsive[page])
            page = this.responsive[page].tablet || page;

         return this.pagesPath + this.resolveUrlPath[page];
      },
      responsive: {
          'room-details-page': {
              'phone': "room-full-page"
            },
          'manage-page': {
              'phone': "manage-phone-page"
            }
      },

      resolveUrlPath:{   
            'home-page' : 'room-grid-card.html',
            'room-details-page': 'room-card.html', 
            'room-full-page': 'room-full.html', 
            'new-room-page': 'new-room-page.html',
            'edit-room-page': 'edit-room-page.html',
      }              
  }
};

export function home(state = initialState, action) {
  
    switch(action.type){
        case 'SET_PAGE':        
        {
            if(_.contains( state.dictionary.pages,action.page))
                return immutable.set(state, 'page', action.page);
            if(_.contains( state.dictionary.full.pages,action.page))
                return immutable.set(state, 'full.page', action.page);
            return state;
        }          
        case 'HOME_SUBSCRIPTION_READY':                    
          return Object.assign({}, state, { ready: action.payload.ready });
                
        case STOP_SUBSCRIPTION:        
          return action.payload === HOME_SUB
                ? initialState
                : state;                    
        default:
          return state;
      }   
}

