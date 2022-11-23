function Addtable(){
    if (document.getElementById('btn2').disabled==true){
        const table = document.createElement('table');
        table.setAttribute('id','Mytable');
        document.querySelector('#buttons').appendChild(table);
        table.classList.add('tablestyle');
        document.getElementById('btn2').disabled=false;
        document.getElementById('btn3').disabled=false;
        document.getElementById('count').disabled=false;
    }
    else{
        document.getElementById('btn1').disabled=true;
        alert('Таблица уже существует');
    }

}
function AddRow(){
    const row1 = document.createElement('tr');
    const table = document.getElementById('Mytable');
    let count = document.getElementById('count_hidden');
    const count1 = parseInt(count.value) + 1;
    count.value=count1;
    row1.classList.add('rowstyle');
    row1.setAttribute('id','MyRow'+count1);

    const td1=document.createElement('td');
    td1.innerText=count1;
    td1.classList.add('tdstyle');

    const td2=document.createElement('td');
    td2.textContent='значение';
    td2.classList.add('tdstyle');

    row1.appendChild(td1);
    row1.appendChild(td2);

    table.appendChild(row1);
}
function RemoveRow(){
    const value=document.getElementById('count').value;
    document.getElementById('MyRow'+value).remove();
}