const fs = require("fs/promises");
const path = require("path");

const notesDir = path.join(__dirname, "notes");

// Ensure notes directory exists
async function ensureNotesDir() {
    await fs.mkdir(notesDir, { recursive: true });
}

// Add a new note
async function addNote(name, content) {
    try {
        await ensureNotesDir();

        const filepath = path.join(notesDir, `${name}.txt`);

        await fs.writeFile(filepath, content);

        console.log(`Note saved: notes/${name}.txt`);
    } catch (err) {
        console.log("Error while adding note:", err.message);
    }
}

// Read a note
async function readNote(name) {
    try {
        const filepath = path.join(notesDir, `${name}.txt`);

        const data = await fs.readFile(filepath, "utf-8");

        console.log(`--- ${name} ---`);
        console.log(data);
    } catch (err) {
        console.log(`Note not found: ${name}`);
    }
}

// List all notes
async function listNotes() {
    try {
        await ensureNotesDir();

        const files = await fs.readdir(notesDir);

        if (files.length === 0) {
            console.log("No notes found.");
            return;
        }

        console.log("Notes:");

        for (const file of files) {
            if (file.endsWith(".txt")) {

                const filePath = path.join(notesDir, file);

                const stats = await fs.stat(filePath);

                console.log(`${file} (${stats.size} bytes)`);
            }
        }
    } catch (err) {
        console.log("Error while listing notes:", err.message);
    }
}

// Remove a note
async function removeNote(name) {
    try {
        const filepath = path.join(notesDir, `${name}.txt`);

        await fs.unlink(filepath);

        console.log(`Note removed: ${name}`);
    } catch (err) {
        console.log(`Note not found: ${name}`);
    }
}

// Append text to existing note
async function appendNote(name, content) {
    try {
        const filepath = path.join(notesDir, `${name}.txt`);

        await fs.appendFile(filepath, `\n${content}`);

        console.log(`Note updated: ${name}.txt`);
    } catch (err) {
        console.log(`Note not found: ${name}`);
    }
}

// Display statistics
async function statsNotes() {
    try {
        await ensureNotesDir();

        const files = await fs.readdir(notesDir);

        let totalFiles = 0;
        let totalSize = 0;

        for (const file of files) {

            if (file.endsWith(".txt")) {

                const filePath = path.join(notesDir, file);

                const stats = await fs.stat(filePath);

                totalFiles++;
                totalSize += stats.size;
            }
        }

        console.log("Notes Statistics:");
        console.log(`Total Notes: ${totalFiles}`);
        console.log(`Combined Size: ${totalSize} bytes`);

    } catch (err) {
        console.log("Error while fetching stats:", err.message);
    }
}

// Command handling
const command = process.argv[2];
const noteName = process.argv[3];
const content = process.argv[4];

switch (command) {

    case "add":
        addNote(noteName, content);
        break;

    case "read":
        readNote(noteName);
        break;

    case "list":
        listNotes();
        break;

    case "remove":
        removeNote(noteName);
        break;

    case "append":
        appendNote(noteName, content);
        break;

    case "stats":
        statsNotes();
        break;

    default:
        console.log("Invalid command.");
        console.log("Available commands:");
        console.log("add, read, list, remove, append, stats");
}