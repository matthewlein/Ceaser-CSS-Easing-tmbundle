// run this with node to rebuild snippets

// --------------------------------------------------------------------- //
// Globals
// --------------------------------------------------------------------- //

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
        'name'     : 'transition',
        'easeName' : '',
        'bezier'   : '${4:ease}',
        'trigger'  : 'trans',
        'UUID'     : '525924E1-5C04-4803-950E-781BD1199D67'
    },

    {
        'name'     : 'transition: easeInCubic',
        'easeName' : 'easeInCubic',
        'bezier'   : ceaser.easeInCubic,
        'trigger'  : 'trans-eicubic',
        'UUID'     : 'EC2B8009-1470-4CDB-9C0D-EC1E56D38B94'
    },
    {
        'name'     : 'transition: easeOutCubic',
        'easeName' : 'easeOutCubic',
        'bezier'   : ceaser.easeOutCubic,
        'trigger'  : 'trans-eocubic',
        'UUID'     : '82BD9910-29E1-423F-8B4B-441EEB3137BE'
    },
    {
        'name'     : 'transition: easeInOutCubic',
        'easeName' : 'easeInOutCubic',
        'bezier'   : ceaser.easeInOutCubic,
        'trigger'  : 'trans-eiocubic',
        'UUID'     : '2D81B824-40C3-4CDA-97BB-D8B3D7071F2E'
    },


    {
        'name'     : 'transition: easeInCirc',
        'easeName' : 'easeInCirc',
        'bezier'   : ceaser.easeInCirc,
        'trigger'  : 'trans-eicirc',
        'UUID'     : '4E382915-159B-44F3-8D2B-576194BC5B55'
    },
    {
        'name'     : 'transition: easeOutCirc',
        'easeName' : 'easeOutCirc',
        'bezier'   : ceaser.easeOutCirc,
        'trigger'  : 'trans-eocirc',
        'UUID'     : '3BF62301-AFD2-4439-B6B9-EB1051880EEB'
    },
    {
        'name'     : 'transition: easeInOutCirc',
        'easeName' : 'easeInOutCirc',
        'bezier'   : ceaser.easeInOutCirc,
        'trigger'  : 'trans-eiocirc',
        'UUID'     : 'F774EBFE-847B-429E-846E-6DA581F84FA3'
    },


    {
        'name'     : 'transition: easeInExpo',
        'easeName' : 'easeInExpo',
        'bezier'   : ceaser.easeInExpo,
        'trigger'  : 'trans-eiexpo',
        'UUID'     : '6F04CE24-EA2C-4792-AF08-E6B6533D4FC9'
    },
    {
        'name'     : 'transition: easeOutExpo',
        'easeName' : 'easeOutExpo',
        'bezier'   : ceaser.easeOutExpo,
        'trigger'  : 'trans-eoexpo',
        'UUID'     : '56127F91-C7EC-4E1F-95E1-A0ED268D4971'
    },
    {
        'name'     : 'transition: easeInOutExpo',
        'easeName' : 'easeInOutExpo',
        'bezier'   : ceaser.easeInOutExpo,
        'trigger'  : 'trans-eioexpo',
        'UUID'     : '1F3484AA-2B4C-4951-8E3F-923E9C7BFEB8'
    },


    {
        'name'     : 'transition: easeInQuad',
        'easeName' : 'easeInQuad',
        'bezier'   : ceaser.easeInQuad,
        'trigger'  : 'trans-eiquad',
        'UUID'     : 'D78E4718-FD17-4A9F-96CF-EC29200F9030'
    },
    {
        'name'     : 'transition: easeOutQuad',
        'easeName' : 'easeOutQuad',
        'bezier'   : ceaser.easeOutQuad,
        'trigger'  : 'trans-eoquad',
        'UUID'     : 'A94BF781-3346-41CB-8469-76EEC7BCCF93'
    },
    {
        'name'     : 'transition: easeInOutQuad',
        'easeName' : 'easeInOutQuad',
        'bezier'   : ceaser.easeInOutQuad,
        'trigger'  : 'trans-eioquad',
        'UUID'     : 'DF0DEC40-EB1F-432E-9AD1-C4C07EC8AE0C'
    },


    {
        'name'     : 'transition: easeOutQuart',
        'easeName' : 'easeOutQuart',
        'bezier'   : ceaser.easeOutQuart,
        'trigger'  : 'trans-eoquart',
        'UUID'     : '4589A55D-B9C2-4C2F-A140-66F6BFB442B3'
    },
    {
        'name'     : 'transition: easeInQuart',
        'easeName' : 'easeInQuart',
        'bezier'   : ceaser.easeInQuart,
        'trigger'  : 'trans-eiquart',
        'UUID'     : '3D78B3E1-D116-4C5F-B8B5-F8B52F0562F8'
    },
    {
        'name'     : 'transition: easeInOutQuart',
        'easeName' : 'easeInOutQuart',
        'bezier'   : ceaser.easeInOutQuart,
        'trigger'  : 'trans-eioquart',
        'UUID'     : 'E925DD47-9518-4E56-B5D5-42A34638B088'
    },


    {
        'name'     : 'transition: easeInQuint',
        'easeName' : 'easeInQuint',
        'bezier'   : ceaser.easeInQuint,
        'trigger'  : 'trans-eiquint',
        'UUID'     : 'C57A65B3-9E96-4A30-A743-A01FD6F1C2B8'
    },
    {
        'name'     : 'transition: easeOutQuint',
        'easeName' : 'easeOutQuint',
        'bezier'   : ceaser.easeOutQuint,
        'trigger'  : 'trans-eoquint',
        'UUID'     : 'C81BD64A-FA26-49D2-804B-B582413DD066'
    },
    {
        'name'     : 'transition: easeInOutQuint',
        'easeName' : 'easeInOutQuint',
        'bezier'   : ceaser.easeInOutQuint,
        'trigger'  : 'trans-eioquint',
        'UUID'     : 'CA6E0799-097D-4CB1-A675-414E90F3CC34'
    },


    {
        'name'     : 'transition: easeInSine',
        'easeName' : 'easeInSine',
        'bezier'   : ceaser.easeInSine,
        'trigger'  : 'trans-eisine',
        'UUID'     : 'A0EB500A-A6BC-46EA-9D0C-6A00E6DA0355'
    },
    {
        'name'     : 'transition: easeOutSine',
        'easeName' : 'easeOutSine',
        'bezier'   : ceaser.easeOutSine,
        'trigger'  : 'trans-eosine',
        'UUID'     : '10124990-10AF-4315-912D-407E1D872C4A'
    },
    {
        'name'     : 'transition: easeInOutSine',
        'easeName' : 'easeInOutSine',
        'bezier'   : ceaser.easeInOutSine,
        'trigger'  : 'trans-eiosine',
        'UUID'     : '31B3C4E5-3100-4FA7-AF7E-D76EA45B82BC'
    },


    {
        'name'     : 'transition: easeInBack',
        'easeName' : 'easeInBack',
        'bezier'   : ceaser.easeInBack,
        'trigger'  : 'trans-eiback',
        'UUID'     : '5BF36478-C4DD-4F54-AB89-1A83BDD46EC1'
    },
    {
        'name'     : 'transition: easeOutBack',
        'easeName' : 'easeOutBack',
        'bezier'   : ceaser.easeOutBack,
        'trigger'  : 'trans-eoback',
        'UUID'     : '1AE8565A-C9BB-42F4-9397-86EBFC0A1286'
    },
    {
        'name'     : 'transition: easeInOutBack',
        'easeName' : 'easeInOutBack',
        'bezier'   : ceaser.easeInOutBack,
        'trigger'  : 'trans-eioback',
        'UUID'     : 'A498D048-AF7E-4D44-8F91-800EE4B90A45'
    }

];

var eases = [

    {
        'name'     : 'easeInCubic',
        'easeName' : 'easeInCubic',
        'bezier'   : ceaser.easeInCubic,
        'trigger'  : 'eicubic',
        'UUID'     : 'D8512371-0539-4B4A-9CF2-18860B03B892'
    },
    {
        'name'     : 'easeOutCubic',
        'easeName' : 'easeOutCubic',
        'bezier'   : ceaser.easeOutCubic,
        'trigger'  : 'eocubic',
        'UUID'     : 'FC708028-CA8E-4668-90B0-C4CB9735AFE5'
    },
    {
        'name'     : 'easeInOutCubic',
        'easeName' : 'easeInOutCubic',
        'bezier'   : ceaser.easeInOutCubic,
        'trigger'  : 'eiocubic',
        'UUID'     : '4EFDADBB-EA71-4542-A4D2-3EAE6805CA16'
    },


    {
        'name'     : 'easeInCirc',
        'easeName' : 'easeInCirc',
        'bezier'   : ceaser.easeInCirc,
        'trigger'  : 'eicirc',
        'UUID'     : '6753F698-2922-41E9-BE00-C11D9DAD6629'
    },
    {
        'name'     : 'easeOutCirc',
        'easeName' : 'easeOutCirc',
        'bezier'   : ceaser.easeOutCirc,
        'trigger'  : 'eocirc',
        'UUID'     : '51A8AA05-CF7F-4624-85EB-7CE513463EE0'
    },
    {
        'name'     : 'easeInOutCirc',
        'easeName' : 'easeInOutCirc',
        'bezier'   : ceaser.easeInOutCirc,
        'trigger'  : 'eiocirc',
        'UUID'     : '5EE32327-39F7-4DC6-BE48-FC57ADC7553C'
    },


    {
        'name'     : 'easeInExpo',
        'easeName' : 'easeInExpo',
        'bezier'   : ceaser.easeInExpo,
        'trigger'  : 'eiexpo',
        'UUID'     : '89088B56-997D-4963-A52D-255F4512FDAF'
    },
    {
        'name'     : 'easeOutExpo',
        'easeName' : 'easeOutExpo',
        'bezier'   : ceaser.easeOutExpo,
        'trigger'  : 'eoexpo',
        'UUID'     : '4BC59648-94E9-484C-9526-EC9B9488416E'
    },
    {
        'name'     : 'easeInOutExpo',
        'easeName' : 'easeInOutExpo',
        'bezier'   : ceaser.easeInOutExpo,
        'trigger'  : 'eioexpo',
        'UUID'     : '4C155BE1-D1C0-48F8-83FA-AE6478B34C9E'
    },


    {
        'name'     : 'easeInQuad',
        'easeName' : 'easeInQuad',
        'bezier'   : ceaser.easeInQuad,
        'trigger'  : 'eiquad',
        'UUID'     : '93C92FFD-4421-4494-AAFD-B8280302E800'
    },
    {
        'name'     : 'easeOutQuad',
        'easeName' : 'easeOutQuad',
        'bezier'   : ceaser.easeOutQuad,
        'trigger'  : 'eoquad',
        'UUID'     : '2C552E62-6791-4B2E-AAD5-B08EF200BE29'
    },
    {
        'name'     : 'easeInOutQuad',
        'easeName' : 'easeInOutQuad',
        'bezier'   : ceaser.easeInOutQuad,
        'trigger'  : 'eioquad',
        'UUID'     : '55AC5998-922B-4487-8DB5-43F94340D9E1'
    },


    {
        'name'     : 'easeOutQuart',
        'easeName' : 'easeOutQuart',
        'bezier'   : ceaser.easeOutQuart,
        'trigger'  : 'eoquart',
        'UUID'     : 'A9F9A85D-827D-4764-9C09-724C7584D099'
    },
    {
        'name'     : 'easeInQuart',
        'easeName' : 'easeInQuart',
        'bezier'   : ceaser.easeInQuart,
        'trigger'  : 'eiquart',
        'UUID'     : 'ED0A6FBA-8CDA-4BAC-A5D7-4BD7AFA31349'
    },
    {
        'name'     : 'easeInOutQuart',
        'easeName' : 'easeInOutQuart',
        'bezier'   : ceaser.easeInOutQuart,
        'trigger'  : 'eioquart',
        'UUID'     : '35A2A1E7-E34E-4456-9213-CC63CCDD190F'
    },


    {
        'name'     : 'easeInQuint',
        'easeName' : 'easeInQuint',
        'bezier'   : ceaser.easeInQuint,
        'trigger'  : 'eiquint',
        'UUID'     : '6460240E-0CBC-42F8-BCA4-538305FA7D99'
    },
    {
        'name'     : 'easeOutQuint',
        'easeName' : 'easeOutQuint',
        'bezier'   : ceaser.easeOutQuint,
        'trigger'  : 'eoquint',
        'UUID'     : '343A15E4-89D3-4355-B834-1B0045926724'
    },
    {
        'name'     : 'easeInOutQuint',
        'easeName' : 'easeInOutQuint',
        'bezier'   : ceaser.easeInOutQuint,
        'trigger'  : 'eioquint',
        'UUID'     : 'FD43C345-AC16-46FB-BFD7-7EE5B395292E'
    },


    {
        'name'     : 'easeInSine',
        'easeName' : 'easeInSine',
        'bezier'   : ceaser.easeInSine,
        'trigger'  : 'eisine',
        'UUID'     : '844CADB0-9391-4D4E-AF32-5B248EA79C5F'
    },
    {
        'name'     : 'easeOutSine',
        'easeName' : 'easeOutSine',
        'bezier'   : ceaser.easeOutSine,
        'trigger'  : 'eosine',
        'UUID'     : '5BA4EC75-AB04-4AFE-95C6-7F27F434FCC2'
    },
    {
        'name'     : 'easeInOutSine',
        'easeName' : 'easeInOutSine',
        'bezier'   : ceaser.easeInOutSine,
        'trigger'  : 'eiosine',
        'UUID'     : 'DBF3FE0A-6B20-4A18-94FF-B9FFAEE4A7A8'
    },


    {
        'name'     : 'easeInBack',
        'easeName' : 'easeInBack',
        'bezier'   : ceaser.easeInBack,
        'trigger'  : 'eiback',
        'UUID'     : 'B5E242D8-652C-4799-811C-B84634B20FBA'
    },
    {
        'name'     : 'easeOutBack',
        'easeName' : 'easeOutBack',
        'bezier'   : ceaser.easeOutBack,
        'trigger'  : 'eoback',
        'UUID'     : 'E7AD4BB1-B5D9-4962-952D-D922D752209B'
    },
    {
        'name'     : 'easeInOutBack',
        'easeName' : 'easeInOutBack',
        'bezier'   : ceaser.easeInOutBack,
        'trigger'  : 'eioback',
        'UUID'     : '63732D09-E89A-4E1D-9866-4E4D59BF2FA0'
    },


];

var tab = '\t';

// filesystem API
var fs = require('fs');


// --------------------------------------------------------------------- //
// Constants
// --------------------------------------------------------------------- //

var head = '<?xml version="1.0" encoding="UTF-8"?>\n\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n\
<plist version="1.0">\n\
<dict>\n\
    <key>content</key>\n\
';

var foot = '</dict>\n\
</plist>\n';


// --------------------------------------------------------------------- //
// Transition snippets
// --------------------------------------------------------------------- //

function makeTransitions() {

    var output = '';
    var transition = '';

    transitions.forEach( function(snippet){

        output = '';
        output += head;

        //content

        output += tab + "<string>";

        // prefixes
        for (var i=0; i < prefixes.length; i++) {

            transition = prefixes[i] + 'transition: ';
            if ( i === 0 ) {
                transition += '${1:all} ${2:500}${3:ms} ';
            } else {
                transition += '$1 $2$3 ';
            }
            transition += snippet.bezier + ';\n';

            output += transition;

        }

        // W3C version
        output += '        transition: $1 $2$3 ' + snippet.bezier +     '; /* ' + snippet.easeName + ' */';

        output += "</string>\n";

        // name
        output += tab + '<key>name</key>\n';
        output += tab + '<string>' + snippet.name + '</string>\n';

        // scope
        output += tab + '<key>scope</key>\n';
        output += tab + '<string>' + scope + '</string>\n';

        // tab trigger

        output += tab + '<key>tabTrigger</key>\n';
        output += tab + '<string>' + snippet.trigger + '</string>\n';

        //UUID

        output += tab + '<key>uuid</key>\n';
        output += tab + '<string>' + snippet.UUID + '</string>\n';

        //footer
        output += foot;

        //final
        //console.log(output);
        fs.writeFile('Snippets/' + snippet.name + '.tmSnippet', output, function(err) {
            if ( err ) console.log(err);
        });

    });

}

// --------------------------------------------------------------------- //
// Ease Snippets
// --------------------------------------------------------------------- //


function makeEases() {

    var output = '';

    eases.forEach( function(snippet){

        output = '';
        output += head;

        // content
        output += tab + "<string>" + snippet.bezier + "</string>\n";

        //name
        output += tab + '<key>name</key>\n';
        output += tab + '<string>' + snippet.name + '</string>\n';

        // scope
        output += tab + '<key>scope</key>\n';
        output += tab + '<string>' + scope + '</string>\n';

        // tab trigger

        output += tab + '<key>tabTrigger</key>\n';
        output += tab + '<string>' + snippet.trigger + '</string>\n';

        //UUID

        output += tab + '<key>uuid</key>\n';
        output += tab + '<string>' + snippet.UUID + '</string>\n';

        //footer
        output += foot;

        //final
        fs.writeFile('Snippets/' + snippet.name + '.tmSnippet', output, function(err) {
            if ( err ) console.log(err);
        });

    });

}

// --------------------------------------------------------------------- //
// Info.plist
// --------------------------------------------------------------------- //

function makeInfo() {

    var head = '<?xml version="1.0" encoding="UTF-8"?>\n\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n\
<plist version="1.0">\n\
<dict>\n\
<key>name</key>\n\
<string>Ceaser CSS Easing</string>\n\
<key>ordering</key>\n\
<array>\n';

    var foot = '</array>\n\
<key>uuid</key>\n\
<string>6F21D870-5768-433C-944E-E9715CFAB3D6</string>\n\
</dict>\n\
</plist>';

    var output = head;


    eases.forEach( function(snippet){
        output += '<string>' + snippet.UUID + '</string>\n';
    });

    transitions.forEach( function(snippet){
        output += '<string>' + snippet.UUID + '</string>\n';
    });

    output += foot;

    fs.writeFile('info.plist', output, function(err) {
        if ( err ) console.log(err);
    });


}


// --------------------------------------------------------------------- //
// init
// --------------------------------------------------------------------- //

makeTransitions();
makeEases();
makeInfo();


// --------------------------------------------------------------------- //
// Notes
// --------------------------------------------------------------------- //

// uuidgen in terminal for UUIDs
// var fs = require('fs');
// fs.writeFile("/tmp/test", "Hey there!", function(err) {})

