/* Draggable badges */
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function drop(event, selectChar) {
    const char = event.dataTransfer.getData('text');
    char.ondragstart = function () {
        return false;
    }
    //copy char to select zone
    let charCopy = document.getElementById(char).cloneNode(true);
    charCopy.id = char + 'new';
    selectChar.appendChild(charCopy);
}

/*


                            <h3>Robin Arryn</h3>
                            <img id="arrynBadge" draggable="true" ondragstart="dragStart(event)"
                                src="/images/arryn-badge.png" alt="robin-arryn">

player 1:

<img id="characterSelect1" src="/images/white-polygon.svg" alt="player-1_badge">
<pre id="char1" class="chardrop" ondrop="drop(event, this)" ondragover="event.preventDefault()"
    ondragover="return false">
Drag your
character here!
</pre>
<button id="removeChar1">Remove</button>


                    [id$='new'] {
                        width: 207px;
                        top: -175px;
                        left: 8px;
                        position: absolute;
                    }
                                        #char1 {
                        position: relative;
                        bottom: 165px;
                        left: 5px;
                        font-family: 'Simonetta', serif;
                        color: rgba($goz-black, 0.8);
                        font-weight: bold;
                        @include calcRem(20);
                        background: none;
                        border: none;
                    }

                    #removeChar1 {
                        display: block;
                        position: absolute;
                        bottom: 250px;
                        left: 174px;
                        background: rgba($goz-black, 0.8);
                        font-weight: bold;
                        color: rgba($goz-white, 0.8);
                        font-family: 'Cinzel Decorative', serif;
                        font-weight: bold;
                        width: 100px;
                        height: 35px;
                        border: 1px solid rgba($goz-white, 0.4);
                        transition: 500ms;
                        cursor: pointer;
                        display: none;
                    }

                    #removeChar1:hover {
                        color: $goz-white;
                        border-color: rgba($goz-white, 0.6);
                        transition: 200ms;
                    }

player 2:

<img src="/images/black-polygon.svg" alt="player-2_badge">
<pre id="char2" class="chardrop" ondrop="drop(event, this)" ondragover="event.preventDefault()"
    ondragover="return false">
Drag your
character here!
</pre>
<button id="removeChar2">Remove</button>



                    [id$='new'] {
                        width: 207px;
                        top: -175px;
                        right: 4px;
                        position: absolute;
                    }


                    #char2 {
                        position: relative;
                        bottom: 145px;
                        right: 0;
                        font-family: 'Simonetta', serif;
                        color: rgba($goz-white, 0.8);
                        @include calcRem(20);
                        background: none;
                        border: none;
                    }

                    #removeChar2 {
                        display: block;
                        position: absolute;
                        bottom: 250px;
                        left: 174px;
                        background: rgba($goz-black, 0.8);
                        font-weight: bold;
                        color: rgba($goz-white, 0.8);
                        font-family: 'Cinzel Decorative', serif;
                        font-weight: bold;
                        width: 100px;
                        height: 35px;
                        border: 1px solid rgba($goz-white, 0.4);
                        transition: 500ms;
                        cursor: pointer;
                        display: none;
                    }

                    #removeChar2:hover {
                        color: $goz-white;
                        border-color: rgba($goz-white, 0.6);
                        transition: 200ms;
                    }
*/

