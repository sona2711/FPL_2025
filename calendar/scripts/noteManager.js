import {Note} from "./note.js";

export class NoteManager {
    #id = null;
    noteText = "";
    constructor(dayList, selector,input, closeBtn, saveBtn, noteList){
        this.dayList = dayList;
        this.elem = document.querySelector(selector);
        this.input = document.querySelector(input);
        this.closeBtn  = document.querySelector(closeBtn);
        this.saveBtn  = document.querySelector(saveBtn);
        this.noteList = document.querySelector(noteList);
        this.note = new Note();
        
    }

    open(){
        this.dayList.forEach((day) => {
            day.addEventListener("click", (event)=>{
                day.classList.toggle("active");     
                this.elem.style.display = "flex";
                this.#id = event.target.attributes.data_id.value;

                const existingNote = this.note.getNote(this.#id);
            
                if (existingNote) {
                    this.noteList.innerHTML = existingNote.map(note => `
                        <div class="singe-note">
                            <span>${note}</span>
                            <button class ="remove-btn">&times</button>
                        </div>`).join("");
                } else {
                    this.noteList.innerHTML = "";
                }

                this.noteList.querySelectorAll(".remove-btn").forEach(btn => {
                    btn.addEventListener("click", (event) => this.remove(event));
                });
                
            
            });
        });
    }

    close(){
        this.closeBtn.addEventListener("click", ()=>{
            this.elem.style.display = "none";
        });
    }

    save(){
        this.saveBtn.addEventListener("click", ()=>{
            this.noteText = this.input.value.trim();
            this.note.saveNote(this.noteText, this.#id);
            this.noteText = "";
            this.input.value = "";

        });
    }

    remove(event){
        const noteElement = event.target.parentElement;
        console.log(noteElement)
        const noteText = noteElement.querySelector("span").textContent;
        const data_id = this.#id; 
    
        this.note.removeNote(data_id, noteText);
        noteElement.remove();
    }
    
}



