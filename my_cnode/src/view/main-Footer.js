import React, { Component } from "react";
import { Layout } from "antd";


class MainFooter extends Component {
    render(){
        return <Layout.Footer style={{textAlign:"center"}}>
            备案号：晋ICP备16000522号-2 电话：4008009790
            服务邮箱：luying@luyingjc.com 公众号查询：CZSLYKM
          </Layout.Footer>;
    }
}

export default MainFooter;