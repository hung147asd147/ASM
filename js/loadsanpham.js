// tạo ra danh sách đối tượng
loadsanpham();

function loadsanpham() {

    // 1. lay data tu local
    var data = JSON.parse(localStorage.getItem("danhSachSanPham"));


    if (data == null) { 

        data = taosanphammau();
        // luu lai tren local
        localStorage.setItem("danhSachSanPham", JSON.stringify(data));

    }
    else {
        // them funciton vao
        for (let i = 0; i < data.length; i++) {
            data[i] = taoDTSP(data[i].hinhAnh, data[i].ten, data[i].giaGoc, data[i].phanTram, data[i].khuVuc, data[i].id);
        }
    }

    //3. them vao wed

    var html = dsdtsanghtml(data);
    var nodehienthi = document.getElementById("hienthi");
    nodehienthi.innerHTML = html;
}

function onclickduavaogiohang(id) {
    alert("Sản phẩm được thêm thành công vào giỏ hàng có id: " + id);
    let dataGioHang = new Array();
    dataGioHang = JSON.parse(localStorage.getItem("danhSachGioHang"));

    if (dataGioHang == null)
        dataGioHang = new Array();

    let hang = new Object();
    hang.id = id;
    hang.soluong = 1;

    let vitri = dataGioHang.findIndex(sp => sp.id == id);

    if (vitri >= 0)
        dataGioHang[vitri].soluong++;
    else
        dataGioHang.push(hang);

    localStorage.setItem("danhSachGioHang", JSON.stringify(dataGioHang));

}

function taosanphammau() {
    var danhSachSanPham = new Array();
    var sanPham1 = taoDTSP("https://img-static.tradesy.com/item/24524225/balenciaga-white-speed-men-s-10-sneakers-size-eu-43-approx-us-13-regular-m-b-2-0-960-960.jpg", "Balenciaga", 20000000, 0.2, "Hà Nội");

    var sanPham2 = taoDTSP("https://cdn.shopify.com/s/files/1/0874/4652/products/BLACK_552d7574-ddf8-4287-88a9-7a60335f4c50_1024x.png?v=1569051601", "Yeezy 700", 15000000, 0.3, "Hà Nội");
  
    var sanPham3 = taoDTSP("https://stealsneaker.com/upload/sanpham/adidas-yeezy-boost-350-v2-butter-500x500-8148.jpg", "Yeezy 350", 18000000, 0.1, "Hà Nội")
    
    var sanPham4 = taoDTSP("https://cf.shopee.vn/file/1923f3a18324651bbbcf595ca9a94bb0", "Utraboost", 10000000, 0.4, "Hà Nội")

    for (var i = 0; i < 5; i++) {
        danhSachSanPham.push(sanPham1);
        danhSachSanPham.push(sanPham2);
        danhSachSanPham.push(sanPham3);
        danhSachSanPham.push(sanPham4);
    }

    return danhSachSanPham;
}
