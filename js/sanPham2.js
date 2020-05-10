function taoDTSP(hinhAnh,ten,giaGoc,phanTram,khuVuc,id){
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTram = phanTram;
    sanPham.khuVuc = khuVuc;

    
    // them id neu dau vao k co id
    if (id != null){
        sanPham.id=id;
    }
    else{
         sanPham.id = taoid();
    }

    sanPham.tinhGiaban = function(){
        var giaBan = this.giaGoc*(1-this.phanTram);
        return giaBan;
    }
  
    sanPham.fromJSON = function(json){
        var doiTuongdaydu= new Object();
        var doiTuong = JSON.parse(json);

        var doiTuongdaydu = taoDTSP(doiTuong.hinhAnh,doiTuong.ten,doiTuong.giaGoc,doiTuong.phanTram,doiTuong.khuVuc,doiTuong.id);
        return doiTuongdaydu;
    }

    return sanPham;
}

function dtsanghtml(sanPham){
    var html = "";
    //chuyển dt thamh html
    html= html+"<div class='sanpham'>";
    html= html+"    <div class='hinhanhsanpham'>";
    html= html+`        <div class='phan-tram'>-${sanPham.phanTram*100}%</div>`;
    html= html+"        <img src='"+sanPham.hinhAnh+"'>";
    html= html+"    </div>";
    html= html+"    <h1 class='sanphamten'>"+sanPham.ten+"</h1>";
    html= html+"    <p class='sanphamgiagoc'>"+sanPham.giaGoc+' đ'+"</p>";
    html= html+`    <p class='giaban'>${sanPham.tinhGiaban()}đ</p>`;
    html= html+`   <p class='khuvuc'>${sanPham.khuVuc}</p>`;
    html= html+ `<button onClick="onclickduavaogiohang('${sanPham.id}')" class= "dat">Thêm vào giỏ hàng</button>`;
    html= html+"</div>";

    return html;
}

function dsdtsanghtml(danhsachsanpham){
    var htmltong="";
    for( var i=0;i<danhsachsanpham.length;i++){
        var sanpham = danhsachsanpham[i];
        var html = dtsanghtml(sanpham);
        htmltong=htmltong+html;
    }
    return htmltong;
}
function tryxuatSpID(id){
    var jsondanhSanhSanPham = localStorage.getItem("danhSachSanPham");
    var danhSachSanPham = JSON.parse(jsondanhSanhSanPham);


    for (var i= 0;i < danhSachSanPham.length;i++){
        var sanPhamHienTai= danhSachSanPham[i];
        if (sanPhamHienTai.id == id ) {
            return sanPhamHienTai;
        }
    }
}  