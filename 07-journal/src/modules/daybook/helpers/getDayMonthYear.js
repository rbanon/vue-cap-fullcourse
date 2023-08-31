const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octobre",
  "Noviembre",
  "Diciembre",
];

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const getDayMonthYear = (dateString) => {
  const date = new Date(dateString);

  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    yearDay: `${date.getFullYear()}, ${days[date.getDay()]}`,
  };
};

export default getDayMonthYear;
