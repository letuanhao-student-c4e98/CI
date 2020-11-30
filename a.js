// A. Problem Solving (30’) (Nhiều cách giải càng tốt)
// 1. Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, khoảng cách giữa các số bằng nhau (và tất nhiên là 0 và số n-1 cũng ở cạnh nhau). Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20
// Viết hàm findOppositeNumber(n, inputNumber) cho trước 2 tham số đầu vào là n và inputNumber tồn tại trong dãy. Tìm số đối diện với số inputNumber đó (0 <= inputNumber <= n - 1)
// Kiểm tra Test case sau khi làm, ví dụ như hình dưới mô tả 10 số nguyên liên tiếp từ 0 đến 9.
// Test case 1: findOppositeNumber(10, 2) trả về 7
// Test case 2: findOppositeNumber(10, 6) trả về 1
// Note: Không tạo mảng
function findOppositeNumber(n,inputNumber){
    if( n<4 || n%2!=0 || n>20 || parseInt(n)!= n ){
        console.log("n không phải số nguyên dương chẵn nằm trong khoảng từ 4 đến 20") 
    }

    else{
        if(inputNumber > n){
            console.log("inputNumber không được lớn hơn hoặc bằng n ") 
        }
        else{
            if(inputNumber >= n/2){
                console.log(inputNumber-n/2) 
            }
            else
                console.log(n/2+inputNumber) 
        }
    }
}

findOppositeNumber(10,2)
findOppositeNumber(10,6)

// 2. Viết 1 hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xen kẽ cùng vị trí vị trí của 2 chuỗi với nhau.
// Test case sau khi làm xong:
// Test case 1: merge2String(“abc”, “123”) trả về a1b2c3
// Test case 2: merge2String(“abc”, “0123”) trả về a0b1c23
// Test case 3: merge2String(“abcd”, “123”) trả về a1b2c3d
function merge2String (string1,string2){

    string1 = string1.split("")

    string2=string2.split("")

        let flag = true
        let length=string1.length
        let merge=""
        let i

        if(string1.length>=string2.length){
            length=string2.length
            flag=false
        }
        for(i=0 ;i<length ; i++){
            merge=merge+string1[i]+string2[i]
        }
        if(flag){
            for(i=length;i<string2.length;i++){
             merge=merge+string2[i]
            }
        }
        else{ for(i=length;i<string1.length;i++){
            merge=merge+string1[i]
        }}
        return merge
    }

console.log(merge2String("abc","123"))
console.log(merge2String("abc", "0123") )
console.log(merge2String("abcd", "123"))