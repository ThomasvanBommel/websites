// Initialization
window.onload = function(){
    focusInput();
};

// Change so if form is null, create it
window.addEventListener("keydown", function(e){
    var form = lastFormElement();
    var span = form ? form.getElementsByTagName("span")[0] : null;
    var input = form ? form.getElementsByClassName("input")[0] : null;
    var id = form ? form.getElementsByClassName("id")[0] : null;
    
    if(input){
        if(e.key == "Enter"){
            var id_value = Math.round(Math.random() * 8999999 + 1000000);
            
            input.value = span.innerHTML;
            id.value = id_value;
            form.submit();

            e.preventDefault();
        }
        
        focusInput(form, span);
    }
});

/* (void) Set the input focus to the last form elements input
 * form: (optional) pass form element to focus on (Less expensive IF you have already run lastFormElement function)
 * span: (optional) pass span element */
function focusInput(form, span){
    var form = form ? form : lastFormElement();
    var span = span ? span : form ? form.getElementsByTagName("span")[0] : null;
    
    if(form)
        if(span)
            if(span != document.activeElement)
                span.focus();
}

// (object | null) Get the last <form> element
function lastFormElement(){
    var form_elements = document.getElementsByTagName("form");
    var index = form_elements.length - 1;

    if(index >= 0)
        return form_elements[index];
    
    return null;
}