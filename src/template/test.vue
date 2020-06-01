<template>
<div class="container">
    <div class="select">
        <!-- 筛选框一 -->
        <el-select v-model="value1" clearable @change="filterList($event,1)" placeholder="请选择">
            <el-option v-for="item in options1" :key="item.value" :label="item.value" :value="item.value"></el-option>
        </el-select>
        <!-- 筛选框二 -->
        <el-select v-model="value2" clearable @change="filterList($event,2)" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.value" :value="item.value"></el-option>
        </el-select>
    </div>
    <div class="list">
        <div class="cell" v-for="(item,index) in list" :key="index">
            <span>{{item.label}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            options1: [{
                value: '选项1'
            }, {
                value: '选项2'
            }, {
                value: '选项3'
            }, {
                value: '选项4'
            }, {
                value: '选项5'
            }],

            options2: [{
                value: '地区一'
            }, {
                value: '地区二'
            }, {
                value: '地区三'
            }, {
                value: '地区四'
            }, {
                value: '地区五'
            }],

            list: [{
                    value: '选项1',
                    label: '黄金糕',
                    area: '地区一'
                },
                {
                    value: '选项1',
                    label: '双皮奶',
                    area: '地区二'
                },
                {
                    value: '选项2',
                    label: '龙须面',
                    area: '地区二'
                },
                {
                    value: '选项3',
                    label: '煎饼',
                    area: '地区三'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                    area: '地区四'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭',
                    area: '地区五'
                }
            ],
            a: {
                value: ''
            },
            b: {
                area: ''
            },
            tempList: []
        }
    },
    mounted() {
        // 初始化时,给一个备用的数组存储所有的列表数据
        this.tempList = this.list;
    },
    methods: {
        /**
         * 两个下拉筛选框过滤分两个数组去存储:a,b
         * e:筛选数据
         * status:筛选框状态
         */
        filterList(e, status) {
            //定义一个常量保存初始化加载时得到的所有列表数据
            let newArr = JSON.parse(JSON.stringify(this.tempList));
            status == 1 ? this.a = {
                value: e == '' ? '' : e
            } : this.b = {
                area: e == '' ? '' : e
            }
            // 都为空的状态下,备用数据赋值给真实数据,return出去就不执行下面的过滤了
            if (this.a.value == '' && this.b.area == '') {
                this.list = this.tempList;
                return
            }
            //不为空的情况下定义总的筛选条件
            let filter = {
                ...this.a,
                ...this.b
            };
            console.log(filter)
            //拿到有值的参数
            let tempFilter = {};
            for (let key in filter) {
                if (typeof (filter[key]) != "undefined" && typeof (filter[key]) != "null" && filter[key] != null && filter[key] != "") {
                    tempFilter[key] = filter[key];
                }
            }
            console.log(tempFilter)
            //筛选
            const result = newArr.filter((item) => {
                let flag = false;
                for (let key in tempFilter) {
                    if (item[key].toString().indexOf(tempFilter[key].toString()) >= 0) {
                        flag = true;
                    } else {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    return item;
                }
            });
            console.log(JSON.stringify(result));
            this.list = result;
        },
    }
}
</script>

<style  scoped>
.container {
    width: 100%;
    display: flex;
    padding: 24px 0;
    margin-top: 100px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}
</style><style>
.el-scrollbar__wrap {
    height: auto;
    overflow: visible;
}
</style>
