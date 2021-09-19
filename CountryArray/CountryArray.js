const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]

const ArrayOfCountryArray= (countries) =>{
    var Country=[]
    var data=[]
    countries.map((item) =>{
        data.push(item.charAt(0).toUpperCase()+ item.slice(1).toLowerCase())
        data.push(item.substring(0,3));
        data.push(item.length)
        Country.push(data)
        data=[]
    })
   return Country;
}
console.log(ArrayOfCountryArray(countries))