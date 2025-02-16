// Task 1: Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

// Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task 2: Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
};

// Test Data
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// Task 3: Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
};

// Test Data
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4: Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let cost = location === "USA" ? 5 + (weight * 0.5) : 10 + (weight * 0.7);
    if (expedited) cost += 10;
    console.log(`Shipping Cost: $${cost.toFixed(2)}`);
}

// Test Data
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

// Task 5: Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`);
}

// Test Data
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

// Task 6: Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];

const filterHighValueTransactions = (transactions, filterFunction) => {
    let filtered = transactions.filter(filterFunction);
    console.log("Filtered Transactions:", filtered);
};

// Test Data
filterHighValueTransactions(transactions, amount => amount > 1000); 
// Expected output: [1200, 3000, 2200]

// Task 7: Budget Tracker
function createBudgetTracker() {
    let balance = 0;
    return function(amount) {
        balance -= amount;
        console.log(`Current Balance: -$${Math.abs(balance)}`);
    };
}

// Test Data
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

// Task 8: Business Growth Projection (Recursion)
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue.toFixed(2);
    return calculateGrowth(years + 1, revenue * 1.05);
}

// Test Data
console.log(`Projected Revenue: $${calculateGrowth(8, 1000)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000)}`); // Expected output: "Projected Revenue: $6381.41"