export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
}


export function calculateBrand(brand){
    let increment

    switch (brand) {
        case "1":
            increment = 1.3;
            break;
        case "2":
            increment = 1.15;
            break;
        case "3":
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function calculatePlan(plan){
    return(plan === "1") ? 1.20 : 1.50
}

export function formatMoney (amount) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency : "USD",
    })

}