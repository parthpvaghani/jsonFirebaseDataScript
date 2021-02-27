// const firebase = require("firebase");
const convertTimeStamp = require('convert-firebase-timestamp')
// const functions = require('firebase-functions');
const admin = require('firebase-admin');
// Required for side-effects
// require("firebase/firestore");
const moment = require("moment");
// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: "AIzaSyBhDiDYyLJ_xLb3mIs54mu4E08DMD2p9XM",
//   authDomain: "vr-expo.firebaseapp.com",
//   databaseURL: "https://vr-expo.firebaseio.com",
//   projectId: "vr-expo",
//   storageBucket: "vr-expo.appspot.com",
//   messagingSenderId: "797131676470",
//   appId: "1:797131676470:web:66d8dcec7ab3419d8e7197",
//   measurementId: "G-6DBKV0FRP0",
// });

admin.initializeApp({
  // apiKey: 'AIzaSyCZom22SCaq1uuerI2mDcdpTxqwE0od9CA',
  // authDomain: 'ppt-vr.firebaseapp.com',
  // databaseURL: 'https://ppt-vr.firebaseio.com',
  // projectId: 'ppt-vr',
  // storageBucket: 'ppt-vr.appspot.com'



//  apiKey: "AIzaSyBhDiDYyLJ_xLb3mIs54mu4E08DMD2p9XM",
//   authDomain: "vr-expo.firebaseapp.com",
//   databaseURL: "https://vr-expo.firebaseio.com",
//   projectId: "vr-expo",
//   storageBucket: "vr-expo.appspot.com",
//   messagingSenderId: "797131676470",
//   appId: "1:797131676470:web:66d8dcec7ab3419d8e7197",
//   measurementId: "G-6DBKV0FRP0"
credential: admin.credential.cert('./aepc-mailer.json'),
apiKey: 'AIzaSyAXTkHuSQ4OeoxdL1hur9NCAMiGmU_Arr0',
authDomain: 'aepc-india.firebaseapp.com',
databaseURL: 'https://aepc-india.firebaseio.com',
projectId: 'aepc-india',

// storageBucket: 'aepc-india.appspot.com'


});
// var db = firebase.firestore();


// let countrycodeobj = {"BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "1-246", "WF": "681", "BL": "590", "BM": "1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "1-876", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "1-242", "JE": "44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "1-671", "GT": "502", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "44-1481", "GF": "594", "GE": "995", "GD": "1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "VE": "58", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "1-670", "MS": "1-664", "MR": "222", "IM": "44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "1-345", "SG": "65", "SE": "46", "SD": "249", "DM": "1-767", "DJ": "253", "DK": "45", "VG": "1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "1-649", "LY": "218", "VA": "379", "VC": "1-784", "AE": "971", "AD": "376", "AG": "1-268", "AF": "93", "AI": "1-264", "VI": "1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AS": "1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "AX": "358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258"}

// let obj = [
//   "5fc7d295780127001884feeb",
//   "5fc7db03780127001885026e",
//   "5fc7db2578012700188502b7",
//   "5fc7db5c7801270018850320",
//   "5fc7db79780127001885034f",
//   "5fc7db947801270018850394",
//   "5fc7dbb178012700188503d4",
//   "5fc7dbcc7801270018850401",
//   "5fc7dbed780127001885044a",
//   "5fc7dc09780127001885048f",
//   "5fc7dc2978012700188504e3",
//   "5fc7dc467801270018850504",
//   "5fc7dc71780127001885054c",
//   "5fc7dc8f780127001885058a",
//   "5fc7dcad78012700188505cb",
//   "5fc7dcd27801270018850613",
//   "5fc7dcf47801270018850698",
//   "5fc7dd16780127001885073f",
//   "5fc7dd357801270018850783",
//   "5fc7dd5878012700188507eb",
//   "5fc7dd72780127001885082b",
//   "5fc7de86780127001885088e",
//   "5fc7dea878012700188508cd",
//   "5fc7dec47801270018850914",
//   "5fc7dee07801270018850955",
//   "5fc7def97801270018850995",
//   "5fc7df1778012700188509d3",
//   "5fc7df337801270018850a33",
//   "5fc7df527801270018850a75",
//   "5fc7df737801270018850aa3",
//   "5fc7df8c7801270018850b21",
//   "5fc7dfa57801270018850b66",
//   "5fc7dfc67801270018850bb3",
//   "5fc7dfe17801270018850bd6",
//   "5fc7e0007801270018850c1a",
//   "5fc7e0197801270018850c5b",
//   "5fc7e0377801270018850c9f",
//   "5fc7e0527801270018850cc0",
//   "5fc7e06c7801270018850d01",
//   "5fc7e08a7801270018850d44",
//   "5fc7e0ad7801270018850da8",
//   "5fc7da4678012700188501dc",
//   "5fc7dad87801270018850245",
//   "5fc7db09780127001885028f",
//   "5fc7db3078012700188502d6",
//   "5fc7db567801270018850301",
//   "5fc7db81780127001885036f",
//   "5fc7dba978012700188503b4",
//   "5fc7dbd4780127001885041f",
//   "5fc7dbff7801270018850470",
//   "5fc7dc2778012700188504c4",
//   "5fc7dc507801270018850529",
//   "5fc7dc77780127001885056b",
//   "5fc7dc9b78012700188505ac",
//   "5fc7dcbd78012700188505ec",
//   "5fcb1d401254cd00119a15a1",
//   "5fcb1c961254cd00119a1507",
//   "5fc7de60780127001885086d",
//   "5fc7de9f78012700188508ae",
//   "5fcb18571254cd00119a12c2",
//   "5fc7def37801270018850976",
//   "5fcb12bd1254cd00119a1002",
//   "5fc7df517801270018850a56",
//   "5fcb11501254cd00119a0f12",
//   "5fc7dfa17801270018850b44",
//   "5fc7dfc57801270018850b94",
//   "5fc7dfe37801270018850bf5",
//   "5fc7e0057801270018850c3a",
//   "5fc7e0307801270018850c80",
//   "5fc7e0537801270018850cdf",
//   "5fc7e06d7801270018850d20",
//   "5fc7e08e7801270018850d64",
//   "5fc7e0a97801270018850d89",
//   "5fc7e0c57801270018850dc7",
//   "5fc7e0e37801270018850dea",
//   "5fc7e0fd7801270018850e10",
//   "5fc7e1177801270018850e33",
//   "5fc964a3780127001885d139",
//   "5fc967b5780127001885d2d3",
//   "5fc967cf780127001885d2ed",
//   "5fc967e6780127001885d30a",
//   "5fc967ff780127001885d328",
//   "5fc96817780127001885d347",
//   "5fc9668c780127001885d1b2",
//   "5fc966bf780127001885d1de",
//   "5fc966e3780127001885d208",
//   "5fc96739780127001885d24f",
//   "5fc96752780127001885d26c",
//   "5fc9676b780127001885d290",
//   "5fc96787780127001885d2b4",
//   "5fcdcc461254cd00119a910b",
//   "5fc884e3780127001885245f",
//   "5fc887f37801270018852646",
//   "5fc8890e78012700188526ed",
//   "5fc889267801270018852711",
//   "5fc889457801270018852735",
//   "5fc88961780127001885276c",
//   "5fc8897d78012700188527a0",
//   "5fc8899378012700188527c4",
//   "5fc889a878012700188527e8",
//   "5fc889c77801270018852806",
//   "5fc889ec780127001885283c",
//   "5fc88a05780127001885285f",
//   "5fc88a1c780127001885287b",
//   "5fc88a3778012700188528a3",
//   "5fc88a6b78012700188528f4",
//   "5fc88a81780127001885291a",
//   "5fc88a9a7801270018852941",
//   "5fc88ab07801270018852969",
//   "5fc88aca7801270018852990",
//   "5fc88ae078012700188529be",
//   "5fc88af678012700188529e6",
//   "5fc88b0a7801270018852a07",
//   "5fc88b257801270018852a3b",
//   "5fc88b3c7801270018852a6e",
//   "5fc88b517801270018852a93",
//   "5fc88b6d7801270018852ab8",
//   "5fc88b817801270018852adc",
//   "5fc88b9a7801270018852b0b",
//   "5fc790f5780127001884e55b",
//   "5fc79128780127001884e587",
//   "5fc78dd9780127001884e3f7",
//   "5fc7914a780127001884e5b0",
//   "5fc79199780127001884e5ed",
//   "5fc791b2780127001884e60e",
//   "5fc791d1780127001884e631",
//   "5fc791ee780127001884e653",
//   "5fc7920d780127001884e678",
//   "5fc7928f780127001884e6ba",
//   "5fc792bd780127001884e6de",
//   "5fc792d8780127001884e6fe",
//   "5fc792fc780127001884e719",
//   "5fc79313780127001884e735",
//   "5fc79351780127001884e75b",
//   "5fc79553780127001884e83d",
//   "5fc76610780127001884d021",
//   "5fc7956d780127001884e861",
//   "5fc795ad780127001884e8a3",
//   "5fc795c3780127001884e8cd",
//   "5fc79616780127001884e8fa",
//   "5fc79630780127001884e913",
//   "5fc7964e780127001884e935",
//   "5fc79674780127001884e948",
//   "5fc79690780127001884e968",
//   "5fc796a6780127001884e983",
//   "5fc796ba780127001884e9a0",
//   "5fc932d3780127001885b4c0",
//   "5fc93355780127001885b530",
//   "5fc86a3c7801270018851a42",
//   "5fc86a977801270018851a66",
//   "5fc86c9d7801270018851b29",
//   "5fc4beb621401f001890800b",
//   "5fc72cd3780127001884b1fa",
//   "5fc72d89780127001884b272",
//   "5fc72ef8780127001884b349",
//   "5fc72ded780127001884b2b2",
//   "5fc72dc5780127001884b292",
//   "5fc72843780127001884af97",
//   "5fc72e37780127001884b2de",
//   "5fc72e55780127001884b2eb",
//   "5fc72e72780127001884b301",
//   "5fc72daa780127001884b285",
//   "5fc72ea6780127001884b319",
//   "5fc72f16780127001884b359",
//   "5fc8b6eb780127001885487c",
//   "5fc8b6b4780127001885483c",
//   "5fc8b67a78012700188547f4",
//   "5fc8b64678012700188547a4",
//   "5fc8b60c7801270018854752",
//   "5fc8b5907801270018854681",
//   "5fc8b5c878012700188546e6",
//   "5fc8b2947801270018854357",
//   "5fc8b1387801270018854267",
//   "5fc8b37b780127001885444b",
//   "5fc899db7801270018853365",
//   "5fc8a15d78012700188537dd",
//   "5fc8a4ab78012700188539cd",
//   "5fc8b0427801270018854120",
//   "5fc8b095780127001885415f",
//   "5fc8b0f178012700188541dc",
//   "5fc8f5697801270018857197",
//   "5fc8f606780127001885721a",
//   "5fbc82fab41580001818f307",
//   "5fb60f38f389e3001133a78f",
//   "5fc4d49021401f0018908469",
// ];


// let countryCodeObj = [
//   {
//     "country": "Afghanistan",
//     "countryCode": 93
//   },
//   {
//     "country": "Albania",
//     "countryCode": 355
//   },
//   {
//     "country": "Algeria",
//     "countryCode": 213
//   },
//   {
//     "country": "American Samoa",
//     "countryCode": "1-684"
//   },
//   {
//     "country": "Andorra",
//     "countryCode": 376
//   },
//   {
//     "country": "Angola",
//     "countryCode": 244
//   },
//   {
//     "country": "Anguilla",
//     "countryCode": "1-264"
//   },
//   {
//     "country": "Antarctica",
//     "countryCode": 672
//   },
//   {
//     "country": "Antigua and Barbuda",
//     "countryCode": "1-268"
//   },
//   {
//     "country": "Argentina",
//     "countryCode": 54
//   },
//   {
//     "country": "Armenia",
//     "countryCode": 374
//   },
//   {
//     "country": "Aruba",
//     "countryCode": 297
//   },
//   {
//     "country": "Australia",
//     "countryCode": 61
//   },
//   {
//     "country": "Austria",
//     "countryCode": 43
//   },
//   {
//     "country": "Azerbaijan",
//     "countryCode": 994
//   },
//   {
//     "country": "Bahamas",
//     "countryCode": "1-242"
//   },
//   {
//     "country": "Bahrain",
//     "countryCode": 973
//   },
//   {
//     "country": "Bangladesh",
//     "countryCode": 880
//   },
//   {
//     "country": "Barbados",
//     "countryCode": "1-246"
//   },
//   {
//     "country": "Belarus",
//     "countryCode": 375
//   },
//   {
//     "country": "Belgium",
//     "countryCode": 32
//   },
//   {
//     "country": "Belize",
//     "countryCode": 501
//   },
//   {
//     "country": "Benin",
//     "countryCode": 229
//   },
//   {
//     "country": "Bermuda",
//     "countryCode": "1-441"
//   },
//   {
//     "country": "Bhutan",
//     "countryCode": 975
//   },
//   {
//     "country": "Bolivia",
//     "countryCode": 591
//   },
//   {
//     "country": "Bosnia and Herzegovina",
//     "countryCode": 387
//   },
//   {
//     "country": "Botswana",
//     "countryCode": 267
//   },
//   {
//     "country": "Brazil",
//     "countryCode": 55
//   },
//   {
//     "country": "British Indian Ocean Territory",
//     "countryCode": 246
//   },
//   {
//     "country": "British Virgin Islands",
//     "countryCode": "1-284"
//   },
//   {
//     "country": "Brunei",
//     "countryCode": 673
//   },
//   {
//     "country": "Bulgaria",
//     "countryCode": 359
//   },
//   {
//     "country": "Burkina Faso",
//     "countryCode": 226
//   },
//   {
//     "country": "Burundi",
//     "countryCode": 257
//   },
//   {
//     "country": "Cambodia",
//     "countryCode": 855
//   },
//   {
//     "country": "Cameroon",
//     "countryCode": 237
//   },
//   {
//     "country": "Canada",
//     "countryCode": 1
//   },
//   {
//     "country": "Cape Verde",
//     "countryCode": 238
//   },
//   {
//     "country": "Cayman Islands",
//     "countryCode": "1-345"
//   },
//   {
//     "country": "Central African Republic",
//     "countryCode": 236
//   },
//   {
//     "country": "Chad",
//     "countryCode": 235
//   },
//   {
//     "country": "Chile",
//     "countryCode": 56
//   },
//   {
//     "country": "China",
//     "countryCode": 86
//   },
//   {
//     "country": "Christmas Island",
//     "countryCode": 61
//   },
//   {
//     "country": "Cocos Islands",
//     "countryCode": 61
//   },
//   {
//     "country": "Colombia",
//     "countryCode": 57
//   },
//   {
//     "country": "Comoros",
//     "countryCode": 269
//   },
//   {
//     "country": "Cook Islands",
//     "countryCode": 682
//   },
//   {
//     "country": "Costa Rica",
//     "countryCode": 506
//   },
//   {
//     "country": "Croatia",
//     "countryCode": 385
//   },
//   {
//     "country": "Cuba",
//     "countryCode": 53
//   },
//   {
//     "country": "Curacao",
//     "countryCode": 599
//   },
//   {
//     "country": "Cyprus",
//     "countryCode": 357
//   },
//   {
//     "country": "Czech Republic",
//     "countryCode": 420
//   },
//   {
//     "country": "Democratic Republic of the Congo",
//     "countryCode": 243
//   },
//   {
//     "country": "Denmark",
//     "countryCode": 45
//   },
//   {
//     "country": "Djibouti",
//     "countryCode": 253
//   },
//   {
//     "country": "Dominica",
//     "countryCode": "1-767"
//   },
//   {
//     "country": "Dominican Republic",
//     "countryCode": "1-809"
//   },
//   {
//     "country": "East Timor",
//     "countryCode": 670
//   },
//   {
//     "country": "Ecuador",
//     "countryCode": 593
//   },
//   {
//     "country": "Egypt",
//     "countryCode": 20
//   },
//   {
//     "country": "El Salvador",
//     "countryCode": 503
//   },
//   {
//     "country": "Equatorial Guinea",
//     "countryCode": 240
//   },
//   {
//     "country": "Eritrea",
//     "countryCode": 291
//   },
//   {
//     "country": "Estonia",
//     "countryCode": 372
//   },
//   {
//     "country": "Ethiopia",
//     "countryCode": 251
//   },
//   {
//     "country": "Falkland Islands",
//     "countryCode": 500
//   },
//   {
//     "country": "Faroe Islands",
//     "countryCode": 298
//   },
//   {
//     "country": "Fiji",
//     "countryCode": 679
//   },
//   {
//     "country": "Finland",
//     "countryCode": 358
//   },
//   {
//     "country": "France",
//     "countryCode": 33
//   },
//   {
//     "country": "French Polynesia",
//     "countryCode": 689
//   },
//   {
//     "country": "Gabon",
//     "countryCode": 241
//   },
//   {
//     "country": "Gambia",
//     "countryCode": 220
//   },
//   {
//     "country": "Georgia",
//     "countryCode": 995
//   },
//   {
//     "country": "Germany",
//     "countryCode": 49
//   },
//   {
//     "country": "Ghana",
//     "countryCode": 233
//   },
//   {
//     "country": "Gibraltar",
//     "countryCode": 350
//   },
//   {
//     "country": "Greece",
//     "countryCode": 30
//   },
//   {
//     "country": "Greenland",
//     "countryCode": 299
//   },
//   {
//     "country": "Grenada",
//     "countryCode": "1-473"
//   },
//   {
//     "country": "Guam",
//     "countryCode": "1-671"
//   },
//   {
//     "country": "Guatemala",
//     "countryCode": 502
//   },
//   {
//     "country": "Guernsey",
//     "countryCode": "44-1481"
//   },
//   {
//     "country": "Guinea",
//     "countryCode": 224
//   },
//   {
//     "country": "Guinea-Bissau",
//     "countryCode": 245
//   },
//   {
//     "country": "Guyana",
//     "countryCode": 592
//   },
//   {
//     "country": "Haiti",
//     "countryCode": 509
//   },
//   {
//     "country": "Honduras",
//     "countryCode": 504
//   },
//   {
//     "country": "Hong Kong",
//     "countryCode": 852
//   },
//   {
//     "country": "Hungary",
//     "countryCode": 36
//   },
//   {
//     "country": "Iceland",
//     "countryCode": 354
//   },
//   {
//     "country": "India",
//     "countryCode": 91
//   },
//   {
//     "country": "Indonesia",
//     "countryCode": 62
//   },
//   {
//     "country": "Iran",
//     "countryCode": 98
//   },
//   {
//     "country": "Iraq",
//     "countryCode": 964
//   },
//   {
//     "country": "Ireland",
//     "countryCode": 353
//   },
//   {
//     "country": "Isle of Man",
//     "countryCode": "44-1624"
//   },
//   {
//     "country": "Israel",
//     "countryCode": 972
//   },
//   {
//     "country": "Italy",
//     "countryCode": 39
//   },
//   {
//     "country": "Ivory Coast",
//     "countryCode": 225
//   },
//   {
//     "country": "Jamaica",
//     "countryCode": "1-876"
//   },
//   {
//     "country": "Japan",
//     "countryCode": 81
//   },
//   {
//     "country": "Jersey",
//     "countryCode": "44-1534"
//   },
//   {
//     "country": "Jordan",
//     "countryCode": 962
//   },
//   {
//     "country": "Kazakhstan",
//     "countryCode": 7
//   },
//   {
//     "country": "Kenya",
//     "countryCode": 254
//   },
//   {
//     "country": "Kiribati",
//     "countryCode": 686
//   },
//   {
//     "country": "Kosovo",
//     "countryCode": 383
//   },
//   {
//     "country": "Kuwait",
//     "countryCode": 965
//   },
//   {
//     "country": "Kyrgyzstan",
//     "countryCode": 996
//   },
//   {
//     "country": "Laos",
//     "countryCode": 856
//   },
//   {
//     "country": "Latvia",
//     "countryCode": 371
//   },
//   {
//     "country": "Lebanon",
//     "countryCode": 961
//   },
//   {
//     "country": "Lesotho",
//     "countryCode": 266
//   },
//   {
//     "country": "Liberia",
//     "countryCode": 231
//   },
//   {
//     "country": "Libya",
//     "countryCode": 218
//   },
//   {
//     "country": "Liechtenstein",
//     "countryCode": 423
//   },
//   {
//     "country": "Lithuania",
//     "countryCode": 370
//   },
//   {
//     "country": "Luxembourg",
//     "countryCode": 352
//   },
//   {
//     "country": "Macau",
//     "countryCode": 853
//   },
//   {
//     "country": "Macedonia",
//     "countryCode": 389
//   },
//   {
//     "country": "Madagascar",
//     "countryCode": 261
//   },
//   {
//     "country": "Malawi",
//     "countryCode": 265
//   },
//   {
//     "country": "Malaysia",
//     "countryCode": 60
//   },
//   {
//     "country": "Maldives",
//     "countryCode": 960
//   },
//   {
//     "country": "Mali",
//     "countryCode": 223
//   },
//   {
//     "country": "Malta",
//     "countryCode": 356
//   },
//   {
//     "country": "Marshall Islands",
//     "countryCode": 692
//   },
//   {
//     "country": "Mauritania",
//     "countryCode": 222
//   },
//   {
//     "country": "Mauritius",
//     "countryCode": 230
//   },
//   {
//     "country": "Mayotte",
//     "countryCode": 262
//   },
//   {
//     "country": "Mexico",
//     "countryCode": 52
//   },
//   {
//     "country": "Micronesia",
//     "countryCode": 691
//   },
//   {
//     "country": "Moldova",
//     "countryCode": 373
//   },
//   {
//     "country": "Monaco",
//     "countryCode": 377
//   },
//   {
//     "country": "Mongolia",
//     "countryCode": 976
//   },
//   {
//     "country": "Montenegro",
//     "countryCode": 382
//   },
//   {
//     "country": "Montserrat",
//     "countryCode": "1-664"
//   },
//   {
//     "country": "Morocco",
//     "countryCode": 212
//   },
//   {
//     "country": "Mozambique",
//     "countryCode": 258
//   },
//   {
//     "country": "Myanmar",
//     "countryCode": 95
//   },
//   {
//     "country": "Namibia",
//     "countryCode": 264
//   },
//   {
//     "country": "Nauru",
//     "countryCode": 674
//   },
//   {
//     "country": "Nepal",
//     "countryCode": 977
//   },
//   {
//     "country": "Netherlands",
//     "countryCode": 31
//   },
//   {
//     "country": "Netherlands Antilles",
//     "countryCode": 599
//   },
//   {
//     "country": "New Caledonia",
//     "countryCode": 687
//   },
//   {
//     "country": "New Zealand",
//     "countryCode": 64
//   },
//   {
//     "country": "Nicaragua",
//     "countryCode": 505
//   },
//   {
//     "country": "Niger",
//     "countryCode": 227
//   },
//   {
//     "country": "Nigeria",
//     "countryCode": 234
//   },
//   {
//     "country": "Niue",
//     "countryCode": 683
//   },
//   {
//     "country": "North Korea",
//     "countryCode": 850
//   },
//   {
//     "country": "Northern Mariana Islands",
//     "countryCode": "1-670"
//   },
//   {
//     "country": "Norway",
//     "countryCode": 47
//   },
//   {
//     "country": "Oman",
//     "countryCode": 968
//   },
//   {
//     "country": "Pakistan",
//     "countryCode": 92
//   },
//   {
//     "country": "Palau",
//     "countryCode": 680
//   },
//   {
//     "country": "Palestine",
//     "countryCode": 970
//   },
//   {
//     "country": "Panama",
//     "countryCode": 507
//   },
//   {
//     "country": "Papua New Guinea",
//     "countryCode": 675
//   },
//   {
//     "country": "Paraguay",
//     "countryCode": 595
//   },
//   {
//     "country": "Peru",
//     "countryCode": 51
//   },
//   {
//     "country": "Philippines",
//     "countryCode": 63
//   },
//   {
//     "country": "Pitcairn",
//     "countryCode": 64
//   },
//   {
//     "country": "Poland",
//     "countryCode": 48
//   },
//   {
//     "country": "Portugal",
//     "countryCode": 351
//   },
//   {
//     "country": "Puerto Rico",
//     "countryCode": "1-787"
//   },
//   {
//     "country": "Qatar",
//     "countryCode": 974
//   },
//   {
//     "country": "Republic of the Congo",
//     "countryCode": 242
//   },
//   {
//     "country": "Reunion",
//     "countryCode": 262
//   },
//   {
//     "country": "Romania",
//     "countryCode": 40
//   },
//   {
//     "country": "Russia",
//     "countryCode": 7
//   },
//   {
//     "country": "Rwanda",
//     "countryCode": 250
//   },
//   {
//     "country": "Saint Barthelemy",
//     "countryCode": 590
//   },
//   {
//     "country": "Saint Helena",
//     "countryCode": 290
//   },
//   {
//     "country": "Saint Kitts and Nevis",
//     "countryCode": "1-869"
//   },
//   {
//     "country": "Saint Lucia",
//     "countryCode": "1-758"
//   },
//   {
//     "country": "Saint Martin",
//     "countryCode": 590
//   },
//   {
//     "country": "Saint Pierre and Miquelon",
//     "countryCode": 508
//   },
//   {
//     "country": "Saint Vincent and the Grenadines",
//     "countryCode": "1-784"
//   },
//   {
//     "country": "Samoa",
//     "countryCode": 685
//   },
//   {
//     "country": "San Marino",
//     "countryCode": 378
//   },
//   {
//     "country": "Sao Tome and Principe",
//     "countryCode": 239
//   },
//   {
//     "country": "Saudi Arabia",
//     "countryCode": 966
//   },
//   {
//     "country": "Senegal",
//     "countryCode": 221
//   },
//   {
//     "country": "Serbia",
//     "countryCode": 381
//   },
//   {
//     "country": "Seychelles",
//     "countryCode": 248
//   },
//   {
//     "country": "Sierra Leone",
//     "countryCode": 232
//   },
//   {
//     "country": "Singapore",
//     "countryCode": 65
//   },
//   {
//     "country": "Sint Maarten",
//     "countryCode": "1-721"
//   },
//   {
//     "country": "Slovakia",
//     "countryCode": 421
//   },
//   {
//     "country": "Slovenia",
//     "countryCode": 386
//   },
//   {
//     "country": "Solomon Islands",
//     "countryCode": 677
//   },
//   {
//     "country": "Somalia",
//     "countryCode": 252
//   },
//   {
//     "country": "South Africa",
//     "countryCode": 27
//   },
//   {
//     "country": "South Korea",
//     "countryCode": 82
//   },
//   {
//     "country": "South Sudan",
//     "countryCode": 211
//   },
//   {
//     "country": "Spain",
//     "countryCode": 34
//   },
//   {
//     "country": "Sri Lanka",
//     "countryCode": 94
//   },
//   {
//     "country": "Sudan",
//     "countryCode": 249
//   },
//   {
//     "country": "Suriname",
//     "countryCode": 597
//   },
//   {
//     "country": "Svalbard and Jan Mayen",
//     "countryCode": 47
//   },
//   {
//     "country": "Swaziland",
//     "countryCode": 268
//   },
//   {
//     "country": "Sweden",
//     "countryCode": 46
//   },
//   {
//     "country": "Switzerland",
//     "countryCode": 41
//   },
//   {
//     "country": "Syria",
//     "countryCode": 963
//   },
//   {
//     "country": "Taiwan",
//     "countryCode": 886
//   },
//   {
//     "country": "Tajikistan",
//     "countryCode": 992
//   },
//   {
//     "country": "Tanzania",
//     "countryCode": 255
//   },
//   {
//     "country": "Thailand",
//     "countryCode": 66
//   },
//   {
//     "country": "Togo",
//     "countryCode": 228
//   },
//   {
//     "country": "Tokelau",
//     "countryCode": 690
//   },
//   {
//     "country": "Tonga",
//     "countryCode": 676
//   },
//   {
//     "country": "Trinidad and Tobago",
//     "countryCode": "1-868"
//   },
//   {
//     "country": "Tunisia",
//     "countryCode": 216
//   },
//   {
//     "country": "Turkey",
//     "countryCode": 90
//   },
//   {
//     "country": "Turkmenistan",
//     "countryCode": 993
//   },
//   {
//     "country": "Turks and Caicos Islands",
//     "countryCode": "1-649"
//   },
//   {
//     "country": "Tuvalu",
//     "countryCode": 688
//   },
//   {
//     "country": "U.S. Virgin Islands",
//     "countryCode": "1-340"
//   },
//   {
//     "country": "Uganda",
//     "countryCode": 256
//   },
//   {
//     "country": "Ukraine",
//     "countryCode": 380
//   },
//   {
//     "country": "United Arab Emirates",
//     "countryCode": 971
//   },
//   {
//     "country": "United Kingdom",
//     "countryCode": 44
//   },
//   {
//     "country": "United States",
//     "countryCode": 1
//   },
//   {
//     "country": "Uruguay",
//     "countryCode": 598
//   },
//   {
//     "country": "Uzbekistan",
//     "countryCode": 998
//   },
//   {
//     "country": "Vanuatu",
//     "countryCode": 678
//   },
//   {
//     "country": "Vatican",
//     "countryCode": 379
//   },
//   {
//     "country": "Venezuela",
//     "countryCode": 58
//   },
//   {
//     "country": "Vietnam",
//     "countryCode": 84
//   },
//   {
//     "country": "Wallis and Futuna",
//     "countryCode": 681
//   },
//   {
//     "country": "Western Sahara",
//     "countryCode": 212
//   },
//   {
//     "country": "Yemen",
//     "countryCode": 967
//   },
//   {
//     "country": "Zambia",
//     "countryCode": 260
//   },
//   {
//     "country": "Zimbabwe",
//     "countryCode": 263
//   }
// ]
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



// db.collection('Users').where('expo','==','credai-mchi').get().then(snapshot=>{
//   let count = 0
//   let finalcount = 0;
//   if(snapshot.docs.length>1)
//   {
//     snapshot.forEach(doc=>{
//       // console.log("value",Object.values(obj));
//       console.log('pro id',doc.data().projectid)
//       // const hasValue = obj.includes(doc.data().projectid);
//       // console.log(hasValue)
//       // if(doc.d{
//         console.log('got it')
//         console.log(doc.data())
//         count++;
//         finalcount++
//       // }
//     })
//     console.log(count)
//     console.log(snapshot.size)

//   }s
// }).catch(err=>{
//   console.log(err)
// })

// db.collection('categories').add({
//   imageSrc:'',
//   name:'womens wear',
//   status:true
// }).then(res=>{
//   // console.log(res)
// })

// db.collection('ExpoprojectVisitLogs').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
//     if(doc.data().mobilenumber=="9016037231"){
//       console.log(doc.data())
//       db.collection('ExpoprojectVisitLogs').doc(doc.id).delete().then(res=>{
//         console.log('doc deleted',doc.id)
//       })
//     }
//   })
// })



  // db.collection('CountryCode').doc("CC").get().then(doc=>{
  //   console.log(doc.data())
  // }).catch(err=>{
  //   console.log(err)
  // })

  // Object.keys(countryCodeObj).map(key=>{
  //   db.collection('CountryCode').doc('Country').set({
  //     [key]:countrycodeobj[key]
  //   },{merge:true})
  // })
  

  // countryCodeObj.map(obj=>{
  //   db.collection('CountryCode').doc('Country').set({
  //     [obj.country]:obj.countryCode.toString()
  //   },{merge:true})
  // })

//   db.collection('ExpoprojectVisitLogs').get().then(snapshot=>{
//   if(snapshot.size){
//     let count = 0
//     snapshot.forEach(doc=>{
//       if(doc.data().endtime.length===0){
//         // console.log(doc.data().a)
//         // console.log(doc.data().starttime+1000)
//         // console.log(++count)
//         console.log(doc.data())
//         console.log(++count)
//         db.collection('ExpoprojectVisitLogs').doc(`${doc.id}`).update({
//           endtime:doc.data().starttime+10000
//         })
//       }
//     })
//   }
// })


// var beginningDate = 1612354937
// var beginningDateObject = new Date(1970,0,1);
// beginningDateObject.setSeconds(1612354937)
// console.log(beginningDateObject.toUTCString())

// let newdate=firebase.firestore.Timestamp.fromDate(new Date(1612354937));
// console.log(new Date(1612354937000))
// console.log(newdate)
// db.collection('testCollection').where('createdAt','==',newdate).get().then(snapshot=>{
// snapshot.forEach(doc=>{
//   console.log(doc.data())
// })
// })

// let count = 0
// firebase.firestore().collection('ExpoprojectVisitLogs').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
//     count++
//     console.log(count)
//   })
// })

// db.collection('testCollection').add({
//   createdAt:newdate
// })

let userArray = [
  // 1st
  //  {
  //     "Name": "Tanya bregnsdal",
  //     "Company": "Windswept and Interesting",
  //     "Country": "Australia(61)",
  //     "CountryCode": 61,
  //     "Phone": 4446512359,
  //     "Email": "bregnsdal@bigpond.com",
  //     "Password": "Virtual@123"
  //   },
    // {
    //   "Name": "VANITA",
    //   "Company": "VAN PRANIK PTY LTD",
    //   "Country": "Australia(61)",
    //   "CountryCode": 61,
    //   "Phone": 408110919,
    //   "Email": "vanpranik@yahoo.com",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "RICHARD WHILLAS",
    //   "Company": "W.G. TRUNK CO.",
    //   "Country": "Australia(61)",
    //   "CountryCode": 61,
    //   "Phone": 4185462148,
    //   "Email": "rich@wgtrunkco.com",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "Andy Chiu",
    //   "Company": "Webr International Trading",
    //   "Country": "Australia(61)",
    //   "CountryCode": 61,
    //   "Phone": 4121457185,
    //   "Email": "andy@webrtrading.com",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "Tracey Hall",
    //   "Company": "White Label Noba",
    //   "Country": "Australia(61)",
    //   "CountryCode": 61,
    //   "Phone": 417649993,
    //   "Email": "tracey@wlndesign.com",
    //   "Password": "Virtual@123"
    // }
    // 2nd
    // {
    //   "Name": "RAMAN SANDHU",
    //   "Company": "WEST COAST RAMESH JAI INC.",
    //   "Country": "CANADA (1)",
    //   "CountryCode": 1,
    //   "Phone": 7783867069,
    //   "Email": "RAMESHJAI@GMAIL.COM",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "GENETTE SALGADO",
    //   "Company": "YOUNG THINGS CO.",
    //   "Country": "CANADA (1)",
    //   "CountryCode": 1,
    //   "Phone": 7808633865,
    //   "Email": "HELLO@YOUNGTHINGSCO.COM",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "OIKG BELYORODSUIN",
    //   "Company": "VSINC",
    //   "Country": "CANADA (1)",
    //   "CountryCode": 1,
    //   "Phone": 4163022211,
    //   "Email": "INFO@VENER_SNEHA.COM",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "NISHA CHANDRA",
    //   "Company": "VCONNECT INC.",
    //   "Country": "CANADA (1)",
    //   "CountryCode": 1,
    //   "Phone": 6472394626,
    //   "Email": "NISHA@VCONNECT.ENVI.CA",
    //   "Password": "Virtual@123"
    // },
    // {
    //   "Name": "Ravikant Verma",
    //   "Company": "Street Legal Clothing",
    //   "Country": "CANADA (1)",
    //   "CountryCode": 1,
    //   "Phone": 5143849996,
    //   "Email": "raviverma.streetlegal@gmail.com",
    //   "Password": "Virtual@123"
    // }
    // 3rd 
  ]




// userArray.forEach(obj=>{  


//   let createAuthEntryPromise = new Promise((res,rej)=>{
//     admin.auth().createUser({
//       email: obj.Email.toLowerCase().trim(),
//       password: obj.Password.trim(),
//       emailVerified: false,
//       disabled: false
//     }).then(response=>{
//       console.log('account created succ.',response)
//       res(response)
//     }).catch(err=>{
//       console.log(err)
//     })
//   })
//   createAuthEntryPromise.then(res=>{
//     admin.firestore().collection('users').add({
//       contactNo:obj.Phone.toString().trim(),
//       country:obj.Country,
//       countryCode:obj.CountryCode.toString(),
//       date:new Date().getTime(),
//       emailId: res.email,
//       name:obj.Name,
//       status:true,
//       uid:res.uid,
//       userRole:'visitor',
//       companyName:obj.Company,
//       // isTestAuth:true
//     })
//     console.log('entered')
//   }).catch(err=>{
//     console.log(err)
//   })
// })