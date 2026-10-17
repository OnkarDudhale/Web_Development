function getTicketNumber(size) {
    let arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function isWinningSum(ticket) {
    return ticket.reduce((acc, ele) => acc + ele, 0)
}
export { getTicketNumber, isWinningSum };
