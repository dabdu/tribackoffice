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

export { getDateFromCreated };
