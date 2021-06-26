// module
// создать методы, которые могут быть переиспользованы в других скриптах
// метод - createForm(action, id, className)
// метод - createInput(type, id, className)
// метод - createSelect() // принимает formId из createForm
//

export default function generateForm(data, theme) {
    let form = document.createElement("form");
    let inputs = data.inputs;
    let submits = data.submit;
    let selects = data.selects;
    let textareas = data.textareas;

    form.setAttribute("id", "f1");

    function createsInputs(inputs, theme) {
        inputs.forEach((element) => {
            let formItem = document.createElement("div");
            console.log(element);
            let input = document.createElement("input");
            let label = document.createElement("label");

            input.setAttribute("type", element.type);
            input.setAttribute("id", element.id);
            input.setAttribute("name", element.name);

            label.setAttribute("for", element.id);
            formItem.appendChild(label);
            formItem.appendChild(input);

            label.innerText = element["label-text"];

            formItem.classList.add("form-item");
            input.classList.add("input");
            label.classList.add("label");

            if (element.type === "checkbox") {
                formItem.classList.add("form-item--checkbox");
                formItem.appendChild(input);
                formItem.appendChild(label);
                input.setAttribute("required", true);
            }

            if(element.type === "radio"){
                formItem.classList.add("form-item--radio");
                formItem.appendChild(input);
                formItem.appendChild(label);
                label.innerText = element.value;
                input.removeAttribute("id");
            }

            if (theme === "dark") {
                input.classList.add("dark-input");
                label.classList.add("dark-label");
            } else {
                input.classList.add("light-input");
                label.classList.add("light-label");
            }
            form.appendChild(formItem);
        });
    }

    function createsButtons(buttons, theme) {
        buttons.forEach((button) => {
            let formItem = document.createElement("div");
            let submit = document.createElement("input");

            submit.setAttribute("type", button.type);
            submit.setAttribute("value", button.text);
            submit.setAttribute("type", "submit");

            formItem.classList.add("form-item");
            submit.classList.add("button");

            if (theme === "dark") {
                submit.classList.add("dark-button");
            } else {
                submit.classList.add("light-button");
            }
            formItem.appendChild(submit);
            form.appendChild(formItem);
        });
    }

    function createsSelect(selects, theme) {
        selects.forEach((item) => {
            let formItem = document.createElement("div");
            let select = document.createElement("select");
            select.setAttribute("form", select.form);
            select.setAttribute("required", select.required);
            select.setAttribute("name", select.name);

            formItem.classList.add("form-item");
            select.classList.add("form-select");
            if (theme === "dark") {
                select.classList.add("dark-select");
            } else {
                select.classList.add("light-select");
            }

            formItem.appendChild(select);
            item.options.forEach((el) => {
                let opt = document.createElement("option");
                opt.setAttribute("value", el.value);
                console.log(opt);
                opt.innerText = el.value;
                select.appendChild(opt);
            });
            form.appendChild(formItem);
        });
    }

    // function createsTextarea(textareas, theme){
    //     console.log(textareas);
    //     textareas.forEach(item => {
    //         let textarea = document.createElement('textarea');
    //         let formItem = document.createElement('div');
    //         formItem.classList.add('form-item');

    //         form.appendChild(formItem);
    //         formItem.appendChild(textarea);




        
    //     })
    // }

    createsInputs(inputs, theme);

    createsSelect(selects, theme);
    // createsTextarea(textareas, theme);
    createsButtons(submits, theme);


    if (theme === "dark") {
        form.classList.add("dark-form");
    } else {
        form.classList.add("light-form");
    }

    return form;
}