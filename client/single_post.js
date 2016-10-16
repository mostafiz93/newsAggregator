import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import {Websites} from "/import/api/websites.js";

import './single_post.html';


Template.singlePost.helpers({
  rendered: function(){

  },
  getPostDetails: function(){
    return Websites.findOne({_id:})
  }
});

Template.singlePost.events({
  "click #event": function(event, template){

  },
  "click .test": function(event){
    console.log("test is clicked");
  }
});
