var today = new Date();

var thisYear = today.getFullYear();
var thisMonth = today.getMonth() + 1;

const thisYaerAndMonth = thisYear + " 년 " + thisMonth + " 월";


const CreateCalender = () => {
  var today = new Date();

  var thisYear = today.getFullYear();
  var thisMonth = today.getMonth() + 1;

  const prevLast = new Date(thisYear, thisMonth - 1, 0);
  const thisLast = new Date(thisYear, thisMonth, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }
  const dates = prevDates.concat(thisDates, nextDates);

  return dates;
};
export default {
  thisYaerAndMonth,
  CreateCalender,
};
