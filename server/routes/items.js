// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// @route GET /api/items
// @desc Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route POST /api/items
// @desc Add a new item
router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route PUT /api/items/:id
// @desc Update an item
router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        item.name = req.body.name;
        item.description = req.body.description;
        item.found = req.body.found;

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route DELETE /api/items/:id
// @desc Delete an item
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        await item.remove();
        res.json({ message: 'Item removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
