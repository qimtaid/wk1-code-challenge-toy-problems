function calculateNetSalary(grossSalary, benefits) {
    // Define tax rates and thresholds
    const taxRates = {
        '0-24000': 0.1,
        '24001-32333': 0.15,
        '32334-40324': 0.2,
        '40325-48315': 0.25,
        '48316-70000': 0.3,
        '70001-': 0.35
    };

    // Define NHIF and NSSF rates
    const nhifRate = 0.015;
    const nssfRate = 0.06;

    // Calculate gross salary based on benefits
    const totalGrossSalary = grossSalary + benefits;

    // Calculate tax
    let tax = 0;
    for (let range in taxRates) {
        const [min, max] = range.split('-').map(Number);
        if (totalGrossSalary >= min && (totalGrossSalary <= max || max === undefined)) {
            tax = taxRates[range] * totalGrossSalary;
            break;
        }
    }

    // Calculate NHIF deductions
    const nhifDeductions = totalGrossSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = totalGrossSalary * nssfRate;

    // Calculate net salary
    const netSalary = totalGrossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary: totalGrossSalary,
        tax,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Example usage
const grossSalary = parseFloat(prompt("Enter the gross salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

if (!isNaN(grossSalary) && !isNaN(benefits)) {
    const salaryDetails = calculateNetSalary(grossSalary, benefits);
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Tax:", salaryDetails.tax);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
