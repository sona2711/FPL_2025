const {JSDOM} = require('jsdom');
const { getPrevDates,getNextDates,getCurrentDates} = require("../calendar.js");


describe("getPrevDates", ()=>{
    let document;

    beforeEach(()=>{
        document = new JSDOM('<div id="app"></div>').window.document;
        global.document = document;
    })
    
    test("should return the correct number of date elements",()=>{
        const dayIndex = 5;
        const year = 2025;
        const month = 6;

        expect(getPrevDates(dayIndex,year, month)).toHaveLength(dayIndex);
    });

    it('should correctly return previous dates when month is January', () => {
        const result = getPrevDates(2, 2024, 0); 
        const dates = result.map(div => Number(div.textContent));
        
        expect(dates).toEqual([30, 31]);
      });
})

describe("getNextDates", ()=>{
    let document;

    beforeEach(()=>{
        document = new JSDOM('<div id="app"></div>').window.document;
        global.document = document;
    });

    test("Should return empty array when dayIndex is 0",()=>{
        expect(getNextDates(0,2025, 6)).toEqual([]);
    });

})    

describe("getCurrentDates", ()=>{
    let document;

    beforeEach(()=>{
        document = new JSDOM('<div id="app"></div>').window.document;
        global.document = document;
    }),

    test("should create elements with valid day numbers", ()=>{
        const result  = getCurrentDates(31,2025,3);

        result.forEach(div => {
            let dayNumber = Number(div.textContent);
            expect(dayNumber).toBeGreaterThanOrEqual(1);
            expect(dayNumber).toBeLessThanOrEqual(31);
        })

    });


    test("Should create new DOM elements for each day", ()=>{
        const result  = getCurrentDates(31,2025,3);
        const [el1, el2, el3] = result;

        expect(el1).not.toBe(el2);
        expect(el2).not.toBe(el3);
    })

})