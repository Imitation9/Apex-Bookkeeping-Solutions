export default {

content:[
"./index.html",
"./src/**/*.{js,jsx}"
],


theme:{

extend:{


colors:{

apex:{

navy:"#163B65",

blue:"#2C78C5",

gold:"#C6A15B",

light:"#F8FAFC"

}

},


fontFamily:{

heading:[
"Playfair Display",
"serif"
],

body:[
"Inter",
"sans-serif"
]

},


boxShadow:{

premium:
"0 25px 50px rgba(15,23,42,.12)"

},


animation:{

float:
"float 6s ease-in-out infinite"

},


keyframes:{

float:{

"0%,100%":{
transform:"translateY(0)"
},

"50%":{
transform:"translateY(-12px)"
}

}

}


}

},

plugins:[]

};
