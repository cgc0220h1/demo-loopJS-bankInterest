function interestCal() {
    let presentValue = document.getElementById('money').value;
    let rate = document.getElementById('interest-rate').value;
    let month = document.getElementById('month-loan').value;
    let futureValue = presentValue;
    for (let index = 1; index <= month; index++) {
        futureValue *= (1 + rate/100);
    }
    document.getElementById('result').innerHTML = "Số tiền lãi của bạn là: " +
        (futureValue - presentValue) + " VND";
}