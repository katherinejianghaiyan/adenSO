<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="20" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
				<div v-if="!isCollapse">
					<img :src="this.logo" style="height:25px;width:83px;margin-top: 15px"/>
				</div>
				<span style="cursor:pointer;font-size:18px;float:right">
					<i class="fa fa-align-justify" @click="collapse"></i>
				</span>
			</el-col>
			<!--<el-col :span="10" style="background-color: white">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>-->
			<el-col :span="4" class="userinfo" style="background-color: white">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">
						<!--<img :src="this.sysUserAvatar" /> {{sysUserName}}</span>-->
						<img :src="this.photoUrl" />
						{{sysUserName}} {{sysUserName.toLowerCase() == 'admin' ? '/ ' + account: ''}}
					</span>
					<el-dropdown-menu slot="dropdown">
						<!--选择语言-->
						<el-dropdown-item @click.native="showLanguage">{{ lan('T000007') }}</el-dropdown-item>
						<!--屏幕尺寸-->
						<el-dropdown-item @click.native="showSize">屏幕尺寸</el-dropdown-item>
						<!--退出登录-->
						<el-dropdown-item divided @click.native="logout">{{ lan('T000008') }}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<!--导航菜单-->
			<el-menu :default-active="$route.path"
					 class="el-menu-vertical-demo"
					 @open="handleopen"
					 @close="handleclose"
					 router
					 background-color="#545c64"
					 text-color="#fff"
					 active-text-color="#ffd04b"
					 unique-opened
					 :collapse="isCollapse">
				<el-submenu v-for="(item,index) in $router.options.routes"
							v-if="!item.hidden && !item.leaf"
							:index="index+''" >
					<template slot="title">
						<i :class="item.iconCls"></i>
						<span slot="title">{{lan(item.name)}}</span>
					</template>
					<el-menu-item v-for="child in item.children"
								  :index="child.path"
								  :key="child.path"
								  v-if="!child.hidden"><i :class="child.iconCls"></i>{{lan(child.name)}}</el-menu-item>
				</el-submenu>
				<!--<el-menu-item-->
						<!--v-if="item.leaf && item.children.length > 0"-->
						<!--:index="item.children[0].path">-->
					<!--<i :class="item.iconCls"></i>{{item.children[0].name}}-->
				<!--</el-menu-item>-->
			</el-menu>
			<section class="content-container" style="color:#58b7ff">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<!--<strong class="title">{{ lan($route.name) }}</strong>-->
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched"
												:key="item.path">
								{{ lan(item.name) }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
    import {
        GetPhoto,
        getLang
    } from '../api/api';

    import {
        arraySearch,
        isNullOrWhiteSpace,
        lan
    } from '../assets/js/common';

    export default {
        data() {
            return {
                sysName:'ADEN Services',
                isCollapse: false,
                collapsed: false,
                sysUserName: '',
                account: '',
                sysUserAvatar: '',
                photoUrl: '',
                noPhoto: './static/images/user.png',
                logo: './static/images/logo_white.png',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                lang: "",
                langOption: [],
                dialogLanguageVisible: false,
                dialogScreenVisible: false,
                radioScreen: "1"
            }
        },
        methods: {
            lan(number) {
                return lan(number);
            },
            onSubmit() {
                console.log('submit!');
            },
            handleopen() {
                //console.log('handleopen');
            },
            handleclose() {
                //console.log('handleclose');
            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    localStorage.removeItem("loginUser");
                    this.resetMenu();
                    _this.$router.push('/login');
                }).catch(() => {

                });
            },
            //折叠导航栏
            collapse:function(){
                this.isCollapse = !this.isCollapse;
            },
            showMenu(i,status){
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
            },
            // 重置router
            resetMenu() {
                for(var i = 0; i < this.$router.options.routes.length; i++) {
                    // 当action为空时不做处理
                    if(isNullOrWhiteSpace(this.$router.options.routes[i].action)) {
                        continue;
                    }
                    this.$router.options.routes[i].hidden = true;

                    // 当存在子节点时，循环设置子节点的呈现
                    for(var j = 0; j < this.$router.options.routes[i].children.length; j++) {
                        this.$router.options.routes[i].children[j].hidden = true;
                    }
                }
            },
            // 设置头像
            SetPhoto(employeeID) {
                if(isNullOrWhiteSpace(employeeID)) {
                    this.photoUrl = this.noPhoto;
                    return;
                }
                GetPhoto(employeeID).then(data => {
                    if(!isNullOrWhiteSpace(data)) {
                        this.photoUrl = "http://web.adenservices.com/adenapi/api/hr/userphoto/?employeeid=" + employeeID;
                    } else {
                        this.photoUrl = this.noPhoto;
                    }
                });
            },
            // 显示语言切换对话框
            showLanguage() {
                getLang().then(data => {
                    if (data && data.code == "200") {
                        this.langOption = data.content;
                        this.lang = localStorage.getItem("language");
                        this.dialogLanguageVisible = true;
                    }
                }).catch(()=>{
                });

            },
            showSize() {
                this.dialogScreenVisible = true;
            },
            changeLanguage() {
                localStorage.setItem("language", this.lang);
                this.dialogLanguageVisible = false;
            },
            changeScreen() {
                localStorage.setItem("screen", this.radioScreen);
                this.dialogScreenVisible = false;
            },
            // 取得语言文本
            lan(number) {
                return lan(number);
            }
        },
        created() {
            // 初始化Menu List
            this.resetMenu();
            this.radioScreen = isNullOrWhiteSpace(localStorage.getItem("screen")) ? "1": localStorage.getItem("screen");
            var user = sessionStorage.getItem('user');
            var menus;

            if(typeof(user) == "undefined" || user == null) {
                return;
            }
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.fullName;
                menus = user.menus;
                this.account = user.account;
            }
            this.SetPhoto(user.employeeID);

            var action = "";
            var menuObj = "";
            var foundFlag = false;

            // 设置Menu是否显示
            for(var i = 0; i < this.$router.options.routes.length; i++) {
                // 当action为空时不做处理
                action = this.$router.options.routes[i].action;

                if(isNullOrWhiteSpace(action)) {
                    continue;
                }
                this.$router.options.routes[i].hidden = true;
                // 从Menu列表中进行查找
                menuObj = arraySearch(action, menus, "action")[0];

                // 当找到时点亮该Menu节点以及所有子节点
                if(typeof(menuObj) != "undefined") {
                    this.$router.options.routes[i].hidden = false;
                }

                // 当不存在子节点时跳过
                if(typeof(this.$router.options.routes[i].children) == "undefined") {
                    continue;
                }
                // 子节点有权限标志
                foundFlag = false;

                // 当存在子节点时，循环设置子节点的呈现
                for(var j = 0; j < this.$router.options.routes[i].children.length; j++) {
                    this.$router.options.routes[i].children[j].hidden = true;

                    if(isNullOrWhiteSpace(this.$router.options.routes[i].children[j].action)) {
                        continue;
                    }
                    // 如果父节点有权限，则子节点全部有权限
                    if(!this.$router.options.routes[i].hidden) {
                        // 显示子节点
                        this.$router.options.routes[i].children[j].hidden = false;
                        continue;
                    }
                    // 反之从Menu列表中进行查找
                    action = this.$router.options.routes[i].children[j].action;

                    // 如果action不存在直接跳过
                    if(isNullOrWhiteSpace(action)) {
                        continue;
                    }

                    // 从Menu列表中进行查找
                    menuObj = arraySearch(action, menus, "action")[0];

                    // 当没有找到时跳转到下一条
                    if(typeof(menuObj) == "undefined") {
                        continue;
                    }
                    // 当找到时点亮该Menu节点
                    this.$router.options.routes[i].children[j].hidden = false;
                    foundFlag = true;
                }
                // 当父节点不显示时
                if(this.$router.options.routes[i].hidden) {
                    // 只要有子节点显示，父节点也显示
                    if(foundFlag) {
                        this.$router.options.routes[i].hidden = false;
                    }
                }
            }
        }
    }

</script>

<style scoped lang="scss">
	@import '~scss_vars';

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	.header {
		height: 60px;
		line-height: 60px;

		color:#fff;
	.userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
	.userinfo-inner {
		cursor: pointer;
		color: #a2a2a2;
		font-weight:bold;
	    font-style: italic;

	img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	}
	}
	.logo {
		/*//width:230px;*/
		background: $color-aden;
		height:60px;
		font-size: 22px;
		padding-left:20px;
		padding-right:20px;
		border-color: rgba(238,241,146,0.3);
		border-right-width: 1px;
		border-right-style: solid;
	img {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	.txt {
		color:#fff;
	}
	}
	.logo-width{
		width:200px;
	}
	.logo-collapse-width{
		width:64px
	}
	.tools{
		padding: 0px 23px;
		width:14px;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}
	}
	.main {
		display: flex;
		/*// background: #324057;*/
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	aside {
		flex:0 0 230px;
		width: 230px;
	/*position: absolute;
    top: 0px;
    bottom: 0px;*/
	.el-menu{
		height: 100%;
	}
	.collapsed{
		width:60px;
	.item{
		position: relative;
	}
	.submenu{
		position:absolute;
		top:0px;
		left:60px;
		z-index:99999;
		height:auto;
		display:none;
	}

	}
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
	.content-container {
		 background: #F3F3F4;
		flex:1;
		/*position: absolute;*/
		/*right: 0px;*/
		/*top: 0px;*/
		/*bottom: 0px;*/
		/*left: 230px;*/
		overflow-y: scroll;
		padding: 20px;
	.breadcrumb-container {
	//margin-bottom: 15px;
	.title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.breadcrumb-inner {
		float: left;
	}
	}
	.content-wrapper {
		background-color: #fff;
		box-sizing: border-box;
	}
	}
	}
	}
	.badge-custom {
		margin-top: 10px;
		margin-right: 40px;
	}
</style>