function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist){
        throw new Error('grau não identificado')
    }
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32)*9/5
    let degreeSing = 'C'

    if (celsiusExist){
        let updateDegree = Number(degree.toUpperCase().replace("C", ""))
        let formula = celsius => (celsius - 32)*9/5
        let degreeSing = 'F'
    }

    return formula(updateDegree) + degreeSing
    
}
try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
}catch(error){
    console.log(error)
}