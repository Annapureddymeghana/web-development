const noteTextarea = document.getElementById('note-textarea');
const saveNoteButton = document.getElementById('save-note');
const noteList = document.getElementById('note-list');

saveNoteButton.addEventListener('click', () => {
    const noteText = noteTextarea.value.trim();

    if (noteText) {
        const li = document.createElement('li');
        li.textContent = noteText;
        noteList.appendChild(li);

        noteTextarea.value = '';
    }
});