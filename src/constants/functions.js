function getDateFromCreated(createdAt) {
  let temp = createdAt.split("T");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArray = temp[0]?.split("-");
  let newdateDateFormat = `${monthNames[dateArray[1] - 1]} ${dateArray[2]}, ${
    dateArray[0]
  }`;
  return newdateDateFormat;
}
function getWordMonthDate(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArray = date?.split("-");
  let newdateDateFormat = `${monthNames[dateArray[1] - 1]} ${dateArray[2]}, ${
    dateArray[0]
  }`;
  return newdateDateFormat;
}

function covertedTime(time24) {
  const [hours, minutes] = time24.split(":").map(Number);

  if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
    const period = hours >= 12 ? "PM" : "AM";
    const twelveHour = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${twelveHour}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;
    return formattedTime;
  } else {
    return "Invalid time";
  }
}

export { getDateFromCreated, getWordMonthDate, covertedTime };
