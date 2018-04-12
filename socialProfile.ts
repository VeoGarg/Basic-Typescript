let i:string
class SocialProfile{
    constructor(public contactNo:number, public dob:string, public LivesIn:string, public homeTown:string ){
        //,public socialLinks:string[]--- How to pass Array
        this.contactNo=contactNo
        this.dob=dob
        this.LivesIn=LivesIn
        this.homeTown=homeTown
        }
    getInfo=()=>{
        return `Contact No: ${this.contactNo}
                Date Of Birth: ${this.dob}
                Lives in: ${this.LivesIn}
                Home Town: ${this.homeTown}`
    }
}

let veoGarg = new SocialProfile(1234567890, "12-12-2012", "Panipat", "New Delhi")
