// 反向代理接口
$.ajax({
  url: '/x/web-interface/dynamic/region',
  type: 'get',
  dataType: 'json',
  data: { ps: 12, rid: 1 },
}).done((res) => {
  console.log(res);
  $('#pre2').html(JSON.stringify(res, null, 4));
}).fail((err) => {
  console.log(err);
})