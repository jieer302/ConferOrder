
import Mock from 'mockjs'

var list_brief = [
    { 'date':'2018-9-3','title' :  [ '项目研讨', '每周例会']},
    { 'date':'2018-9-7','title' :  [ '党组织生活会', '员工培训']},
    { 'date':'2018-9-13','title' :  [ 'XX测试会议']}
]

var list_detail = [
    {'date' : '2018-9-3',
        'detail' : [
            {'id' : 1, 'title' : '项目研讨','startTime':'9:00', 'endTime': '10:00', 'creator' : '张XX','telephone' : '18311111111'},
            {'id' : 2, 'title' : '每周例会','startTime':'15:00', 'endTime': '16:00', 'creator' : '李XX','telephone' : '18311111112'}
        ]},
    {'date' : '2018-9-7',
        'detail' : [
            {'id' : 3, 'title' : '党组织生活会','startTime':'15:00', 'endTime': '16:00', 'creator' : '王XX','telephone' : '18311111113'},
            {'id' : 5, 'title' : '员工培训','startTime':'9:00', 'endTime': '10:00', 'creator' : '孙XX','telephone' : '18311111115'}
        ]},
    {'date' : '2018-9-13',
        'detail' : [
            {'id' : 7, 'title' : 'XX测试会议','startTime':'15:00', 'endTime': '16:00', 'creator' : '周XX','telephone' : '18311111117'},
        ]}
]

Mock.mock('/conferContent/init',{
    list: list_brief
})

Mock.mock('/conferContent/detail','post',function(option){
    console.log(option.body);
    let detailData = [];
    for(let i in list_detail){
        if(list_detail[i].date == option.body){
            detailData = [...list_detail[i].detail];
        }
    }
    return detailData;
})

Mock.mock('/conferContent/add','post',function(option){
    console.log(option.body);
    return 'success';
})





