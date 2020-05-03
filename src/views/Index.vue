<template>
    <div
        id="index"
        v-if="!loading"
        :style="{ backgroundImage: bgType == 2 ? `url(${bgUrl})` : '' }"
    >
        <div id="wrapper1" class="wrapper1">
            <div
                id="wrapper2"
                style="opacity: 1; transform: translate(0px, 0px);"
            >
                <div
                    id="title"
                    :style="{
                        backgroundImage: `url(${require('@/assets/images/1566887589583980.png')})`,
                    }"
                ></div>
                <div id="mouse"></div>
            </div>

            <div id="wrapper3">
                <div
                    id="wrapper4"
                    style="opacity: 1; transform: translate(0px, 0px);"
                >
                    <div id="sportDataHolder">
                        <a
                            :href="item.url"
                            id="lj1"
                            target="_blank"
                            class="sportData"
                            v-for="(item, index) in hrefArr1"
                            :key="index"
                        >
                            <span class="signalBar">
                                <span class="bar active"></span
                                ><span class="bar active"></span
                                ><span class="bar active"></span
                                ><span class="bar active"></span
                                ><span class="bar"></span>
                            </span>
                            <span class="contentHolder"
                                ><span class="subContainer">
                                    <span
                                        class="flag"
                                        :style="{
                                            backgroundImage: `url(http://admin.937093.com/static/uploads/pic/${item.pic})`,
                                        }"
                                    >
                                    </span>
                                    <span class="name">{{ item.name }}</span
                                    ><span class="time">0.080秒</span
                                    ><span class="text">立刻访问</span></span
                                ></span
                            >
                        </a>
                    </div>
                    <div id="agent-box">
                        <a
                            :href="item.url"
                            :id="`jj${index + 1}`"
                            target="_blank"
                            class="agentData"
                            v-for="(item, index) in hrefArr2"
                            :key="index"
                        >
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAVCAYAAABYHP4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RUU4NDIxRUI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RUU4NDIxRkI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFRTg0MjFDQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFRTg0MjFEQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KY0oQAAAAXxJREFUeNq0lE8rRFEYxs+YjSxIiJLChgWysJsPMCz82cxK1j6BjXJLSTIiZK9Q/jQ1n4C1JSFGjYitUqQRHc+pd+rpdu6ce+fOvPVrZp57zvubtzlzElprFVAjIAc6wJ+qXEl53QVL1hVGZKEPvOvqasHW0ybpAm86Xs27RI3gXtemMkGiJLjUta20TXSu61Mp0z8hpy4PplV9qgRSZpIzsv+CA/AScwrT846DBtiKPvscGAOfVU7ggQy4oKxQ/n0WSX4sWS/4iDiJJ3tnwLdkV6CFD4NHG3KSDdIGV62QpFzXoMn2P1qmRSeSDYAvh2TVIrkFrZVuBpadSjYESgGSNVkzSdkNaHZdQUq+oX+yYfDjk2zIsynKCqA9zF1nkx1KNkpZVrI0ZQ+gLeylymSpyZFk42Bb3k/Q8yfQGdTLJTKsU7N9ynmSotz6Ko7IsElN98AsfX52SaKIDFuWE2euqp4w+6OIDDskeQXdYfdGFSk5gY+gP8q+fwEGAPgGbe4Owv7yAAAAAElFTkSuQmCC"
                                alt=""
                                style="vertical-align: middle;"
                            />
                            <span>{{ item.name }}</span>
                        </a>
                    </div>
                </div>
                <div
                    id="wrapper5"
                    style="opacity: 1; transform: translate(0px, 0px); width:101%; "
                >
                    <div id="websiteDataHolder">
                        <div class="websiteData">
                            <p class="title">
                                金融 financial
                            </p>
                            <div class="websiteList">
                                <a
                                    href="http://www.boc.cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233617300592.png')})`,
                                        }"
                                    ></span
                                    ><span>中国银行</span></a
                                >

                                <a
                                    href="http://www.icbc.com.cn/icbc/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233639546573.png')})`,
                                        }"
                                    ></span
                                    ><span>工商银行</span></a
                                >

                                <a
                                    href="http://www.ccb.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233659954169.png')})`,
                                        }"
                                    ></span
                                    ><span>建设银行</span></a
                                >

                                <a
                                    href="http://www.abchina.com/cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233670589219.png')})`,
                                        }"
                                    ></span
                                    ><span>农业银行</span></a
                                >

                                <a
                                    href="http://www.psbc.com/cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233680906487.png')})`,
                                        }"
                                    ></span
                                    ><span>邮政储蓄</span></a
                                >

                                <a
                                    href="http://cn.unionpay.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233692240919.png')})`,
                                        }"
                                    ></span
                                    ><span>银联</span></a
                                >

                                <a
                                    href="https://www.alipay.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233703394296.png')})`,
                                        }"
                                    ></span
                                    ><span>支付宝</span></a
                                >

                                <a
                                    href="https://www.tenpay.com/v3/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233763416205.png')})`,
                                        }"
                                    ></span
                                    ><span>QQ钱包</span></a
                                >

                                <a
                                    href="https://pay.weixin.qq.com"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565233755628903.png')})`,
                                        }"
                                    ></span
                                    ><span>微信支付</span></a
                                >
                            </div>
                        </div>
                        <div class="websiteData">
                            <p class="title">
                                搜索 search
                            </p>
                            <div class="websiteList">
                                <a
                                    href="https://www.baidu.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234399614500.png')})`,
                                        }"
                                    ></span
                                    ><span>百度</span></a
                                >

                                <a
                                    href="http://www.google.cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234416329155.png')})`,
                                        }"
                                    ></span
                                    ><span>谷歌</span></a
                                >

                                <a
                                    href="https://www.sogou.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234443831543.png')})`,
                                        }"
                                    ></span
                                    ><span>搜狗</span></a
                                >

                                <a
                                    href="https://www.sina.com.cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234464939334.png')})`,
                                        }"
                                    ></span
                                    ><span>新浪</span></a
                                >

                                <a
                                    href="https://ph.yahoo.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234488464296.png')})`,
                                        }"
                                    ></span
                                    ><span>YaHoo</span></a
                                >

                                <a
                                    href="http://www.sowang.com/163search.htm"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234502145102.png')})`,
                                        }"
                                    ></span
                                    ><span>网易</span></a
                                >

                                <a
                                    href="https://www.360.cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234531595302.png')})`,
                                        }"
                                    ></span
                                    ><span>360</span></a
                                >

                                <a
                                    href="http://www.soso.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234549109750.png')})`,
                                        }"
                                    ></span
                                    ><span>QQ搜索</span></a
                                >

                                <a
                                    href="http://www.fang.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565234575996316.png')})`,
                                        }"
                                    ></span
                                    ><span>搜房网</span></a
                                >
                            </div>
                        </div>
                        <div class="websiteData">
                            <p class="title">
                                新闻 news
                            </p>
                            <div class="websiteList">
                                <a
                                    href="https://news.163.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235109426348.png')})`,
                                        }"
                                    ></span
                                    ><span>网易新闻</span></a
                                >

                                <a
                                    href="http://news.baidu.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235128711523.png')})`,
                                        }"
                                    ></span
                                    ><span>百度新闻</span></a
                                >

                                <a
                                    href="http://www.people.com.cn/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235148473532.png')})`,
                                        }"
                                    ></span
                                    ><span>人民网</span></a
                                >

                                <a
                                    href="http://news.qq.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235168771284.png')})`,
                                        }"
                                    ></span
                                    ><span>腾讯新闻</span></a
                                >

                                <a
                                    href="http://news.cctv.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235191409189.png')})`,
                                        }"
                                    ></span
                                    ><span>CCTV新闻</span></a
                                >

                                <a
                                    href="http://www.uc123.com/xinwen.html"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235214371268.png')})`,
                                        }"
                                    ></span
                                    ><span>UC新闻</span></a
                                >

                                <a
                                    href="https://www.toutiao.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235246165145.png')})`,
                                        }"
                                    ></span
                                    ><span>今日头条</span></a
                                >

                                <a
                                    href="http://news.ifeng.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235255403246.png')})`,
                                        }"
                                    ></span
                                    ><span>凤凰资讯</span></a
                                >

                                <a
                                    href="http://www.huanqiu.com/"
                                    target="_blank"
                                    class="website"
                                    ><span
                                        class="icon"
                                        :style="{
                                            backgroundImage: `url(${require('@/assets/images/1565235283978074.png')})`,
                                        }"
                                    ></span
                                    ><span>环球时报</span></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="winsyb"></div>
            </div>
        </div>
        <div class="video-bg" v-if="bgType == 1">
            <div class="video-wrap"></div>
            <video
                autoplay
                muted
                loop
                :src="bgUrl"
                id="videoBox"
                ref="videoBox"
                webkit-playsinline
                playsinline
            >
                <!-- <source :src="bgUrl" type="video/mp4"  /> -->
            </video>
        </div>
    </div>
</template>

<script>
import { fetchIndexData, fetchIndexBg } from "@/api/index.js";
import { isMobile } from "@/utils/index.js";

export default {
    name: "index",
    data() {
        return {
            hrefArr1: [],
            hrefArr2: [],
            bgUrl: "",
            bgType: 1 /* 1 PC视频 2 PC图片 3 M视频 4 M图片 */,
            loading: false,
        };
    },
    created() {
        this.loading = true;
        fetchIndexData().then((res) => {
            const { indexLine = [], indexAgent = [] } = res;
            this.hrefArr1 = indexLine;
            this.hrefArr2 = indexAgent;
            this.loading = false;
        });
        fetchIndexBg().then((res) => {
            const deviceType = isMobile();
            let dataArr = (deviceType ? res.webType : res.indexType);
            const res1 = dataArr.filter(
                (item) => item.status == 1
            );
            let bgUrl = "";
            let bgType = 1;
            if (res1.length) {
                if (res1[0].indexType == 2 || res1[0].indexType === 4) {
                    bgUrl = `http://admin.937093.com/static/uploads/pic/${res1[0].pic}`;
                    bgType = 2;
                } else if (res1[0].indexType == 1 || res1[0].indexType === 3) {
                    bgUrl = res1[0].video;
                    bgType = 1;
                }
            } else {
                bgUrl = require("@/assets/images/1577654005133740.png");
                bgType = 2;
            }
            this.bgUrl = bgUrl;
            this.bgType = bgType;

            setTimeout(() => {
                const videoBox = document.querySelector("#videoBox");
                if (videoBox) {
                    if (deviceType) {
                        videoBox.style.width = "100%";
                        videoBox.style.height = "100%";
                    }
                }
            }, 800);
        });
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
#index {
    background-color: rgb(25, 26, 30);
    background-position: 50% top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .wrapper1,
    .winsyb {
        position: relative;
        z-index: 2;
    }
    .winsyb {
        padding-bottom: 10%;
    }
    .video-bg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        overflow: visible;
        z-index: 1;
        .video-wrap {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
        }
        video {
            position: relative;
            z-index: 1;
            display: block;
            min-width: 100%;
            min-height: 100%;
            height: auto;
            width: auto;
            object-fit: cover;
            overflow: hidden;
            source {
                min-width: 100%;
                min-height: 100%;
                height: auto;
                width: auto;
            }
        }
    }
}
#index.mainContent {
    background-image: url(/static/img/index-background.25eb496.jpg);
    background-size: auto 110%;
    background-position: 50% 20%;
    transition: background-position 0.3s linear;
}
@media screen and (max-width: 880px) {
    #index.mainContent {
        background-image: url(/static/img/index-mobile-background.16d3146.jpg);
        background-size: contain;
        background-position: top !important;
        transition: none;
    }
}
#index #wrapper1 {
    max-width: 1180px;
    margin: 0 auto;
    padding: 10px;
}
@media screen and (max-width: 880px) {
    #index #wrapper1 {
        margin: 0 0 1.3rem;
    }
}
#index #wrapper1 #wrapper2 {
    width: 100%;
    height: auto;
    margin: 8% 0 0;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper2 #title {
    width: 100%;
    height: 133px;
    margin: 0 0 5%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper2 #title {
        background-position: 50%;
    }
    #index {
        .video-bg {
            video {
                height: 100%;
            }
        }
    }
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper2 #title {
        margin: 5% 0;
    }
}
#index #wrapper1 #wrapper2 #mouse {
    width: 19px;
    height: 29px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQUJFMkZBQUIzNDgxMUU4OENBMUE4NjFFRjRDM0M5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQUJFMkZBQkIzNDgxMUU4OENBMUE4NjFFRjRDM0M5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBQkUyRkE4QjM0ODExRTg4Q0ExQTg2MUVGNEMzQzlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBQkUyRkE5QjM0ODExRTg4Q0ExQTg2MUVGNEMzQzlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+74MlaAAAAbpJREFUeNq0lb1Lw0AYxq+xfhWhqIgIHURwEBFxchHF0YI6KKiDjg6C/4Kg0EFQl+7+A9ZBHDqog+LmplSXVhCEWvCjIioW2/N57RtNQnKNSX3gRy537z25r9wrpJTCgQVwAF7BHXgEGRAHPXZ97ExmwZMsKw/2uZwFp/JXCRBWmW1yYBqMGupLYJ3LzWCN4z5Al51ZnANilg8EuH7bUt8N3kERtBnNotxhw2bamoOZPkrStdGsAHIOG1GjMCOmuX1S8NqQRjyaEffgQRNCLIqyjoV3bYEWMpsCly461CrajkBR46CMIrDEzzpFzDPIB/lFKgKpLQquFDFv4DPoYgqkZIV2GnWADmQWhSaQpgrmL6JlCIF2MqMhpsBqhemqFAExwWdoV3GG3EA/fE5j50bhTx20PJqoov7FrOTThzZOVmtkUh9ZAXT6NGsAYTLbA70+zYZAPZ2RMT5r/T7OGd20Py+klEejQe6/bMyRpCUPZpShXqzZKcGG8y5NQuCC+/TZ5c0dw78aURjNGJLxsF4f+HY0a4VvENIZOAG3vP0DYILL52DOdOU7fLmVM/iNNItS4iEYt+v3JcAATWuNePHBpLoAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper2 #mouse {
        display: none;
    }
}
#index #wrapper1 #wrapper3 {
    margin: 10px 0;
}
#index #wrapper1 #wrapper3 #wrapper4 {
    width: 100%;
    height: auto;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
    width: 100%;
    text-align: center;
    margin: 3px auto;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    justify-content: center;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder * {
    display: block;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
        max-width: 780px;
    }
}
@media screen and (max-width: 768px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
        max-width: 580px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData {
    width: 230px;
    -ms-flex-positive: 1;
    flex-grow: 1;
    background-color: hsla(0, 0%, 93%, 0.3);
    padding: 10px;
    border-radius: 10px;
    margin: 3px;
    box-sizing: border-box;
    text-decoration: none;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData:hover {
    background-color: #ff9200;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData:hover
    .subContainer {
    transform: translateY(-60px) !important;
}
@media screen and (max-width: 568px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData {
        width: 47%;
        height: auto;
        margin: 3px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData .signalBar {
    text-align: right;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar {
    background-color: #222;
    width: 3px;
    margin: 0 0.5px;
    display: inline-block;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:first-child {
    height: 5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(2) {
    height: 7.5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(3) {
    height: 10px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(4) {
    height: 12.5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(5) {
    height: 15px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar.active {
    background-color: #fff;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder {
    width: 100%;
    height: 100%;
    max-height: 6.188em;
    margin: -20px 0 0;
    overflow: hidden;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer {
    line-height: 1.2;
    transform: translate(0);
    transition: transform 0.5s ease-in-out;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .flag {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: 50%;
    border-radius: 100%;
    border: 5px solid rgba(0, 0, 0, 0.5);
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .name {
    color: #fff;
    font-size: 18px;
    word-wrap: break-word;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .time {
    color: #fff;
    font-size: 14px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .text {
    margin: 22px 0 0;
    font-size: 22px;
    color: #fff;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
    width: 100%;
    margin: 3px auto;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
        max-width: 780px;
    }
}
@media screen and (max-width: 768px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
        max-width: 580px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0 1px 0 0;
    padding: 13px 49.4px;
    background-color: hsla(0, 0%, 93%, 0.3);
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    box-sizing: border-box;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:first-child {
    margin: 0 1px 0 3px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:last-child {
    margin: 0 3px 0 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:hover {
    background-color: #ff9200;
}
@media screen and (min-width: 769px) and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
        margin: 0 1px 6px 0;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:first-child {
        margin: 0 1px 6px 3px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:last-child {
        margin: 0 3px 6px 0;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(3) {
        margin: 0 3px 6px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(4) {
        margin: 0 1px 6px 3px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
@media screen and (min-width: 569px) and (max-width: 768px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(2n) {
        margin: 0 3px 6px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(odd) {
        margin: 0 1px 6px 3px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
@media screen and (max-width: 568px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
        width: 100%;
        margin: 0 0 6px !important;
        border-radius: 10px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData .icon {
    width: 26px;
    height: 21px;
    margin: 0 0 -4px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAVCAYAAABYHP4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RUU4NDIxRUI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RUU4NDIxRkI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFRTg0MjFDQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFRTg0MjFEQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KY0oQAAAAXxJREFUeNq0lE8rRFEYxs+YjSxIiJLChgWysJsPMCz82cxK1j6BjXJLSTIiZK9Q/jQ1n4C1JSFGjYitUqQRHc+pd+rpdu6ce+fOvPVrZp57zvubtzlzElprFVAjIAc6wJ+qXEl53QVL1hVGZKEPvOvqasHW0ybpAm86Xs27RI3gXtemMkGiJLjUta20TXSu61Mp0z8hpy4PplV9qgRSZpIzsv+CA/AScwrT846DBtiKPvscGAOfVU7ggQy4oKxQ/n0WSX4sWS/4iDiJJ3tnwLdkV6CFD4NHG3KSDdIGV62QpFzXoMn2P1qmRSeSDYAvh2TVIrkFrZVuBpadSjYESgGSNVkzSdkNaHZdQUq+oX+yYfDjk2zIsynKCqA9zF1nkx1KNkpZVrI0ZQ+gLeylymSpyZFk42Bb3k/Q8yfQGdTLJTKsU7N9ynmSotz6Ko7IsElN98AsfX52SaKIDFuWE2euqp4w+6OIDDskeQXdYfdGFSk5gY+gP8q+fwEGAPgGbe4Owv7yAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: initial;
}
#index #wrapper1 #wrapper3 #wrapper5 {
    width: 100%;
    height: auto;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
    width: 100%;
    margin: 20px auto;
    margin: 6px auto 20px;
    text-align: center;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
        max-width: 810px;
    }
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
        max-width: 710px;
    }
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData {
    width: 370px;
    padding: 0 32px 0 0;
    margin: 10px 0;
    display: inline-block;
    color: #fff;
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData:last-child {
    padding: 0;
}
@media screen and (max-width: 1280px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData:nth-child(2) {
        padding: 0;
    }
}
@media screen and (max-width: 880px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData:first-child {
        padding: 0;
    }
}
@media screen and (max-width: 468px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData {
        width: 100%;
    }
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData .title {
    margin: 5px;
    text-align: left;
    text-transform: uppercase;
    font-size: 18px;
    color: #ccc;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .title {
        text-align: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .websiteList {
        -ms-flex-pack: center;
        justify-content: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website {
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 109px;
    padding: 5px 0;
    margin: 5px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: left;
    justify-content: left;
    background-color: rgba(0, 0, 0, 0.302);
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
    text-decoration: none;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .websiteList
        .website {
        -ms-flex-pack: center;
        justify-content: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website:hover {
    color: #fff;
    background-color: #000;
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website
    .icon {
    width: 30px;
    height: 30px;
    margin: 0 5px 0 7px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: initial;
    background-position: 50%;
}

#agent-box {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 2px;
}
@media screen and (max-width: 1280px) {
    #agent-box {
        max-width: 780px;
        margin: auto;
    }
}
@media screen and (min-width: 768px) and (max-width: 1280px) {
    #agent-box > a {
        width: 33%;
        -ms-flex: inherit;
        flex: inherit;
    }
    #agent-box > a:nth-child(3n) {
        border-radius: 0 3px 3px 0;
    }
    #agent-box > a:nth-child(3n + 1) {
        border-radius: 3px 0 0 3px;
    }
}
@media screen and (min-width: 600px) and (max-width: 768px) {
    #agent-box > a {
        width: 32.8%;
        -ms-flex: inherit;
        flex: inherit;
    }
}
@media screen and (max-width: 768px) {
    #agent-box {
        max-width: 580px;
        margin: auto;
    }
}
@media screen and (min-width: 300px) and (max-width: 600px) {
    #agent-box > a {
        width: 49.5%;
    }
    #agent-box > a:nth-child(2n) {
        border-radius: 0 3px 3px 0;
    }
    #agent-box > a:nth-child(odd) {
        border-radius: 3px 0 0 3px;
    }
}
@media screen and (max-width: 300px) {
    #agent-box > a {
        border-radius: 3px;
        width: 100%;
    }
}
@media screen and (min-width: 1280px) {
    #agent-box > a {
        width: 16.5%;
    }
    #agent-box > a:first-child {
        border-radius: 3px 0 0 3px;
    }
    #agent-box > a:last-child {
        border-radius: 0 3px 3px 0;
    }
}
#agent-box > a {
    color: #fff;
    text-decoration: none;
    background-color: hsla(0, 0%, 93%, 0.3);
    line-height: 50px;
    text-align: center;
    margin: 1px 0;
}
#agent-box > a:hover {
    background-color: #ff9200;
}
</style>
