function getId() {
    var date = new Date();
    // return Math.floor(date.getMinutes() / 20) + 1;
    return Math.floor(date.getMinutes() % 3) + 1;
}