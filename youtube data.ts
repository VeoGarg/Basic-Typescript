class Youtube{
    constructor(public videoTitle:string, public Channel:string, public noOfViews:number,  public totalLikes:number, public category:string, public totalComments:number, public publishedOn?:string ){
        this.videoTitle=videoTitle
        this.Channel=Channel
        this.noOfViews=noOfViews
        this.totalLikes=totalLikes
        this.totalComments=totalComments
        this.category=category
        this.publishedOn=publishedOn
    }       

    getCategory=()=>{
        return `<${this.videoTitle}> is of Category <${this.category}>`
    }
}

let SiyaRam=new Youtube("Siya Ke Ram Soundtracks 39 - Ram's Intro Theme (Extended full version) (HQ AUDIO)","Hotstar", 94130, 519, "People & Blogs", 47, "16 Jan 2016")

console.log(SiyaRam.getCategory())
