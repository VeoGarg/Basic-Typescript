"use strict";
var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, Channel, noOfViews, totalLikes, category, totalComments, publishedOn) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.Channel = Channel;
        this.noOfViews = noOfViews;
        this.totalLikes = totalLikes;
        this.category = category;
        this.totalComments = totalComments;
        this.publishedOn = publishedOn;
        this.getCategory = function () {
            return "<" + _this.videoTitle + "> is of Category <" + _this.category + ">";
        };
        this.videoTitle = videoTitle;
        this.Channel = Channel;
        this.noOfViews = noOfViews;
        this.totalLikes = totalLikes;
        this.totalComments = totalComments;
        this.category = category;
        this.publishedOn = publishedOn;
    }
    return Youtube;
}());
var SiyaRam = new Youtube("Siya Ke Ram Soundtracks 39 - Ram's Intro Theme (Extended full version) (HQ AUDIO)", "Hotstar", 94130, 519, "People & Blogs", 47, "16 Jan 2016");
console.log(SiyaRam.getCategory());
