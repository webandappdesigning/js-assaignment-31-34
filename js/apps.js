         // ----------- Chapter 31-34 Date Methods ----------

         "QUESTION NO:01"
         // 1. Write a program that displays current date and time in your browser.
                "ANSWER NO:01"
         // // let today = new Date()
         // // document.write(today)
         
         
                "QUESTION NO:02"
         // 2. Write a program that alerts the current month in words. For example December.
                 "ANSWER NO:02"
         // // let now = new Date()
         // // let month = ["January", "February", "March", "April", "May", "June",
         // //   "July", "August", "September", "October", "November", "December" ]
         // // let index = now.getMonth()
         // // let current = (month[index])
         // // document.write("Current month: "+current+"<br>")
         
         
                "QUESTION NO:03"
         // 3.  Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
                "ANSWER NO:03"
         // // let now = new Date()
         // // let days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
         // // let today = now.getDay();
         // // let index = days[today]
         // // let splice = index.slice(0,3);
         // // document.write("Today is: "+splice+"<br>")
         
          
                "QUESTION NO:04"
         // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
                "ANSWER NO:04"
         // // let now = new Date(); 
         // // let today = now.getDay();
         // // if (today === 6 || today === 0) {  // 6 = Saturday, 0 = Sunday
         // //    alert("It’s Fun day");
         // // }
         
         
               "QUESTION NO:05"
         // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
                "ANSWER NO:05"
         // // let now = new Date()
         // // let today = now.getDate()
         // // if (today<15){
         // //     alert("First fifteen days of the month")
         // // }
         // // else{
         // //     alert("Last days of the month")
         // // }
         
         
                "QUESTION NO:06"
         // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. 
         // Use any variable you like to represent the Date object
                "ANSWER NO:06"
         // // let now = new Date()
         // // document.write("Current Date: "+now+"<br>")
         // // let nowmillisec = now.getTime()
         // // let domsday = new Date("1 jan 1970")
         // // let domsdaymillisec = domsday.getTime()
         // // let difference = nowmillisec - domsdaymillisec
         // // // let round = Math.round(difference/(1000))
         // // // document.write("Elapsed milliseconds since January 1,1970 "+round+"<br>")
         // // // let domsdayminute = round*60
         // // // document.write("Elapsed minutes since January 1,1970 "+domsdayminute+"<br>")
         
         
               "QUESTION NO:07"
         // 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
                "ANSWER NO:07"
         // // // let today = new Date()
         // // // let hour = today.getHours()
         // // // if (hour <= 12){
         // // //     alert("AM")
         // // // }
         // // // else {
         // // //     alert("PM")
         // // // }
         
         
                "QUESTION NO:08"
         // 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
                "ANSWER NO:08"
         // // // let laterDate = new Date("31 dec 2020")
         // // // document.write(laterDate+"<br>")
         
         
                "QUESTION NO:09"
         // 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
         // Note: 1st Ramadan was on June 18, 2015 
                 "ANSWER NO:09"
         // // let now = new Date("4 march 2025")
         // // let nowmilliseconds = now.getTime()
         // // let ramzan = new Date("18 june 2015")
         // // let ramzanmilliseconds = ramzan.getTime()
         // // let difference = nowmilliseconds - ramzanmilliseconds
         // // let year = (Math.round(difference /(1000*60*60*24*365)))
         // // let month = year*12
         // // let days = month*30
         // // document.write(year+" years have been passed since Ramzan,2015 "+"<br>")
         // // document.write(month+" months have been passed since Ramzan,2015 "+"<br>")
         // // document.write(days+" days have been passed since Ramzan,2015 "+"<br>")
         
         
               "QUESTION NO:10"
         // 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
                "ANSWER  NO:10"
         // let referenceDate = new Date("Dec 5, 2015 22:50:16");
         // let referenceDatemillisec = referenceDate.getTime()
         // let beginningOf2015 = new Date("Jan 1, 2015 00:00:00");
         // let beginningOf2015millisec = beginningOf2015.getTime()
         // let differenceInMillisec = referenceDatemillisec - beginningOf2015millisec
         // let differenceInSeconds = (Math.floor(differenceInMillisec / 1000))
         // document.write("On refrence date "+referenceDate+"<br>")
         // document.write(differenceInSeconds+" seconds had passed since the beginning of 2015"+"<br>")
         
         
               "QUESTION NO:11"
         // 11. Create a Date object for the current date and time.
         // Extract the hours, reset the date object an hour ahead and finally
         // display the date object in your browser.
                "ANSWER NO:11"
         // let now = new Date()
         // let hour = now.getHours()
         // let hourago = hour-1
         // document.write("Current date: "+ now + "<br>")
         // now.setHours(hourago);
         // document.write("1 hour ago,it was " + now+"<br>")
         
         
               "QUESTION NO:12"
         // 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
                "ANSWER NO:12"
         // let now = new Date()
         // let year = now.getFullYear()
         // let yearago = year-100
         // document.write("Current date: "+ now + "<br>")
         // now.setFullYear(yearago);
         // document.write("100 year back, it was " + now+"<br>")
         
         
               "QUESTION NO:13"
         // 13. Write a program to ask the user about his age.
         // Calculate and show his birth year in your browser.
                "ANSWER NO:13"
         // let age = +prompt("Enter your age")
         // let now = new Date()
         // let today = now.getFullYear()
         // let birthYear = today - age
         // document.write("Your age is: "+age+"<br>")
         // document.write("Your birth year is: "+birthYear+"<>br")
         
         
               "QUESTION NO:14"
         // 14. Write a program to generate your K-Electric bill in your browser.
         // All the amounts should be rounded off to 2 decimal places. 
         // Display the following fields:
         // a. Customer Name
         // b. Current Month
         // c. Number of units
         // d. Charges per unit
         // e. Net Amount Payable (within Due Date)
         // f. Late Payment Surcharge
         // g. Gross Amount Payable (after Due Date)
         // Where,
               "ANSWER NO:14"
         // let billName = "K-Electric Bill"
         // document.write("<h1>"+billName+"</h1>")
         // let customerName = prompt("Enter your name: ")
         // let formatName = customerName.charAt(0).toUpperCase()+customerName.slice(1).toLowerCase()
         // document.write("Customer Name: " + formatName+ "<br>")
         // let now = new Date()
         // let monthIndex = now.getMonth()
         // let months =["January", "February", "March", "April", "May", "June",
         //       "July", "August", "September", "October", "November", "December" ]
         // let currentMonth = months[monthIndex] 
         // document.write("Current Month: " + currentMonth+"<br>")
         // let numberOfunits = parseFloat(prompt("Enter your units: "));
         // document.write("Number of units: " + numberOfunits+"<br>")
         // let chargesperunit = 50
         // document.write("Charges per unit: " + chargesperunit+"<br>")
         // let NetAmount = numberOfunits * chargesperunit
         // document.write("Net Amount Payable (within Due Date): "+NetAmount+"<br>")
         // let LatePaymentSurcharge = 500
         // document.write("Late Payment Surcharge: " + LatePaymentSurcharge+"<br>")
         // let GrossAmount = NetAmount + LatePaymentSurcharge
         // document.write("Gross Amount Payable (after Due Date): " + GrossAmount+"<br>")
              
              
                  //........ CHAPTER 31-34 COMPLETE.........