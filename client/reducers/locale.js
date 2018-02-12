import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

const initialState = {
  ready: false,
  next: 'en', //subscription will set code on ready
  code: '', 
  default: 'en',
  translation:[],
  dictionary:  {
  
    languages : [
            {code:'en',name:'English'},
            {code:'ru',name:'Russian'},
            {code:'fr',name:'French'},
            {code:'de',name:'German'},

            {code:'es',name:'Spanish'},
            {code:'hi',name:'Hindi'},
            {code:'ar',name:'Arabic'},
            {code:'pt',name:'Portuguese'},
            {code:'ja',name:'Japanese'},
            {code:'tr',name:'Turkish'},
            {code:'it',name:'Italian'},
            {code:'mn',name:'Mandarin'},
            {code:'bn',name:'Bengali'},
            {code:'wu',name:'Wu'},
            {code:'kr',name:'Korean'}
      ]}             
};

export function locale(state = initialState, action) {
  
    switch(action.type){
        case 'SET_LOCALE':
          return Object.assign({}, state, {next: action.locale});
        case 'LOCALE_SUBSCRIPTION_READY':              
          let change = { ready : action.payload.ready };
          if( change.ready )
            change = _.extend(change, {code: state.next});
          return Object.assign({}, state, change );
        
        case 'LOCALE_SUBSCRIPTION_CHANGED':        
          return Object.assign({}, state, { translation: action.payload });
        
        case STOP_SUBSCRIPTION:        
          return action.payload === LOCALE_SUB
                ? initialState
                : state;                    
        default:
          return state;
      }   
}

