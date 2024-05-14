// class SortingUtilities {
export function sortByDate(a, b) {
  const regex = /(?:\?|([\d]{1,2}))?-?(?:\?|(\w{3}))?-?(\d{2})$/;
  const matchA = a.Date.match(regex);
  const matchB = b.Date.match(regex);
  const dateA = new Date(buildDateString(matchA));
  const dateB = new Date(buildDateString(matchB));

  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else if (dateA === dateB) {
    return 0;
  } else {
    return -1;
  }
}

function buildDateString(matches) {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };
  if (matches === null) {
    return '2000';
  }
  if (matches[3] === undefined) {
    return '2000';
  } else if (matches[2] === undefined) {
    return `20${matches[3]}`;
  } else if (matches[1] === undefined) {
    return `20${matches[3]}-${months[matches[2]]}`;
  } else {
    return `20${matches[3]}-${months[matches[2]]}-${matches[1]}`;
  }
}

// }
