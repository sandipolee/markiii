function convert_to_unicode() {
    var b = new Array("ç", "˜", ".", "'m", "]m", "Fmf", "Fm", ")", "!", "@", "#", "$", "%", "^", "&", "*", "(", "k|m", "em", "km", "Qm", "qm", "N˜", "¡", "¢", "1", "2", "4", ">", "?", "B", "I", "Q", "ß", "q", "„", "‹", "•", "›", "§", "°", "¶", "¿", "Å", "Ë", "Ì", "Í", "Î", "Ý", "å", "6«", "7«", "8«", "9«", "Ø", "|", "8Þ", "9Þ", "S", "s", "V", "v", "U", "u", "£", "3", "ª", "R", "r", "5", "H", "h", "‰", "´", "~", "`", "6", "7", "8", "9", "0", "T", "t", "Y", "y", "b", "W", "w", "G", "g", "K", "k", "ˆ", "A", "a", "E", "e", "D", "d", "o", "/", "N", "n", "J", "j", "Z", "z", "i", ":", ";", "X", "x", "cf‘", "c‘f", "cf}", "cf]", "cf", "c", "O{", "O", "pm", "p", "C", "P]", "P", "f‘", '"', "'", "+", "f", "[", "\\", "]", "}", "F", "L", "M", "्ा", "्ो", "्ौ", "अो", "अा", "आै", "आे", "ाो", "ाॅ", "ाे", "ंु", "ेे", "अै", "ाे", "अे", "ंा", "अॅ", "ाै", "ैा", "ंृ", "ँा", "ँू", "ेा", "ंे");
    var l = new Array("ॐ", "ऽ", "।", "m'", "m]", "mfF", "mF", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "फ्र", "झ", "फ", "क्त", "क्र", "ल", "ज्ञ्", "द्घ", "ज्ञ", "द्द", "द्ध", "श्र", "रु", "द्य", "क्ष्", "त्त", "द्म", "त्र", "ध्र", "ङ्घ", "ड्ड", "द्र", "ट्ट", "ड्ढ", "ठ्ठ", "रू", "हृ", "ङ्ग", "त्र", "ङ्क", "ङ्ख", "ट्ठ", "द्व", "ट्र", "ठ्र", "ड्र", "ढ्र", "्य", "्र", "ड़", "ढ़", "क्", "क", "ख्", "ख", "ग्", "ग", "घ्", "घ", "ङ", "च्", "च", "छ", "ज्", "ज", "झ्", "झ", "ञ्", "ञ", "ट", "ठ", "ड", "ढ", "ण्", "त्", "त", "थ्", "थ", "द", "ध्", "ध", "न्", "न", "प्", "प", "फ्", "ब्", "ब", "भ्", "भ", "म्", "म", "य", "र", "ल्", "ल", "व्", "व", "श्", "श", "ष्", "स्", "स", "ह्", "ह", "ऑ", "ऑ", "औ", "ओ", "आ", "अ", "ई", "इ", "ऊ", "उ", "ऋ", "ऐ", "ए", "ॉ", "ू", "ु", "ं", "ा", "ृ", "्", "े", "ै", "ँ", "ी", "ः", "", "े", "ै", "ओ", "आ", "औ", "ओ", "ो", "ॉ", "ो", "ुं", "े", "अै", "ो", "अे", "ां", "अॅ", "ौ", "ौ", "ृं", "ाँ", "ूँ", "ो", "ें");
    var c = b.length;
    if ((document.getElementById("text_or_html")).selectedIndex == 0) {
        document.getElementById("unicode_text").value = "You have chosen SIMPLE TEXT in Preeti to convert into Unicode.";
        var e = document.getElementById("legacy_text").value;
        var f = document.getElementById("legacy_text").value.length;
        var t = "";
        var i = 0;
        var h = 0;
        var g = 1;
        var r = 6000;
        while (g == 1) {
            i = h;
            if (h < (f - r)) {
                h += r;
                while (document.getElementById("legacy_text").value.charAt(h) != " ") {
                    h--
                }
            } else {
                h = f;
                g = 0
            }
            var e = document.getElementById("legacy_text").value.substring(i, h);
            p();
            t += e;
            document.getElementById("unicode_text").value = t
        }
    } else {
        document.getElementById("unicode_text").value = "You have chosen HTML TEXT in SUCHI-DEV-708  to convert into Unicode.";
        var j = document.getElementById("legacy_text").value;
        var t = "";
        var a = 0;
        var d = 1;
        var k = j.indexOf("<p ");
        k = j.indexOf("Sanskrit 99", k);
        var o = 0;
        var n = 0;
        var m = 0;
        while (k != -1) {
            o = j.indexOf(">", k);
            n = j.indexOf("/span", o);
            m = j.indexOf("span", o);
            while (m < n) {
                m = j.indexOf("span", n + 4);
                n = j.indexOf("/span", n + 4)
            }
            var e = j.substring(o, n);
            e = e.replace(/>/g, ">>");
            t = t + j.substring(0, o) + e + "/span";
            j = j.substring(n + 5);
            k = j.indexOf("Sanskrit 99")
        }
        t = t + j;
        j = t;
        t = "";
        var q = 0;
        var s = 1;
        q = j.indexOf("<p ");
        while (q != -1) {
            q = j.indexOf("<p ");
            s = j.indexOf("/p>");
            e = j.substring(q + 3, s);
            if (e.indexOf("MsoBodyText") != -1) {
                e = e.replace(/>/g, ">>");
                k = e.indexOf("font-family");
                o = 0;
                n = 0;
                m = 0;
                while (k != -1) {
                    o = e.indexOf(">>", k);
                    n = e.indexOf("/span", o);
                    m = e.indexOf("span", o);
                    while (m < n) {
                        m = e.indexOf("span", n + 4);
                        n = e.indexOf("/span", n + 4)
                    }
                    e = e.substring(0, o) + (e.substring(o, n)).replace(/>>/g, ">") + e.substring(n);
                    k = e.indexOf("font-family", n)
                }
            }
            t = t + j.substring(0, q + 3) + e + "/p>";
            j = j.substring(s + 3);
            q = j.indexOf("<p ")
        }
        t = t + j;
        j = t;
        t = "";
        o = j.indexOf(">>");
        while (o != -1) {
            a = j.indexOf(">>", o);
            d = j.indexOf("<", a);
            e = j.substring(a + 2, d);
            t = t + j.substring(0, a + 1);
            j = j.substring(d + 1);
            p();
            t = t + e + "<";
            o = j.indexOf(">>")
        }
        t = t + j;
        document.getElementById("unicode_text").value = t
    }

    function p() {
        if (e != "") {
            for (input_symbol_idx = 0; input_symbol_idx < c; input_symbol_idx++) {
                k = 0;
                while (k != -1) {
                    e = e.replace(b[input_symbol_idx], l[input_symbol_idx]);
                    k = e.indexOf(b[input_symbol_idx])
                }
            }
            var z = e.indexOf("l");
            while (z != -1) {
                var u = e.charAt(z + 1);
                var y = "l" + u;
                e = e.replace(y, u + "ि");
                z = e.search(/l/, z + 1)
            }
            var v = e.indexOf("ि्");
            while (v != -1) {
                var x = e.charAt(v + 2);
                var y = "ि्" + x;
                e = e.replace(y, "्" + x + "ि");
                v = e.search(/ि्/, v + 2)
            }
            var v = e.indexOf("िं्");
            while (v != -1) {
                var x = e.charAt(v + 3);
                var y = "िं्" + x;
                e = e.replace(y, "्" + x + "िं");
                v = e.search(/िं्/, v + 3)
            }
            set_of_matras = "ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ";
            var A = e.indexOf("{");
            while (A > 0) {
                probable_position_of_half_r = A - 1;
                var w = e.charAt(probable_position_of_half_r);
                while (set_of_matras.match(w) != null) {
                    probable_position_of_half_r = probable_position_of_half_r - 1;
                    w = e.charAt(probable_position_of_half_r)
                }
                y = e.substr(probable_position_of_half_r, (A - probable_position_of_half_r));
                new_replacement_string = "र्" + y;
                y = y + "{";
                e = e.replace(y, new_replacement_string);
                A = e.indexOf("{")
            }
            e = e.replace(/=/g, ".");
            e = e.replace(/_/g, ")");
            e = e.replace(/Ö/g, "=");
            e = e.replace(/Ù/g, ";");
            e = e.replace(/…/g, "‘");
            e = e.replace(/Ú/g, "’");
            e = e.replace(/Û/g, "!");
            e = e.replace(/Ü/g, "%");
            e = e.replace(/æ/g, "“");
            e = e.replace(/Æ/g, "”");
            e = e.replace(/±/g, "+");
            e = e.replace(/-/g, "(");
            e = e.replace(/</g, "?")
        }
    }
};