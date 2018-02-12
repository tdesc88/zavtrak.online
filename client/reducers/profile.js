USER_REACTIVE_SOURCE_CHANGED = 'USER_REACTIVE_SOURCE_CHANGED'

const initialState = {
    ready: false,
    fullname: '',
    rates: [],
    languageCards: [],
    languagePairs: [],
    availability: [ { name: 'talkpal'} ],            
    dictionary: {
        icons: {
            'tel': 'hardware:phone-iphone',
            'email': 'communication:mail-outline',
            'skype': 'fa-brand:skype',
            'twitter': 'fa-brand:twitter',
            'facebook': 'fa-brand:facebook',
            'linkedin': 'fa-brand:linkedin'          
        },
        services : [
            { type: "simultaneous", name: 'Simultaneous Interpreting', comment: 'Type of service'}, 
            { type: "consecutive", name: 'Consecutive Interpreting', comment: 'Type of service'},
            { type: "educational", name: 'Educational Interpreting', comment: 'Type of service' }
        ],
        social: [
            { type: "skype",  name: "Skype", icon: "fa-brand:skype"},
            { type:"twitter", name: "Twitter",  icon: "fa-brand:twitter"}, 
            { type: "facebook", name: "Facebook", icon: "fa-brand:facebook"}, 
            { type: "linkedin", name: "Linkedin",  icon: "fa-brand:linkedin"}
        ],    
        availability : [
            { name: 'talkpal', comment:"Availability type label",icon:"av:mic", code: '<div class="layout horizontal center around-justified"><iron-icon icon="av:mic"></iron-icon><h2>talkpal</h2></div>'}, 
            { name: 'phone', comment:"Availability type label",icon:"hardware:phone-iphone",code: '<div class="layout horizontal center around-justified"><iron-icon icon="hardware:phone-iphone"></iron-icon><h2>phone</h2></div>'},
            { name: 'tel', comment:"Availability type label",icon:"maps:local-phone",code: '<div class="layout horizontal center around-justified"><iron-icon icon="maps:local-phone"></iron-icon><h2>tel</h2></div>'},    
            { name: 'skype', comment:"Availability type label",icon:"fa-brand:skype", code: '<div class="layout horizontal center around-justified"><iron-icon icon="fa-brand:skype"></iron-icon><h2>skype</h2></div>'},
            { name: 'local', comment:"Availability type label",icon:"maps:directions-car", code: '<div class="layout horizontal center around-justified"><iron-icon icon="maps:directions-car"></iron-icon><h2>local</h2></div>'},
            { name: 'travel', comment:"Availability type label",icon:"maps:flight", code: '<div class="layout horizontal center around-justified"><iron-icon icon="maps:flight"></iron-icon><h2>travel</h2></div>'}
        ]               
    }
};

export function profile(state = initialState, action) {
  
  switch(action.type){
        case 'SET_LOCALE':          
            if ( Meteor.userId() )
            {
                Meteor.call('updateUser', Meteor.userId(), { 'profile.locale': action.locale});
            } 
            return state;
        
        case USER_REACTIVE_SOURCE_CHANGED:
            return Object.assign({}, state, action.payload.profile, {ready: true});

        case 'UPDATE_USER':
        {                 
            Meteor.promiseCall('updateUser',action.userId, action.value)
            .done(function(result){
                // console.log("result",result);
            });
            
            return state;
        }
        default:
            return state;
    }   
}


