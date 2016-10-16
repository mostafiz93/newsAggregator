import { Meteor } from 'meteor/meteor';
import {Websites} from "/import/api/websites.js";

Meteor.startup(() => {
  // code to run on server at startup
  Websites.insert({
    link: "https://google.com",
    desc: "search whatever you want! ",
    createdAt: new Date(),
    upvote: 0,
    downvote: 0
  });
  console.log("total inserted : " + Websites.find().count());
});
