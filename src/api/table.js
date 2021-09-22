import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
// export default {
//   getHospSetList(current,limit,searchObj){
//     return request({
//       url: `/admin/hosp/hospitalSet/findPageHospitalSet/${current}/${limit}`,
//       method: 'post',
//       data: searchObj    //使用json进行传递
//     })
//   }
// }
