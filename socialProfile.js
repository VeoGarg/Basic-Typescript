var i;
var SocialProfile = /** @class */ (function () {
    function SocialProfile(contactNo, dob, LivesIn, homeTown) {
        var _this = this;
        this.contactNo = contactNo;
        this.dob = dob;
        this.LivesIn = LivesIn;
        this.homeTown = homeTown;
        this.getInfo = function () {
            return "Contact No: " + _this.contactNo + "\n                Date Of Birth: " + _this.dob + "\n                Lives in: " + _this.LivesIn + "\n                Home Town: " + _this.homeTown;
        };
        //,public socialLinks:string[]--- How to pass Array
        this.contactNo = contactNo;
        this.dob = dob;
        this.LivesIn = LivesIn;
        this.homeTown = homeTown;
    }
    return SocialProfile;
}());
var veoGarg = new SocialProfile(1234567890, "12-12-2012", "Panipat", "New Delhi");
