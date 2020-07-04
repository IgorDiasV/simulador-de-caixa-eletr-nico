var body = document.querySelector('body');
var tela= document.querySelector('#tela');
var p= document.createElement('p');
var deposito=0;
var estado=0; //0 tela inicial 1 tela de deposito 2 tela de saque 3 tela de saldo  
var saldo = 0;
var saque= 0;
telaInicial();    
const botao1= document.getElementById('1');
const botao2= document.getElementById('2');
const botao3= document.getElementById('3');
const botao4= document.getElementById('4');
const botao5= document.getElementById('5');
const botao6= document.getElementById('6');
const botao7= document.getElementById('7');
const botao8= document.getElementById('8');
const botao9= document.getElementById('9');
const botao0= document.getElementById('0');
const botaoc= document.getElementById('c');
const botaol= document.getElementById('l');
const botaoe= document.getElementById('e');


botao1.onclick= function ()
{
    if(estado==0)
    {
        estado=1;
        depositar(deposito);
    }else if(estado==1)
    {
        deposito=deposito*10 + 1;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 1;
        sacar(saque);
    }
}
botao2.onclick = function ()
{
    if(estado==0)
    {
        estado=2;
        sacar(saque);
    }
    else if(estado==1)
    {
        deposito=deposito*10 + 2;
        depositar(deposito);

    }else if(estado==2)
    {
        saque =saque*10 + 2;
        sacar(saque);
    }
    
}
botao3.onclick=function ()
{
    if(estado ==0)
    {
        tela.innerHTML="Saldo: "+saldo+",00";
        estado=3;
    }
    if(estado==1)
    {
        deposito=deposito*10 + 3;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 3;
        sacar(saque);
    }
}
botao4.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 4;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 4;
        sacar(saque);
    }
}
botao5.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 5;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 5;
        sacar(saque);
    }
}
botao6.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 6;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 6;
        sacar(saque);
    }
}
botao7.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 7;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 7;
        sacar(saque);
    }
}
botao8.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 8;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 8;
        sacar(saque);
    }
}
botao9.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 9;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 9;
        sacar(saque);
    }
}
botao0.onclick = function ()
{
    if(estado==1)
    {
        deposito=deposito*10 + 0;
        depositar(deposito);
    }else if(estado==2)
    {
        saque =saque*10 + 0;
        sacar(saque);
    }
}
botaol.onclick = function ()
{
    if(estado==1)
    {
        deposito=0;
        depositar(deposito);
    }else if(estado==2)
    {
       saque=0;
        sacar(saque);
    }

}
botaoe.onclick = function ()
{
    if(estado==1)
    {
        saldo+= deposito;
        tela.innerHTML="Transacao realizada com sucesso";
        setTimeout(function ()
        {
        telaInicial();},2000)
        deposito = 0 ;
    }else if(estado==2)
    {
        if(saldo<saque)
        {
            tela.innerHTML="Voce nao tem saldo suficiente";
            setTimeout(function ()
            {
                telaInicial();
            },2000)
        }else
        {
            saldo-=saque;
            telaInicial();
        }
    }
}
botaoc.onclick=function ()
{
    telaInicial();
    deposito=0; 
    saque=0;  
}

function telaInicial()
{
    tela.innerHTML="";
    p.innerHTML= "<br/> 1-DEPOSITAR<br/><br/> 2-SACAR<br/> <br/>3-SALDO<br/>"
    tela.innerHTML+= p.innerHTML
    estado=0;
}
function depositar(deposito)
{
    
    tela.innerHTML="Valor do deposito:<br/> "+deposito+",00";
}
function sacar(saque)
{
    tela.innerHTML="Valor do saque:<br/> "+saque+",00";
}