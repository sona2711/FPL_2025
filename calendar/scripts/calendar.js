import { getDate} from "./utils.js";
import { NoteManager } from "./noteManager.js";


export class CalendarApp{
    constructor(selector){
        this.container = document.querySelector(selector);
        this.current_date = new Date();
        this.current_year = this.current_date.getFullYear();
        this.current_month = this.current_date.getMonth();
        this.render();
    }

    getPrevMonth (){
        this.current_month--;
        if (this.current_month < 0) {
                this.current_month = 11;
                this.current_year--;
        }
        this.render();
    };

    getNextMonth(){
        this.current_month++;
        if (this.current_month > 11) {
          this.current_month = 0;
          this.current_year++;
        }
        
        this.render();
    } 
       
    render(){
        const currentDate = getDate(this.current_year,this.current_month);
        const days = currentDate.days;
        this.container.innerHTML = `
        <div class="calendar-wrapper d-flex-center">
            <div class="month-year-wrapper">
                <button class="prev-btn btn">&#8678</button>
                <h2 class="month-year">${currentDate.year_month}</h2>
                <button class="next-btn btn">&#8680</button>
            </div>
            <div class="week-days">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tues</span>
                <span>Wed</span>
                <span>Thurs</span>
                <span>Fri</span>
                <span>Sat</span>
            </div>
            <div id="days-wrapper"></div>
            </div>
            <div id="note-form" class="note-form">
                <button class="close-btn">&times</button><br>
                <div class="input-wrapper"
                    <label for="note" style="color: white;">Add the note</label>
                    <input id="note" placeholder="Enter the text.." required/>
                    <button class="create-btn">Save</button>
                </div>    
                <div class="note-wrapper">
                    <h2>Notes</h2>
                    <div class="note-list"></div>
                </div>
            </div>              
        `;
                        
        const days_wrapper = document.querySelector('#days-wrapper');
        days_wrapper.append(...days);
        document.querySelector('.prev-btn').addEventListener('click', ()=>{this.getPrevMonth()} );
        document.querySelector('.next-btn').addEventListener('click', ()=>{this.getNextMonth()});


        
        setTimeout(() => {
            const days = document.querySelectorAll(".day:not(.inactive)");
            const noteManager = new NoteManager(
                days,
                ".note-form",
                "#note",
                ".close-btn",
                ".create-btn",
                ".note-list"
            );
    
            noteManager.open();
            noteManager.close();
            noteManager.save();
    
    },0);

    }

}


