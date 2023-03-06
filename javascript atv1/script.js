const tempo_atv = () => {
    let segundo = parseInt(prompt('Digite um número'));
    const minuto = segundo / 60;
    const hora = minuto / 60;

    document.querySelector('.info').innerText = `isso dá ${segundo} segundos, ${minuto} minutos e ${hora} horas`
}

tempo_atv();