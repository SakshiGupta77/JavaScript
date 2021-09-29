module.exports.tax = function computation() //export for access function globally (named function)
{
    return 10.5;
}

module.exports.vat = function () //vat anonymous function  //mosule =>  makes your function globally accessable
{
    return 20.5;
}

function GST()
{
    return 0.23;
}