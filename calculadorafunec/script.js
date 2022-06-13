function inserir(num){
    document.form.textview.value = document.form.textview.value + num;
    
}
function igual(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview.value = eval(exp);
}
}
function apagar(){
    document.form.textview.value = "";
}
function voltar(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}