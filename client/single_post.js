import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import {Websites} from "/import/api/websites.js";
import {Comments} from "/import/api/comments.js";


import './single_post.html';


Template.postBody.helpers({
  getPostDetails: function(postID){
    console.log("list size(single_post.js): " + Websites.find().count());
    var itm = Websites.findOne({_id: postID});
    console.log(itm);
    return itm.link;
  },
  getPostLink: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.link;
  },
  getPostDesc: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.desc;
  },
  getPostCreatedAT: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.createdAt;
  },
  getPostAuthor: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.author;
  },
  getPostUpvote: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.upvote;
  },
  getPostDownvote: function(postID){
    var itm = Websites.findOne({_id: postID});
    return itm.downvote;
  }
});

Template.addComment.events({
  "click #event": function(event, template){

  },
  "click .test": function(event){
    console.log("test is clicked");
  },
  "click .js_btn_submit": function(event){
    var name = document.getElementById("tfName").value;
    var comment = document.getElementById("tfComment").value;
    console.log(name + " " + comment);
    Comments.insert({
      name: name,
      comment: comment,
      createdAt: new Date
    });
    document.getElementById("commentForm").reset();
  }
});

Template.showAllComments.helpers({
  rendered: function(){

  },
  allComments: function(){
    return Comments.find();
  }
});
