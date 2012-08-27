var prefixes = [
    '-webkit-',
    '   -moz-',
    '    -ms-',
    '     -o-'
];

var scope = 'source.css';

var ceaser = {
    // Cubic
    'easeInCubic'    : 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    'easeOutCubic'   : 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    'easeInOutCubic' : 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',

    // Circ
    'easeInCirc'     : 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
    'easeOutCirc'    : 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    'easeInOutCirc'  : 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',

    // Expo
    'easeInExpo'     : 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    'easeOutExpo'    : 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    'easeInOutExpo'  : 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',

    // Quad
    'easeInQuad'     : 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    'easeOutQuad'    : 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    'easeInOutQuad'  : 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',

    // Quart
    'easeInQuart'    : 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
    'easeOutQuart'   : 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    'easeInOutQuart' : 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',

    // Quint
    'easeInQuint'    : 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    'easeOutQuint'   : 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    'easeInOutQuint' : 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',

    // Sine
    'easeInSine'     : 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    'easeOutSine'    : 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    'easeInOutSine'  : 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

    // Back
    'easeInBack'     : 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    'easeOutBack'    : 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
    'easeInOutBack'  : 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
};

var transitions = [

    {
        'name'     : 'transition: easeInCirc',
        'easeName' : 'easeInCirc',
        'bezier'   : ceaser.easeInCirc,
        'UUID'     : '4E382915-159B-44F3-8D2B-576194BC5B55',
        'trigger'  : 'trans-eicirc'
    }

]

var eases = [

    {
        'name'     : 'easeInCirc',
        'easeName' : 'easeInCirc',
        'bezier'   : ceaser.easeInCirc,
        'UUID'     : '4E382915-159B-44F3-8D2B-576194BC5B55',
        'trigger'  : 'eicirc'
    }

];



var head = '<?xml version="1.0" encoding="UTF-8"?>\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\
<plist version="1.0">\
<dict>\
	<key>content</key>\
';

var foot = '</dict>\
</plist>';



var output = '';

// transition snippets

(function(){

    transitions.forEach( function(snippet){

        output += head;


        //content

        output += "<string>";

        // prefixes
        for (var i=0; i < prefixes.length; i++) {

            transition = prefixes[i] + 'transition: ';
            if ( i === 0 ) {
                transition += '${1:all} ${2:500}${3:ms} ';
            } else {
                transition += '$1 $2$3 '
            }
            transition += snippet.bezier + ';\n'

            output += transition;

        }

        // W3C version
        output += '        transition: $1 $2$3 ' + snippet.bezier +     '; /* ' + snippet.easeName + ' */';

        output += "</string>";

        // name
        output += '<key>name</key>\n'
        output += '<string>' + snippet.name + '</string>'


        // scope
        output += '<key>scope</key>\n';
        output += '<string>' + scope + '</string>\n'

        // tab trigger

        output += '<key>tabTrigger</key>'
        output += '<string>' + snippet.trigger + '</string>'

        //UUID

        output += '<key>uuid</key>'
        output += '<string>' + snippet.UUID + '</string>'

        //footer
        output += foot;

        //final
        console.log(output);

    } )

})()



// ease snippets

var transition = '';

(function(){

    output = '';

    eases.forEach( function(snippet){

        output += head;

        // content
        output += "<string>";
        output += snippet.bezier;
        output += "</string>\n";

        //name
        output += '<key>name</key>\n'
        output += '<string>' + snippet.name + '</string>'

        // scope
        output += '<key>scope</key>\n';
        output += '<string>' + scope + '</string>\n'

        // tab trigger

        output += '<key>tabTrigger</key>\n'
        output += '<string>' + snippet.trigger + '</string>\n'

        //UUID

        output += '<key>uuid</key>\n'
        output += '<string>' + snippet.UUID + '</string>\n'

        //footer
        output += foot;

        //final
        console.log(output);

    } )

})()


// --------------------------------------------------------------------- //
// Notes
// --------------------------------------------------------------------- //

// uuidgen in terminal for UUIDs

// final output middle section
//
// <string>-webkit-transition: ${1:all} ${2:500}${3:ms} cubic-bezier(0.600, 0.040, 0.980, 0.335);
//    -moz-transition: $1 $2$3 cubic-bezier(0.600, 0.040, 0.980, 0.335);
//      -o-transition: $1 $2$3 cubic-bezier(0.600, 0.040, 0.980, 0.335);
//         transition: $1 $2$3 cubic-bezier(0.600, 0.040, 0.980, 0.335); /* easeInCirc */</string>
//  <key>name</key>
//  <string>transition: easeInCirc</string>
//  <key>scope</key>
//  <string>source.css</string>
//  <key>tabTrigger</key>
//  <string>trans-eicirc</string>
//  <key>uuid</key>
//  <string>4E382915-159B-44F3-8D2B-576194BC5B55</string>


