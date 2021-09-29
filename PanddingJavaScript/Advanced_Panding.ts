export class Taazaa
{
    t:any; // any is datatype
    constructor(tax)
    {
        console.log(tax);
        this.t = tax;
    }
    GetTax() : any
    {
        return this.t;
    }
}