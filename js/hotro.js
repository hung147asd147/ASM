function taoid(){

    var thoigianHientai = new Date().getTime();
    var id = Math.random().toString().substr(2,10)+"_"+(thoigianHientai);
    return id;

}

function docDuLieuLocal(tenData){
    let data = JSON.parse(localStorage.getItem(tenData))
    if (data == null) {
        data = new Array();
    }
    return data;
}
function  ghiDulieuLocal(data,tenData){
    localStorage.setItem(tenData,JSON.stringify(data))
}

function tinhGiaBan(giaGoc,phanTram){
    return giaGoc*(1-phanTram);
}

function themChamVaoSo(so) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}