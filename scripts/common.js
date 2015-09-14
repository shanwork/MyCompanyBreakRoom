function blinker(beverage, blinker) {
    $(beverage).fadeIn();
    for (var count = 0; count < blinker; count++) {
        $(beverage).fadeOut(500);
        $(beverage).fadeIn();

    }
}
// common functions
function hideBeverageCup(beverage, blinker) {
    $(beverage).fadeOut();

}
/*
Expand collapse functions.... 
- the section to expand and collapse(show and hide) and the control which toggles this
#####
function1:toggleVisibility Each section-visibility controller pair
parameters  
 toggleButton -  visibility controller html element
 controlToToggle - section html element whose visibility is to be toggled
 expandText - assume all visibility controllers have part of their label to be 'expand/collapse' or '+/-' 
 (the best way to match the toggle button is the name, because 
    - that is the best indicator of visibility status and it has to change, 
    - id or css class name cannot be used as a match, since 
    - id will not indicate  the visibility
    - class keeps changing and the logic to use this for the toggle would be more coding )
*/
function toggleVisibility(toggleButton, controlToToggle, expandText, collapseText) {
    if (toggleButton.val().indexOf(collapseText) >= 0) {
        toggleButton.val(toggleButton.val().replace(collapseText, expandText));
        toggleButton.removeClass('toggleClassExpanded').addClass('toggleClassCollapsed');
        controlToToggle.fadeOut(500);
    }
    else if (toggleButton.val().indexOf(expandText) >= 0) {
        toggleButton.val(toggleButton.val().replace(expandText, collapseText));
        toggleButton.removeClass('toggleClassCollapsed').addClass('toggleClassExpanded');
        controlToToggle.fadeIn(500);
    }
}
/*
 show/hide all
 toggles the 
 toggleVisibilityAllDOM
 using DOM traversal..
*/
function toggleVisibilityAllDOM(parentDiv, show, expandText, collapseText, charReplaced, charToReplace) {
     
    $(parentDiv).children().each(function () {

        if ($(this).val().indexOf(expandText) < 0 && $(this).val().indexOf(collapseText) < 0) {
            if (show == 'true') {
                $(this).fadeIn(500);
            }
            else {
                $(this).fadeOut(500);
            }
        }
        else {
            if (show == 'true') {
                $(this).val($(this).val().replace(expandText, collapseText));
                $(this).removeClass('toggleClassCollapsed').addClass('toggleClassExpanded');
            }
            else {
                $(this).val($(this).val().replace(collapseText, expandText));
                $(this).removeClass('toggleClassExpanded').addClass('toggleClassCollapsed');
            }
            // getting fancy e.g. >>> Collapse All << => <<< Expand All >>> :)
            //if (charReplaced != '' && charToReplace != '')  
            //    $(this).val($(this).val().replaceAll(charReplaced,charToReplace));
        }
    });

}
