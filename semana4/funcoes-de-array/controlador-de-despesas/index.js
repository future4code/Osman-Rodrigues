var expCount = 0;
const expObjContainer = [];
const expMountContainer = [];
var expValueCount = 0;

const expGen = () =>{

    const expImg = {
        id:'',
        value: 0,
        type: '',
        desc:''
    };

    let expId = 'expId'+(expCount+1);
    let expValue = document.getElementById('expValue');
    let expType = document.getElementById('expType');
    let expDesc = document.getElementById('expDesc');
    let expTotValue = document.getElementById('expTotValue')

    if(
        expValue.value.trim() === '' ||
        expType.value.trim() === '' ||
        expDesc.value.trim() === ''

        ){
        alert('Algum campo está em branco. Verifique e insira a informação solicitada!')
    }else if(expType.value === 'Selecione um tipo -'){
        alert('Selecione um tipo de despesa válido!')
    }else{
    expImg.id = expId;
    expImg.value += parseInt(expValue.value);
    expImg.type = expType.value;
    expImg.desc = expDesc.value;

    expObjContainer.push(expImg);
    
    expValueCount += expImg.value 
    expCount++

    let expList = document.getElementById('expList');

    const expense = '<li id="expense'+expCount+'">'+
    'Valor R$:'+expImg.value+
    ' | Tipo: '+expImg.type+
    ' | Descrição: '+expImg.desc+
    '</li>';
    
    expMountContainer.push(expense);
    expList.innerHTML = expMountContainer;
    
    expTotValue.innerHTML = '<h1>'+'R$'+expValueCount+'</h1>'


    expValue.value = '';
    expDesc.value = '';
    };  
}

const apFilter = () =>{

    let filterType = document.getElementById('filterType');
    let filterMax = document.getElementById('filterMax');
    let filterMin = document.getElementById('filterMin');

    if(
        filterType.value.trim() === '' ||
        filterType.value.trim() === 'Tipo -'&&
        filterMax.value.trim() === '' &&
        filterMin.value.trim() === ''

        ){
        alert('Nenhum filtro aplicado!')
    }
    else{
        
        if(
            filterType.value.trim() === '' || 
            filterType.value === 'Tipo -' &&
            filterMax.value.trim() === '' 
        ){filterType.value = 'Tipo -'; filterMax.value = 10000}
        else if( 
            filterType.value.trim() === '' || 
            filterType.value === 'Tipo -' &&
            filterMin.value.trim() === ''  
        ){filterType.value = 'Tipo -'; filterMin.value = 0}
        else if(
            filterMax.value.trim() === '' && 
            filterMin.value.trim() === ''  
        ){filterMax.value = 10000; filterMin.value = 0}
        else if(filterMax.value.trim() === ''){filterMax.value = 10000}
        else if(filterMax.value.trim() === ''){filterMin.value = 0}
        
        const imgFilteredArray = expObjContainer.filter(expense =>{
            return expense.type === filterType.value && 
            expense.value <= filterMax.value && expense.value >= filterMin.value ||
            expense.type !== filterType.value && 
            expense.value <= filterMax.value && expense.value >= filterMin.value
        })

        let expList = document.getElementById('expList');

        const mountFilteredArray = imgFilteredArray.map(fExpense=>{
            
            return '<li id="'+fExpense.id+'">'+
            'Valor R$:'+fExpense.value+
            ' | Tipo: '+fExpense.type+
            ' | Descrição: '+fExpense.desc+
            '</li>'
        }); 
        
        expList.innerHTML = mountFilteredArray;

    }
    filterMax.value = ''
    filterMin.value = ''
    filterType.value = 'Tipo -'
}

const clFilter =() =>{
    let expList = document.getElementById('expList');
    expList.innerHTML = expMountContainer
}

