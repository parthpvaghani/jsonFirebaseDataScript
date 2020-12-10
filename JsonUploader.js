const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const moment = require("moment");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBhDiDYyLJ_xLb3mIs54mu4E08DMD2p9XM",
  authDomain: "vr-expo.firebaseapp.com",
  databaseURL: "https://vr-expo.firebaseio.com",
  projectId: "vr-expo",
  storageBucket: "vr-expo.appspot.com",
  messagingSenderId: "797131676470",
  appId: "1:797131676470:web:66d8dcec7ab3419d8e7197",
  measurementId: "G-6DBKV0FRP0",
});

var db = firebase.firestore();

let obj = [
  "5fc7d295780127001884feeb",
  "5fc7db03780127001885026e",
  "5fc7db2578012700188502b7",
  "5fc7db5c7801270018850320",
  "5fc7db79780127001885034f",
  "5fc7db947801270018850394",
  "5fc7dbb178012700188503d4",
  "5fc7dbcc7801270018850401",
  "5fc7dbed780127001885044a",
  "5fc7dc09780127001885048f",
  "5fc7dc2978012700188504e3",
  "5fc7dc467801270018850504",
  "5fc7dc71780127001885054c",
  "5fc7dc8f780127001885058a",
  "5fc7dcad78012700188505cb",
  "5fc7dcd27801270018850613",
  "5fc7dcf47801270018850698",
  "5fc7dd16780127001885073f",
  "5fc7dd357801270018850783",
  "5fc7dd5878012700188507eb",
  "5fc7dd72780127001885082b",
  "5fc7de86780127001885088e",
  "5fc7dea878012700188508cd",
  "5fc7dec47801270018850914",
  "5fc7dee07801270018850955",
  "5fc7def97801270018850995",
  "5fc7df1778012700188509d3",
  "5fc7df337801270018850a33",
  "5fc7df527801270018850a75",
  "5fc7df737801270018850aa3",
  "5fc7df8c7801270018850b21",
  "5fc7dfa57801270018850b66",
  "5fc7dfc67801270018850bb3",
  "5fc7dfe17801270018850bd6",
  "5fc7e0007801270018850c1a",
  "5fc7e0197801270018850c5b",
  "5fc7e0377801270018850c9f",
  "5fc7e0527801270018850cc0",
  "5fc7e06c7801270018850d01",
  "5fc7e08a7801270018850d44",
  "5fc7e0ad7801270018850da8",
  "5fc7da4678012700188501dc",
  "5fc7dad87801270018850245",
  "5fc7db09780127001885028f",
  "5fc7db3078012700188502d6",
  "5fc7db567801270018850301",
  "5fc7db81780127001885036f",
  "5fc7dba978012700188503b4",
  "5fc7dbd4780127001885041f",
  "5fc7dbff7801270018850470",
  "5fc7dc2778012700188504c4",
  "5fc7dc507801270018850529",
  "5fc7dc77780127001885056b",
  "5fc7dc9b78012700188505ac",
  "5fc7dcbd78012700188505ec",
  "5fcb1d401254cd00119a15a1",
  "5fcb1c961254cd00119a1507",
  "5fc7de60780127001885086d",
  "5fc7de9f78012700188508ae",
  "5fcb18571254cd00119a12c2",
  "5fc7def37801270018850976",
  "5fcb12bd1254cd00119a1002",
  "5fc7df517801270018850a56",
  "5fcb11501254cd00119a0f12",
  "5fc7dfa17801270018850b44",
  "5fc7dfc57801270018850b94",
  "5fc7dfe37801270018850bf5",
  "5fc7e0057801270018850c3a",
  "5fc7e0307801270018850c80",
  "5fc7e0537801270018850cdf",
  "5fc7e06d7801270018850d20",
  "5fc7e08e7801270018850d64",
  "5fc7e0a97801270018850d89",
  "5fc7e0c57801270018850dc7",
  "5fc7e0e37801270018850dea",
  "5fc7e0fd7801270018850e10",
  "5fc7e1177801270018850e33",
  "5fc964a3780127001885d139",
  "5fc967b5780127001885d2d3",
  "5fc967cf780127001885d2ed",
  "5fc967e6780127001885d30a",
  "5fc967ff780127001885d328",
  "5fc96817780127001885d347",
  "5fc9668c780127001885d1b2",
  "5fc966bf780127001885d1de",
  "5fc966e3780127001885d208",
  "5fc96739780127001885d24f",
  "5fc96752780127001885d26c",
  "5fc9676b780127001885d290",
  "5fc96787780127001885d2b4",
  "5fcdcc461254cd00119a910b",
  "5fc884e3780127001885245f",
  "5fc887f37801270018852646",
  "5fc8890e78012700188526ed",
  "5fc889267801270018852711",
  "5fc889457801270018852735",
  "5fc88961780127001885276c",
  "5fc8897d78012700188527a0",
  "5fc8899378012700188527c4",
  "5fc889a878012700188527e8",
  "5fc889c77801270018852806",
  "5fc889ec780127001885283c",
  "5fc88a05780127001885285f",
  "5fc88a1c780127001885287b",
  "5fc88a3778012700188528a3",
  "5fc88a6b78012700188528f4",
  "5fc88a81780127001885291a",
  "5fc88a9a7801270018852941",
  "5fc88ab07801270018852969",
  "5fc88aca7801270018852990",
  "5fc88ae078012700188529be",
  "5fc88af678012700188529e6",
  "5fc88b0a7801270018852a07",
  "5fc88b257801270018852a3b",
  "5fc88b3c7801270018852a6e",
  "5fc88b517801270018852a93",
  "5fc88b6d7801270018852ab8",
  "5fc88b817801270018852adc",
  "5fc88b9a7801270018852b0b",
  "5fc790f5780127001884e55b",
  "5fc79128780127001884e587",
  "5fc78dd9780127001884e3f7",
  "5fc7914a780127001884e5b0",
  "5fc79199780127001884e5ed",
  "5fc791b2780127001884e60e",
  "5fc791d1780127001884e631",
  "5fc791ee780127001884e653",
  "5fc7920d780127001884e678",
  "5fc7928f780127001884e6ba",
  "5fc792bd780127001884e6de",
  "5fc792d8780127001884e6fe",
  "5fc792fc780127001884e719",
  "5fc79313780127001884e735",
  "5fc79351780127001884e75b",
  "5fc79553780127001884e83d",
  "5fc76610780127001884d021",
  "5fc7956d780127001884e861",
  "5fc795ad780127001884e8a3",
  "5fc795c3780127001884e8cd",
  "5fc79616780127001884e8fa",
  "5fc79630780127001884e913",
  "5fc7964e780127001884e935",
  "5fc79674780127001884e948",
  "5fc79690780127001884e968",
  "5fc796a6780127001884e983",
  "5fc796ba780127001884e9a0",
  "5fc932d3780127001885b4c0",
  "5fc93355780127001885b530",
  "5fc86a3c7801270018851a42",
  "5fc86a977801270018851a66",
  "5fc86c9d7801270018851b29",
  "5fc4beb621401f001890800b",
  "5fc72cd3780127001884b1fa",
  "5fc72d89780127001884b272",
  "5fc72ef8780127001884b349",
  "5fc72ded780127001884b2b2",
  "5fc72dc5780127001884b292",
  "5fc72843780127001884af97",
  "5fc72e37780127001884b2de",
  "5fc72e55780127001884b2eb",
  "5fc72e72780127001884b301",
  "5fc72daa780127001884b285",
  "5fc72ea6780127001884b319",
  "5fc72f16780127001884b359",
  "5fc8b6eb780127001885487c",
  "5fc8b6b4780127001885483c",
  "5fc8b67a78012700188547f4",
  "5fc8b64678012700188547a4",
  "5fc8b60c7801270018854752",
  "5fc8b5907801270018854681",
  "5fc8b5c878012700188546e6",
  "5fc8b2947801270018854357",
  "5fc8b1387801270018854267",
  "5fc8b37b780127001885444b",
  "5fc899db7801270018853365",
  "5fc8a15d78012700188537dd",
  "5fc8a4ab78012700188539cd",
  "5fc8b0427801270018854120",
  "5fc8b095780127001885415f",
  "5fc8b0f178012700188541dc",
  "5fc8f5697801270018857197",
  "5fc8f606780127001885721a",
  "5fbc82fab41580001818f307",
  "5fb60f38f389e3001133a78f",
  "5fc4d49021401f0018908469",
];
// menu.forEach(function(obj) {
//    db.collection('Users')
//     .where('mobilenumber','==',obj.mobilenumber)
//     .where('expo','==','credai')
//     .get()
//     .then(snapshots => {
//       if (snapshots.size > 0) {
//         snapshots.forEach(doc => {
//           console.log('completed with id',doc.id)
//           db.collection('Users').doc(doc.id).set({
//           // date:new Date(obj.date).getTime()
//           date:new Date(obj.date).getTime()
//           },{merge:true})
//         })
//       }
//     })
// });
// db.collection('StallList')
//  .update({
//   projectid:obj.projectid,
//   project_id:obj.project_id,
//       expo:obj.expo,
//       projectname:obj.projectname
//  })
//  .then(dataref => {
//    console.log(dataref.id)
//  })

// db.collection('ExpoprojectVisitLogs').where('expo','==','credai-mchi').get().then(snapshot=>{
//   if(snapshot.size){
//     let count = 0
//     snapshot.forEach(doc=>{
//       if(doc.data().endtime.length===0){
//         // console.log(doc.data().a)
//         // console.log(doc.data().starttime+1000)
//         // console.log(++count)
//         console.log(++count)
//         db.collection('ExpoprojectVisitLogs').doc(`${doc.id}`).update({
//           endtime:doc.data().starttime+10000
//         })
//       }
//     })
//   }
// })

// db.collection('ExpoprojectVisitLogs').where('expo','==','undefined').where('starttime','>=',parseInt(1607477438)).get().then(snapshot=>{
//   let count = 0
//   let finalcount = 0;
//   if(snapshot.docs.length>1)
//   {
//     snapshot.forEach(doc=>{
//       // console.log("value",Object.values(obj));
//       console.log('pro id',doc.data().projectid)
//       const hasValue = obj.includes(doc.data().projectid);
//       console.log(hasValue)
//       if(doc.data().expo!=='undefined'){
//         console.log('got it')
//         console.log(doc.data())
//         count++;
//         db.collection('ExpoprojectVisitLogs').doc(doc.id).get().then(res=>{
//           finalcount++
//           console.log('final count',finalcount)

//         })
//       }
//     })
//     console.log(count)
//     console.log(snapshot.size)

//   }
// }).catch(err=>{
//   console.log(err)
// })





// db.collection("ExpoimageClick")
//   .where("expo", "==", "credai-mchi")
//   .get()
//   .then((snapshot) => {
//     let count = 0;
//     // let finalcount = 0;
//     let lostUserNames = [];
//     if (snapshot.docs.length > 1) {
//       snapshot.forEach((doc) => {
//         // console.log("value",Object.values(obj));
//         // console.log('doc data',doc.data())
//         const hasValue = obj.includes(doc.data().projectid);
//         console.log(hasValue);
//         if (hasValue && doc.data().mobilenumber == "undefined") {
//           let username = doc.data().username;
//           // db.collection('ExpoimageClick').doc(doc.id).get().then(doc=>{
//           //   db.collection('Users').where('').get().then(snapshot=>{
//           //     if(snap)
//           //   })
//           // })
//           let myObject = {
//             username: doc.data().username,
//             id: doc.id
//           }
//           lostUserNames.push(myObject);
//           console.log("got it");
//           console.log("username", username);
//           console.log(doc.data());
//           count++;
//         }
//       });
//       getProperName(lostUserNames);
//       console.log("filtered doc", count);
//       console.log("total doc", snapshot.size);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function getProperName(allUserNames) {
//   console.log("lost user details count", allUserNames.length);
//   // let allTempObject = [];
//   for (let i = 0; i < allUserNames.length; i++) {
//     if (allUserNames[i].username !== "null") {
//       let startIndexForLastName = 0;
//       let myUserName = allUserNames[i].username;
//       let firstName = "";
//       let lastName = "";
//       console.log("username", myUserName);
//       for (let j = 1; j < myUserName.length; j++) {
//         // console.log('character ',myUserName[j])
//         // console.log('character ascii num',myUserName.charCodeAt(j))
//         if (myUserName.charCodeAt(j) > 64 && myUserName.charCodeAt(j) < 91) {
//           startIndexForLastName = j;
//           firstName = myUserName.substring(0, startIndexForLastName);
//           lastName = myUserName.substring(startIndexForLastName);
//           // console.log("firstname", firstName);
//           // console.log("lastname", lastName);
//           break;
//         }
//       }
//       console.log("FN final", firstName);
//       console.log("LN final", lastName);
//       db.collection('Users').where('firstName','==',firstName).where('lastName','==',lastName).get().then(snapshot=>{
//         if(snapshot.size>0){
//           snapshot.forEach(doc=>{
//             let mobilenumber = doc.data().mobilenumber;
//             let email = doc.data().useremail;
//             console.log('updating doc', allUserNames[i].id)
//             db.collection('ExpoimageClick').doc(allUserNames[i].id).update({
//               mobilenumber:mobilenumber.toString(),
//               email:email, 
//             }).then(ref=>{
//               console.log("updated doc")
//             })   
//           })
//         }
//       })
//     }
//   }
// }
