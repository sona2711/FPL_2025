const drawCalendar = (selector)=>{

    const container = document.querySelector(selector);
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let current_month = current_date.getMonth();
    
    const getPrevDates = (dayIndex, year, month)=>{
        let acc = [];
        for (let i = dayIndex; i > 0; i--) {
            const prevDate = new Date(year, month, 0 - i + 1);
            const day = document.createElement("div");
            day.textContent = prevDate.getDate();
            day.setAttribute("data_id", i);
            day.classList.add('day','d-flex-center','inactive');
            acc.push(day);
        }
        return acc;
    };

    const getNextDates = (dayIndex, year, month)=>{
        let acc = [];
        for (let i = 1; i <= dayIndex; i++) {
            const nextDate = new Date(year, month + 1, i);
            const day = document.createElement("div");
            day.textContent = nextDate.getDate();
            day.classList.add('day','d-flex-center','inactive');
            acc.push(day);
        }
        return acc;
    };

    const getCurrentDates = (currentDate,year,month)=>{
        let acc = [];
        const today = new Date();
        for(let i = 1; i <= currentDate; i++){
            const day = document.createElement("div");
            day.textContent = i;
            day.classList.add('day','d-flex-center');

            if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                day.classList.add('current-date');
            }
            acc.push(day);
            }
         return acc   
    };

    const getDate = (year, month)=>{
        let days = [];
        const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let year_month = `${monthsList[month]}  ${year}`;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const lastDay = new Date(year, month + 1, 0).getDay();


        days.push(...getPrevDates(firstDay,year, month));
        days.push(...getCurrentDates(daysInMonth, year, month));
        days.push(...getNextDates(lastDay,year, month));
            

        return {
            year_month,
            days,
        }
    }
   
    const getPrevMonth = () => {
        current_month--;
        if (current_month < 0) {
                current_month = 11;
                current_year--;
        }
        getDate(current_year, current_month);
        render();
    };

    const getNextMonth = () => {
        current_month++;
        if (current_month > 11) {
          current_month = 0;
          current_year++;
        }
        getDate(current_year, current_month);
        render();
    }; 
            
   

   


    const render = () => {
        const currentDate = getDate(current_year,current_month);
        container.innerHTML = `
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
        
        `

        const days_wrapper = document.querySelector('#days-wrapper')
        days_wrapper.append(...currentDate.days);
        document.querySelector('.prev-btn').addEventListener('click', getPrevMonth);
        document.querySelector('.next-btn').addEventListener('click', getNextMonth);
    }

    render()
}
