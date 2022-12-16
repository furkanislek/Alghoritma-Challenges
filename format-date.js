 /* 

 Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 

 Input = "12/31/2014"
 Output = "20141231"

 */

 function formatDate(userDate) {
    var dateArr = userDate.split('/');
    if (dateArr[0].length == 1) dateArr[0] = '0' + dateArr[0];
    if (dateArr[1].length == 1) dateArr[1] = '0' + dateArr[1];
    return dateArr[2] + dateArr[0] + dateArr[1];
  }

  console.log(formatDate("12/31/2014"));