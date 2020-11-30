// B. Code Challenge (60’)
// Xây dựng trang web "Dự đoán kết quả xổ số". Với các chức năng sau:
// Người chơi phải đoán số trong một khoảng cho phép và nhập vào ô dự đoán, nếu nhập sai hiện thông báo nhập lại
// Người chơi được đoán tối đa 3 lần
// Hiện kết quả đúng nếu người chơi chọn sai số đã dự đoán
// Hiện kết quả trúng thưởng nếu người chơi chọn đúng số
// Giao diện đẹp và có responsive để có thể chơi thử trên smartphone là một điểm cộng
// Có link trên github page hoặc link bất kỳ có thể truy cập càng tốt.
function lucky(){
    let header = document.getElementById("header")
    let content = document.getElementById("content")
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let ketqua = document.getElementById("ketqua").textContent
    let array = [1,2,3,4,5,6,7,8,9,10]
    let kiemtra = 0
    
    btn.addEventListener('click', function(){
        let input_value = document.getElementById("input").value
        let arrayrandom = array[Math.floor(Math.random()*array.length)]
        
        if(input_value<1 || input_value>10 || isNaN(input_value)){
            alert("nhập lại số từ 1 đến 10")
            document.getElementById("input").value = ""
            document.getElementById("ketqua").textContent="KẾT QUẢ"
        }

        else{

        if(input_value != arrayrandom){
            document.getElementById("ketqua").textContent = `Sai rồi, kết quả là: `+arrayrandom
            kiemtra = kiemtra + 1
            if(kiemtra == 3){
                content.remove()
                header.insertAdjacentHTML('beforeend', `<div id="end">Bạn đã hết cơ hội, chúc may mắn lần sau</div>`)
            }
        }
        else {document.getElementById("ketqua").textContent = "Chúc mừng bạn đã trúng thưởng"
        kiemtra = 0
    }
        document.getElementById("input").value = ""
        // console.log("kiemtra",kiemtra)
    }
    })
    
}

lucky()