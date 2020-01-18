function calc_total(){
    let qtd = parseInt(document.getElementById('cQtd').value)
    let tot = qtd * 1500

    document.getElementById('cTot').value = tot
}