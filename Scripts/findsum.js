function findsum(input)
{
    if(input === 'three')
    {
        console.log("findsum(1,2,3): ",add(1,2,3));
    }
    else if(input === 'ten')
    {
        console.log("findsum(1,2,3,4,5,6,7,8,9,10): ",addTen(1,2,3,4,5,6,7,8,9,10));
    }

};

function add()
{
    var sum=0;
    console.log();
    for(var i=0;i<arguments.length;i++)
    {
        sum+= arguments[i];
    }
    return sum;
}
function addTen()
{
    var sum=0;
    console.log();
    for(var i=0;i<arguments.length;i++)
    {
        sum+= arguments[i];
    }
    return sum;
}