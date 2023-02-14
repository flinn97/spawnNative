import BaseClass from "../npm/baseClass";
import auth from "../services/auth";
class BaseObject extends BaseClass{
    constructor(operationsFactory){
        super(operationsFactory);
    }
    json;
    starting={
        name:"",
        type: "",
        _id: "",
    }


}

class Pic extends BaseObject{
    constructor(operationsFactory){
        super(operationsFactory);
        this.keep=this.keep.bind(this);
        this.like=this.like.bind(this);
    }
    json={
        ...this.starting,
        pics: "", 
        keep: 0,
        picURL: "",
        pic:true,
        ogref:"",
        description: "",
        note: "",
        keepers: {},
        like: 0,
        likers: {},
        destinationURL: ""
        
    }

    async getPicSrc(name){
        let pic = await auth.downloadPics(name);
        this.json.picURL = pic
        
    }
   async keep(user){
        
        this.json.keep= this.json.keep+1;
        let userjson = user.getJson();
        let id = (Math.random(Date.now())+Date.now()+performance.now()).toString();
        let picobj = {...this.json, owner: userjson._id, ogref: this.json._id,type: "keep" + this.json.type, pic: false, _id: id}
        this.json.keepers[user.getJson()._id] = user.getJson().name
        
        await this.operationsFactory.jsonPrepareRun({["add" + picobj.type]: picobj}) 
        await this.operationsFactory.cleanPrepareRun({"update" : this});
    }
    async like(user){
        
        this.json.like= this.json.like+1;
        this.json.likers[user.getJson()._id] = user.getJson().name
        await this.operationsFactory.cleanPrepareRun({"update" : this}) 
    }
}

class User extends BaseObject{
    constructor(operationsFactory){
        super(operationsFactory);
        this.follow=this.follow.bind(this);
        this.report=this.report.bind(this);
        this.block=this.block.bind(this);
        this.hide=this.hide.bind(this);
        this.getPicSrc=this.getPicSrc.bind(this);
    }
    json={
        ...this.starting,
        email:"",
        type: "user",
        owner: "",
        keeps:[],
        firstName:"",
        lastName:"",
        spawnerHandle:"",
        bio:"",
        website:"",
        socialHandle:"",
        flagged:false,
        eula:false,
        blocked:{},
        hidden:{},
        blockCount:0
        

    }
    report(){
        this.json.flagged=true;
        this.operationsFactory.cleanPrepareRun({update:this});
    }
    block(userInfo){
        this.json.blocked[userInfo.userID] = userInfo.contentID;
        this.json.blockCount++;
        this.operationsFactory.cleanPrepareRun({update:this});
    }
    hide(contentInfo){
        this.json.hidden[contentInfo.contentID] = contentInfo.content;
        this.operationsFactory.cleanPrepareRun({update:this});
    }
    async getPicSrc(path){
        let pic = await auth.downloadPics(path);
        this.json.picURL=pic;
        return pic;
    }
    async follow(picOwner){
        let userFJson = {owner: this.json._id, following: true, name: picOwner.getJson().name, followID:picOwner.getJson()._id };
        let picOwnerFJson = {owner: picOwner.getJson()._id , name:this.json.name, followID: this.json._id };
        
        this.operationsFactory.cleanJsonPrepareRun({addfollow:[userFJson, picOwnerFJson]});
    }
}

class Follow extends BaseObject{
    constructor(operationsFactory){
        super(operationsFactory);
        this.unFollow=this.unFollow.bind(this);
    }
    json={
        ...this.starting,
        following: false,
        type: "follow",
        owner: "",
        followID: "",
        website: "",
        picURL: ""
        
    }
    async unFollow(componentList){
        
        let follow = await auth.getFollower(componentList, this.json.owner)
        
        this.operationsFactory.cleanPrepareRun({del: [this, follow]})
    }
}

class Comment extends BaseObject{
    json={
        ...this.starting,
        picOwner: "",
        type: "comment",
        owner: "",
       note: ""
        
    }
}

// class Factory {
//     factory ={
//         pic: new Pic(),
//         user: new User(),
//     }

//     getComponent(component, json){
//         let comp = this.factory[component];
//         comp = Object.assign(Object.create(Object.getPrototypeOf(comp)), comp);
//         comp.setJson({...comp.getJson(), ...json,});
//         return comp;
//     }
// }
export {User, Pic, Comment, Follow};
