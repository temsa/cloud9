/**
 * @copyright 2010, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
require.def("ext/keybindings_default/default_win", ["core/ide", "ext/keybindings/keybindings"], function(ide, keys) {

return keys.onLoad({
    "ext" : {
        "save" : {
            "quicksave": "Ctrl-S",
            "saveas": "Ctrl-Shift-S"
        },
        "undo" : {
            "undo": "Ctrl-Z",
            "redo": "Ctrl-Y"
        },
        "clipboard" : {
            "cut": "Ctrl-X",
            "copy": "Ctrl-C",
            "paste": "Ctrl-V"
        },
        "quickwatch": {
            "quickwatch": "Ctrl-Q"
        },
        "run": {
            "resume": "F8",
            "stepinto": "F9",
            "stepover": "F10",
            "stepout": "Shift-F9"
        },
        "gotoline": {
            "gotoline": "Ctrl-G"
        },
        "gotofile": {
            "gotofile": "Alt-Shift-R"
        },
        "newresource": {
            "newfile": "Ctrl-N",
            "newfolder": "Ctrl-Shift-N"
        },
        "searchreplace" : {
            "search": "Ctrl-Shift-F",
            "searchreplace": "Ctrl-Shift-R"
        },
        "searchinfiles" : {
            "searchinfiles": "Alt-Shift-F"
        },
        "formatjson" : {
            "format" : "Ctrl-Shift-J"
        },
        "settings": {
            "showsettings": "Ctrl-,"
        },
        "tabbehaviors" : {
            "closetab": "Ctrl-W",
            "closealltabs": "Ctrl-Shift-W",
            "closeallbutme": "Ctrl-Alt-W",
            "gototabright": "Ctrl-Shift-]",
            "gototableft": "Ctrl-Shift-[",
            "tab1": "Ctrl-1",
            "tab2": "Ctrl-2",
            "tab3": "Ctrl-3",
            "tab4": "Ctrl-4",
            "tab5": "Ctrl-5",
            "tab6": "Ctrl-6",
            "tab7": "Ctrl-7",
            "tab8": "Ctrl-8",
            "tab9": "Ctrl-9",
            "tab0": "Ctrl-0"
        },
        "code" : {
            "selectall": "Ctrl-A",
            "removeline": "Ctrl-D",
            "gotoline": "Ctrl-G",
            "togglecomment": "Ctrl-7",
            "findnext": "F3",
            "findprevious": "Shift-F3",
            "find": "Ctrl-F",
            "replace": "Ctrl-Shift-R",
            "undo": "Ctrl-Z",
            "redo": "Ctrl-Shift-Z|Ctrl-Y",
            "overwrite": "Insert",
            "copylinesup": "Ctrl-Alt-Up",
            "movelinesup": "Ctrl-Up",
            "selecttostart": "Ctrl-Shift-Up",
            "gotostart": "Ctrl-Home",
            "selectup": "Shift-Up",
            "golineup": "Up",
            "copylinesdown": "Ctrl-Alt-Down",
            "movelinesdown": "Ctrl-Down",
            "selecttoend": "Ctrl-Shift-Down",
            "gotoend": "Ctrl-End",
            "selectdown": "Shift-Down",
            "godown": "Down",
            "selectwordleft": "Ctrl-Shift-Left",
            "gotowordleft": "Ctrl-Left",
            "selecttolinestart": "Alt-Shift-Left",
            "gotolinestart": "Alt-Left|Home",
            "selectleft": "Shift-Left",
            "gotoleft": "Left",
            "selectwordright": "Ctrl-Shift-Right",
            "gotowordright": "Ctrl-Right",
            "selecttolineend": "Alt-Shift-Right",
            "gotolineend": "Alt-Right|End",
            "selectright": "Shift-Right",
            "gotoright": "Right",
            "selectpagedown": "Shift-PageDown",
            "pagedown": "PageDown",
            "selectpageup": "Shift-PageUp",
            "pageup": "PageUp",
            "selectlinestart": "Shift-Home",
            "selectlineend": "Shift-End",
            "del": "Delete",
            "backspace": "Backspace",
            "outdent": "Shift-Tab",
            "indent": "Tab"
        }
    }
});

});