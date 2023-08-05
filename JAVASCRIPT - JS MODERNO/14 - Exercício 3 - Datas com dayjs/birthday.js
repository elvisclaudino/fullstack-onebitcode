const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day") + 1;

  console.log(`Sua idade é ${ageInYears} anos
Seu próximo aniversário será em ${nextBirthday.format("DD/MM/YYYY")}
Faltam ${daysToNextBirthday} dias para você completar ${ageInYears + 1} anos`);
}

birthday("2003-10-06");
