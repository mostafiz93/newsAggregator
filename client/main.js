import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import {Websites} from "/import/api/websites.js";

import './main.html';

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
});

console.log("total websites : " + Websites.find().count());

Template.websiteList.helpers({
  websites: function(){
    console.log("list size = " + Websites.find().count());
    return Websites.find({}, {sort:{upvote:-1}});
  },
  getuser: function(userid){
    var user = Meteor.users.findOne({_id: userid});
    if(user){
      console.log(user);
      if(user.username)
        return user.username;
      else
        return user.emails[0].address + " [Username not provided]";
    }
    else return "annonymus";
  }
});

Template.websiteList.events({
  "click #foo": function(event, template){

  },
  "click .js_btn_delete": function(event){
    console.log("deleting..." + this._id + " userid = " + this.userId);
    Websites.remove({_id:this._id});
  },
  "click .js_btn_upvote": function(event){
    var cntUpvote = this.upvote;
    Websites.update({_id:this._id}, {$set:{
      upvote: cntUpvote+1
    }});
  },
  "click .js_btn_downvote": function(event){
    var cntvote = this.downvote;
    Websites.update({_id:this._id}, {$set:{
      downvote: cntvote+1
    }});
  }
});


Template.addWebsite.helpers({

});

Template.addWebsite.events({
  "click #foo": function(event, template){

  },
  "click .js_btn_websiteSubmitButton": function(event){
    var link = document.getElementById("tfWebsiteLiknId").value;
    var desc = document.getElementById("tfWebsiteDescId").value;

    Websites.insert({
        link : link,
        desc : desc,
        createdAt : new Date,
        author : Meteor.user()._id,
        upvote : 0,
        downvote : 0
    });

  }
});
