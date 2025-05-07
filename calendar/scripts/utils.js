export const getPrevDates = (dayIndex, year, month)=>{
    let acc = [];
    for (let i = dayIndex; i > 0; i--) {
        const prevDate = new Date(year, month, 0 - i + 1);
        const day = document.createElement("div");
        day.textContent = prevDate.getDate();
        day.classList.add('day','d-flex-center','inactive');
        acc.push(day);
    }
    
    return acc;
};

export const getNextDates = (dayIndex, year, month)=>{
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

export const getCurrentDates = (currentDate,year,month)=>{
    let acc = [];
    const today = new Date();

    for(let i = 1; i <= currentDate; i++){
        const day = document.createElement("div");
        day.textContent = i;
        day.setAttribute("data_id", `${year}-${month + 1}-${i}`);
        day.classList.add('day','d-flex-center');

        if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
            day.classList.add('current-date');
        }
        acc.push(day);
    }

     return acc   
};

export const getDate = (year, month)=>{
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







