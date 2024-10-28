function toggleShape(card) {
    card.classList.toggle('clicked');
}

function toggleShape(card) {
    card.classList.toggle('clicked');
    const infoContent = card.querySelector('.info-content');
    if (card.classList.contains('clicked')) {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    }
}




