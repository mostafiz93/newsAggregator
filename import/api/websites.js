export const Websites = new Mongo.Collection("websites");
Websites.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
