function OuterFunction(a,b)
{
    a+=1;
    b+=1;
    var c=a+b;
    function incrementorPlus()
    {
        c+=1;
        return c;
    }
    c=incrementorPlus();
    console.log(c);
}
OuterFunction(10,20);