import {Websites} from "/import/api/websites.js";

FlowRouter.route('/', {
    action: function(params) {
      BlazeLayout.render("mainLayout", {content: "homePage"});
    }
});

FlowRouter.route('/post/:postId', {
    action: function(params) {
        //console.log("This is my blog post:", params.postId);
        //var postItem = Websites.findOne();
        //console.log(Websites.find().count());
        //console.log("total websites : " + Websites.find().count());
        BlazeLayout.render("mainLayout", {content: "singlePost", postID: params.postId});
    }
});
