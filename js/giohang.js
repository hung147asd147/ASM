hienThiGioHang();

function hienThiGioHang() {

    var dataGioHang = docDuLieuLocal("danhSachGioHang"); // array object giohang, moi object id , soluong
    var dataSanPham = docDuLieuLocal("danhSachSanPham"); // array object san pham, full thong tin

    let innerHTML = "";

    for (let i = 0; i < dataGioHang.length; i++) {

        let id = dataGioHang[i].id;

        let vitri = dataSanPham.findIndex(sp => sp.id == id);

        let sanpham = dataSanPham[vitri];

        let soluong = dataGioHang[i].soluong;

        innerHTML += taoNodeGioHang(sanpham, soluong);

    }

    let nodeChuaGio = document.getElementById("giohangmua");
    nodeChuaGio.innerHTML = nodeChuaGio.innerHTML + innerHTML;

    tinhThanhTien();

}

function taoNodeGioHang(sanpham, soluong) {

    let giaban = tinhGiaBan(sanpham.giaGoc, sanpham.phanTram);

    var html = `   <div class="itemgiohang">` +
        `               <div class="hinhAnh">` +
        `                   <img src="${sanpham.hinhAnh}">` +
        `               </div>` +
        `               <p class="ten"> ${sanpham.ten}</p>` +
        `               <div class="gia">` +
        `                   <span class="giagoc">${themChamVaoSo(sanpham.giaGoc)} đ</span>` +
        `                   <span class="giagocban"> ${themChamVaoSo(giaban)} đ</span>` +
        `               </div>` +
        `               <input type="number" class="soluong" value="${soluong}" oninput="onSoLuongThayDoi('${sanpham.id}')">` +
        `               <p class="tongtien">${themChamVaoSo(giaban * soluong)} đ</p>` +
        `               <div class="hanhdong nut-xoa-san-pham" onclick= "onClickXoaSanPham('${sanpham.id}')">` +
        `                   <i class="far fa-trash-alt " ></i>` +
        `          </div>` +
        `          </div>`

    return html;
}

function onClickXoaSanPham(id) {
    let nodeSanPham = event.target.parentElement;
    nodeSanPham.remove();

    var dataGioHang = docDuLieuLocal("danhSachGioHang");

    let vitri = dataGioHang.findIndex(sp => sp.id == id);

    dataGioHang.splice(vitri, 1);

    ghiDulieuLocal(dataGioHang, "danhSachGioHang");

    tinhThanhTien();

}

function onSoLuongThayDoi(id) {
    // lay so luong
    let soluong = event.target.value;

    if (soluong == '')
        return;
    
    soluong = parseInt(soluong);

    if (soluong < 0)
        soluong = 1;

    event.target.value = soluong;

    let nodeSanPham = event.target.parentElement;



    // luu lai so luong len giohang
    if (soluong > 0) {
        let dataGioHang = docDuLieuLocal("danhSachGioHang");
        for (let i = 0; i < dataGioHang.length; i++) {
            if (dataGioHang[i].id == id) {
                dataGioHang[i].soluong = soluong;
                break;
            }
        }
        ghiDulieuLocal(dataGioHang, "danhSachGioHang");

    }

     // tinh tong tien
     let nodeTongTien = nodeSanPham.getElementsByClassName("tongtien")[0];
     let dataSanPham = docDuLieuLocal("danhSachSanPham");
     let vitri = dataSanPham.findIndex(sp => sp.id == id);
     let giaban = tinhGiaBan(dataSanPham[vitri].giaGoc, dataSanPham[vitri].phanTram);
     nodeTongTien.innerHTML =themChamVaoSo( giaban * soluong) + " đ";


    tinhThanhTien();
}

function tinhThanhTien() {
    let thanhtien = 0;
    let dataGioHang = docDuLieuLocal("danhSachGioHang");
    let dataSanPham = docDuLieuLocal("danhSachSanPham");

    for (let i = 0; i < dataGioHang.length; i++) {

        let id = dataGioHang[i].id;

        let vitri = dataSanPham.findIndex(sp => sp.id == id);
        let giaban = tinhGiaBan(dataSanPham[vitri].giaGoc, dataSanPham[vitri].phanTram);

        thanhtien += giaban * dataGioHang[i].soluong;

    }
    let nodeThanhTien = document.getElementById("thanhtien");
    nodeThanhTien.innerHTML = themChamVaoSo(thanhtien) + " đ";
}

