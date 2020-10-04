const level1 = () => {
    const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    ]
    
    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    ]
    
    const arr = [0, 1, 2, 3, 4, 5, 6, 7];
    //3
    console.log(arr.length);
    //4
    console.log(arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length -1])
    
    const mixedDataTypes = ['String', 1, 1.0, true, false, 2, 3, { 'test': 'test'}]
    console.log(arr.length);

    //6
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IMB', 'Oracle', 'Amazon']

    console.log(itCompanies.length)
    console.log(
      itCompanies[0],
      itCompanies[Math.floor(itCompanies.length / 2)], 
      itCompanies[itCompanies.length -1])

    //10 
    itCompanies.map((company) => console.log(company))
    
    //11 
    //itCompanies = itCompanies.map((s) => s.toUpperCase())
    console.log(itCompanies)

    //12
    //console.log(`${itCompanies.splice(0, itCompanies.length-1).join(', ')} and ${itCompanies[itCompanies.length -1]} are big IT companies`)
    
    //13
    if(itCompanies.includes('Microsoft') != -1) {
      console.log(itCompanies.find(el => el == 'Microsoft'))
    } else {
      console.log('Not found')
    }

    //14
    console.log(itCompanies.find((el) => el.split('o').length > 1))

    //15
    itCompanies.sort()
    console.log(itCompanies)

    //16
    itCompanies.reverse()
    console.log(itCompanies)

    //17 & 18
    console.log(itCompanies.slice(0, 3))
    console.log(itCompanies.slice(itCompanies.length-3))

    //19
    console.log(itCompanies.slice(itCompanies.length/2, itCompanies.length/2+1))

    //20 - 23
    //console.log(itCompanies.shift())
    //console.log(itCompanies.pop())
    console.log(itCompanies[Math.floor(itCompanies.length / 2/1)])

    //24
    itCompanies = []
    console.log(itCompanies)
  }

  level1();