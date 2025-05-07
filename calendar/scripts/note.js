export class Note {
    noteList = [];
    constructor(){
        this.noteList = JSON.parse(localStorage.getItem("noteList") || "[]");
    }

    saveNote(note = "", data_id){
        const index = this.noteList.findIndex(item => item.data_id === data_id);
        if(!note) return false;
        if (index !== -1) {
            if (!Array.isArray(this.noteList[index].notes)) {
                this.noteList[index].notes = [];
            }
            this.noteList[index].notes.push(note);
        } else {
            this.noteList.push({data_id:data_id, notes: [note]});
        }

        localStorage.setItem("noteList",JSON.stringify(this.noteList) );

    }

    getNote(data_id){
        const entry = this.noteList.find(item => item.data_id === data_id);
        return entry ? entry.notes: [];
    }

    removeNote(data_id, note){
        const index = this.noteList.findIndex(item => item.data_id === data_id);
        if (index !== -1) {
            const noteIndex = this.noteList[index].notes.indexOf(note);
            if (noteIndex !== -1) {
                this.noteList[index].notes.splice(noteIndex, 1);
                if (this.noteList[index].notes.length === 0) {
                    this.noteList.splice(index, 1);
                }
            }
        }
        localStorage.setItem("noteList",JSON.stringify(this.noteList));
        return this.noteList;
    }


    
    clearNotes() {
        localStorage.removeItem("noteList");
        this.noteList = [];
    }

}