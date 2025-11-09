# creating cabin

- npm i react-form-hook.

- add that register syntax on every field, so now what it will do is to add onBlur and onChange on that field. also now we do not have to manually make then controlled elements.

- and in handlesubmit fuction we need to pass our own function that we need to execute when the form gets submitted, so we create onSubmit function for it, and also data is automatically passed in it.

- also to reset form, i.e. remove all entered values we use type="reset" on that cancel button.

- reset fn in usemutation resets the form.

- in register, we can pass a second argument a object of validations.

- read commments in code.