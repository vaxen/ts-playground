const cars: string[] = ['ford','toyota','fiat'];


//help to map forEach and reduce
cars.map((car: string): string => {
    return car.toUpperCase();
})

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']