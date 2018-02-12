import { Mongo } from 'meteor/mongo';

Products = new Mongo.Collection('products');
Categories = new Mongo.Collection('categories');
Additions = new Mongo.Collection('additions');

Orders = new Mongo.Collection('orders');
Delivery = new Mongo.Collection('delivery');
Staff = new Mongo.Collection('staff');

Favorites = new Meteor.Collection('favorites');

Promo = new Meteor.Collection('promo');

Messages = new Mongo.Collection('messages');