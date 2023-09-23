function display(value1)
{
    document.getElementById('result').value+=value1
    return value1;
}
function calculate()
{
    let a=document.getElementById('result').value;
    let b=eval(a);
    document.getElementById('result').value=b;
    return b;
}
function Clear_Screen()
{
    document.getElementById('result').value='';
}