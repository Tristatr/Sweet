<template>
  <div>
    <!--   操作面板   -->
    <el-card class="goods-card">
      <div>
        <el-input v-model="param.searchKey"
                  style="width: 240px"
                  @keyup.enter.native="refresh(1)"
                  placeholder="内容"></el-input>
        <el-select v-model="param.searchType"
                   placeholder="分类">
          <el-option :key="type.id"
                     v-for="type in types"
                     :label="type.species_name"
                     :value="type.species_name">
          </el-option>
        </el-select>
        <el-button type="primary"
                   icon="el-icon-search"
                   @click="refresh(1)">搜索</el-button>
      </div>
    </el-card>
    <el-card class="main-card">
      <el-row>
        <el-col :span="8"
                v-for="(o, index) in list"
                :key="o"
                :offset="0.1">
          <el-card style="padding:0px;margin:2px">
            <img v-if=" list[index].img_guid==='static/imgs/'"
                 src="static/imgs/back.jpg">
            <img v-if=" list[index].img_guid.indexOf('.jpg') !== -1"
                 :src="list[index].img_guid">
            <div style="padding: 14px;">
              <div>
                <el-tag>{{list[index].name}}</el-tag>
                ￥{{list[index].price}}
              </div>
              <div>{{list[index].detail}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [],
      param: {
        page: 1,
        searchKey: '',
        searchType: '',
      },
      list: [
        {
          detail: '布丁是一种半凝固状的冷冻的甜品，主要材料为鸡蛋和奶黄',
          id: 1,
          img_guid: 'static/imgs/buding.jpg',
          name: '布丁',
          price: 20,
          species_name: '布丁',
          state: 1,
        },
      ],
      pagination: {
        total: 1,
        pageSize: 9,
        currentPage: 1,
      },
    }
  },
  methods: {
    pageChange(page) {
      this.refresh(page)
    },
    getTypes() {
      //window.sessionStorage.getItem('token')
      this.$http.get('/species/findAll').then((result) => {
        let R = result.data
        this.types = R.data
      })
    },
    refresh(page) {
      if (page === undefined) {
        page = 1
      }
      //window.sessionStorage.getItem('token')
      this.$http
        .get(
          '/cack/find?page=' +
            page +
            '&searchKey=' +
            this.param.searchKey +
            '&searchType=' +
            this.param.searchType
        )
        .then((result) => {
          let R = result.data
          this.list = R.data.items
          console.log(this.list)
          this.pagination.total = R.data.len
          this.pagination.currentPage = page
        })
    },
  },
  created() {
    this.getTypes()
    this.refresh(1)
  },
}
</script>

<style scoped>
.search-input {
  width: 300px;
}

.updateForm {
  width: 80%;
}

.btn-release {
  float: right;
  margin-top: 10px;
  margin-right: 50px;
}

.form-releaseTask {
  height: 300px;
}

.input-content-task {
  width: 500px;
}

img {
  margin-top: 10px;
  width: 160px;
  height: 160px;
}

.main-card {
  background: #dde8d1;
}
.button-add-cart {
  float: right;
  margin: 5px;
}
</style>
