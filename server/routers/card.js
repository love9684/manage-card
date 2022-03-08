const express = require('express');
const fs = require('fs');

const router = express.Router();

// Creating new task
router.post('/cards', async (req, res) => {
    const cards = loadCards();
    const existingCard = cards.some(ob => ob.number === req.body.number)
    if (existingCard) {
        return res.send({
            resultCode: 'R01',
            resultMessage: 'Card already exist!'
        });
    }
    cards.push({...req.body});
    saveCards(cards);
    res.send({
        resultCode: 'R00',
        resultMessage: 'Successfully saved'
    });
})

// Get cards
router.get('/cards', async (req, res) => {
    const cards = loadCards();
    res.send({
        resultCode: 'R00',
        data: cards
    })
})

// Fetch a card by id
router.get('/cards/:id', async (req, res) => {
    const cards = loadCards();
    const id = +req.params.id;
    const index = cards.findIndex(ob => ob.id === id);
    if (index > -1) {
        return res.send({
            resultCode: 'R00',
            data: cards[index]
        });
    }
    res.send({
        resultCode: 'R02',
        resultMessage: 'No card found!'
    });
})

// Delete a card by id
router.delete('/cards/:id', async (req, res) => {
    const cards = loadCards();
    const id = +req.params.id;
    const index = cards.findIndex(ob => ob.id === id)
    if (index > -1) {
        cards.splice(index, 1);
        saveCards(cards);
        return res.send({
            resultCode: 'R00',
            resultMessage: 'Succesfully deleted!'
        });
    }
    res.send({
        resultCode: 'R02',
        resultMessage: 'No card found!'
    });
})

function saveCards(cards) {
    cards.forEach((card, ind) => {
        card.id = ind + 1
    });
    fs.writeFileSync('./server/cards.json', JSON.stringify(cards, null, 4))
}

function loadCards() {
    try {
        const dataBuffer = fs.readFileSync('./server/cards.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = router