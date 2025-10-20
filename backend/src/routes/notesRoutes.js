import express from 'express';
import { getAllNotes, createNote, getNote, updateNote, deleteNote } from '../controllers/notesControllers.js';

const router = express.Router();

// Read all Note (default)
router.get("/", getAllNotes);

// Create a Note
router.post("/", createNote);

// Read a specific(id) Note
router.get("/:id", getNote);

// Update a specific(id) Note
router.put("/:id", updateNote);

// Delete a specific(id) Note
router.delete("/:id", deleteNote);


export default router;

