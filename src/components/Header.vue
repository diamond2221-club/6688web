<template>
    <div>
        <header id="mainHeader">
            <div id="wrapper1">
                <div id="">
                    <a href="/">
                        <img
                            :src="logoUrl"
                            alt=""
                        />
                    </a>
                </div>
                <div
                    class="nav_icon"
                    @click="toggleMenu"
                >
                </div>
                <nav id="navigation">
                    <router-link
                        tag="a"
                        v-for="(route) in routes"
                        :key="route.path"
                        :to="route.path"
                    >{{route.meta.title}}</router-link>
                </nav>
            </div>
        </header>
        <div id="rightNav">
            <router-link
                tag="a"
                v-for="(route) in routes"
                :key="route.path"
                :to="route.path"
            >{{route.meta.title}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ["logoUrl"],
    data() {
        return {};
    },
    methods: {
        toggleMenu() {
            this.$emit("toggleMenu");
        }
    },
    computed: {
        routes() {
            return this.$router.options.routes.filter(route => !route.hidden);
        }
    },
    created() {}
};
</script>

<style scoped lang="scss">
#mainHeader {
    background-color: #222;
}
@media screen and (max-width: 968px) {
    #mainHeader {
        box-sizing: border-box;
        position: relative;
    }
}
#mainHeader #wrapper1 {
    max-width: 1180px;
    margin: 0 auto;
    padding: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
@media screen and (max-width: 968px) {
    #mainHeader #wrapper1 {
        display: block;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-top: 0;
        padding-bottom: 0;
    }
    #mainHeader #wrapper1 #message {
        display: none;
    }
}
#mainHeader #wrapper1 .nav_icon {
    width: 40px;
    height: 40px;
    display: none;
    cursor: pointer;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAM5JREFUWAntV0EShCAMs57hY7vv1Y/BnbWcHSdCGFioR2ibJoVatu3mE10LIaSbPWAJd5dyEM2j0h2gkk1wPmjEjnaQZiJy8HOEoPmwGrEjNEpoqlOGkaZSvs7sicFOZcXWsMG9n0pviAy13XjvZV/0dENq9zKSGOORUvowEshVZgVjJGQxGilgzaGRsBb2hQJ5bmA2sBfYj6b6p3POfamDzSNiwaZ26wI3czEF1lJg+Fu8az1GnK6vnOwtttZlGZatDQs1pbFhoUa9v/H9AUPMXbeeTFXVAAAAAElFTkSuQmCC)
        no-repeat 50%;
}
@media screen and (max-width: 968px) {
    #mainHeader #wrapper1 .nav_icon {
        display: block;
        background-size: 70%;
    }
}
#mainHeader #wrapper1 #logo {
    width: 100%;
    max-width: 219px;
    height: 40px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAAoCAYAAAB3hY/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAyQzA1RjQwODI4MTFFOTlEMDhEMzY4ODUzNUQyNUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAyQzA1RjMwODI4MTFFOTlEMDhEMzY4ODUzNUQyNUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRDQ4QzE4QjJENjExRThBMzQzQjdDNzM3OTBFNUI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCRDQ4QzE5QjJENjExRThBMzQzQjdDNzM3OTBFNUI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+deueyAAAEgdJREFUeNrsXQuYTtUa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);
    background-repeat: no-repeat;
    background-size: contain;
}
@media screen and (max-width: 968px) {
    #mainHeader #wrapper1 #logo {
        width: 50%;
        height: 27px;
    }
}
#mainHeader #wrapper1 #navigation {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (max-width: 968px) {
    #mainHeader #wrapper1 #navigation {
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -ms-flex-pack: center;
        justify-content: center;
        height: 60px;
        width: 100%;
        display: none;
    }
}
#mainHeader #wrapper1 #navigation a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    padding: 5px 0;
    margin: 0 10px;
    border-bottom: 2px solid transparent;
    transition: color 0.5s ease-in-out, border 0.5s ease-in-out;
}
#mainHeader #wrapper1 #navigation a:hover {
    color: #ff9200;
    border-bottom: 2px solid #ff9200;
}
#mainHeader #wrapper1 #navigation a:hover #message #iconHover {
    opacity: 1 !important;
}
#mainHeader #wrapper1 #navigation a:hover #message #icon {
    opacity: 0 !important;
}
#mainHeader #wrapper1 #navigation a.router-link-exact-active {
    color: #ff9200;
    border-bottom: 2px solid #ff9200;
}
#mainHeader #wrapper1 #navigation a:last-child {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
}
#mainHeader #wrapper1 #navigation a:last-child #message {
    width: 31px;
    height: 29px;
    margin: 0 0 0 10px;
    padding: 0;
    border-bottom: none;
    position: relative;
}
#mainHeader #wrapper1 #navigation a:last-child #message #iconHover {
    position: absolute;
    top: 0;
    left: 0;
    width: 31px;
    height: 29px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YmE2MTRiZS1mZmM5LTkzNGItOTg0ZS1kYzM4OGRiY2NlMjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzEyQkMzQ0FCOEJEMTFFODhDRTFGNDcxNDkwQTFFNTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzEyQkMzQzlCOEJEMTFFODhDRTFGNDcxNDkwQTFFNTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdBODBGRjBBQjMzMzExRTg5RTcyOENGRjAwNTE5OEVCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdBODBGRjBCQjMzMzExRTg5RTcyOENGRjAwNTE5OEVCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JaTF5AAAAw9JREFUeNq8l1tsTEEYx8+cLlpxiQdRRIiEBInQuF+iTyo8NS7NCpm0pBVBkNQ9wYNIyou6k2adSkTE9cEtRAkR2rQP0kgQvIhWqEuqSYsY/298hzE5e3Ztd/dLfjPn7Myc/5mZ73zzrVCnnGRtPpgBisEo0MNqfwfug9saqV4meqBIIN4XbABbQa7x+xfQAjrpGWAgGGKNvQu24yUepiJeBmqM+yPgFqhj8d8m1d8enpiIciZYDqbwr5dAOfp9SFb8HFjM12vBSdAV2NMUN80TtEU7wVxAnRah70Wzi2sNyQFNLHwZDACH4gqHGS23VEW4ivLWXMALlYWJ3wO0dFXsWJ+d7ppUZ1GOA9/1NnqiKEi8ivcrBjY76TSpnqIs4LvreIE+pvhwUAnesKOl36RqRrmStyBmiu/jepmTSZOKvp5X2vk8MdjlYEEO9oL3PNNWzvUKEp/MNyec7NgdrqMuh02yeqtTP3AUVIO8gIcUsPeuivOdVwBqn2QtPX3zz8HYCIox/PNraziJSr6mfqvN4AQobPbSDuqJZ3honSFciPLYHz/yRC6L+kZxfzTN/KchYFqbcf0xYG5muOyw2sz79wFjXV+wWXuf44y0Zl/J9Q+wwxpMs5gD1usVkKreWtoGzDbKcaPamrXDp6KO7VNRP2KBPSl8Pv/X3xOCV7vRNRxtTZa8vYTrmMtLeBjkgyVZEPcdsdaPcLu4rsmorCe2oeyvcwOp2l3Dc+kFKOCfyZDwdPapdrDR/rx2gwl8/nam9YDxBCUUN/luFmbdFXSeF3OnUvCYAkEahLcYwoUQfhIvmSCbBw5yDnajG6IlgCLZXvBJP0+qfw6uSJyh68BSPud9Gwpo3x6A1gCxPD6kZvO5PYJbTuvQLNVXe0gk5N1zOD0mWwjOW+2tOov1RG/Ug0BPq70WHIBoUzyBMPEOzruOG2fwfjAMjOcDKd/4w0ChuRFc1YFLqrZEOxMm/paXkYSv8VK2WH3oVPsWELuTMjekzU8yNoEFAcKOTqlTFA4Tp3z9Cphm5Hdpt18CDAAvis6OTYpMQQAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
#mainHeader #wrapper1 #navigation a:last-child #message #icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 31px;
    height: 29px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YmE2MTRiZS1mZmM5LTkzNGItOTg0ZS1kYzM4OGRiY2NlMjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0E4MEZGMEJCMzMzMTFFODlFNzI4Q0ZGMDA1MTk4RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0E4MEZGMEFCMzMzMTFFODlFNzI4Q0ZGMDA1MTk4RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmODY2Njg1LTQ1ZjItNTA0Yi1iMzA3LWNiZGI2ZGZiMjczZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1YmE2MTRiZS1mZmM5LTkzNGItOTg0ZS1kYzM4OGRiY2NlMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5V5qNxAAACVklEQVR42ryXTUhVQRTHfU9FBE0FF4lIi1BIQkgU0YUfCAWurCRza5CCbQVRqbVSG7UEQVEXLQq1jZESurCNUtmuEFTwgwg/KURT9PYf+A8cp/vmvafv3oEfb2bOzPnfmTf3zLkBx3HiIiw1oAzcBbkg0bD/AnPgI1kO61GJW0gFT8Ghc77sg+9gEXwDm87/ZRaU2fzbhBsNZy9BLUizzLkFnoB5MW8cZEYj/kZMVs6SwuyQG2rVU/RxBu6FE48HXzlhAqRfQNTkoVhIo038Ewd1xUBUkg+O6fuOm3g3jUMxFtbcFH9BihS/RsO6R8KaR9R5K8X1AavwWFyxTK0s1UhkY8kHYUU19TqDiDPFjDcDcf6UGf42BBk2VVkwBl0B/aAHJLs4KQSDoDmESBPtRWZQBUsgX23DGLchx9ieYfF+vjJsAXAk7FWGvVLY/nK8tL9XBrXyMz5RgvGEO6K+67KybVE/MGyyveUyN6gvlmd8wmrj6YLghSXgXAe9oMES2ZQ9N9SJV5USinf4dNoD1PssGz99EtexvkV39LHjgQ/i+9RK1R2Z7PjjsXC7yA3OXSz64L32SLiU/n/r/MAcMOHRzXZbvPcFtkzmAwepVCgvBsJtQrgikjSqh4NXLiFaL26wXVAcTQK5DU5FOxvUgashxieDcsaLVbHaUZ08RCO+BzZYv++SGqu48AOsMX6bZQQU2nYnYPlo2AAnYBo8Zt9zkAMKwA3jg2EVfAGTvCF3LvPRsCBWMakyD5cxSS43VsTYjLq0ehV0QhkywDteOp5FvH8CDACmvV0spzzWNgAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

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

