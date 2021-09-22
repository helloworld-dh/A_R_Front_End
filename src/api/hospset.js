import request from '@/utils/request'

export default {
  //医院设置列表
  getHospSetList(current,limit,searchObj){
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospitalSet/${current}/${limit}`,
      method: 'post',
      data: searchObj    //使用json进行传递
    })
  },
  //删除医院设置方法
  deleteHospSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  //批量删除
  batchRemoveHospSet(idList){
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定与取消锁定
  lockHospSet(id,status){
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  //医院设置根据ID查询
  getHospSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospitalSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }

}
