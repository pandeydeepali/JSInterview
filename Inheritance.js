/**
 * Inhertance object props
 * 
 */
let user={
    showAccess:true
}

let premiumUser={
    ads:false
}

premiumUser.__proto__=user;

console.log(premiumUser.showAccess)

/**
 * Inheritance Methods
 */

let userMethod={
    email:"test@gmail.com",
    name:"Test",

    set accountInfo(value){
        [this.email, this.name] = value.split(" ");
    },

    get accountInfo(){
        return `${this.email}, ${this.name}`
    }
 };

let premiumMethod= {
    __proto__:userMethod,
    ads:false
}
 

console.log(premiumMethod.accountInfo)

premiumMethod.accountInfo="demo@gmail.com ##Demo";

console.log('accountInfo====>', premiumMethod.accountInfo)


/**Three-Tier Inheritance and Scalability **/

let user1 = {
    email: "missing email", 	//fillers to reveal errors in inheritance at print
    IDnumber: "missing ID number",
    showAccess: true,
 
    set accountInfo(value) {
        [this.email, this.IDnumber] = value.split(" ");
    },
 
    get accountInfo() {
        return `${this.email} ${this.IDnumber}`;
    }
};
 
let premiumUser1 = {
    __proto__: user1,
    Ads: false
};
 
let familyPremium = {		//our new third tier of membership
    __proto__: premiumUser1,	// in an inheritance chain with prior two objects
    multipleDevices: true
};
 
let me = { 			//an object for an individual user, me in this case
    __proto__: familyPremium, 	//inheritance to decide class
    email: "mymail@outlook.com",	//setting property values exclusive to this object
    IDnumber: "#67899"
};
 
console.log(me.multipleDevices); // true
console.log(me.accountInfo); 	// mymail@outlook.com #67899
 
//Least specific to most: not all user accounts are premium accounts, not all premium accounts are family premium accounts.
