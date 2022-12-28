function largestEven()
{
    let num = document.getElementById("input_b1").value;
    let arr = num.split(" ");
    arr = arr.map(function(arr) {
        return Number(arr)
    })
    let res = -1;
    for(let i = 0; i < arr.length; i++)
    {
        if((arr[i]%2 === 0) && (arr[i] >= res))
        {
            res = arr[i];
        }
    }
    window.alert("The result is: " + res);
}
function fiboNum(num)
{
    if(num < 0) return -1
	if(num == 0 || num == 1)
	{
		return 1;
	}
	return fiboNum(num - 1) + fiboNum(num - 2);
}
function handlerFibo() {
    let num = document.getElementById("input_b2").value;
    let res = fiboNum(num);
    window.alert("The result is: " + res);
}