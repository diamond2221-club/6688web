<template>
    <div id="rightNav">
        <router-link
            tag='a'
            to="/index"
        >
            导航首页
        </router-link>
        <router-link
            tag='a'
            to="/detection"
        >
            线路检测
        </router-link>
        <router-link
            tag='a'
            to="/verify"
        >
            域名认证
        </router-link>
        <a
            href="https://6686c5.com"
            target="_blank"
        >会员注册</a> <a
            href="https://6686c5.com"
            target="_blank"
        >代理加盟</a> <a
            href="/download"
            class=""
        >手机下载</a> <a
            href="https://6686c5.com"
            target="_blank"
        >优惠活动</a> <a
            href="https://slit.mdihi.com/chat/chatClient/chatbox.jsp?companyID=365027326&amp;configID=443&amp;jid=8856652128&amp;s=1"
            target="_blank"
        >在线客服</a>
    </div>
</template>

<script>
export default {
    name: "RightHeader"
};
</script>

<style scoped lang="scss">
#rightNav {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #151515;
    width: 17%;
    height: 100%;
    z-index: -1;
}
@media screen and (max-width: 968px) {
    #rightNav {
        width: 17%;
        right: -17%;
    }
}
@media screen and (max-width: 768px) {
    #rightNav {
        width: 20%;
        right: -20%;
    }
}
@media screen and (max-width: 568px) {
    #rightNav {
        width: 25%;
        right: -25%;
    }
}
@media screen and (max-width: 468px) {
    #rightNav {
        width: 40%;
        right: -40%;
    }
}
#rightNav a {
    display: block;
    width: 45%;
    margin: 0 auto;
    margin-top: 25px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
}
#rightNav a[data-v-c5122748]:hover {
    color: #ff9200;
    border-bottom: 2px solid #ff9200;
}
#rightNav a:hover #message #iconHover {
    opacity: 1 !important;
}
#rightNav a:hover #message #icon {
    opacity: 0 !important;
}
#rightNav a.router-link-exact-active {
    color: #ff9200;
    border-bottom: 2px solid #ff9200;
}
#rightNav #navList {
    font-size: 13px;
    color: hsla(0, 0%, 40%, 0.502);
    text-transform: uppercase;
    line-height: 2.35;
    text-align: center;
}
</style>

