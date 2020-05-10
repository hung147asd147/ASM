function onclichvaogiohang(){
    var nodehinhAnh = document.getElementById("hinhAnh")
    var hinhAnh = nodehinhAnh.value;

    var nodeTen = document.getElementById("ten")
    var ten = nodeTen.value;

    var nodegiaGoc = document.getElementById("giaGoc")
    var giaGoc = nodegiaGoc.value;

    var nodephanTram = document.getElementById("phanTram")
    var phanTram = nodephanTram.value;

    var nodekhuVuc = document.getElementById("khuVuc")
    var khuVuc = nodekhuVuc.value;

    var sanPham = taoDTSP(hinhAnh,ten,giaGoc,phanTram,khuVuc)
    var danhSachSanPham = loaidulieu("danhSachSanPham");

    if (danhSachSanPham == null){
        danhSachSanPham = new Array();
    }
    danhSachSanPham.push(sanPham);
    ghiDulieu(danhSachSanPham,"danhSachSanPham")
}